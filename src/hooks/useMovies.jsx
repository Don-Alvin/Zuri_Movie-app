import { useQuery } from "@tanstack/react-query";
import { getAllMovies, getTopMovies, getTrendingMovies } from "../api/apiMovies";

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

	return { loading, error, isError, allMovies };
};

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

