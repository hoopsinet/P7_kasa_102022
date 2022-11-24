import React from "react";
import BanniereAbout from "../components/banner/bannerAbout";
import Header from '../components/common/header/header'
import Footer from '../components/common/footer/footer'
import './about.css'
import Collapsible from "../components/collaps/collaps";

export default function About() {
    return (

        <div >  
            <Header />
            <BanniereAbout />
            <div className="aboutContent">
                <Collapsible title={"description"} content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les infomations sont régulièrement vérifiées par nos équipes."} />
                <Collapsible title={"description"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} />
                <Collapsible title={"description"} content={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."} />
                <Collapsible title={"description"} content={`"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",`} />
                <Footer />
            </div>
        </div>
    );
    
}
