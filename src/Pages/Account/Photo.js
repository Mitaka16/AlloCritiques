import React, {Component} from 'react';
import './Style.css';

class Photo extends Component {
    state={
      profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
    }
 
      imageHandler= (e) =>{
        const reader = new FileReader();
        reader.onload =() =>{
          if(reader.readyState === 2){
            this.setState({profileImg:reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
 
    }
   render() {
 
     const {profileImg} =this.state
 
     return (
       <div className="page">
 
         <div className="container">
           <h1 className="heading">Ajoutez votre image</h1>
           <div className="img-holder">
           <img src={profileImg} alt="" id="img" className="img"/>
 
           </div>
           <input type="file" name="imge-upload" id="input" accepte="image/*" onChange={this.imageHandler}/>
           <div className="label">
             <label htmlFor="input" className="image-upload">
               <i className="material-icons">add_photo_alternate</i>
               Choose your Photo
 
             </label>
           </div>
           
         </div>
 
         
       </div>
     )
   }
 }
 
 export default Photo;