import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Components
import Thumbnail from "../Thumbnail";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config/config";
import API from "../../API/API";
// Fallback Image
import NoImage from "../../images/no_image.jpg";

// Styles
import {
  Wrapper,
  Content,
  Text,
  Flex,
  MovieTitle,
  MovieOverview,
  MovieOtherInfo,
} from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => {
  const navigate = useNavigate();
  const [inputRating, setInputRating] = React.useState("");

  const handleInputRating = (e) => {
    setInputRating(e.target.value);
  };

  const handleSubmitRating = async (e) => {
    e.preventDefault();

    const sessionId = localStorage.getItem("sessionId");
    const response = await API.rateMovie(sessionId, movie.id, inputRating);
    if (response.status_code === 12) {
      toast(response.status_message);
    } else if (response.status_code === 3) {
      toast(response.status_message);
      navigate("/login");
    } else if (response.status_code === 18) {
      toast(response.status_message);
    }
  };
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumbnail
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          movieHeight={true}
          clickable={false}
        />
        <Text>
          <MovieTitle>{movie.title}</MovieTitle>
          <Flex>
            {movie.genres.map((genre) => (
              <p>{genre.name}</p>
            ))}
          </Flex>
          <MovieOverview>{movie.overview}</MovieOverview>
          <MovieOtherInfo>
            <div>
              <span>Release Date:</span> {movie.release_date}
            </div>
            <div>
              <span>Duration:</span> {movie.runtime} min
            </div>
            <div>
              <span>Status:</span> {movie.status}
            </div>
            <div>
              <span>Input Rating</span> :
              <form onSubmit={handleSubmitRating}>
                <input
                  type="number"
                  value={inputRating}
                  onChange={handleInputRating}
                />
              </form>
            </div>
          </MovieOtherInfo>
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
