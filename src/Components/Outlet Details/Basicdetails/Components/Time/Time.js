import React from "react";
import "./style.scss";

const Time = ({ time, setTime, index}) => {
  const handleTimeChange = (event) => {
    const settingTime = event.target.value;
    setTime(settingTime, index);
  };
  return (
    <div className="time">
      <input type="time" value={time} onChange={handleTimeChange} />
    </div>
  );
};



export default Time;
