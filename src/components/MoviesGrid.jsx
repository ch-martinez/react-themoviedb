import axios from 'axios'
import { MovieCard } from './MovieCard'
import { API_URL, API_OPTIONS } from "../utils/APIConnect"

export const MoviesGrid = () => {
    axios.get(API_URL+'/movie/popular', API_OPTIONS).then((res) => console.log(res.data.results))
    return(
        <>
            <h1>Grilla de peliculas</h1>
            <MovieCard/>
        </>
    )
}