import React, { Component } from "react";
import "./Infos_Movies.css";
import Intouchables from "../../Images/Films/Intouchables.jpg";
import Favorite_On from "../../Images/Logos/Favorite_Coeur_On.svg";
import Favorite_Off from "../../Images/Logos/Favorite_Coeur_Off.svg";
import StarRating from "../../components/StarRating_Folder/StarRating";

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
    return (
      <div className="Infos">
        <img src={Intouchables} alt="Poster Intouchables" />
        <div className="Info_Container">
          <h2 className="Infos_Titre">
            <span>Intouchables</span>
          </h2>
          <div className="Infos_Film">
            <div>
              <span>Date de sortie: </span>2 Novembre 2011
              <br />
              <span>Durée: </span>1h52
              <br />
              <span>Genre: </span>Drame
              <br />
              <span>Réalisateur: </span>Olivier Nakache
              <br />
              <span>Acteurs: </span> François Cluzet, Omar Sy, Anne Le Ny
            </div>
            <div className="bouton_favoris">{bouttonWhishlist}</div>
          </div>

          <p className="Synopsis">
            <span>Synopsis: </span>A la suite d’un accident de parapente,
            Philippe, riche aristocrate, engage comme aide à domicile Driss, un
            jeune de banlieue tout juste sorti de prison. Bref la personne la
            moins adaptée pour le job. Ensemble ils vont faire cohabiter Vivaldi
            et Earth Wind and Fire, le verbe et la vanne, les costumes et les
            bas de survêtement... Deux univers vont se télescoper,
            s’apprivoiser, pour donner naissance à une amitié aussi dingue,
            drôle et forte qu’inattendue, une relation unique qui fera des
            étincelles et qui les rendra... Intouchables.
          </p>
        </div>
      </div>
    );
  }
}

export default Infos_Movies;

/*
    Note */
