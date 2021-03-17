import React, { Component } from "react";
import "./Reviews.css";
import iconOpenSection from "../../Images/Icons/icon_openSectionComments.svg";
import icon_ProfileCommented_Man from "../../Images/Icons/icon_ProfileCommented_Man.svg";
import StarRating from "../../components/StarRating_Folder/StarRating";
import ThumbsRating from "../../components/ThumbsRating_Folder/ThumbsRating"

class PositiveReviews extends Component {
  render() {
    return (
      <div className="positiveReviewsBox">
        <div className="header_Commentsection">
          <img src={iconOpenSection} alt="icon open comments section" />
          <h3>Commentaires Positifs</h3>
        </div>

        <div className="profil_Commentsection">
          <div className="profile_details">
            <img src={icon_ProfileCommented_Man} alt="user profile avatar" />
            <span>
              <p>Alan</p>
              <StarRating />
            </span>
          </div>
          <p className="CommentSection_Comment">
            Lorem ipsum tas nec. Donec tempor libero eu metus molestie sagittis.
            Sed dignissim gravida orci. Curabitur luctus nulla metus, sed
            blandit sem egestas nec. Donec tempor libero eu metus molestie
            sagittis.
          </p>
          <ThumbsRating />
        </div>

      </div>
    );
  }
}

export default PositiveReviews;
