import React, {Component} from 'react';
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import './Carousel.css'

import American_Nightmare_2 from '../../Images/Films/American_Nightmare_2.jpg'
import Ca from '../../Images/Films/Ca.jpg'
import Chronicle from '../../Images/Films/Chronicle.jpg'
import Conjuring from '../../Images/Films/Conjuring.jpg'
import Conjuring_2 from '../../Images/Films/Conjuring_2.jpg'
import Dernier_train_pour_Busan from '../../Images/Films/Dernier_train_pour_Busan.jpg'
import Dont_Breathe from '../../Images/Films/Dont_Breathe.jpg'
import Inception from '../../Images/Films/Inception.jpg'
import Independence_Day from '../../Images/Films/Independence_Day.jpg'
import Indiana_Jones from '../../Images/Films/Indiana_Jones.jpg'
import Inglorious_Basterds from '../../Images/Films/Inglorious_Basterds.jpg'
import Insidious from '../../Images/Films/Insidious.jpg'
import Insidious_2 from '../../Images/Films/Insidious_2.jpg'
import Interstellar from '../../Images/Films/Interstellar.jpg'
import Intouchables from '../../Images/Films/Intouchables.jpg'
import Invictus from '../../Images/Films/Invictus.jpg'
import Le_secret_des_Marrowbone from '../../Images/Films/Le_secret_des_Marrowbone.jpg'
import Les_Indestructibles from '../../Images/Films/Les_Indestructibles.jpg'
import Mortal_Kombat from '../../Images/Films/Mortal_Kombat.jpg'
import Sinister from '../../Images/Films/Sinister.jpg'
import Split from '../../Images/Films/Split.jpg'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      slides: [
        <img key={1} src={American_Nightmare_2} alt='Affiches film'/>,
        <img key={2} src={Ca} alt='Affiches film'/>,
        <img key={3} src={Chronicle} alt='Affiches film'/>,
        <img key={4} src={Conjuring} alt='Affiches film'/>,
        <img key={5} src={Conjuring_2} alt='Affiches film'/>,
        <img key={6} src={Dernier_train_pour_Busan} alt='Affiches film'/>,
        <img key={7} src={Dont_Breathe} alt='Affiches film'/>,
        <img key={8} src={Inception} alt='Affiches film'/>,
        <img key={9} src={Independence_Day} alt='Affiches film'/>,
        <img key={10} src={Indiana_Jones} alt='Affiches film'/>,
        <img key={11} src={Inglorious_Basterds} alt='Affiches film'/>,
        <img key={12} src={Insidious} alt='Affiches film'/>,
        <img key={13} src={Insidious_2} alt='Affiches film'/>,
        <img key={14} src={Interstellar} alt='Affiches film'/>,
        <img key={15} src={Intouchables} alt='Affiches film'/>,
        <img key={16} src={Invictus} alt='Affiches film'/>,
        <img key={17} src={Le_secret_des_Marrowbone} alt='Affiches film'/>,
        <img key={18} src={Les_Indestructibles} alt='Affiches film'/>,
        <img key={19} src={Mortal_Kombat} alt='Affiches film'/>,
        <img key={20} src={Sinister} alt='Affiches film'/>,
        <img key={21} src={Split} alt='Affiches film'/>,
      ],
  }
}

  render() {
    return (
      <div className='TestSlides'>
          <Carousel
          className='carousel-resp'
          slides={this.state.slides}
          slidesPerPage={5}
          slideToScroll
          infinite
          arrows
          />
      </div>
    );
  }
}
export default Home;