import './App.css';
import Header from './Header_Footer/Header';
import Footer from './Header_Footer/Footer';
import CriticsPage from "./CriticsPageFolder/criticsPage";
import { Route, Switch, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={CriticsPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;