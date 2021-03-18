import React, { useContext, useState } from "react";
import "./MovieList.css";
import imgPlaceholder from "./movie_placeholder.png";
import { MoviesContext } from "../../services/context";

export const MovieList = () => {
  const { movies } = useContext(MoviesContext);

  const [isClicked, setIsClicked] = useState(false);
  const handleSummary = () => {
    const newValue = !isClicked;
    setIsClicked(newValue);
  };
  const disableSummary = () => {
    setIsClicked(false);
  };
  return (
    <div className="movieContainer">
      {!movies.length && (
        <div className="loader" data-testid="loader">
          Loading...
        </div>
      )}
      {movies.length &&
        movies.map((movie) => (
          <div
            className="movie__item"
            data-testid="movie"
            key={movie.id}
            onClick={handleSummary}
            onMouseLeave={disableSummary}
          >
            <div className="movie__item__img">
              <img src={movie.poster || imgPlaceholder} alt={movie.title} />
              {isClicked && (
                <div className="movie__item__summary">
                  {movie.overview}
                  <div className="movie__item__rating">
                    IMDB Rating: {movie.rating}
                  </div>
                </div>
              )}
            </div>
            <div className="movie__item__footer">
              <div className="movie__item__footer__name">
                {movie.title} ({new Date(movie.date).getFullYear()})
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
