import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams(); // Récupère l'ID du film depuis l'URL
  const movie = movies.find((movie, index) => index === parseInt(id));

  if (!movie) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>{movie.title}</h1>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "8px", marginBottom: "20px" }}
      />
      <div style={{ marginTop: "20px" }}>
        <a
          href={movie.trailer}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            marginRight: "10px",
            fontSize: "1rem",
          }}
        >
          Voir la bande-annonce
        </a>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            backgroundColor: "#6c757d",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;