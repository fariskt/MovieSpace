import React from "react";
import "./MovieCard.css";
const MovieCard = ({ movie, setOpenModal }) => {
  return (
    <>
      <div
        className="movie"
        onClick={() => setOpenModal({ state: true, movie: movie })}
      >
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
