import { useTrendingMovies } from '../hooks/useMovies'
import {PulseLoader} from 'react-spinners'
import { BsPlayCircle } from 'react-icons/bs'

const Hero = () => {
    const {loading, error, isError, trendingMovies} = useTrendingMovies()
    let content;
    if (!trendingMovies || loading) content = <PulseLoader />
    if(isError) toast.error(error)
    if(trendingMovies) {
        let index = Math.floor(Math.random() * 20)
        const movie = trendingMovies[index]
        content = (
            <section className='h-full w-full relative'>
                <div className='bg-black absolute w-full h-full opacity-70'></div>
                <img
                    className='h-full w-full object-cover'
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                    alt={movie.title} 
                />
                <div className='px-14 absolute top-48 flex flex-col gap-6'>
                    <h1 className='text-white text-4xl font-bold lg:w-[300px]'>{movie.title}</h1>
                    <span className='flex gap-2 text-white'>
                        <img src='/images/imdb.png' alt="rating" />
                        {movie.vote_average}
                    </span>
                    <p className='text-white text-lg lg:w-[600px]'>{movie.overview}</p>
                    <button className='flex items-center justify-center p-1 gap-2 bg-[#BE123C] text-white lg:w-[150px] rounded'>
                        <BsPlayCircle />
                        Watch trailer
                    </button>
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