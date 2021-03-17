import "./thumbsRating.css";
import icon_thumbUp from "../../Images/Icons/icon_thumbUp.svg";
import icon_thumbDown from "../../Images/Icons/icon_thumbDown.svg";
import React, { Component } from "react";
import BlueThumbDown from "./ThumbStyle"

class ThumbsRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
      compteurUp: 364,
      isDisabled: false
    };
  }

  CounterUp = () => {
    this.setState({

      compteurUp: this.state.compteurUp + 1

    });
  };

  CounterDown = () => {
    this.setState({
      compteurUp: this.state.compteurUp - 1
    });
  };


  // IF isSelected true : AddOne / ChangeColor() / keep it Enabled if Unselected
  // If isSelected again : OneLess /  ChangeColor(black)

  render() {
    const { isSelected, isDisabled } = this.state

    return (
      <div className="thumbs_Section">

        <p>{this.state.compteurUp}</p>
        { isSelected ?
          (<button onClick={this.CounterUp} disabled={!isDisabled}>
            <img src={icon_thumbUp} />
          </button>)
          :
          (<BlueThumbDown onClick={this.CounterDown} />)}




        <p>{this.state.compteurDown}</p>
      </div>
    );
  }
}
export default ThumbsRating;
