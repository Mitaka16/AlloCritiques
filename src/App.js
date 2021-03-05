import './App.css';
import Footer from './Header_Footer/Footer';
import Header from './Header_Footer/Header';
import SignUp from './SignUpPage/SignUp'



function App() {
  return (
    <div className="App">
      <Header />
      <div className="AppContainer">
        <SignUp />
      </div>
      <Footer />
    </div>
  );
}

export default App;
