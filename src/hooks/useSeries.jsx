import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAllSeries, getGenresSeries, getSeries, getTopSeries } from "../api/apiSeries";

export const useTopSeries = () => {
    const {
		isInitialLoading: loading,
		error,
		isError,
		data: topSeries,
	} = useQuery({
		queryKey: ["topSeries"],
		queryFn: getTopSeries,
	});

	return { loading, error, isError, topSeries };
}

// Get all series
export const useAllSeries = () => {
	const {
		fetchNextPage, 
		hasNextPage, 
		isFetching,
		isFetchingNextPage, 
		status, 
		error, 
		data:allSeries
	} = useInfiniteQuery({
		queryKey:['allSeries'],
		queryFn: getAllSeries,
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) => lastPage.length ? pages.length + 1 : undefined
	})

	return { fetchNextPage, hasNextPage,isFetching, isFetchingNextPage,status, error, allSeries}
}

// Get a series
export const useGetSeries = (seriesId) => {
	const {isInitialLoading: loading, isError, error, data: series} = useQuery({
		queryKey: ['series', seriesId],
		queryFn: () => getSeries(seriesId)
	})

	return {loading, isError, error, series}
}

export const useGenresSeries = () => {
	const { isInitialLoading: loading, isError, error, data: genres } =useQuery({
		queryKey: ['genres'],
		queryFn: getGenresSeries
	})

	return {genres, error, isError}
}

