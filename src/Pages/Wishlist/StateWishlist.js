import React, { useContext } from 'react';
import { MovieContext } from "../../contexts/MovieContext"

const StateWishlist = () => {
    const { movies } = useContext(MovieContext);
    return (
        <div>
            <h1>Ma wishlist</h1>
            <p>Tu as {movies.length} films à voir !</p>
        </div>
    )
}

export default StateWishlist;