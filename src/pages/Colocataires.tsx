import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./../styles/Colocataires.css";
import { Link } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  status: string;
  stars: number;
  interests: string;
  photo: string;
}

const studentsData: Student[] = [
  {
    id: 1,
    name: "Alice Dupont",
    status: "Étudiante",
    stars: 4,
    interests: "Sport, Jeux vidéo, Cuisine",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Marc Leroy",
    status: "Jeune travailleur",
    stars: 5,
    interests: "Activité manuelle, Lecture, Cuisine",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 3,
    name: "Sophie Martin",
    status: "Étudiante",
    stars: 3,
    interests: "Jeux vidéo, Sport, Bricolage",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Colocataires: React.FC = () => {
  const [search, setSearch] = useState("");
  const [minStars, setMinStars] = useState(0);

  const filteredStudents = studentsData.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) &&
      student.stars >= minStars
  );

  return (
    <div>
      <Navbar />

      <div className="hero hero-small">
        <h1 className="hero-title">Liste des colocataires</h1>
      </div>

      {/* Search & Filter */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Rechercher un colocataire potentiel..."
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

      <div className="student-list">
        {filteredStudents.length === 0 && (
          <p className="no-results">Aucun étudiant correspondant trouvé.</p>
        )}
        {filteredStudents.map((student) => (
          <div key={student.id} className="student-card">
            <img src={student.photo} alt={student.name} className="student-photo" />
            <div className="student-info">
              <h2>{student.name}</h2>
              <p className="student-status">{student.status}</p>
              <p className="student-stars">
                {"★".repeat(student.stars) + "☆".repeat(5 - student.stars)}
              </p>
              <p className="student-interests">{student.interests}</p>
            </div>
            <Link
              to="/conversation"
              state={{ name: student.name }}
              className="contact-btn"
            >
              Contacter
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colocataires;