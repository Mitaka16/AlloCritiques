import React from 'react';
import './carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel';
/*import funnel from './Barre/funnel.png'*/

import img1 from './DossierAffiches/img1.jpg'
import img2 from './DossierAffiches/img2.jpg'
import img3 from './DossierAffiches/img3.jpg'
import img4 from './DossierAffiches/img4.jpg'
import img5 from './DossierAffiches/img5.jpg'
import img6 from './DossierAffiches/img6.jpg'
import img7 from './DossierAffiches/img7.jpg'
import img8 from './DossierAffiches/img8.jpg'
import img9 from './DossierAffiches/img9.jpg'
import img10 from './DossierAffiches/img10.jpg'




function Nbr () {
  return (
    <div className="App">
      <Carousel>
        <div> <img src={img1} /></div>

        <div> <img src={img2} /></div>

        <div> <img src={img3}/></div>

        <div><img src={img4}/></div>

        <div><img src={img5}/></div>

        <div> <img src={img6}/></div>

        <div> <img src={img7}/></div>

        <div> <img src={img8}/></div>

        <div> <img src={img9}/></div>

        <div> <img src={img10}/></div>
      </Carousel>
    </div>
  );
}
export default Nbr;