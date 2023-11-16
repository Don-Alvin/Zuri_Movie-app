const tvURL = "https://api.themoviedb.org/3/";
const key = import.meta.env.VITE_API_KEY;
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MwMTc2YWZmMjFhYmM2MDBmMDdmNzEwMmZkNzUzNCIsInN1YiI6IjYzMzQyMjRkNjA4MmViMDA4ODNlOThiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QWf5cOZsbD6iyt12-tlALXGxEeYm4F1LVqf2UEVkahg",
	},
};

export const getTopSeries = async () => {
	const response = await fetch(
		`https://api.themoviedb.org/3/trending/tv/day?language=en-US`,
		options
	);
	const data = await response.json();
	return data.results;
};

// get a series
export const getSeries = async (id) => {
	const response = await fetch(
		`${tvURL}/tv/${id}?language=en-US`,
		options
	);
	const data = await response.json();
	return data;
};