import React, { Component } from 'react'
import StarRating from '../StarRating_Folder/StarRating'
import {DATAS} from '../../constantes/MOCKDATA'
import './addCritic.css'


class AddCritic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newComment: ""
        }
    }
    handleChange = (text) => {
        this.setState({
            newComment: text.currentTarget.value
        })
        console.log(text.currentTarget.value)
    }

    handleSubmit = () => {

        console.log("OK")
    }


    render() {
        return (
            <div className="addCriticBox">
                <div className="addCriticBox__items">
                    <input
                        className="addCriticInput__InputBox_Input"
                        placeholder="Laissez un commentaire !"
                        type="text"
                        onChange={(text) => this.handleChange(text)}
                    />

                    <StarRating />

                    <button
                        className="addCriticInput__btn"
                        onClick={this.handleSubmit}
                    >{DATAS.VALIDER}
                    </button>

                </div>


            </div>
        )
    }
}

export default AddCritic
