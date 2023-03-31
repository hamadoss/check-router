import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import {movieData} from './Data';
import MovieTrailer from './components/MovieTrailer';

function App() {
const [movies, setMovies] = useState(movieData);
const [filterTitle, setFilterTitle] = useState("");
const [filterRating, setFilterRating] = useState(0)
console.log(movies);
  return (
    <div className="">
      <Filter setFilterTitle={setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating}/>} />
        <Route path="/:title" element={<MovieTrailer movies={movies} />} />
        
      </Routes>
    </div>
  );
}

export default App;
