import { Link } from "react-router-dom"

export const MovieCard = ({movie}) => {
    const imgURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    return(
        <Link to={`/movie/${movie.id}`}>
            <li>
                <img src={imgURL} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
            </li>
        </Link>
    )
}