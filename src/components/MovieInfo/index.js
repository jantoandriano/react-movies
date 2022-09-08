import React from "react";
import PropTypes from "prop-types";
// Components
import Thumbnail from "../Thumbnail";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config/config";

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
  MovieRate,
  MovieOtherInfo,
} from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => {
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
          <MovieRate>{movie.vote_average}</MovieRate>
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
