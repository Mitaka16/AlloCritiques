import React, { Component, Fragment } from "react";
import "../LikeDislikeButtons_Folder/LikeDisLikeButtons.css";
import icon_thumbUp from "../../Images/Icons/icon_thumbUp.svg";
import icon_thumbUpBlue from "../../Images/Icons/icon_thumbUp.svg";
import icon_thumbDown from "../../Images/Icons/icon_thumbDown.svg";


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

            <Fragment>
                {
                    this.state.likeActive ?
                        (<div className="containerActive">
                            <img
                                src={icon_thumbUpBlue}
                                onClick={() => this.handleLike()}
                            />
                        </div>) :
                        (<div className="container">
                            <img
                                src={icon_thumbUp}
                                onClick={() => this.handleLike()}
                                className="active"
                            />
                        </div>)
                }
                < div className="container" >

                    <p>J'aime {this.state.like}</p>
                    <img
                        src={icon_thumbUp}
                        onClick={() => this.handleLike()}
                        className={"active" + this.state.likeActive}
                    />

                    <img
                        src={icon_thumbDown}
                        className={({ ["active"]: this.state.dislikeActive })}
                        onClick={() => this.handleDislike()}
                    />

                    <p>Je n'aime pas : {this.state.dislike}</p>
                </div >
            </Fragment>

        );
    }
}

export default LikeDislikeButtons;