import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        burgerRef.current &&
        mobileMenuRef.current &&
        !burgerRef.current.contains(event.target as Node) &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <Link to="/">
            <img src="/logo.jpeg" alt="logo" />
          </Link>
        </div>
      </div>

      {/* Menu classique */}
      <div className="nav-buttons">
        <Link to="/register" className="btn">Inscription</Link>
        <Link to="/login" className="btn secondary">Connexion</Link>
      </div>

      {/* Burger menu */}
      <div
        className="burger"
        ref={burgerRef}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div
        className="mobile-menu"
        ref={mobileMenuRef}
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        <Link to="/register" className="btn">Inscription</Link>
        <Link to="/login" className="btn secondary">Connexion</Link>
      </div>
    </nav>
  );
};

export default Navbar;