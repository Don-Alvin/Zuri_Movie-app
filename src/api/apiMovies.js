const url = "https://api.themoviedb.org/3/movie/";
const options = {
	method: "GET",
	headers: {
		accept: "applicatio/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MwMTc2YWZmMjFhYmM2MDBmMDdmNzEwMmZkNzUzNCIsInN1YiI6IjYzMzQyMjRkNjA4MmViMDA4ODNlOThiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QWf5cOZsbD6iyt12-tlALXGxEeYm4F1LVqf2UEVkahg",
	},
};

// Fetch All movies
export const getAllMovies = async () => {
	const response = await fetch(
		`${url}top_rated?language=en-US&page=1`,
		options
	);
	const data = await response.json();
	return data.results;
};

// Fetch popular movies
export const getTopMovies = async () => {
	const response = await fetch(`${url}popular?language=en-US&page=1`, options);
	const data = await response.json();
	return data.results;
};

// Fetch trending movies
export const getTrendingMovies = async () => {
	const response = await fetch(
		`${url}now_playing?language=en-US&page=1`,
		options
	);
	const data = await response.json();
	return data.results;
};
