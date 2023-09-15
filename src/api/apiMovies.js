const url = "https://api.themoviedb.org/3/movie/";
const key = import.meta.env.VITE_API_KEY;
const options = {
	method: "GET",
	headers: {
		accept: "applicatio/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MwMTc2YWZmMjFhYmM2MDBmMDdmNzEwMmZkNzUzNCIsInN1YiI6IjYzMzQyMjRkNjA4MmViMDA4ODNlOThiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QWf5cOZsbD6iyt12-tlALXGxEeYm4F1LVqf2UEVkahg",
	},
};

// Fetch popular movies
export const getTopMovies = async () => {
	const response = await fetch(
		`${url}top_rated?language=en-US&page=1`,
		options
	);
	const data = await response.json();
	return data.results;
};

// Fetch trending movies
export const getTrendingMovies = async () => {
	const response = await fetch(
		`${url}top_rated?language=en-US&page=1`,
		options
	);
	const data = await response.json();
	return data.results;
};

// get a movie
export const getMovie = async (movieId) => {
	const response = await fetch(
		`${url}${movieId}?append_to_response=videos,credits&&language=en-US`,
		options
	);
	const data = await response.json();
	return data;
};

// Search a movie
export const searchMovies = async (searchWord) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${searchWord}`,
		options
	);
	const data = await response.json();
	return data.results;
};
