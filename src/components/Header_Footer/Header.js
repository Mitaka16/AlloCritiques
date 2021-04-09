import "../Header_Footer/header.css"
import React, { Component } from 'react'
import Logo from '../../Assets/Logos/Logo_AlloCritiques.png'
import { Link } from 'react-router-dom'
import { DATAS } from '../../constantes/MOCKDATA'
import SearchBar from "../SearchBar/SearchBar"

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
                    <h1>{DATAS.ALLOCRITIQUES}</h1>
                </div>
                <div className='Bouton_Header'>
                    <SearchBar />
                    <Link className='nav-bouton' to='/'>
                        {DATAS.ACCUEIL}
                    </Link>
                    <Link className='nav-bouton' to='/Wishlist'>
                        {DATAS.WISHLIST}
                    </Link>
                    <Link className='nav-bouton' to='/Watched'>
                        {DATAS.WATCHED}
                    </Link>
                    {Logged ? <Link className='nav-bouton-account' to='/MyAccount'>{DATAS.ACCOUNT}</Link> : <Link className='nav-bouton-' to='/SignIn'>{DATAS.LOG_REGISTER}</Link>}
                </div>
            </header>
        )
    }
}

export default Header