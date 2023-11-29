import { Link } from 'react-router-dom'
import { MdFavorite } from 'react-icons/md'
import { useState } from 'react'
import { db } from '../../api/firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import useAuth from '../../hooks/useAuth'
import { toast } from 'react-toastify'

const Card = ({title, date, image, rating, id}) => {
  const [isFavourite, setIsFavorite] = useState(false)
  // const { user } = useAuth()

  const saveMovie = async (movie_id) => {
    // if(user?.uid){
      setIsFavorite(!isFavourite)
    //   await updateDoc(docRef, {
    //     savedMovies: arrayUnion({
    //       id, title, image, rating
    //     })
    //   })
    // } else if (user?.uid) {
    //   setIsFavorite(false)
    //   await updateDoc(docRef, {
    //     savedMovies: arrayRemove(movie_id)
    //   })
    // }else {
    //   toast.error('Please log in to like!')
    // }
  }

  const releaseDate = new Date(date);
  const day = releaseDate.getUTCDate();
  const month = releaseDate.toLocaleString('default', { month: 'long' });
  const year = releaseDate.getUTCFullYear();
  const formattedReleaseDate = `${month} ${day}, ${year}`;


  return (
    <div
      data-testid="movie-card" 
      className='relative grid border w-[90%] md:w-[240px] lg:h-[460px] rounded'
    >
      <MdFavorite 
        className={`absolute text-2xl ${isFavourite ? `text-[#be123c]` : `text-gray-200`} right-2 top-2 cursor-pointer`}
        onClick={() => {saveMovie(id)}}
      />
      <img
        className='w-full object-cover rounded-t'
        src={image} 
        alt={title}
        data-testid="movie-poster"
      />
      <div className="flex flex-col items-center">
        <span className='text-gray-500 text-sm'data-testid="release-date">{formattedReleaseDate}</span>
        <Link to={`/movie/${id}`} className='underline font-semibold text-center text-[#111827]' data-testid="movie-title">{title}</Link>
        <div className='flex gap-2'>
          <img
            className='object-contain'
            src='/images/imdb.png'
            alt='imdb logo'
          />
          <span className='text-lg text-[#111827]'>{rating}/10</span>
        </div>
      </div>
    </div>
  )
}

export default Card