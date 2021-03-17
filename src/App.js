import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header_Footer/Header";
import Footer from "./components/Header_Footer/Footer";
import Wishlist from "./Pages/Wishlist/Wishlist";
import SignInSignUp from "./Pages/SignIn-SignUp/SignIn-SignUp";
import Nbr from "./Pages/HomePage/Carousel";
import Film from "./Pages/TestFilm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Nbr} />
          <Route path='/Wishlist' component={Wishlist} />
          <Route path='/SignIn' component={SignInSignUp} />
          <Route path='/Test' component={Film} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
export default App;
