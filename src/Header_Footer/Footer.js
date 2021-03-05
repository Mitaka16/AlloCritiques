import "../Header_Footer/footer.css"
import React, { Component } from 'react'
import Instagram from '../Images/Logos/Instagram.svg'
import Facebook from '../Images/Logos/Facebook.svg'
import Twitter from '../Images/Logos/Twitter.svg'

class Footer extends Component {
    render() {
        return (
            <footer className='Footer'>
                <div className='Copyright'><p>© Copyright</p></div>

                <button className='Contact'>Contact</button>

                <div className='Logo_Reseau'>
                    <img src={Instagram} alt='Logo Instagram' />
                    <img src={Facebook} alt='Logo Facebook' />
                    <img src={Twitter} alt='Logo Twitter' />
                </div>

            </footer>
        )
    }
}

export default Footer
