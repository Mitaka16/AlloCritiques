import React, { Component } from "react";
import "./Infos_Movies.css";
import Intouchables from "../Images/Films/Intouchables.jpg";
import Favorite from "../Images/Logos/Favorite.svg";

class Infos_Movies extends Component {
  render() {
    return (
      <div>
        <div className="Infos">
          <img src={Intouchables} alt="Poster Intouchables" />
          <div>
            <h2 className="Infos_Film">
              Titre: <span>Intouchables</span>
            </h2>
            <p className="Infos_Film">
              Date de sortie: <span>2 Novembre 2011</span> / Durée:{" "}
              <span>1h52</span> / Genre: <span>Drame</span> <br />
              Réalisateur: <span>Olivier Nakache</span> / Acteurs:{" "}
              <span>François Cluzet, Omar Sy, Anne Le Ny</span>
            </p>
            <p className="Synopsis">
              Synopsis:{" "}
              <span>
                A la suite d’un accident de parapente, Philippe, riche
                aristocrate, engage comme aide à domicile Driss, un jeune de
                banlieue tout juste sorti de prison. Bref la personne la moins
                adaptée pour le job. Ensemble ils vont faire cohabiter Vivaldi
                et Earth Wind and Fire, le verbe et la vanne, les costumes et
                les bas de survêtement... Deux univers vont se télescoper,
                s’apprivoiser, pour donner naissance à une amitié aussi dingue,
                drôle et forte qu’inattendue, une relation unique qui fera des
                étincelles et qui les rendra... Intouchables.
              </span>
            </p>
          </div>
          <div className="bouton_favoris">
            <a href="https://www.allocine.fr/film/fichefilm_gen_cfilm=182745.html">
              <img src={Favorite} alt="icon favoris" />
              <button>Ajouter a ma wishlist</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Infos_Movies;

/*
    Note */
