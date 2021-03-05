import React, { Component } from 'react'
import Logo from '../Images/Logos/Logo_AlloCritiques.png'
import "../Header_Footer/header.css"

class Header extends Component {
    render() {
        return (
            <header>
                <div className='Logo_Header'>
                    <img src={Logo} alt='Logo AlloCritiques' />
                    <h1>Allo<span style={{ color: '#EB5757' }}>Critiques</span></h1>
                </div>
                <div className='Bouton_Header'>
                    <button>Accueil</button>
                    <button>Wishlist</button>
                    <button>Se connecter</button>
                    <button>Inscription</button>
                </div>
            </header>
        )
    }
}

export default Header