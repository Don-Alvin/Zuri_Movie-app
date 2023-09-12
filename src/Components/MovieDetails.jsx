import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { getMovie } from '../api/apiMovies'

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovie = async() => {
      const movie = await getMovie(movieId)
      setMovie(movie)
    }
    fetchMovie()
  },[movie])

  console.log(movie);

  const convertDate = (dateStr) => {
    const date = new Date(dateStr)
    const utcDate = new Date(date.toUTCString())
    return utcDate
  }

  let content;
  if(!movie) content=<p>Resource not found</p>
  if(movie){
    content = (
      <section className='w-[80%] py-10 px-8'>
        <img
          className='rounded-lg h-[400px] w-full object-cover' 
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
          alt={movie.title} 
        />
        <article className='flex gap-4'>
          <div className='lg:w-[60%] my-4 pr-6'>
            <ul className='flex justify-between items-center mb-4'>
              <li className='text-[#111827] font-semibold text-xl' data-testid="movie-title">{movie.title}</li>
              <li data-testid="movie-release-date">{movie.release_date}</li>
              <li className='flex items-center gap-2 text-sm'>
                <img className='object-contain' src='/images/imdb.png' alt='imdb' />
                {movie.vote_average}
              </li>
              <li className='text-sm' data-testid="movie-runtime">{movie.runtime}</li>
              <li className='flex gap-2'>
                {movie.genres.map(genre => (
                  <span className='text-[#be123c] text-sm border border-[#be123c] p-[2px] rounded-lg'>{genre.name}</span>
                ))}
              </li>
            </ul>
            <p data-testid="movie-overview">
            {movie.overview}
            </p>
          </div>
          <aside className='lg:w-[40%] my-4 flex flex-col items-center gap-4'>
            <a className='bg-[#be123c] flex w-[90%] justify-center items-center gap-1 rounded-lg p-[3px]'>
              <img src='/images/tickets.png' alt='ticket' />
              <span className='text-white'>See Showtimes</span>
            </a>
            <a className='bg-[#f7e3e8] flex w-[90%] justify-center items-center gap-1 rounded-lg p-[4px]'>
              <AiOutlineMenu />
              <span className='text-[#111827]'>More watch options</span>
            </a>
          </aside>
        </article>
      </section>
    )
  }
  return (
    <>
      {content}
    </>
  )
}

export default MovieDetails