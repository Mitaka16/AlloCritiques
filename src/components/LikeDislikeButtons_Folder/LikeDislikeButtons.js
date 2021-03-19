import React, { Component } from "react";
import "../LikeDislikeButtons_Folder/LikeDisLikeButtons.css";
import icon_thumbUp from "../../Images/Icons/icon_thumbUp.svg";
import icon_thumbUpBlue from "../../Images/Icons/icon_thumbUpBlue.svg";
import icon_thumbDown from "../../Images/Icons/icon_thumbDown.svg";
import icon_thumbDownBlue from "../../Images/Icons/icon_thumbDownBlue.svg";


class LikeDislikeButtons extends Component {
    state = {
        like: 23,
        dislike: 3,
        likeActive: false,
        dislikeActive: false
    };

    setDislike() {
        this.setState({
            dislikeActive: !this.state.dislikeActive,
            dislike: this.state.dislikeActive
                ? this.state.dislike - 1
                : this.state.dislike + 1
        });
    }
    setLike() {
        this.setState({
            likeActive: !this.state.likeActive,
            like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
        });
    }

    handleLike() {
        if (this.state.dislikeActive) {
            this.setLike();
            this.setDislike();
        }
        this.setLike();
    }

    handleDislike() {
        if (this.state.likeActive) {
            this.setDislike();
            this.setLike();
        }
        this.setDislike();
    }

    render() {
        return (
            <div className="container">
                <p>J'aime {this.state.like}</p>
                {
                    this.state.likeActive ?
                        (
                            <img
                                src={icon_thumbUpBlue}
                                onClick={() => this.handleLike()}
                            />
                        ) :
                        (
                            <img
                                src={icon_thumbUp}
                                onClick={() => this.handleLike()}
                            />
                        )
                }
                {
                    this.state.dislikeActive ?
                        (
                            <img
                                src={icon_thumbDownBlue}
                                onClick={() => this.handleDislike()}
                            />
                        ) :
                        (
                            <img
                                src={icon_thumbDown}
                                onClick={() => this.handleDislike()}
                            />
                        )
                }
                <p>Je n'aime pas : {this.state.dislike}</p>
            </div>
        );
    }
}

export default LikeDislikeButtons;