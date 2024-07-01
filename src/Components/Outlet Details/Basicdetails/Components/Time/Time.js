import React from "react";
import "./style.scss";

const Time = ({ time, setTime, index, restaurantSessionid, timeSlots}) => {
  const handleTimeChange = (event) => {
    const settingTime = event.target.value;
    const currentSlot = timeSlots[restaurantSessionid][index];
    const newSlot = { ...currentSlot, time: settingTime };

    // Filter out the current slot and check for overlap
    const existingSlots = timeSlots[restaurantSessionid].filter((_, i) => i !== index);

    // Check for overlap before setting the time
    if (!isTimeOverlap(newSlot.openingTime, newSlot.closingTime, existingSlots)) {
      setTime(settingTime, index);
    } else {
      alert("Selected time slot overlaps with an existing slot.");
    }
  };

  
  return (
    <div className="time">
      <input type="time" value={time} onChange={handleTimeChange} />
    </div>
  );
};

const isTimeOverlap = (newStartTime, newEndTime, existingSlots) => {
  for (let slot of existingSlots) {
    const existingStartTime = slot.openingTime;
    const existingEndTime = slot.closingTime;
    if (
      (newStartTime >= existingStartTime && newStartTime < existingEndTime) ||
      (newEndTime > existingStartTime && newEndTime <= existingEndTime) ||
      (newStartTime <= existingStartTime && newEndTime >= existingEndTime)
    ) {
      return true;
    }
  }
  return false;
};



export default Time;