import { useQuery } from "@tanstack/react-query";
import { getTopSeries } from "../api/apiSeries";

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
