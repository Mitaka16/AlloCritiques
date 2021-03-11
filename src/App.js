import './App.css';
import Header from './Header_Footer/Header'
import Footer from './Header_Footer/Footer'
import Infos_Movies from './components/Infos_Movies'
import AddCritic from './components/AddCritic';

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