import { useParams } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useGetMovie } from '../hooks/useMovies'
import Navbar from './Navbar'

const MovieDetails = () => {
  const { movieId } = useParams()
  const { movie } = useGetMovie(movieId)

  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const formattedRuntime = `${hours}h ${minutes}m`;

  const releaseDate = new Date(movie.release_date);
  const day = releaseDate.getUTCDate();
  const month = releaseDate.toLocaleString('default', { month: 'long' });
  const year = releaseDate.getUTCFullYear();

  const formattedReleaseDate = `${month} ${day}, ${year}`;

  let content;
  if(!movie) content=<p>Resource not found</p>
  if(movie){
    content = (
      <section>
        <div className="lg:hidden">
          <Navbar />
        </div>
        <section className='w-full lg:py-10 lg:px-8' key={movie.id}>
          <div className='relative'>
          <div className='bg-black absolute w-full h-full opacity-70' key={movie.id}></div>
            <img
              className='lg:rounded-lg h-[400px] w-full object-cover'
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <article className='grid lg:flex gap-4 px-8'>
            <div className='w-full lg:w-[60%] my-4 pr-6'>
              <ul className='flex justify-between items-center mb-4 flex-wrap gap-2'>
                <li className='text-[#111827] font-semibold text-xl' data-testid="movie-title">{movie.title}</li>
                <li data-testid="movie-release-date">{formattedReleaseDate}</li>
                <li className='flex items-center gap-2 text-sm'>
                  <img className='object-contain' src='/images/imdb.png' alt='imdb' />
                  {movie.vote_average.toFixed(1)}
                </li>
                <li className='text-sm' data-testid="movie-runtime">{formattedRuntime}</li>
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
            <aside className='lg:w-[40%] my-4 flex flex-col lg:items-center gap-4'>
              <a className='bg-[#be123c] flex w-[300px] p-2 lg:w-[90%] justify-center items-center gap-1 rounded-lg lg:p-[3px]'>
                <img src='/images/tickets.png' alt='ticket' />
                <span className='text-white'>See Showtimes</span>
              </a>
              <a className='bg-[#f7e3e8] flex w-[300px] p-2 lg:w-[90%] justify-center items-center gap-1 rounded-lg p-[4px]'>
                <AiOutlineMenu />
                <span className='text-[#111827]'>More watch options</span>
              </a>
            </aside>
          </article>
        </section>
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