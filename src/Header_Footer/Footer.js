import "../Header_Footer/footer.css"
import React, { Component } from 'react'
import Modal from './Contact'
import Instagram from '../Images/Logos/Instagram.svg'
import Facebook from '../Images/Logos/Facebook.svg'
import Twitter from '../Images/Logos/Twitter.svg'

class Footer extends Component {
    constructor(props) {    
        super(props)

        this.state = {
            showModal: false
    }
}

    handleShow = () => {
        this.setState({
            showModal: true
        })
    }
    
    handleHide = () => {
        this.setState({
            showModal: false
        })
    }

    render() {

        const modal = this.state.showModal && <Modal close={this.handleHide} />

        return (
<<<<<<< HEAD
            <footer>
                <div className='Copyright'>
                    © Copyright copie pas mon site wesh
                        </div>
=======
            <footer className='Footer'>
                <div className='Copyright'><p>© Copyright</p></div>
>>>>>>> c10ed12df7fc87ffbbee98384232740927c977be

                <button className='Contact' onClick={this.handleShow}>Contact</button>
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
