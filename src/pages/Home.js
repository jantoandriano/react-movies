import React from "react";

// Config
import { POSTER_SIZE, IMAGE_BASE_URL } from "../config/config";

// Components
import Grid from "../components/Grid";
import Thumbnail from "../components/Thumbnail";
import Spinner from "../components/Spinner";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
import { useGetTrending } from "../hooks/useGetTrending";

// Image: if API fails to render image then the fallback image used this one
import NoImage from "../images/no_image.jpg";
import Carousel from "../components/Carousel";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  const { trendings, loadingTrendings } = useGetTrending();

  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }
  return (
    <React.Fragment>
      {!searchTerm && state.results[0] ? (
        <Carousel data={loadingTrendings ? [] : trendings} />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>

      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie) => (
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

      {loading && <Spinner />}

      {state.page < state.total_pages && !loading && (
        <Button callback={() => setIsLoadingMore(true)}>Load More</Button>
      )}
    </React.Fragment>
  );
};
export default Home;
