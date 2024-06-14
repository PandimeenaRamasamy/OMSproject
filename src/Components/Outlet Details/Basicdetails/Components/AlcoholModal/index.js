import React, { useState } from "react";
import "./style.scss";

const AlcoholModal = ({ onCloseRequest, onDecline, onAgree }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="alcoholModal">
      <div className="headingAndClose">
        <h3>Terms & Conditions</h3>
        <p onClick={onCloseRequest}>X</p>
      </div>
      <div className="line"></div>
      <p className="alcohol-modal-terms">
        I hereby agree to ensure that the transactions via online do not
        facilitate the offer, sale and purchase of products and/or services
        related to Alcohol. Alcohol includes alcohol or alcoholic beverages such
        as beer, liquor, wine or champagne
      </p>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <p className="checkbox-dialogue">
          I hereby Accept the Terms & Conditions
        </p>
      </label>
      <div className="line"></div>
      <div className="alcoholModalBtns">
        <button className="declineBtn" onClick={onDecline}>
          Decline
        </button>
        <button className="agreeBtn" disabled={!isChecked} onClick={onAgree}>
          Agree
        </button>
      </div>
    </div>
  );
};

export default AlcoholModal;
