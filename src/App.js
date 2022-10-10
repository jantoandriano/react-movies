import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global/GlobalStyle";
import UserProvider from "./contexts/context";
import Header from "./components/Header";
import MovieList from "./pages/movie-list";
import MovieDetail from "./pages/movie-detail";
import NotFound from "./pages/not-found";
import Login from "./pages/login";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/:movieId" element={<MovieDetail />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <GlobalStyle />
        </UserProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
