import { useContext } from "react"
import SearchContext from "../Context/SearchContext"

const useSearch = () => {
    return useContext(SearchContext)
}

export default useSearch