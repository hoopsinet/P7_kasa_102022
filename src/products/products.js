import React, { useEffect }  from 'react';
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';
import './products.css';
import { useParams, useNavigate } from 'react-router-dom';

import Locations from "../data.json";

const Product = () => {
    const params = useParams();
    const navigation = useNavigate();

    useEffect(() => {
      let location = Locations.find((location) => params.id === location.id);
      if (!location) {
         navigation("/error");
      }
    });
      
    return (

      <div className="">
        <div className="">
            {Locations.filter((location) => location.id === params.id).map(
              (location) => (
                <div className="">
                  <Header />
              
                  <div className="Diapo">
                    <img src={ location.pictures } alt="location pictures" />
                  </div>

                  <div className='location'>
                    <div className='locationInfo'>
                      <h1> {location.title}</h1>
                      <p>{location.location}</p>
                    </div>

                    <div className='hostInfo'>
                      <p>{location.host.name}</p>
                      <img src={ location.host.picture } alt="hostPicture" className="hostPicture" />
                    </div> 
                  </div>
                  

                  <div className='locationMoreInfo'> 
                    <p className='locationTags'>{location.tags}</p>
                    <p>{location.rating}</p>
                  </div>

                  <div className="Box">
                    <details className="description">
                      <summary>Description</summary>
                        {location.description}
                    </details>
                    <details className="equipements">
                      <summary>Equipements</summary>
                        {location.equipments}
                    </details>
                  </div>
          
                  <Footer />
                </div>
            ))};
        </div>
      </div>
    ) 
  }

export default Product;