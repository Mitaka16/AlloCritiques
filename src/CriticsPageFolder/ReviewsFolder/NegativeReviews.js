import React, { Component } from "react";
import "./Reviews.css";
import iconOpenSection from "../../Images/Icons/icon_openSectionComments.svg";
import icon_ProfileCommented_Girl from "../../Images/Icons/icon_ProfileCommented_Girl.svg";
import StarRating from "../../components/StarRating_Folder/StarRating";
import LikeDislikeButtons from "../../components/LikeDislikeButtons_Folder/LikeDislikeButtons"

class NegativeReviews extends Component {
    render() {
        return (
            <div className="positiveReviewsBox">
                <div className="header_Commentsection">
                    <img src={iconOpenSection} alt="icon open comments section" />
                    <h3>Commentaires Négatifs</h3>
                </div>

                <div className="profil_Commentsection">
                    <div className="profile_details">
                        <img src={icon_ProfileCommented_Girl} alt="user profile avatar" />
                        <span>
                            <p>Sarah</p>
                            <StarRating />
                        </span>
                    </div>
                    <p className="CommentSection_Comment">
                        Lorem ipsum tas nec. Donec tempor libero eu metus molestie sagittis.
                        Sed dignissim gravida orci. Curabitur luctus nulla metus, sed
                        blandit sem egestas nec. Donec tempor libero eu metus molestie
                        sagittis.
          </p>
                    <LikeDislikeButtons />
                </div>

            </div>
        );
    }
}

export default NegativeReviews;
