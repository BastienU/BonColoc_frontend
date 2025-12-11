import React from "react";

const Reviews: React.FC = () => {
  return (
    <section className="reviews">
      <h2>Ce que disent nos utilisateurs</h2>

      <div className="reviews-grid">
        <div className="review-card">
            <img className="avatar" src="https://picsum.photos/80" alt="avatar" />
            <h4>Léa Dubois</h4>
            <span className="date">12 mars 2024</span>
            <div className="stars">★★★★★</div>
            <p>"J'ai trouvé ma colocataire en moins d'une semaine ! Le site est super simple à utiliser. Je recommande à 100% !"</p>
            <span className="school">– Université Paris-Sorbonne</span>
        </div>

        <div className="review-card">
            <img className="avatar" src="https://picsum.photos/81" alt="avatar" />
            <h4>Marc Antoine</h4>
            <span className="date">28 février 2024</span>
            <div className="stars">★★★★★</div>
            <p>"Plateforme très sécurisée et profils vérifiés, c’est rassurant. J’ai pu trouver mon appartement en toute confiance."</p>
            <span className="school">– INSA Lyon</span>
        </div>

        <div className="review-card">
            <img className="avatar" src="https://picsum.photos/82" alt="avatar" />
            <h4>Chloé Petit</h4>
            <span className="date">15 janvier 2024</span>
            <div className="stars">★★★★★</div>
            <p>"Super expérience ! Le matching est pertinent et m’a évité de perdre du temps avec des profils qui ne correspondaient pas."</p>
            <span className="school">– Université de Bordeaux</span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;