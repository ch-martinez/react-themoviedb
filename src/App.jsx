/* import React from 'react' */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { LandingPage } from './pages/LandingPage'
import { MovieDetailPage } from './pages/MovieDetailPage'

export const App = () => {
    return(
        <BrowserRouter>
        <header>
            <section className='container'>
                <Navbar/>
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