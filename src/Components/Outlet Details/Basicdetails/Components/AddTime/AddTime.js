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
        <div className="timeContainerOpen">
          <div className="nameBox">Opening Time</div>
          <Time time={openingTime} setTime={setOpeningTime} index={index} />
        </div>
        <div className="timeContainerClose">
          <div className="nameBox">Closing Time</div>
          <Time time={closingTime} setTime={setClosingTime} index={index} />
        </div>
      </div>
    </div>
  );
};

export default AddTime;
