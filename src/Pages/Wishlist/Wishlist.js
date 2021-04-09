import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import MovieCard from '../../components/MovieCard/MovieCard';
import "./wishlist.css"

const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);
    return (
        <div className='movie-page'>
            <div className="container">
                <div className="header">
                    <h1 className="heading">MA LISTE</h1>
                    <span className="count-pill">
                        {watchlist.length}{watchlist.length === 1 ? ' Film' : " Films"}
                    </span>
                </div>
            </div>
            {watchlist.length > 0 ? (
                <div className="movie-grid">
                    {watchlist.map(movie => (<MovieCard movie={movie} type="watchlist" />))}
                </div>

            ) : (
                <h2 className="no-movies">La liste est vide, ajoutez des films!</h2>
            )}

        </div>
    );
};

export default Watchlist;