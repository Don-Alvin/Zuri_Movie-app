import { useQuery } from "@tanstack/react-query";
import { getMovie, getTopMovies, getTrendingMovies, searchMovie } from "../api/apiMovies";


export const useTrendingMovies = () => {
    const {isInitialLoading: loading, error, isError, data: trendingMovies} = useQuery({queryKey: ["trendingMovies"], queryFn: getTrendingMovies})
    return {loading, error, isError, trendingMovies}
}

export const useTopMovies = () => {
    const {
		isInitialLoading: loading,
		error,
		isError,
		data: topMovies,
	} = useQuery({
		queryKey: ["topMovies"],
		queryFn: getTopMovies,
	});

	return { loading, error, isError, topMovies };
}

export const useSearchMovies = (searchWord) => {
	const {isInitialLoading: isSearching, error, isError, data: searchedMovies} = useQuery({
		queryKey: ["searchedMovies"],
		queryFn: () => searchMovie(searchWord)
	})

	return { isSearching, isError, error, searchedMovies}
}

export const useGetMovie = (movieId) => {
	const {isInitialLoading: loading, isError, error, data: movie} = useQuery({
		queryKey: ['movie'],
		queryFn: () => getMovie(movieId)
	})

	return {loading, isError, movie}
}



