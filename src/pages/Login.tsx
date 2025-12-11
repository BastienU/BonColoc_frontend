import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <>
      <Navbar />
    <main className="login-container">
      <h1>Formulaire de connexion</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit" className="login-submit-btn">
          Connexion
        </button>

        <p className="register-text">
          Pas encore de compte ?<br />
          <Link to="/register" className="register-btn">
            Créer un compte
          </Link>
        </p>
      </form>
    </main>
    </>
  );
};

export default Login;