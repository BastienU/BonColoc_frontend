import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Register.css";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Navbar />
    <main className="register-container">
      <h1>Formulaire d'inscription</h1>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">Prénom :</label>
          <input type="text" id="firstname" name="firstname" required />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Nom :</label>
          <input type="text" id="lastname" name="lastname" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirmer le mot de passe :</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>

        <button type="submit" className="register-submit-btn">
          Créer un compte
        </button>

        <p className="login-text">
          Déjà un compte ?<br />
          <Link to="/login" className="login-btn">
            Se connecter
          </Link>
        </p>
      </form>
    </main>
    </>
  );
};

export default Register;