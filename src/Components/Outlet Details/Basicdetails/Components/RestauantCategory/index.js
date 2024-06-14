import React, { useState } from "react";
import "./style.scss";
import Pills from "../Pills";

const RestaurantCategory = ({
  cPillsText,
  setCPillsText,
  aPillsText,
  setAPillsText,
  pPillsText,
  setPPillsText,
  safetyMeasures,
  setSafetyMeasures,
  cModalText,
  setCModalText,
  aModalText,
  setAModalText,
  pModalText,
  setPModalText,
}) => {
  const [cInputValue, setCInputValue] = useState("");
  const [aInputValue, setAInputValue] = useState("");
  const [pInputValue, setPInputValue] = useState("");

  const handleCInputValueChange = (e) => setCInputValue(e.target.value);
  const handleAInputValueChange = (e) => setAInputValue(e.target.value);
  const handlePInputValueChange = (e) => setPInputValue(e.target.value);

  return (
    <div className="restaurantCategory">
      <div className="header">
        <h4>Establishment Type</h4>
        <p>Select most relevant category of your restaurant type</p>
      </div>
      <div className="pillBox">
        <p>Cuisines</p>
        <Pills
          pillsText={cPillsText}
          setPillsText={setCPillsText}
          modalText={cModalText}
          setModalText={setCModalText}
          inputValue={cInputValue}
          setInputValue={setCInputValue}
          handleInputValueChange={handleCInputValueChange}
        />
      </div>
      <div className="pillBox">
        <p>Amenities</p>
        <Pills
          pillsText={aPillsText}
          setPillsText={setAPillsText}
          modalText={aModalText}
          setModalText={setAModalText}
          inputValue={aInputValue}
          setInputValue={setAInputValue}
          handleInputValueChange={handleAInputValueChange}
        />
      </div>
      <div className="pillBox">
        <p>Parking</p>
        <Pills
          pillsText={pPillsText}
          setPillsText={setPPillsText}
          modalText={pModalText}
          setModalText={setPModalText}
          inputValue={pInputValue}
          setInputValue={setPInputValue}
          handleInputValueChange={handlePInputValueChange}
        />
      </div>
      <div className="description">
        <p>Safety Measures</p>
        <textarea
          placeholder="Description"
          value={safetyMeasures}
          onChange={(e) => setSafetyMeasures(e.target.value)}
        />
      </div>
    </div>
  );
};

export default RestaurantCategory;
