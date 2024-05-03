/* import React from 'react' */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { MovieDetailPage } from './pages/MovieDetailPage'

export const App = () => {
    return(
        <BrowserRouter>
        <header>
            <section className='container'>
                <Link to = '/'>
                        <h1 className='title'>TheMovieDB</h1>
                </Link>
            </section>
        </header>
        <body>
            <section className='container'>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                    <Route path='/movie/:movie_id' element={<MovieDetailPage/>} />
                </Routes>
            </section>
        </body>
        </BrowserRouter>
    )
}