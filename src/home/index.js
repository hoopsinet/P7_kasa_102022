import React from 'react';
import Header from '../components/common/header/header';
import Banniere from '../components/banner/background';
import locations from '../data.json';
import Location from '../components/locations/location';
import Footer from '../components/common/footer/footer'
import './index.css'; 

export default function Home() {
    console.log(locations)

  return (
    <div className="Page-container">
      <div className="content-wrap">
        <div className="App">
            <Header />
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