import React from 'react';
import "../about/about.css";
import '../../common.css';
import { Link } from "react-router-dom";
import Header from '../../components/common/header/header';
import Footer from "../../components/common/footer/footer";


export default function Error() {
  return (
    <div className="error">
      <div className='main_container'>
        <Header />
        <h1 className='errorTitle'>
        404
        </h1>
        <p className="oups">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <Link to={`/`} className="error_return">
          Retour sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
);
}