import React, { Component } from 'react'
import LoginBox from "./LogInBox";
import RegisterBox from "./RegisterBox";
import './signIn-SignUp.css'

class SignInSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoginOpen: true,
          isRegisterOpen: false,
        };
      }
    
      showLoginBox = () => {
        this.setState({ isLoginOpen: true, isRegisterOpen: false });
      };

      showRegisterBox = () => {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
      };

    render() {
        return (
            
                <div className="root-container">
          <div className="box-controller">
            <div
              className={
                "controller " +
                (this.state.isLoginOpen ? "selected-controller" : "")
              }
              onClick={this.showLoginBox}
            >
              Connexion
            </div>

            <div
              className={
                "controller " +
                (this.state.isRegisterOpen ? "selected-controller" : "")
              }
              onClick={this.showRegisterBox}
            >
              Inscription
            </div>
          </div>

          <div className="box-container">
            {this.state.isLoginOpen && <LoginBox />}
            {this.state.isRegisterOpen && <RegisterBox />}
          </div>
        </div>
        
        )
    }
}

export default SignInSignUp