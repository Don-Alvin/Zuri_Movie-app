import { useParams } from 'react-router-dom'
import { useAMovie } from '../hooks/useMovies'

const MovieDetails = () => {
  const { movieId } = useParams()

  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails