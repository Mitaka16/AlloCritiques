import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header_Footer/Header";
import Footer from "./Header_Footer/Footer";
<<<<<<< HEAD
import Nbr from "./HomePage/Carousel";
import SearchBar from "./HomePage/Barre/Filter";
=======
// import Wishlist from "./Pages/Wishlist";
>>>>>>> origin

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {/* Contenu de la page a mettre ici 
          <Route path='/***' component={***} */}
        </Switch>
      </BrowserRouter>
      <Nbr />
      <SearchBar />

      <Footer />
    </div>
  );
}
export default App;
