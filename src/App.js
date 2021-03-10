import "./App.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from "./Header_Footer/Header";
import Footer from "./Header_Footer/Footer";
import Wishlist from "./Pages/Wishlist";

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
      <Footer />
    </div>
  );
}

export default App;
