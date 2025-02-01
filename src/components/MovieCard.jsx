import react from 'react';

const MovieCard = ({ movie }) => {
    // Fonction pour générer les étoiles en fonction de la note
  const renderStars = (note) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= note ? "active" : ""}>
          ★
        </span>
      );
    }
    return stars;
  };
  
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <div className="star-rating">{renderStars(movie.note)}</div>
    </div>
  );
};

export default MovieCard;