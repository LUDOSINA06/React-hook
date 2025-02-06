import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} id={index} />
      ))}
    </div>
  );
};

export default MovieList;