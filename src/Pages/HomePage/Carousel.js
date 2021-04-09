import React, { Fragment } from 'react';
import './carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

/*import funnel from './Barre/funnel.png'*/

import Skyfall from './DossierAffiches/Skyfall.jpg'
import Intouchables from './DossierAffiches/Intouchables.jpg'
import Rebelle from './DossierAffiches/Rebelle.jpg'
import Gladiator from './DossierAffiches/Gladiator.jpg'
import Gardien_de_la_Galaxie from './DossierAffiches/Gardien_de_la_Galaxie.jpg'
import Le_Parrain from './DossierAffiches/Le_Parrain.jpg'
import LEmpereur_de_Paris from './DossierAffiches/LEmpereur_de_Paris.jpg'
import Le_dernier_Diamant from './DossierAffiches/Le_dernier_Diamant.jpg'
import Avengers_IW from './DossierAffiches/Avengers_IW.jpg'
import Harry_Potter from './DossierAffiches/Harry_Potter.jpg'

function Home() {
  return (
    <Fragment>
      <Carousel>
        <img className='carousel-img' alt='Poster Skyfall' src={Skyfall} />
        <img className='carousel-img' alt='Poster Intouchables' src={Intouchables} />
        <img className='carousel-img' alt='Poster Reblle' src={Rebelle} />
        <img className='carousel-img' alt='Poster Gladiator' src={Gladiator} />
        <img className='carousel-img' alt='Poster Gardien de la Galaxie' src={Gardien_de_la_Galaxie} />
        <img className='carousel-img' alt='Poster Le Parrain' src={Le_Parrain} />
        <img className='carousel-img' alt='Poster L Empereur de Paris' src={LEmpereur_de_Paris} />
        <img className='carousel-img' alt='Poster Le dernier Diamant' src={Le_dernier_Diamant} />
        <img className='carousel-img' alt='Poster Avengers IW' src={Avengers_IW} />
        <img className='carousel-img' alt='Poster Harry Potter' src={Harry_Potter} />
      </Carousel>
    </Fragment>
  );
}
export default Home;