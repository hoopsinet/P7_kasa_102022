import React from 'react';
import './App.css';
import Navbar from './components/header/navbar';
import logo_kasa from '../src/img/logo_kasa.png';
import logo_kasa_footer from '../src/img/logo_kasa_footer.png';
import Banniere from './home/background';
import locations from './data.json';
import Location from './home/location';
// import Footer from '.src/components/common/footer';

function App() {
     return(
    <div className="Page-container">
      <div className="content-wrap">
        <div className="App">
          <header className="header">
            <img src={logo_kasa} alt="" /> 
            <Navbar />
          </header>
          <main>
            <Banniere />
            <Location details={locations} />
          </main>
        </div>
      </div>
        <img src={logo_kasa_footer} alt=""/>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
