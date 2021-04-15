import React,{Component} from 'react'


class Profile extends Component{
    render(){
        return(
            <div>
                <h4>Bienvenue dans votre espace personnel: {this.props.info.name} </h4>
            </div>
        )
    }
}
export default Profile;