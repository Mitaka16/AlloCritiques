import "./footer.css"
import React, { Component } from 'react'
import Modal from './Contact'
import Instagram from '../../Images/Logos/Instagram.svg'
import Facebook from '../../Images/Logos/Facebook.svg'
import Twitter from '../../Images/Logos/Twitter.svg'
import { DATAS } from "../../constantes/MOCKDATA"

class Footer extends Component {
    constructor(props) {    
        super(props)

        this.state = {
            showModal: false
    }
}

    handleShow = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    

    render() {

        const modal = this.state.showModal && <Modal close={this.handleShow} />

        return (
            <footer className='Footer'>
                <div className='Copyright'><p>{DATAS.COPYRIGHT}</p></div>

                <button className='Contact' onClick={this.handleShow}>{DATAS.CONTACT}</button>
                {modal}

                <div className='Logo_Reseau'>
                    <a href='https://www.instagram.com/ducati_m821/?hl=fr'><img src={Instagram} alt='Logo Instagram' /></a> 
                    <a href='https://www.facebook.com/AFPA.JEUNES'><img src={Facebook} alt='Logo Facebook' /></a>
                    <a href='https://twitter.com/afpa_formation'><img src={Twitter} alt='Logo Twitter' /></a>
                </div>

            </footer>
        )
    }
}

export default Footer
