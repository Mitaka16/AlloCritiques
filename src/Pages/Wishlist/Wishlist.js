import React, { Component } from 'react'
import './wishlist.css'
import Inception from '../../Images/Films/Inception.jpg'
import Independence_Day from '../../Images/Films/Independence_Day.jpg'
import Indiana_Jones from '../../Images/Films/Indiana_Jones.jpg'
import Interstellar from '../../Images/Films/Interstellar.jpg'
import Intouchables  from '../../Images/Films/Intouchables.jpg'
import Invictus  from '../../Images/Films/Invictus.jpg'
import Les_Indestructibles  from '../../Images/Films/Les_Indestructibles.jpg'
import Mortal_Kombat from '../../Images/Films/Mortal_Kombat.jpg'
import {DATAS} from '../../constantes/MOCKDATA'

class Wishlist extends Component {
    render() {
        return (
            <div className='Wishlist'>
                <h1>{DATAS.WISHLIST}</h1>
                <section>
                    <img src={Inception} alt='Poster Inception' />
                    <img src={Independence_Day} alt='Poster Independence_Day' />
                    <img src={Indiana_Jones} alt='Poster Indiana _Jones' />
                    <img src={Interstellar} alt='Poster Interstellar' />
                    <img src={Intouchables} alt='Poster Intouchables' />
                    <img src={Invictus} alt='Poster Invictus' />
                    <img src={Les_Indestructibles} alt='Poster Les_Indestructibles' />
                    <img src={Mortal_Kombat} alt='Poster Mortal_Kombat' />
                </section>
            </div>
        )
    }
}

export default Wishlist


