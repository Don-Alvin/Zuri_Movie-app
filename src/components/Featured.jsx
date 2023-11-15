import React from 'react'
import TopMovies from './TopMovies'
import useSearch from '../hooks/useSearch'
import TopTVShows from './TopTVShows'

const Featured = () => {
  const {searchWord} = useSearch()
  return (
    <section className='p-6 lg:px-14 lg:mt-10'>
      <TopMovies />
      <TopTVShows />
    </section>
  )
}

export default Featured