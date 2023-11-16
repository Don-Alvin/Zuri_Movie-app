import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSeries } from '../../hooks/useSeries'
import { PulseLoader } from 'react-spinners'

const SeriesDetails = () => {
  const { id } = useParams()
  const {loading, isError, error, series} = useGetSeries(id)

  console.log(series);

  let content;

  if(!series) content=<p>Resource not found</p>

  if(loading) content = <PulseLoader color='#be123c' />

  if(isError) content = <p>{`Ooops! seems like we encountered an error: ${error}`}</p>

  if(series){

    const releaseDate = new Date(series.first_air_date);
    const day = releaseDate.getUTCDate();
    const month = releaseDate.toLocaleString('default', { month: 'long' });
    const year = releaseDate.getUTCFullYear();
    const formattedReleaseDate = `${month} ${day}, ${year}`;

    const stars = series.credits.cast.slice(0, 5)
    const director = series.credits.crew.filter(crew => crew.known_for_department === "Directing")
    const writers = series.credits.crew.filter(crew => crew.department || crew.known_for_department === "Writing")

    content = (
      <section key={series.id}>
        <section className='w-full flex flex-col lg:flex-row justify-between gap-4 lg:py-6' key={series.id}>
          <div className='rounded-lg h-[70vh] p-2 w-full lg:w-[50%] px-4' >
            <img className='object-cover w-full rounded-lg h-full lg:w-full mx-auto' src={`https://image.tmdb.org/t/p/original/${series.poster_path}`} />
          </div>
          <article className='px-4 lg:w-[50%]'>
            <div className='my-4 pr-6 text-gray-700 flex flex-col gap-2' key={series.id}>
              <ul className='flex justify-between items-center mb-4 flex-wrap gap-2'>
                <li className='text-[#111827] font-semibold text-xl' data-testid="movie-title">{series.name}</li>
                <li data-testid="movie-release-date">{formattedReleaseDate}</li>
                <li className='flex items-center gap-2 text-sm'>
                  <img className='object-contain' src='/images/imdb.png' alt='imdb' />
                  {series.vote_average.toFixed(1)}
                </li>
                <ul>
                  <li className='text-sm' data-testid="movie-runtime">Seasons: {series.number_of_seasons}</li>
                  <li className='text-sm' data-testid="movie-runtime">Episodes: {series.number_of_episodes}</li>
                </ul>
                
                <li className='flex gap-2'>
                  {series.genres.map(genre => (
                    <span key={genre.id} className='text-[#be123c] text-sm border border-[#be123c] p-[2px] rounded-lg'>{genre.name}</span>
                  ))}
                </li>
              </ul>
              <p data-testid="movie-overview">
              {series.overview}
              </p>
              <ul className='flex flex-col gap-2 lg:gap-6'>
                {director && (
                  <li>
                    Director:
                  <span className='text-[#be123c]'> {director[0]?.name}</span>
                </li>
                )}
                
                {writers && (
                  <li>
                    Writers: 
                    {writers.slice(0, 5).map(writer => <span className='text-[#be123c]' key={Math.random()}> {writer.name}, </span>)}
                  </li>
                )}
                
                <li>
                  Stars:
                    {stars.map(star => <span className='text-[#be123c]' key={star.name}> {star.name}, </span>)}
                </li>
              </ul>
            </div>
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

export default SeriesDetails