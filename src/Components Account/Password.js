import React, {Component} from 'react';
import './Style.css';
import ModalPassword from './ModalPassword';


class Password extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             showModalPassword: false,
        }
    }

    handlePasssword = () =>{
        this.setState({
            showModalPassword: true,
        })
    }
    
    render(){
            const modal = this.state.showModalPassword && <ModalPassword/>
        return(
        <div>
            <button onClick={this.handlePasssword} >Modifier votre mot de passe</button>
            
                                <br></br><br></br>
                                {modal}
        </div>
        )
        
    }
}
export default Password ;


