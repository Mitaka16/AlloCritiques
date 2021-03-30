import "./criticsPage.css";
import React from 'react';
import Infos_Movies from './InfosMoviesFolder/Infos_Movies';
import AddCritic from './AddCriticFolder/AddCritic';
import PositiveReviews from './ReviewsFolder/PositiveReviews';
import NegativeReviews from './ReviewsFolder/NegativeReviews';


function CriticsPage() {
    return (
        <div className="criticsPage">
            <Infos_Movies />
            <AddCritic />
            <div className="boxReviews">
                <PositiveReviews />
                <NegativeReviews />
            </div>
        </div>
    )
}

export default CriticsPage

