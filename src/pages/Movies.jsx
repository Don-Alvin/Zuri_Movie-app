import React from 'react'
import MetaData from '../components/Meta/MetaData'
import { useAllMovies } from '../hooks/useMovies'
import { PulseLoader } from 'react-spinners'
import Card from '../features/movies/Card'

const Movies = () => {
  const { isFetching, error, movies, hasNextPage, isFetchingNextPage, status, fetchNextPage } = useAllMovies()
  console.log(movies);

  let content;

  if(status === 'pending') content = <PulseLoader color='#be123c' />
  if(status === 'error') content = <p>Oooop! We encountered an error: {error}</p>
  if(movies) {
    content = movies.pages.map((items, i) => (
      items.map(movie => (
        <Card 
          image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          title={movie.title}
          date={movie.release_date}
          rating={movie.vote_average}
          id={movie.id}
      />
      )) 
      )
    )
  }

  return (
    <section className='p-6'>
      <MetaData title={'All Movies'} />
      <header className='my-2'>
        <h2 className='text-gray-700 font-semibold text-xl'>Movies</h2>
      </header>
      <article className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4'>
        {content}
      </article>
      <button 
        className='text-white bg-[#E11D48] p-2'
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more..'
          : hasNextPage 
          ? 'Load more'
          :'Nothing more to load' 
        }
      </button>
      <div>{isFetching && !isFetchingNextPage ? <PulseLoader color='#be123c' /> : null}</div>
    </section>
  )
}

export default Movies