import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, id }) => {
  return (
    <Link to={`/movie/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s",
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
        className="movie-card"
      >
        <img
          src={movie.posterUrl}
          alt={movie.title}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
        />
        <h3 style={{ margin: "10px 0", fontSize: "1.2rem" }}>{movie.title}</h3>
        <p style={{ margin: "5px 0", color: "#555", fontSize: "0.9rem" }}>
          {movie.description}
        </p>
        <span style={{ fontWeight: "bold", color: "#333", fontSize: "0.9rem" }}>
          ⭐ {movie.note}/10
        </span>
      </div>
    </Link>
  );
};

export default MovieCard;