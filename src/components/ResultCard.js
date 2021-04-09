import React, { useContext } from 'react';
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../context/GlobalState";
import "./resultCard.css"

export const ResultCard = ({ movie }) => {
    const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } = useContext(GlobalContext);
    let storedMovie = watchlist.find(object => object.id === movie.id);
    let storedMovieWatched = watched.find((object) => object.id === movie.id);
    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;

    let history = useHistory();
    const redirect = () => {
        history.push('/Critics')
    }

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <button onClick={redirect}>
                        <img src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                    </button>
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                </div>
                <h4 className="release-date">
                    {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                </h4>

                <div className="controls">
                    <button
                        className="btn"
                        onClick={() => addMovieToWatchlist(movie)}
                        disabled={watchlistDisabled}
                    >Ajouter à la liste</button>
                    <button
                        className="btn"
                        onClick={() => addMovieToWatched(movie)}
                        disabled={watchedDisabled}
                    >Déjà vu</button>
                </div>

            </div>
        </div>
    );
};
