import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header_Footer/Header";
import Footer from "./components/Header_Footer/Footer";
import SignInSignUp from "./Pages/SignIn-SignUp/SignIn-SignUp";
import Home from "./Pages/Accueil/Carousel";
import CriticsPage from './Pages/CriticsPageFolder/criticsPage';
import Wishlist from "./Pages/Wishlist/Wishlist";
import Watched from "./Pages/Watched/Watched";
import { GlobalProvider } from "./context/GlobalState";
import MyAccount from "./Pages/Account/MyAccount";
import ERREUR404 from './Pages/ERREUR 404/Erreur404'


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <NavBar />
          {/* <Header /> */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Wishlist' component={Wishlist} />
            <Route path='/Watched' component={Watched} />
            <Route path='/SignIn' component={SignInSignUp} />
            <Route path='/Critics' component={CriticsPage} />
            <Route path='/Account' component={MyAccount} />
            <Route path='' component={ERREUR404} />
          </Switch>
        </Router>
        <Footer />
      </GlobalProvider>

    </div>
  );
}
export default App;
