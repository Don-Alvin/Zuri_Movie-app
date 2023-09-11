import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title, date, image, rating}) => {
  return (
    <div
      data-testid="movie-card" 
      className='relative grid border w-[240px] rounded'
    >
      <img
        className='w-full h-60 object-cover rounded-t'
        src={image} 
        alt={title}
        data-testid="movie-poster"
      />
      <div className="flex flex-col items-center">
        <span className='text-gray-500 text-sm'>{date}</span>
        <Link className='underline font-semibold text-center' data-testid="movie-title">{title}</Link>
        <div className='flex gap-2'>
          <img
            className='object-contain'
            src='/images/imdb.png'
            alt='imdb logo'
          />
          <span className='text-xl'>{rating}</span>
        </div>
      </div>
    </div>
  )
}

export default Card