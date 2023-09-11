import React from 'react'
import TopMovies from './TopMovies'

const Featured = () => {
  return (
    <section className='px-14 mt-10'>
      <h3  className='text-3xl font-semibold'>Top Movies</h3>
      <TopMovies />
    </section>
  )
}

export default Featured