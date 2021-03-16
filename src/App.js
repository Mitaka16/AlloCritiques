import './App.css';
import Header from './Header_Footer/Header'
import Footer from './Header_Footer/Footer'
import Infos_Movies from './components/InfosMoviesFolder/Infos_Movies'
import AddCritic from './components/AddCriticFolder/AddCritic';
import PositiveReviews from './components/positiveReviewsFolder/PositiveReviews';

function App() {
  return (
    <div className="App">

      <Infos_Movies />
      <AddCritic />

      <PositiveReviews />

      <Footer />
    </div>
  );
}

export default App;