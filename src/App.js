import './App.css'
import React, { Component, Fragment } from 'react'
import LoginBox from './components/LogInBox'
import RegisterBox from './components/RegisterBox'

import Footer from './Header_Footer/Footer'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false,
      isRegisterOpen: true
    };
  }

  showLoginBox = () => {
    this.setState({ isLoginOpen: true, isRegisterOpen: false })
  }
  showRegisterBox = () => {
    this.setState({ isRegisterOpen: true, isLoginOpen: false })
  }

  render() {

    return (
      <Fragment>
        <div className="root-container">

          <div className="box-controller">

            <div
              className={"controller " + (this.state.isLoginOpen
                ? "selected-controller"
                : "")}
              onClick={this.showLoginBox}>
              Connexion
          </div>

            <div

              className={"controller " + (this.state.isRegisterOpen
                ? "selected-controller"
                : "")}

              onClick={this.showRegisterBox}>
              Inscription
          </div>
          </div>

          <div className="box-container">

            {this.state.isLoginOpen && <LoginBox />}
            {this.state.isRegisterOpen && <RegisterBox />}
          </div>

        </div>
        <Footer />
      </Fragment>
    );
  }
}
export default App;
