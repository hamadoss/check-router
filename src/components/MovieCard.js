import { Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <Card sx={{ width: 250}}>
    <CardMedia
      sx={{ height: 300 }}
      image={movie.posterUrl}
      
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {movie.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {movie.description}
      </Typography>
    </CardContent>
    <CardActions>
    <Rating name="read-only" value={movie.rating} readOnly />

    </CardActions>
  </Card>
  )
}

export default MovieCard