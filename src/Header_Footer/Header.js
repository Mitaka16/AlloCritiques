import React, { Component } from 'react'
import Logo from '../Images/Logos/Logo_AlloCritiques.png'
import { Link, Router } from 'react-router-dom'
import "../Header_Footer/header.css"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Logged: false
        }
    }
    render() {
        const { Logged } = this.state
        return (
            <header>
                <div className='Logo_Header'>
                    <img src={Logo} alt='Logo AlloCritiques' />
                    <h1>Allo<span style={{ color: '#EB5757' }}>Critiques</span></h1>
                </div>
                <div className='Bouton_Header'>
                    <Router>
                        <Link className='nav-bouton' to='/'>Accueil</Link>
                        <Link className='nav-bouton' to='/Wishlist'>Wishlist</Link>

                        {Logged ?
                            (<Link className='nav-bouton-account' to='/SignUp'>Mon Compte</Link>) :
                            (<Link className='nav-bouton' to='/Sign_In'>Se connecter</Link>)}

                        {Logged ? (null) :
                            (<Link className='nav-bouton' to='/Register'>Inscription</Link>)}
                    </Router>
                </div>
            </header>
        )
    }
}
export default Header