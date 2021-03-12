import "./App.css";
import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header_Footer/Header";
import Footer from "./Header_Footer/Footer";
import SignInSignUp from './components/SignIn-SignUp'

class App extends Component {
  

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
          <Route path='/Register' component={SignInSignUp} />
          <Route path='/SignIn' component={SignInSignUp} />
          </Switch>
        </BrowserRouter>
        

        <Footer />
      </Fragment>
    );
  }
}

export default App;
