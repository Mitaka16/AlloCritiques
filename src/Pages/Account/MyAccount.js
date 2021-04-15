import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './Style.css';
import Photo from './Photo';
import Comments from './Comments';
import ListsOfFilms from './ListsOfFilms';
import Password from './Password';
import Profile from './Profile';

import RemoveAccount from './RemoveAccount';



class MyAccount extends Component {

    state ={
        user:{
            name:'Albert '
        }
    }
    render(){
        return(
            
            <div>

               <Profile info={this.state.user}/>

                    <div className="right">
                        <Photo/>
                    </div>
                
                        <div className="lefte">

                            <Router> 
                                <Password/>
                                <Comments/>
                                <ListsOfFilms/>
                                <RemoveAccount/>
                            </Router>
                        </div>

            </div>
        )
    }
}
export default MyAccount;