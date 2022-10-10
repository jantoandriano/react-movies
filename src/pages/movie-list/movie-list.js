import React from "react";

// Config
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../config/config";

// Components
import Grid from "../../components/Grid";
import Thumbnail from "../../components/Thumbnail";
import Spinner from "../../components/Spinner";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";

// Hooks
import { useHomeFetch } from "./services/useHomeFetch";
import { useGetTrending } from "./services/useGetTrending";

// Image: if API fails to render image then the fallback image used this one
import NoImage from "../../images/no_image.jpg";
import Carousel from "../../components/Carousel";

const MovieList = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  const { trendings, loadingTrendings } = useGetTrending();
  const MovieList = error ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{error}</h1>
    </div>
  ) : (
    <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
      {state?.results?.map((movie) => (
        <Thumbnail
          key={movie.id}
          clickable
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          movieId={movie.id}
        />
      ))}
    </Grid>
  );

  return (
    <React.Fragment>
      {!searchTerm && state.results[0] ? (
        <Carousel data={loadingTrendings ? [] : trendings} />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>

      <>{MovieList}</>

      {loading && !error && <Spinner />}

      {state.page < state.total_pages && !loading && (
        <Button callback={() => setIsLoadingMore(true)}>Load More</Button>
      )}
    </React.Fragment>
  );
};
export default MovieList;
