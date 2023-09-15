# Movie Database App with react

- A movie discovery web application consuming the TMDB movie database api.

## Technologies used

- ReactJs with vite
  `npm create vite@latest`

- Tailwind CSS for styling
- React-router-dom for routing
  `npm i react-router-dom `

- React Query for state management
  `npm i @tanstack/react-query`

- React-icons for
  `npm i react-icons`

- React-spinners for loading animation
  `npm i react-spinners`

## APIS endpoints utilised

- To get the top 10 movies I used :
  `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`

- To get a movie with id
  `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos,credits&&language=en-US`

- To search for movies
  `https://api.themoviedb.org/3/search/movie?query=${searchWord}`

- To get trending movies for the hero section
  `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`

## Run App locally

- To run the app locally first clone the repo to your local machine.

- Then run
  `npm install`

- Finally run
  `npm run dev`
