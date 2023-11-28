import React from 'react'
import './MovieDetails.css'
import { Modal } from '@mui/material';
import { IoClose } from "react-icons/io5";


const MovieDetalis = ({openModal, setOpenModal}) => {
  const movie = openModal?.movie;
  return (
    <Modal open={true} onClose={()=> setOpenModal({state: false, movie: null})}>
      <div className="movie-details">
      <IoClose className='close-btn' onClick={()=> setOpenModal({state: false, movie: null})}/>
      <div className='year'>
          <p>year : {movie?.Year}</p>
        </div>
        <div className='image'>
          <img style={{
            height: "400px",
            width: "300px"
          }} src={movie?.Poster !== "N/A" ? movie?.Poster : "https://via.placeholder.com/400"} alt={movie?.Title} />
        </div>
        <div className='title'>
          <h3>Name : {movie?.Title}</h3>
        </div>
      </div>
    </Modal>
  )
}

export default MovieDetalis