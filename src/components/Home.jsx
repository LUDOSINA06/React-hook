import React from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const Home = ({ movies, setFilterTitle, setFilterRating, filteredMovies }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "2.5rem" }}>
        🎬 Ma Cinémathèque
      </h1>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;