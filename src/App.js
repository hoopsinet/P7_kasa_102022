import React from 'react';
import './App.css';
import Navbar from './header/navbar';
import logo_kasa from '../src/img/logo_kasa.png';
import logo_kasa_footer from '../src/img/logo_kasa_footer.png';
import Banniere from './body/background';
import locations from './data.json';
import Location from './body/location';
import Footer from './footer/footer'

function App() {
    console.log(locations)
    console.log(locations.map ((location) => {
      return location.id
    }))
  return (
    <div className="App">
      <header className="header">
        <img src={logo_kasa} alt="" /> 
        <Navbar />
      </header>
      <main>
        <Banniere />
        <Location />
      </main>
      <footer> 
        <img src={logo_kasa_footer} alt=""/>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
