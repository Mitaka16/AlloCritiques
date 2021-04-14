import React,{Component} from 'react'


class Profile extends Component{
    render(){
        return(
            <div>
                <h2>Bienvenue dans votre espace personnel: {this.props.info.name} </h2>
            </div>
        )
    }
}
export default Profile;