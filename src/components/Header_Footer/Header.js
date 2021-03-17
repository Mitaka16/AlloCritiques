import React, { Component } from "react";
import Logo from "../../Images/Logos/Logo_AlloCritiques.png";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Logged: false,
    };
  }

  render() {
    const { Logged } = this.state;
    return (
      <header>
        <div>
          <Link className="Logo_Header" to="/">
            <img src={Logo} alt="Logo AlloCritiques" />
            <h1>Allo<span style={{ color: "#EB5757" }}>Critiques</span></h1>
          </Link>
        </div>
        <div className="Bouton_Header">
          <Link className="nav-bouton" to="/">Accueil</Link>
          <Link className="nav-bouton" to="/Wishlist">Wishlist</Link>
          {Logged ? (<Link className="nav-bouton-account" to="/MyAccount">Mon Compte</Link>) 
          : (<Link className="nav-bouton-" to="/SignIn">Se connecter / S'inscrire</Link>)}
        </div>
      </header>
    );
  }
}

export default Header;
