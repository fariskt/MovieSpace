import { useState } from "react";
import "./App.css";
import MovieDetalis from "./Components/MovieDetails/MovieDetalis";
import MovieSpace from "./Components/Header/MovieSpace";

const App = () => {
  const [openModal , setOpenModal] = useState({state: false, movie: null});

  return (
    <>
      <MovieSpace openModal={openModal} setOpenModal={setOpenModal}/>
      {openModal.state && <MovieDetalis openModal={openModal} setOpenModal={setOpenModal}/>}
    </>
  );
};

export default App;
