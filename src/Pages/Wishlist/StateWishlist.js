import React, { useContext } from 'react';
import { MovieContext } from "../../contexts/MovieContext"
import "./wishlist.css"

const StateWishlist = () => {
    const { movies } = useContext(MovieContext);
    return (
        <div>
            <h1 className="wishlist-title">Ma wishlist</h1>
            <p className="wishlist-movielist">Tu as {movies.length} films à voir !</p>
        </div>
    )
}

export default StateWishlist;