import React from 'react'
import TopMovies from './TopMovies'
import useSearch from '../hooks/useSearch'

const Featured = () => {
  const {searchWord} = useSearch()
  return (
    <section className='p-6 lg:px-14 lg:mt-10'>
      <h3 className='text-3xl font-semibold text-center md:text-left text-[#111827]'>{searchWord ? `Search results` : `Top Movies`}</h3>
      <TopMovies />
    </section>
  )
}

export default Featured