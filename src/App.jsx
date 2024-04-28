/* import React from 'react' */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { MovieDetailPage } from './pages/MovieDetailPage'

export const App = () => {
    return(
        <BrowserRouter>
        <header>
            <Link to = '/'>
                    <h1 className='title'>Peliculas</h1>
            </Link>
        </header>
            <Routes>
                <Route path='/' element={<LandingPage/>} />
                <Route path='/movie/:movie_id' element={<MovieDetailPage/>} />
            </Routes>
        </BrowserRouter>
    )
}