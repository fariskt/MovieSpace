import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from './search.svg';
import MovieCard from "../MovieCard/MovieCard";
import './MovieSpace.css';
import Discover from "./Discover";


const MovieSpace = ({openModal ,setOpenModal}) => {
  const API_URL = "http://www.omdbapi.com?apikey=32eedc2d";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search); 
  };
  useEffect(() => {
    searchMovie("");
  }, []);
   const handleKeyPress =(event)=>{
    if(event.key === "enter"){
      searchMovie(searchTerm);
    }
   }
  
  return (
    <div className="app">
      <h1>Movies Space</h1>

      <div className="search">
        <input id="input-box"
        
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onKeyDown={(e)=> {
            if(e.key === "Enter"){
              searchMovie(searchTerm)
            }
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <img
          src={SearchIcon}
          alt="search"
          id="searchIcon"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, key) => (
             <MovieCard movie={movie} key={key} setOpenModal={setOpenModal} openModal={openModal}/>
          ))}
        </div>
      ) : (
       <>
        <h3 style={{
          color: "white",
          fontSize: "28px",
          marginTop:"40px"
        }}>Discover Movies</h3>
       <Discover movies={movies} setOpenModal={setOpenModal}/>
       </>
      )}
    </div>
  );
};

export default MovieSpace;
