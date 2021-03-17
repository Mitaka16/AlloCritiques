import "./thumbsRating.css";
import icon_thumbUp from "../../Images/Icons/icon_thumbUp.svg";
import icon_thumbDown from "../../Images/Icons/icon_thumbDown.svg";
import React, { Component } from "react";

class ThumbsRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
      compteurUp: 364,
      compteurDown: 64,
    };
  }

  ThumsUp = () => {
    this.setState({
      isSelected: !this.isSelected,
      compteurUp: this.state.compteurUp + 1,
    });
  };

  ThumsDown = () => {
    this.setState({
      isSelected: !this.isSelected,
      compteurDown: this.state.compteurDown + 1,
    });
  };

  render() {

    return (
      <div className="thumbs_Section">
        <p>{this.state.compteurUp}</p>
        <img
          onClick={this.ThumsUp}
          src={icon_thumbUp}
        />
        <img
          onClick={this.ThumsDown}
          src={icon_thumbDown}
          
        />

        <p>{this.state.compteurDown}</p>
      </div>
    );
  }
}
export default ThumbsRating;
