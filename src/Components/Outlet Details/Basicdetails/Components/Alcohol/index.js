import React from "react";
import "./style.scss";

const Alcohol = ({ onRadioChange, selectedOption }) => {
  return (
    <div className="alcoholHeader">
      <h4>ALCOHOL</h4>
      <div className="alcoholRadioBtnsContainer">
        <label>
          <input
            type="radio"
            id="serveAlcohol"
            name="alcohol-radio-btn"
            value="Serve Alcohol"
            onChange={onRadioChange}
            checked={selectedOption === "Serve Alcohol"}
          />
          <p className="alcoholOptionName">Serve Alcohol</p>
        </label>
        <label>
          <input
            type="radio"
            id="doesntServeAlcoholfast"
            name="alcohol-radio-btn"
            value="Doesn't Serve Alcohol"
            checked={selectedOption === "Doesn't Serve Alcohol"}
            onChange={onRadioChange}
          />
          <p className="alcoholOptionName">Doesn't Serve Alcohol</p>
        </label>
      </div>
    </div>
  );
};

export default Alcohol;
