import React, { Component } from "react";
import "./Infos_Movies.css";
import Favorite_On from "../../../Images/Logos/Favorite_Coeur_On.svg";
import Favorite_Off from "../../../Images/Logos/Favorite_Coeur_Off.svg";
// import StarRating from "../../../components/StarRating_Folder/StarRating";
import MovieList from "../../../components/MovieList";

class Infos_Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addWhishlist: true,
    };
  }

  handleWhishlist = () => {
    this.setState({
      addWhishlist: !this.state.addWhishlist,
    });
  };

  render() {
    let bouttonWhishlist;
    if (this.state.addWhishlist) {
      bouttonWhishlist = (
        <button>
          <img
            onMouseEnter={this.setHover}
            src={Favorite_Off}
            onClick={this.handleWhishlist}
            alt="icon favoris"
          />
          Ajouter à la Whilshlist ?
        </button>
      );
    } else {
      bouttonWhishlist = (
        <button>
          <img
            onMouseEnter={this.setHover}
            onClick={this.handleWhishlist}
            src={Favorite_On}
            alt="icon favoris"
          />
          Dans la Whishlist
        </button>
      );
    }
    return MovieList.map((el, i) => {
      return (
        <div key={i} className="Infos">
          <img src={el.poster} alt="Poster Film" />
          <div className="Info_Container">
            <h2 className="Infos_Titre">
              <span>{el.title}</span>
            </h2>
            <div className="Infos_Film">
              <div>
                <span className="span_infoMovie">Date de sortie: </span>
                {el.released}
                <br />
                <span className="span_infoMovie">Durée: </span>
                {el.runtime} min
                <br />
                <span className="span_infoMovie">Genre: </span>
                {el.genre}
                <br />
                <span className="span_infoMovie">Réalisateur: </span>
                {el.director}
                <br />
                <span className="span_infoMovie">Acteurs: </span>
                {el.actors}
              </div>
              <div className="bouton_favoris">{bouttonWhishlist}</div>
            </div>

            <p className="Synopsis">
              <span className="span_infoMovie">Synopsis: </span>
              {el.plot}
            </p>
          </div>
        </div>
      );
    });
  }
}

export default Infos_Movies;
