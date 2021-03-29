import React, { Component } from "react";
import "./Reviews.css";
import iconOpenSection from "../../../Images/Icons/icon_openSectionComments.svg";
import icon_ProfileCommented_Man from "../../../Images/Icons/icon_ProfileCommented_Man.svg";
import StarRating from "../../../components/StarRating_Folder/StarRating";
import ThumbsRating from "../../../components/ThumbsRating_Folder/ThumbsRating"
import { DATAS } from "../../../constantes/MOCKDATA";
import { LABELS } from "../../../constantes/LABELS";

class PositiveReviews extends Component {
  render() {
    return (
      <div className="positiveReviewsBox">
        <div className="header_Commentsection">
          <img src={iconOpenSection} alt="icon open comments section" />
          <h3>{DATAS.GOOD_CRITICS}</h3>
        </div>

        <div className="profil_Commentsection">
          <div className="profile_details">
            <img src={icon_ProfileCommented_Man} alt="user profile avatar" />
            <span>
              <p>{LABELS.NAME}</p>
              <StarRating />
            </span>
          </div>
          <p className="CommentSection_Comment">
            {DATAS.CRITICS}
          </p>
          <ThumbsRating />
        </div>

      </div>
    );
  }
}

export default PositiveReviews;
