import React from "react";

const Steps: React.FC = () => {
  return (
    <section className="steps">
      <h2>Comment ça marche ?</h2>
      <p className="subtitle">Trouver votre prochain chez-vous ou votre colocataire idéal en quelques étapes simples.</p>

      <div className="steps-grid">
        <div className="step-card">
            <div className="icon">👤</div>
            <h3>Créez votre profil</h3>
            <p>Détaillez ce que vous recherchez chez un colocataire ou dans un appartement.</p>
        </div>

        <div className="step-card">
            <div className="icon">🔍</div>
            <h3>Découvrez des matchs</h3>
            <p>Notre algorithme vous propose des profils compatibles.</p>
        </div>

        <div className="step-card">
            <div className="icon">💬</div>
            <h3>Connectez-vous</h3>
            <p>Discutez en toute sécurité via notre messagerie intégrée.</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;