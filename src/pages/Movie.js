import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config/config";

// Components
import Grid from "../components/Grid";
import Spinner from "../components/Spinner";
import MovieInfo from "../components/MovieInfo";
import Actor from "../components/Actor";

// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

// Fallback Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <React.Fragment>
      <MovieInfo movie={movie} />
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
