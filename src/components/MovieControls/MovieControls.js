import React, { Fragment, useContext } from 'react';
import { GlobalContext } from "../../context/GlobalState";

import "./movieControls.css"

const MovieControls = ({ movie, type }) => {
    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext);
    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <Fragment>
                    <div className="tooltip_bottom">
                        <button
                            className="ctrl-btn"
                            onClick={() => addMovieToWatched(movie)}
                        >
                            <div className="tooptip">
                                <i className="fa-fw fa fa-eye" />
                                <span className="tooltiptext">Je l'ai vu !</span>
                            </div>
                        </button>
                    </div>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        <div className="tooptip">
                            <i className="fa-fw fa fa-times" />
                            <span className="tooltiptext">Supprimer</span>
                        </div>
                    </button>
                </Fragment>
            )}

            {type === 'watched' && (
                <Fragment>
                    <button
                        className="ctrl-btn"
                        onClick={() => moveToWatchlist(movie)}
                    >
                        <div className="tooptip">
                            <i class="fa-fw fa fas fa-plus-circle"></i>
                            <span className="tooltiptext">Ajouter à liste</span>
                        </div>
                    </button>

                    <button className="ctrl-btn"
                        onClick={() => removeFromWatched(movie.id)}
                    >
                        <div className="tooptip">
                            <i className="fa-fw fa fa-times" />
                            <span className="tooltiptext">Supprimer</span>
                        </div>
                    </button>
                </Fragment>
            )}
        </div>

    );
}

export default MovieControls;