import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./../styles/Appartement.css";

interface Appartement {
  id: number;
  title: string;
  description: string;
  stars: number;
  lieu: string;
  photo: string;
}

const appartsData: Appartement[] = [
  {
    id: 1,
    title: "T2 lumineux au centre-ville",
    description: "Apppartement en centre-ville, proche de toutes commodités",
    stars: 4,
    lieu: "Paris 10ème",
    photo: `https://picsum.photos/seed/${Math.random()}/400/300`,
  },
  {
    id: 2,
    title: "Studio cosy près du parc",
    description: "Studio idéal pour étudiant, calme et bien équipé",
    stars: 5,
    lieu: "Paris 3ème",
    photo: `https://picsum.photos/seed/${Math.random()}/400/300`,
  },
  {
    id: 3,
    title: "Grand F1 avec balcon",
    description: "Appartement spacieux avec vue sur la ville",
    stars: 3,
    lieu: "Paris 12ème",
    photo: `https://picsum.photos/seed/${Math.random()}/400/300`,
  },
  {
    id: 4,
    title: "Appartement moderne proche métro",
    description: "Appartement moderne avec toutes les commodités à proximité",
    stars: 4,
    lieu: "Paris 8ème",
    photo: `https://picsum.photos/seed/${Math.random()}/400/300`,
  },
];

const Appartement: React.FC = () => {
  const [search, setSearch] = useState("");
  const [minStars, setMinStars] = useState(0);

  const filteredApparts = appartsData.filter(
    (appart) =>
      appart.title.toLowerCase().includes(search.toLowerCase()) &&
      appart.stars >= minStars
  );

  return (
    <div>
      <Navbar />

      <div className="hero hero-small">
        <h1 className="hero-title">Liste des appartements disponibles</h1>
      </div>

      {/* Search & Filter */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Rechercher un appartement..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="filter">
          <label>Filtrer par étoiles :</label>
          <select value={minStars} onChange={(e) => setMinStars(Number(e.target.value))}>
            <option value={0}>Toutes</option>
            <option value={1}>1 étoile et plus</option>
            <option value={2}>2 étoiles et plus</option>
            <option value={3}>3 étoiles et plus</option>
            <option value={4}>4 étoiles et plus</option>
            <option value={5}>5 étoiles</option>
          </select>
        </div>
      </div>

      <div className="appart-list">
        {filteredApparts.length === 0 && (
          <p className="no-results">Aucun étudiant correspondant trouvé.</p>
        )}
        {filteredApparts.map((appart) => (
          <div key={appart.id} className="appart-card">
            <img src={appart.photo} alt={appart.title} className="appart-photo" />
            <div className="appart-info">
              <h2>{appart.title}</h2>
              <p className="appart-status">{appart.description}</p>
              <p className="appart-stars">
                {"★".repeat(appart.stars) + "☆".repeat(5 - appart.stars)}
              </p>
              <p className="appart-interests">{appart.lieu}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appartement;