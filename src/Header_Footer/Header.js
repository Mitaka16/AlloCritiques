import React, { Component } from 'react'
import Logo from '../Images/Logos/Logo_AlloCritiques.png'
import "../Header_Footer/header.css"
import Profile from '../Images/Logos/Profile.svg'

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Logged: false
        }
    }
    
    render() {
        const {Logged} = this.state
         return (
            <header>
                <div className='Logo_Header'>
                    <img src={Logo} alt='Logo AlloCritiques' />
                    <h1>Allo<span style={{ color: '#EB5757' }}>Critiques</span></h1>
                </div>
                <div className='Bouton_Header'>
                    <button>Accueil</button>
                    <button>Wishlist</button>
                    {Logged ? <img src={Profile} alt='Profil' /> : <button>Se connecter</button>}
                    {Logged ? null : <button>Inscription</button> }             
                </div>
                
            </header>
        )
    }
}

export default Header