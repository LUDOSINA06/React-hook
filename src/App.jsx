import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./MovieDetails";
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "the woman king",
      description: "General of the Amazons, and her daughter, the Princess, unite their tribes to defend their homeland.",
      posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21698854_p_v13_af.jpg",
      note: 9,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 1,
      title: "Casa de Papel",
      description: "A group of unique robbers assault the Factory of Moneda and Timbre to carry out",
      posterUrl: "https://cinedweller.com/wp-content/uploads/2019/07/2284257.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg",
      note: 8.5,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 2,
      title: "blade runner 2049",
      description:'A young blade runners discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, whos been missing for thirty years.',
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
      note: 5,
      trailer: "https://www.youtube.com/embed/gCcx85zbxz4",
},
{
      id: 3,
      title: "Dunkirk",
      description:'Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.',
      posterUrl: "https://i.harperapps.com/hcanz/covers/9780008258931/y648.jpg",
      note: 4.6,
      trailer: "https://www.youtube.com/embed/F-eMt3SrfFU",
},
{
      id: 4,
      title: "black panther",
      description:'TChalla, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his countrys past.',
      posterUrl: "https://cdn.kobo.com/book-images/7e060fa5-3a91-4ed1-94a3-57274b53e233/1200/1200/False/marvel-s-black-panther-4.jpg",
      note: 5,    
      trailer: "https://www.youtube.com/embed/xjDjIWPwcPU",  
},

{     
      id: 5,
      title: "snow fall",
      description:'A look at the early days of the crack cocaine epidemic in Los Angeles during the beginning of the 1980s.',
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZjE1M2I0MDctNDMzYS00MWU3LTkzZWItNDNhOWMxMmEyYjQ1XkEyXkFqcGc@._V1_.jpg",
      note: 5, 
      trailer: "https://www.youtube.com/embed/uFavRrH7uXc",     
},
{
  id: 6,
  title: "the dark knight",
  description:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvyijfsP4F8o9bqAZc6bxCdbAYeKc582P1A&s",
  note: 5,
  trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
},
{
  id: 7,
  title: "the prestige",
  description:'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
  posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg",
  note: 4,
  trailer: "https://www.youtube.com/embed/o4gHCmTQDVI",
},
    // Ajoutez d'autres films ici...
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.note >= filterRating
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              setFilterTitle={setFilterTitle}
              setFilterRating={setFilterRating}
              filteredMovies={filteredMovies}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </Router>
  );
};

export default App;