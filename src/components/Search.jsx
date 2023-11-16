import React from 'react'
import { useSearchMovies } from '../hooks/useMovies'
import useSearch from '../hooks/useSearch'
import { PulseLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

const Search = () => {
    const { searchWord } = useSearch()
    const {search, loading, isError, error} = useSearchMovies(searchWord)

    let content;
    if(loading) content = <PulseLoader color='#fff' />
    if(isError) content = <p>{`Ooops! Seems like we encountered and error: ${error}`}</p>

    if(search) {
      content = search.map(item => (
        <div key={item.id}>
            <ul>
                <Link to={`${item.media_type}/${item.id}`} className='flex items-center gap-2'>
                    <img className='w-[50px] h-[50px] object-cover' src={`https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path}`} alt='poster' />
                    <p>{item.title || item.name}</p>
                </Link>
            </ul>
        </div>
    ))
  
    }
  return (
    <article className='flex flex-col gap-3 absolute top-8 w-full bg-[#111827] p-4 text-white rounded h-[70vh] overflow-y-scroll'>
        {content}
    </article>
  )
}

export default Search