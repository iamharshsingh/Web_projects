import React from "react";
import "./Checkup.css";

const Checkup = () => {
  const handleCheckup = (condition) => {
    console.log(`Starting checkup for ${condition}`);
    // Add logic for redirecting or starting the specific checkup
  };

  return (
    <div className="checkup-container">
      <h1>Select a Health Checkup</h1>
      <div className="checkup-buttons">
        <button onClick={() => handleCheckup("Blood Cancer")} className="health-button">
          Blood Cancer
        </button>
        <button onClick={() => handleCheckup("Diabetes")} className="health-button">
          Diabetes
        </button>
        <button onClick={() => handleCheckup("Heart Disease")} className="health-button">
          Heart Disease
        </button>
      </div>
    </div>
  );
};

export default Checkup;
