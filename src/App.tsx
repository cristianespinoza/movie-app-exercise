import React, { useState, useEffect } from "react";
import { MovieList } from "./components/MovieList/MovieList";
import { listMovies } from "./services/movies.service";
import Movie from "./types/Movie";
import { MoviesContext } from "./services/context";

function App() {
  useEffect(() => {
    listMovies()
      .then(setMovies)
      .catch((_) => setMovies([]));
  }, []);

  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <MoviesContext.Provider value={{ movies, updateMovies: setMovies }}>
      <div className="App">
        <div className="pagehead">
          <h1>Movie List</h1>
          <h2>Top Movies in category: War</h2>
        </div>
        <MovieList />
      </div>
    </MoviesContext.Provider>
  );
}

export default App;
