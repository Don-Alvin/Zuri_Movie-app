import { useParams } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useGetMovie } from '../hooks/useMovies'
import { PulseLoader } from 'react-spinners'
import Footer from './Footer'

const MovieDetails = () => {
  const { movieId } = useParams()
  const { movie, loading, isError, error } = useGetMovie(movieId)

  let content;

  if(!movie) content=<p>Resource not found</p>

  if(loading) content = <PulseLoader />

  if(isError) content = <p>{`Ooops! seems like we encountered an error: ${error}`}</p>

  if(movie){

    const releaseDate = new Date(movie.release_date);
    const day = releaseDate.getUTCDate();
    const month = releaseDate.toLocaleString('default', { month: 'long' });
    const year = releaseDate.getUTCFullYear();
    const formattedReleaseDate = `${month} ${day}, ${year}`;

    const videos = movie.videos.results
    const trailer = videos.filter(video => video.type === "Trailer")
    const stars = movie.credits.cast.slice(0, 5)
    const director = movie.credits.crew.filter(crew => crew.job === "Director")
    const writers = movie.credits.crew.filter(crew => crew.department === "Writing")

    content = (
      <section key={movie.id}>
        <section className='w-full flex flex-col gap-4 lg:py-6'>
          <div className='rounded-lg h-[60vh] p-2 w-full lg:w-full px-4' key={movie.id}>
            <iframe className='w-full rounded-lg h-full lg:w-full mx-auto' src={`https://www.youtube.com/embed/${trailer[0].key}`} ></iframe>
          </div>
          <article className='grid lg:flex gap-2 px-4'>
            <div className='lg:w-[60%] my-4 pr-6 text-gray-700 flex flex-col gap-2' key={movie.id}>
              <ul className='flex justify-between items-center mb-4 flex-wrap gap-2'>
                <li className='text-[#111827] font-semibold text-xl' data-testid="movie-title">{movie.title}</li>
                <li data-testid="movie-release-date">{formattedReleaseDate}</li>
                <li className='flex items-center gap-2 text-sm'>
                  <img className='object-contain' src='/images/imdb.png' alt='imdb' />
                  {movie.vote_average.toFixed(1)}
                </li>
                <li className='text-sm' data-testid="movie-runtime">{movie.runtime}m</li>
                <li className='flex gap-2'>
                  {movie.genres.map(genre => (
                    <span className='text-[#be123c] text-sm border border-[#be123c] p-[2px] rounded-lg'>{genre.name}</span>
                  ))}
                </li>
              </ul>
              <p data-testid="movie-overview">
              {movie.overview}
              </p>
              <ul className='flex flex-col gap-2 lg:gap-6'>
                <li>
                  Director:
                  <span className='text-[#be123c]'> {director[0].name}</span>
                </li>
                <li>
                  Writers: 
                  {writers.slice(0, 2).map(writer => <span className='text-[#be123c]' key={writer.name}> {writer.name}, </span>)}
                </li>
                <li>
                  Stars:
                    {stars.map(star => <span className='text-[#be123c]' key={star.name}> {star.name}, </span>)}
                </li>
              </ul>
            </div>
            <aside className='lg:w-[40%] flex flex-col lg:items-end mt-4 gap-4'>
              <a className='bg-[#be123c] flex w-[300px] p-2 lg:w-[90%] justify-center items-center gap-1 rounded-lg lg:p-[3px]'>
                <img src='/images/tickets.png' alt='ticket' />
                <span className='text-white'>See Showtimes</span>
              </a>
              <a className='bg-[#f7e3e8] flex w-[300px] lg:w-[90%] justify-center items-center gap-1 rounded-lg p-2'>
                <AiOutlineMenu />
                <span className='text-[#111827]'>More watch options</span>
              </a>
            </aside>
          </article>
          <Footer />
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