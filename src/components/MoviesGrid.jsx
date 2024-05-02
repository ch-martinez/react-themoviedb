// import axios from 'axios'
import { MovieCard } from './MovieCard'
import { getDataAPI } from "../utils/APIConnect"
import { useState, useEffect } from 'react'

export const MoviesGrid = () => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        getDataAPI('/discover/movie').then((data) => {
            setMovies(data.results)
            console.log(data.results);
        })
    }, [])

    return(
        <>
            <h1>Grilla de peliculas</h1>
            <ul>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>

                ))}
            </ul>
        </>
    )
}