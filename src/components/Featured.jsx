import TopTVShows from "../features/series/TopTVShows"
import TopMovies from "../features/movies/TopMovies"
import useSearch from "../hooks/useSearch"

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