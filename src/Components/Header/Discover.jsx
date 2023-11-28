import React from "react";
import "./Discover.css"
import { useState, useEffect } from "react";

const Discover = ({ setOpenModal }) => {
  const API_URL = "http://www.omdbapi.com?s=avengers&apikey=32eedc2d";

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const searchMovie = async (title) => {
      const response = await fetch(`${API_URL}&=${title}`);
      const data = await response.json();
      setMovies(data.Search);
      console.log(data.Search);
    };
    searchMovie();
  }, []);

  return (
    <div className="container">
      {movies.map((movie) => {
        return (
          <div
            className="movie"
            onClick={() => setOpenModal({ state: true, movie: movie })}
          >
            <div>
              <p>{movie.Year}</p>
            </div>
            <div >
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
        );
      })}
    </div>
  );
};

export default Discover;
