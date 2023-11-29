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

// Get all movies
export const getAllSeries =  async ({pageParam = 1}) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${pageParam}&sort_by=vote_count.desc`, 
		options
	)
	const data = await response.json()
	return data.results
}

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
		`${tvURL}/tv/${id}?append_to_response=videos,credits&language=en-US`,
		options
	);
	const data = await response.json();
	return data;
};