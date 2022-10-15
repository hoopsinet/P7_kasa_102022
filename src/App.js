import logo from './logo.svg';
import './App.css';
import Navbar from './header/navbar';
import logo_kasa from '../src/img/logo_kasa.png';

function App() {
  return (
    <div className="App">
      <Navbar />
     <img src={logo_kasa} alt="" /> 
    </div>
  );
}

export default App;
