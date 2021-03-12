import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header_Footer/Header";
import Footer from "./Header_Footer/Footer";
import Wishlist from "./components/Wishlist";
import SignInSignUp from "./components/SignIn-SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/Wishlist' component={Wishlist} />
          <Route path='/Register' component={SignInSignUp} />
          <Route path='/SignIn' component={SignInSignUp} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
