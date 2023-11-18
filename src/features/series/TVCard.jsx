import { Link } from 'react-router-dom'
import { MdFavorite } from 'react-icons/md'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { arrayRemove, arrayUnion, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../api/firebase'
import { toast } from 'react-toastify'

const TVCard = ({title, image, rating, id}) => {
  const [isFavourite, setIsFavorite] = useState(false)
  const { user } = useAuth()

  const docRef = doc(db, 'users', user?.uid)

  const saveTV = async (movie_id) => {
    if(user?.uid && !isFavourite){
      setIsFavorite(!isFavourite)
      await updateDoc(docRef, {
        savedTv: arrayUnion({
          id, title, image, rating
        })
      })
    } else if (user?.uid && isFavourite) {
      setIsFavorite(!isFavourite)
      await updateDoc(docRef, {
        savedTv: arrayRemove(movie_id)
      })
    }else {
      toast.error('Please log in to like!')
    }
  }

  return (
    <div
      data-testid="movie-card" 
      className='relative grid border w-[90%] md:w-[240px] lg:h-[460px] rounded'
    >
      <MdFavorite 
        className={`absolute text-2xl ${isFavourite ? `text-[#be123c]` : `text-gray-200`} right-2 top-2 cursor-pointer`}
        onClick={() => {saveTV(id)}}
      />
      <img
        className='w-full object-cover rounded-t'
        src={image} 
        alt={title}
        data-testid="movie-poster"
      />
      <div className="flex flex-col items-center">
        <Link to={`${id}`} className='underline font-semibold text-center text-[#111827]' data-testid="movie-title">{title}</Link>
        <div className='flex gap-2'>
          <img
            className='object-contain'
            src='/images/imdb.png'
            alt='imdb logo'
          />
          <span className='text-lg text-[#111827]'>{rating.toFixed(1)}/10</span>
        </div>
      </div>
    </div>
  )
}

export default TVCard