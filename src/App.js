import './App.css';
import Header from './Header_Footer/Header'
import Footer from './Header_Footer/Footer'
import AddCritic from './components/AddCritic';

function App() {
  return (
    <div className="App">
      <Header />
      <AddCritic />

      <Footer />
    </div>
  );
}

export default App;