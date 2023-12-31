import { useParams } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { PulseLoader } from 'react-spinners'
import { useGetMovie } from '../../hooks/useMovies'
import MetaData from '../../components/Meta/MetaData'
import Card from './Card'

const MovieDetails = () => {
  const params  = useParams()
  const id = params.id
  const { movie, loading, isError, error } = useGetMovie(id)

  let content;

  if(!movie) content=<p>Resource not found</p>

  if(loading) content = <PulseLoader color='#be123c' />

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
        <MetaData title={movie.title} />
        <section className='w-full flex flex-col lg:flex-row justify-between gap-4 lg:py-6' key={movie.id}>
          <div className='rounded-lg h-[60vh] p-2 w-full lg:w-[50%] px-4' >
            <iframe className='w-full rounded-lg h-full lg:w-full mx-auto' src={`https://www.youtube.com/embed/${trailer[0].key}`} ></iframe>
          </div>
          <article className='px-4 lg:w-[50%]'>
            <div className='my-4 pr-6 text-gray-700 flex flex-col gap-2' key={movie.id}>
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
                    <span key={genre.name} className='text-[#be123c] text-sm border border-[#be123c] p-[2px] rounded-lg'>{genre.name}</span>
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
                  {writers.slice(0, 2).map(writer => <span className='text-[#be123c]' key={Math.random()}> {writer.name}, </span>)}
                </li>
                <li>
                  Stars:
                    {stars.map(star => <span className='text-[#be123c]' key={star.name}> {star.name}, </span>)}
                </li>
              </ul>
            </div>
          </article>
        </section>
        <article className='px-4'>
          <h4 className='text-gray-700 font-semobold text-xl mb-4'>Similar Movies</h4>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4'>
            {movie.similar.results.map(item => (
              <Card
                title={item.title}
                date={item.release_date}
                image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                rating={item.vote_average}
                id={item.id}
              />
            ))}
          </div>
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