import React, { useContext } from 'react';
import { DATAS } from '../../constantes/MOCKDATA';
import { MovieContext } from '../../contexts/MovieContext';
import "../Wishlist/wishlist.css"

const MovieDetails = ({ movie }) => {
    const { removeWishlist } = useContext(MovieContext);
    return (
        <div className="wishlist-item" onClick={() => removeWishlist(movie.id)}>
            <img className="wishlist-poster" src={movie.poster} alt="Affiche du film" />
            <p>{movie.title}</p>
            <p className="wishlist-hiddenDelete">{DATAS.DELETE}</p>
        </div>
    );
}

export default MovieDetails;