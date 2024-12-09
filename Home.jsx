import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Life Lens</h1>
      <p>Your health is our priority. Start your checkup now!</p>
      <button className="checkup-button" onClick={() => navigate("/checkup")}>
        Checkup
      </button>
    </div>
  );
};

export default Home;
