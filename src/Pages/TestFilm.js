import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import MovieList from "../components/MovieList";

class Film extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Info_Film: null
        }
    }


    handleClickPage = (e) => {
        this.setState({
            Info_Film: e.target.currentSrc
        })
        console.log(e.target.currentSrc)
    }

    render() {
        return (
            MovieList.map((el, i) => {
                return (
                    <Fragment key={i}>
                        <Link to='/Critics'><img onClick={this.handleClickPage} src={el.poster} alt="" /></Link>
                    </Fragment>
                )
            })
        )
    }
}

export default Film;