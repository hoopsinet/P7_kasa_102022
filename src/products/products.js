import React, { useEffect }  from 'react';
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';
import './products.css';
import'../common.css';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from '../components/slider/slider';
import Rating from '../components/rating/rating';
import Collapsible from '../components/collaps/collaps';

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
                  <div className='main_container'>
                    <Header />
                
                    <div className="diapo" >
                      <Slider slides={location.pictures}/>
                    </div>

                    <div className='locationTeaser'>
                      <div className='location'>
                        <div className='locationInfo'>
                          <h1> {location.title}</h1>
                          <p>{location.location}</p>
                        </div>

                        <div className='locationTags'>
                        {
                            location.tags.map(tag => <p className='locationTag'>{tag}</p>)
                          }
                        </div>
                      </div>
                    

                      <div className='locationMoreInfo'> 
                        <div className='hostInfo'>
                            <p className='hostName'>{location.host.name}</p>
                            <img src={ location.host.picture } alt="hostPicture" className="hostPicture" />
                        </div> 
                        <div className='rating'>
                          <Rating rate={location.rating} />
                        </div>
                      </div>
                    </div>

                    <div className="Box">
                      <Collapsible title={"Description"} content={location.description} />
                      <Collapsible title={"Équipements"} content={
                        <ul className='equipmentList'>
                        {
                          location.equipments.map(equipment => <li className='item'>{equipment}</li>)
                        }
                        </ul>} />
                    </div>
                  </div>  
                  <Footer />
                </div>
            ))};
        </div>
      </div>
    ) 
  }

export default Product;