import React from 'react'
import { useTopMovies } from '../hooks/useMovies'
import { PulseLoader } from 'react-spinners';
import Card from './Card';

const TopMovies = () => {
    const {loading, isError, error, topMovies} = useTopMovies()

    let content;
    if(!topMovies || loading) content = <PulseLoader />

    if(isError) toast.error(error)

    if(topMovies) {
        content = (
        <article className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4'>
            {topMovies.slice(0, 10)?.map(movie => (
                <div key={movie.id} className='flex justify-center'>
                    <Card
                        image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        title={movie.title}
                        date={movie.release_date}
                        rating={movie.vote_average}
                        id={movie.id}
                    />
                </div>
            ))}
        </article>
        )
    }

  return (
    <>
        {content}
    </>
  )
}

export default TopMovies