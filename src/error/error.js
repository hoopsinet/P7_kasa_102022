import React from 'react';
import "./error.css";
import { Link } from "react-router-dom";
import Header from '../components/common/header/header';

export default function error() {
  return (
    <div className="error">
      <Header />
    <div>
      Error 404
    </div>
    <p className="oups">
       Oups! La page que vous demandez n'existe pas.
    </p>
    <Link to={`/`} className="error_return">
       Retour sur la page d'acceuil
    </Link>
 </div>
);
}