import React from 'react'
import MovieDetails from '../features/movies/MovieDetails'
import { useParams } from 'react-router-dom'
import SeriesDetails from '../features/series/SeriesDetails'

const Details = () => {
  const params = useParams()
  console.log(params);
  const media = params.media
  return (
    <div>
      {media === 'movie' ? (
        <MovieDetails />
      ): (
        <SeriesDetails />
      )}
        
    </div>
  )
}

export default Details