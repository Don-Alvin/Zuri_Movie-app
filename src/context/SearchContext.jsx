import { createContext, useEffect, useState } from "react";
import { searchMovies } from "../api/apiMovies";
const SearchContext = createContext()

export const SearchContextProvider = ({children}) => {
    const [searchWord, setSearchWord] = useState("")
    const [searching, setSearching] = useState(false)
    const [results, setResults] = useState(null)

    useEffect(() => {
        // Create an asynchronous function to handle the search
        const performSearch = async () => {
          if (searchWord) {
            setSearching(true);
    
            try {
              const searchedMovies = await searchMovies(searchWord);
              setResults(searchedMovies);
            } catch (error) {
              console.error("Error searching for movies:", error);
            }
    
            setSearching(false);
          }
        };
    
        performSearch();
      }, [searchWord]);

    return (
        <SearchContext.Provider value={{searchWord, setSearchWord, results, searching}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext