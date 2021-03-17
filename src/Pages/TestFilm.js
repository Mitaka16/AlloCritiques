// import React from 'react'
import './testFilm.css'
import MovieList from '../components/MovieList'

function Film() {
    return (
        MovieList.map(el => {
            return (
                <a href='https://www.allocine.fr/film/fichefilm_gen_cfilm=182745.html'><img src={el.poster} alt='Poster film' /></a>
                )
            })
    )
}

export default Film
