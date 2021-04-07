import React, {Component} from 'react';
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import Skyfall from './DossierAffiches/Skyfall.jpg'
import Intouchables from './DossierAffiches/Intouchables.jpg'
import Rebelle from './DossierAffiches/Rebelle.jpg'
import Gladiator from './DossierAffiches/Gladiator.jpg'
import HarryP from './DossierAffiches/Harry_Potter.jpg'
import Avengers_IW from './DossierAffiches/Avengers_IW.jpg'
import Le_Parrain from './DossierAffiches/Le_Parrain.jpg'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      slides: [
        <img key={1} src={Gladiator} alt='Affiches film'/>,
        <img key={2} src={Rebelle} alt='Affiches film'/>,
        <img key={3} src={Intouchables} alt='Affiches film'/>,
        <img key={4} src={Skyfall} alt='Affiches film'/>,
        <img key={4} src={HarryP} alt='Affiches film'/>,
        <img key={4} src={Avengers_IW} alt='Affiches film'/>,
        <img key={4} src={Le_Parrain} alt='Affiches film'/>,
      ],
  }
}

  render() {
    return (
      <div className='TestSlides'>
          <Carousel
          slides={this.state.slides}
          slidesPerPage={6}
          slideToScroll
          infinite
          arrows
          />
      </div>
    );
  }
}
export default Home;