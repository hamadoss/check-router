import { YouTube } from '@mui/icons-material';
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieTrailer = ({movies}) => {
    const {title} = useParams();
    const movie = movies.find(el => el.title === title);
    console.log(movie);
  return (
    <div>
        <Link to='/'>
            <button>Go back home</button>
        </Link>
        <br />
        <h1>{movie.title}</h1>
        <img src={movie.posterUrl} alt="" style={{width: 300}} />
        <iframe width="560" height="315" 
        src={`https://www.youtube.com/embed/${movie.trailer}`} 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <YouTube videoId={movie.trailer} />
    </div>
  )
}

export default MovieTrailer