import React from 'react'
import { useTopMovies } from '../hooks/useMovies'
import { PulseLoader } from 'react-spinners';
import Card from './Card';
import useSearch from '../hooks/useSearch';
import { Link } from 'react-router-dom';

const TopMovies = () => {
    const {loading, isError, error, topMovies} = useTopMovies()
    const  {searchWord, results, searching} = useSearch()

    let content;
    let limit = 10
    if(!topMovies || loading) content = <PulseLoader color='#be123c' />
    if(searchWord || searching) content = <PulseLoader color='#be123c' />

    if(results && searchWord) {
        content = (
            <article className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4'>
            {results.map(movie => (
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

    if(isError) toast.error(error)

    if(topMovies && !searchWord) {
        content = (
            <section>
                <div className='flex justify-between'>
                    <h3 className='text-[24px] font-bold text-gray-700'>Top Movies</h3>
                    <Link className='text-[18px] font-semibold text-gray-700'>See more</Link>
                </div>
                <article className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4'>
                    {topMovies.slice(0, limit)?.map(movie => (
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
            </section>
        
        )
    }

  return (
    <>
        {content}
    </>
  )
}

export default TopMovies