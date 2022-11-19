import React from 'react';
import "./error.css";
import { Link } from "react-router-dom";
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';

export default function error() {
  return (
    <div className="error">
      <Header />
    <h1 className='errorTitle'>
      404
    </h1>
    <p className="oups">
       Oups! La page que vous demandez n'existe pas.
    </p>
    <Link to={`/`} className="error_return">
       Retour sur la page d'accueil
    </Link>
    <Footer />
 </div>
);
}