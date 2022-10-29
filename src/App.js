import React from 'react';
import './App.css';
import Navbar from './components/common/header/navbar';
import Banniere from './home/background';
import locations from './data.json';
import Location from './home/location';
import Footer from './components/common/footer/footer'

function App() {
    console.log(locations)

  return (
    <div className="Page-container">
      <div className="content-wrap">
        <div className="App">
            <Navbar />
            <Banniere />
            <div className="locations">
              <Location />
            </div>
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;