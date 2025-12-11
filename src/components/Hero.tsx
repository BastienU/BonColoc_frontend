import React from "react";
import { Link } from "react-router-dom";
import Colocataires from "../pages/Colocataires";

const Hero: React.FC = () => {
  return (
    <section className="hero">
        <img src="/hero.jpg" alt="logo" />
        <div className="hero-content">
            <h1>Ta Colocation Étudiante Idéale<br />Commence Ici.</h1>
            <p>Fini les mauvaises surprises. <br />Trouve enfin des colocataires qui te correspondent vraiment.</p>

            <div className="hero-buttons">
                <Link to="/annonces" className="btn hero-btn">Trouver mon Colocataire</Link>
                <Link to="/appartements" className="btn white-btn">Trouver un Appartement</Link>
            </div>
        </div>
    </section>
  );
};

export default Hero;