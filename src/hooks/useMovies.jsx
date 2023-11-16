import { useQuery } from "@tanstack/react-query";
import { getMovie, getTopMovies, getTrendingMovies, searchMovies } from "../api/apiMovies";


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

export const useGetMovie = (movieId) => {
	const {isInitialLoading: loading, isError, error, data: movie} = useQuery({
		queryKey: ['movie', movieId],
		queryFn: () => getMovie(movieId)
	})

	return {loading, isError, error, movie}
}


export const useSearchMovies = (searchWord) => {
	const { isInitialLoading: loading, isError, error, data: search} = useQuery({
		queryKey: ['search', searchWord],
		queryFn: () => searchMovies(searchWord)
	})

	return { loading, isError, error, search}
}


