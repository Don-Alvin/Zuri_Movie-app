import { useTrendingMovies } from '../hooks/useMovies'
import {PulseLoader} from 'react-spinners'
import { BsPlayCircle } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Hero = () => {
    const {loading, error, isError, trendingMovies} = useTrendingMovies()
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1 > 10 ? 0 : prevIndex + 1));
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);

    let content;
    if (!trendingMovies || loading) content = <PulseLoader color='#be123c' />
    if(isError) toast.error(error)
    if(trendingMovies) {
        const movie = trendingMovies[currentIndex]
        content = (
            <section className='h-full w-full relative'>
                <div className='bg-black absolute w-full h-full opacity-70'></div>
                <img
                    className='h-full w-full object-cover'
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                    alt={movie.title} 
                />
                <div className='leading-10 px-6 lg:px-14 absolute top-24 lg:top-[30%] flex flex-col gap-6'>
                    <Link to={`movie/${movie.id}`} className='text-white text-4xl font-bold'>{movie.title}</Link>
                    <span className='flex gap-2 text-white'>
                        <img className='object-contain' src='/images/imdb.png' alt="rating" />
                        {movie.vote_average.toFixed(1)}
                    </span>
                    <p className='tracking-wide text-white lg:text-lg '>{movie.overview}</p>
                    <Link to={`movie/${movie.id}`} className='flex items-center justify-center p-1 md:p-2 gap-2 bg-[#BE123C] text-white md:w-[150px]'>
                        <BsPlayCircle />
                        Watch trailer
                    </Link>
                </div>
            </section>
        )
    }
  return (
    <>
    {content}
    </>
        
  )
}

export default Hero