import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            id: 'D1',
            title: 'Drive',
            poster: 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/83/93/95/19803697.jpg'
        },
        {
            id: 'FG2',
            title: 'Forrest Gump',
            poster: 'https://fr.web.img2.acsta.net/c_310_420/pictures/15/10/13/15/12/514297.jpg'
        },
        {
            id: 'LLV3',
            title: 'La Ligne Verte',
            poster: 'https://fr.web.img5.acsta.net/c_210_280/medias/nmedia/18/66/15/78/19254683.jpg'
        }
    ]);
    const addWishlist = (id, title, poster) => {
        setMovies([...movies, { id, title, poster }])
    };
    const removeWishlist = (id) => {
        setMovies(movies.filter(movie => movie.id !== id))
    };
    return (
        <MovieContext.Provider value={{ movies, addWishlist, removeWishlist }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;