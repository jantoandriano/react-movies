import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config/config";

// Components
import Grid from "../components/Grid";
import Spinner from "../components/Spinner";
import MovieInfo from "../components/MovieInfo";
import Actor from "../components/Actor";

// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";
import API from "../API/API";

// Fallback Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  const navigate = useNavigate();
  const [inputRating, setInputRating] = useState("");

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

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <React.Fragment>
      <MovieInfo
        movie={movie}
        handleInputRating={handleInputRating}
        handleSubmitRating={handleSubmitRating}
        inputRating={inputRating}
      />
      <Grid header="Actors">
        {movie.actors.slice(0, 5).map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageURL={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Movie;
