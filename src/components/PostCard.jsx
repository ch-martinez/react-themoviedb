import { Link } from "react-router-dom"

export const PostCard = ({post}) => {
    const imgURL = `https://image.tmdb.org/t/p/w300${post.poster_path}`
    return(
        <Link to={`/movie/${post.id}`}>
            <li className="card">
                <div className="card__cover">
                    <img src={imgURL} alt={post.title} className="card__img"/>
                    <span className="card__release">{post.release_date.substring(0,4)}</span>
                </div>
                <div className="card__content">
                    <h6 className="card__title">{post.title}</h6>
                </div>
            </li>
        </Link>
    )
}