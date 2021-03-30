import React, { useContext, useState } from 'react';
import { DATAS } from '../../constantes/MOCKDATA';
import { MovieContext } from "../../contexts/MovieContext"
import "./wishlist.css"

const StateWishlist = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div>
            <h1 className="wishlist-title">{DATAS.MY_WISHLIST}</h1>
            { movies.length <= 1 ?
                (<p className="wishlist-movielist">{movies.length}{DATAS.ONE_MOVIE_WISHLIST}</p>) :
                (<p className="wishlist-movielist">{movies.length}{DATAS.MOVIES_WISHLIST}</p>)
            }

        </div>
    )
}

export default StateWishlist;