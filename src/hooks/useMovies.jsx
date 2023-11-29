import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAllMovies, getGenresMovies, getMovie, getTopMovies, getTrendingMovies, searchMovies } from "../api/apiMovies";


// Get all movies

export const useAllMovies = () => {
	const { 
		isFetching, 
		isError,
		error, 
		fetchNextPage, 
		hasNextPage, 
		isFetchingNextPage, 
		status, 
		data:movies 
	} = useInfiniteQuery({
		queryKey: ['movies'],
		queryFn:  getAllMovies,
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => lastPage.length ? pages.length + 1 : undefined
	})

	return { isFetching, error, isError, movies, hasNextPage, isFetchingNextPage, status, fetchNextPage}
}

export const useTrendingMovies = () => {
    const { isInitialLoading: loading, error, isError, data: trendingMovies} = useQuery({queryKey: ["trendingMovies"], queryFn: getTrendingMovies})
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

export const useGenresMovies = () => {
	const { isInitialLoading: loading, isError, error, data: genres } =useQuery({
		queryKey: ['genres'],
		queryFn: getGenresMovies
	})
	return {genres, error, isError}
}


