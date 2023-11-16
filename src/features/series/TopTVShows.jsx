import React from 'react'
import { Link } from 'react-router-dom';
import TVCard from './TVCard';
import { useTopSeries } from '../../hooks/useSeries';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const TopTVShows = () => {
    const {loading, isError, error, topSeries} = useTopSeries()

    let content;
    if(!topSeries || loading) content = <PulseLoader color='#be123c' />

    if(isError) toast.error(error)

    if(topSeries) {
        content = (
            <section>
                <div className='flex justify-between'>
                    <h3 className='text-[24px] font-bold text-gray-700'>Top Series</h3>
                    <Link className='text-[18px] font-semibold text-gray-700'>See more</Link>
                </div>
                <article className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4'>
                    {topSeries.slice(0, 10)?.map(series => (
                    <div key={series.id} className='flex justify-center'>
                        <TVCard
                            image={`https://image.tmdb.org/t/p/original/${series.poster_path}`}
                            title={series.name}
                            episodes={series.episodes}
                            rating={series.vote_average}
                            id={series.id}
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

export default TopTVShows