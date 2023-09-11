import { useQuery } from "@tanstack/react-query";
import { getAllMovies, getTrendingMovies } from "../api/apiMovies";

export const useMovies = () => {
	const {
		isInitialLoading: loading,
		error,
		isError,
		data: allMovies,
	} = useQuery({
		queryKey: ["allMovies"],
		queryFn: getAllMovies,
	});

	return { isInitialLoading, error, isError, movies };
};

export const useTrendingMovies = () => {
    const {isInitialLoading: loading, error, isError, data: trendingMovies} = useQuery({queryKey: ["trendingMovies"], queryFn: getTrendingMovies})
    return {loading, error, isError, trendingMovies}
}

