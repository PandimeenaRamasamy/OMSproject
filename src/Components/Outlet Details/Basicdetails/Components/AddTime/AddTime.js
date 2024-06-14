import React from "react";
import "./style.scss";
import Time from "../Time/Time";

const AddTime = ({
  openingTime,
  setOpeningTime,
  closingTime,
  setClosingTime,
  index,
}) => {
  return (
    <div className="AddTime">
      <div className="time">
        <div className="timeContainer">
          <div className="nameBox">Opening Time</div>
          <div className="timeBox">
            <Time
              time={openingTime}
              setTime={setOpeningTime}
              index={index}
            />
          </div>
        </div>
        <div className="timeBox">
          <div className="nameBox">Closing Time</div>
          <div className="timeBox">
            <Time
              time={closingTime}
              setTime={setClosingTime}
              index={index}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTime;
