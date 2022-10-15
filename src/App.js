import logo from './logo.svg';
import './App.css';
import Navbar from './header/navbar';
import logo_kasa from '../src/img/logo_kasa.png';
import banniere from './body/background';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo_kasa} alt="" /> 
        <Navbar />
        <banniere />
      </div>
     
    </div>
  );
}

export default App;
