import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header_Footer/Header";
import Footer from "./Header_Footer/Footer";
import Wishlist from "./Pages/Wishlist";
import SignInSignUp from "./Pages/SignIn-SignUp";
import Nbr from "./Pages/HomePage/Carousel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Nbr} />
          <Route path='/Wishlist' component={Wishlist} />
          <Route path='/SignIn' component={SignInSignUp} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
export default App;
