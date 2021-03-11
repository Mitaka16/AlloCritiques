import './App.css';
import Header from './Header_Footer/Header'
import Footer from './Header_Footer/Footer'
import Infos_Movies from './components/InfosMoviesFolder/Infos_Movies'
import AddCritic from './components/AddCriticFolder/AddCritic';
import PositiveReviews from './components/positiveReviewsFolder/PositiveReviews';
import NegativeReviews from './components/negativeReviewsFolder/NegativeReviews';

function App() {
  return (
    <div className="App">
      <Header />
      <Infos_Movies />
      <AddCritic />

      <Footer />
    </div>
  );
}

export default App;