import React, { useState } from "react";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "inception",
      description:'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterUrl: "https://play-lh.googleusercontent.com/-qtECEmfe9yjg9w57QlILDP8Bgk5mT-cOUduloX_48y_NGYaP4dgZnrY0tUP7WX5x-vXEKhOzWL-QgFXyp4",
      note: 5,
},
{
      title: "interstellar",
      description:'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.',
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      note: 4,
},
{
      title: "the dark knight",
      description:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvyijfsP4F8o9bqAZc6bxCdbAYeKc582P1A&s",
      note: 5,
},
{
      title: "the prestige",
      description:'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg",
      note: 4,
},
{
      title: "Batman Begins",
      description:'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/af/Batman_Begins_Poster.jpg",
      note: 4,
},
{
      title: "blade runner 2049",
      description:'A young blade runners discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, whos been missing for thirty years.',
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
      note: 5,
},
{
      title: "Dunkirk",
      description:'Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.',
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg",
      note: 4.6,
},
{
      title: "black panther",
      description:'TChalla, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his countrys past.',
      posterUrl: "https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0%2C0%2C540%2C810",
      note: 5,      
},

{
  title: "snow fall",
  description:'A look at the early days of the crack cocaine epidemic in Los Angeles during the beginning of the 1980s.',
  posterUrl: "https://m.media-amazon.com/images/M/MV5BZjE1M2I0MDctNDMzYS00MWU3LTkzZWItNDNhOWMxMmEyYjQ1XkEyXkFqcGc@._V1_.jpg",
  note: 5,      
},

  ]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...filteredMovies, newMovie]);
  };

  const handleFilter = ({ title, note }) => {
    const filtered = movies.filter(
      (movie) =>{
        return(
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          (movie.note >= note || isNaN(note))
        );
    });
    setFilteredMovies(filtered);
  };
  
  return (
    <div className="app">
      <h1>My movies collection</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <AddMovie onAddMovie={handleAddMovie} />
    </div>
  );
};

export default App;