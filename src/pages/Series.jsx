import React from 'react'
import MetaData from '../components/Meta/MetaData'
import { useAllSeries } from '../hooks/useSeries'
import { PulseLoader } from 'react-spinners'
import TVCard from '../features/series/TVCard' 

const Series = () => {
  const { allSeries:movies, isError, error, isLoading } = useAllSeries()
 
  let content;

  if(isLoading) content = <PulseLoader color='#be123c' />
  if(isError) content = <p>Oooop! We encountered an error: {error}</p>
  if(movies) {
    content = movies.map(movie => (
      <div key={movie.id}>
        <TVCard 
          image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          title={movie.name}
          date={movie.first_air_date}
          rating={movie.vote_average}
          id={movie.id}
        />
      </div>
      
    ))
  }

  return (
    <section className='p-6'>
      <MetaData title={'All TV Shows'} />
      <header className='my-2'>
        <h2 className='text-gray-700 font-semibold text-xl'>TV Shows</h2>
      </header>
      <article className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4'>
        {content}
      </article>
      <button className='text-white bg-[#E11D48] p-2'>Load more</button>
    </section>
  )
}

export default Series