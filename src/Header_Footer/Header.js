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
                <nav className='Bouton_Header'>
                    <ul>
                        <li>Accueil</li>
                        <li>Wishlist</li>
                        <li>Se connecter</li>
                        <li>Inscription</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;