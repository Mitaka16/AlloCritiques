import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import { DATAS } from '../../constantes/MOCKDATA';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logos/Logo_AlloCritiques.png'
import icon from "./icon_menu.svg"

export default function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [logged, setLogged] = useState(true);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth)
        }
    }, []);

    const alertClick = () => {
        alert('Veuillez vous connecter pour avoir accés aux fonctionnalités du site !')
    }

    return (
        <div className="navbar">
            <div >
                <Link className='Logo_Header' to='/'><img src={Logo} alt='Logo AlloCritiques' />
                    <h1>{DATAS.ALLO}<span className='critiques_titre'>{DATAS.CRITIQUES}</span></h1>
                </Link>
            </div>
            <nav>
                {(toggleMenu || width > 900) && (
                    <ul className="list-nav">
                        {logged ? <Link to="/"><li className="items-nav">{DATAS.ACCUEIL}</li></Link> : <li className="items-nav" onClick={alertClick}>{DATAS.ACCUEIL} False</li>}
                        {logged ? <Link to="/Wishlist"><li className="items-nav">{DATAS.WISHLIST}</li></Link> : null}
                        {logged ? <Link to="/Watched"><li className="items-nav">{DATAS.WATCHED}</li></Link> : null}
                        {logged ? <Link to="/MyAccount"><li className="items-nav">{DATAS.ACCOUNT}</li></Link> : <li className="items-nav" onClick={alertClick}>{DATAS.ACCOUNT} False</li>}
                    </ul>
                )}
                <button onClick={toggleNav} className="btn-nav"><img src={icon} alt="" /></button>
            </nav>

        </div>





    )
}
