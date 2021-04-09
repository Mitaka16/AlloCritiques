import "../Header_Footer/header.css"
import React, { Component } from 'react'
import Logo from '../../Images/Logos/Logo_AlloCritiques.png'
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

    alertClick = () => {
        alert('Veuillez vous connectés pour avoir accés aux fonctionnalités du site !')
    }

    render() {
        const { Logged } = this.state
        return (
            <header>
                <div >
                    <Link className='Logo_Header' to='/'><img src={Logo} alt='Logo AlloCritiques' />
                    <h1>{DATAS.ALLO}<span className='critiques_titre'>{DATAS.CRITIQUES}</span></h1></Link>
                </div>
                    {Logged ? <SearchBar className='SearchBar_bouton' /> : null}
                <div className='Bouton_Header'>
                    {Logged ? <Link className='nav-bouton' to='/'> {DATAS.ACCUEIL} </Link> : <button className='nav-bouton-disabled' onClick={(this.alertClick)} > {DATAS.ACCUEIL} </button>}
                    {Logged ? <Link className='nav-bouton' to='/Wishlist'> {DATAS.WISHLIST} </Link> : <button className='nav-bouton-disabled' onClick={this.alertClick}> {DATAS.WISHLIST} </button>}
                    {Logged ? <Link className='nav-bouton' to='/Watched'> {DATAS.WATCHED} </Link> : <button className='nav-bouton-disabled' onClick={this.alertClick}> {DATAS.WATCHED} </button>}
                    {Logged ? <Link className='nav-bouton-account' to='/MyAccount'>{DATAS.ACCOUNT}</Link> : <Link className='nav-bouton-' to='/SignIn'>{DATAS.LOG_REGISTER}</Link>}
                </div>
            </header>
        )
    }
}

export default Header