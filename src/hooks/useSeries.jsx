import { useQuery } from "@tanstack/react-query";
import { getAllSeries, getSeries, getTopSeries } from "../api/apiSeries";

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
	const {isInitialLoading: isLoading, isError, error, data:allSeries} = useQuery({
		queryKey:['allSeries'],
		queryFn: getAllSeries
	})

	return { isLoading, isError, error, allSeries}
}

// Get a series
export const useGetSeries = (seriesId) => {
	const {isInitialLoading: loading, isError, error, data: series} = useQuery({
		queryKey: ['series', seriesId],
		queryFn: () => getSeries(seriesId)
	})

	return {loading, isError, error, series}
}

