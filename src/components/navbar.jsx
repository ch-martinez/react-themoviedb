export const Navbar = () => {
    return(
        <navbar className="navbar">
            <div className="navbar__logo">
                <img src="/public/icon.png" alt="" />
                <h5>The Movie DB</h5>
            </div>
            <ul className="navbar__links">
                <li className="navbar__link link link-regular link--selected">Inicio</li>
                <li className="navbar__link link link-regular">Peliculas</li>
                <li className="navbar__link link link-regular">Series</li>
            </ul>
        </navbar>
    )
}