import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./../styles/Conversation.css";

const Conversation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = location.state || { name: "Contact inconnu" };

  const [messages, setMessages] = useState([
    { from: "them", text: `Salut ! Je suis ${name}. Tu veux qu’on discute colocation ?` },
    { from: "me", text: "Salut ! Oui avec plaisir " },
    { from: "them", text: "Super, n’hésite pas à me poser tes questions." },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "me", text: input }]);
    setInput("");
  };

  return (
    <div className="conversation-page">
      <Navbar />

      <div className="conversation-container">
        
        <div className="conversation-header">
          <button className="back-btn" onClick={() => navigate("/annonces")}>
            ← Retour
          </button>
          <h2>{name}</h2>
        </div>

        <div className="messages-area">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.from === "me" ? "my-message" : "their-message"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Écrire un message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default Conversation;