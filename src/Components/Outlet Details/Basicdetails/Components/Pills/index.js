import React, { useState } from "react";
import "./style.scss";
import arrow from "../../../../../assets/images/Vector.svg";
import remove from "../../../../../assets/images/remove.svg";

const Pills = ({
  pillsText,
  setPillsText,
  modalText,
  setModalText,
  inputValue,
  setInputValue,
  handleInputValueChange,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showInputBox, setShowInputBox] = useState(false);

  const addPillsText = (item) => {
    setPillsText([...pillsText, item]);
    const updatedPillsText = modalText.filter((pill) => pill !== item);
    if (updatedPillsText.length === 0) {
      setShowModal(false);
    }
    setModalText(updatedPillsText);
  };

  const removeItem = (item) => {
    setModalText([...modalText, item]);
    const updatedPillsText = pillsText.filter((pill) => pill !== item);
    if (updatedPillsText) {
      setShowModal(true);
    }
    setPillsText(updatedPillsText);
  };

  const handleAddNewPill = () => {
    if (inputValue.trim()) {
      addPillsText(inputValue.trim());
      setInputValue("");
    }
    setShowInputBox(false);
  };

  const handleShowInputBox = () => {
    setShowInputBox(true);
  };

  const handlePillsContainerClick = () => {
    setShowModal((mo) => !mo);
  };

  return (
    <div className="pills">
      <div className="pillsContainer" onClick={handlePillsContainerClick}>
        <div className="pillsContent" onClick={(e) => e.stopPropagation()}>
          {pillsText.map((item, index) => (
            <div className="iPills" key={index}>
              {item}
              <img
                className="removeImg"
                src={remove}
                onClick={() => removeItem(item)}
                alt="removePill"
              />
            </div>
          ))}
          {showModal && (
            <>
              <div className="pillsModal">
                {modalText.map((item, index) => (
                  <div
                    key={index}
                    className="iPills"
                    onClick={() => {
                      addPillsText(item);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div>
                {showInputBox && (
                  <div className="newPills">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputValueChange}
                      className="inputText"
                    />
                    <button
                      onClick={handleAddNewPill}
                      className="addInputButton"
                    >
                      + Add
                    </button>
                  </div>
                )}
                {!showInputBox && (
                  <button className="addNewButton" onClick={handleShowInputBox}>
                    + Add New
                  </button>
                )}
              </div>
            </>
          )}
        </div>
        <div className="pillsArrow" onClick={(e) => e.stopPropagation()}>
          <img
            className={showModal ? "arrowUp" : "arrowDown"}
            src={arrow}
            onClick={() => setShowModal(!showModal)}
            alt="toggleArrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Pills;