import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Colocataires from "./pages/Colocataires";
import Appartement from "./pages/Appartement";
import Conversation from "./pages/Conversation";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/annonces" element={<Colocataires />} />
        <Route path="/appartement" element={<Appartement />} />
        <Route path="/conversation" element={<Conversation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;