export const PostsHeader = () => {
    return(
        <header className="posts-header">
            <h3>Peliculas</h3>
            <section className="posts-header__links-container">
                <a className="posts-header__link link link-regular link--selected" href="">Descubrir</a>
                <a className="posts-header__link link link-regular" href="">Populares</a>
                <a className="posts-header__link link link-regular" href="">Nuevas</a>
            </section>
        </header>
    )
}