const movieUrl = "https://api.themoviedb.org/3/movie";
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
export const getAllMovies =  async ({pageParam = 1}) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageParam}&sort_by=popularity.desc`, 
		options
	)
	const data = await response.json()
	return data.results
}

// Fetch popular movies
export const getTopMovies = async () => {
	const response = await fetch(
		`${movieUrl}/now_playing?language=en-US&page=1`,
		options
	);
	const data = await response.json();
	return data.results;
};

// Fetch trending movies
export const getTrendingMovies = async () => {
	const response = await fetch(
		`${movieUrl}/now_playing?language=en-US&page=1`,
		options
	);
	const data = await response.json();
	return data.results;
};

// get a movie
export const getMovie = async (id) => {
	const response = await fetch(
		`${movieUrl}/${id}?append_to_response=videos,similar,reviews,credits&&language=en-US`,
		options
	);
	const data = await response.json();
	return data;
};

// Search a movie
export const searchMovies = async (word) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/search/multi?query=${word}&include_adult=false&language=en-US&page=1`,
		options
	);
	const data = await response.json();
	return data.results;
};
