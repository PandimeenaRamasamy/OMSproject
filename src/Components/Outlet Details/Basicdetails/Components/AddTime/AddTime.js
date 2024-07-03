import React from "react";
import "./style.scss";
import Time from "../Time/Time";

const AddTime = ({
  timeSlots,
  openingTime,
  setOpeningTime,
  closingTime,
  setClosingTime,
  index,
  restaurantSessionid,
  isLastIndex,
  addDayAndTime,
  deleteCurrentTime
}) => {
  const hasContainWeeks = timeSlots[restaurantSessionid]?.some(
    (slot) => slot.isContainWeeks
  );
  return (
    <div className="AddTime22" >
      <div className="time22">
        <div className="timeContainerOpen">
          <div className="nameBox"> Opening Time </div>
          <Time time={openingTime} setTime={setOpeningTime} index={index} restaurantSessionid={restaurantSessionid} timeSlots={timeSlots} type="opening"/>
        </div>
        <div className="timeContainerClose">
          <div className="nameBox"> Closing Time </div>
          <Time time={closingTime} setTime={setClosingTime} index={index} restaurantSessionid={restaurantSessionid} timeSlots={timeSlots} type="closing"/>
        </div>
        {/* <div className="handle-add-del"> */}
        {/* <div>Sample</div> */}
        {isLastIndex && (
          // <div className="addDayAndTimeOne">
            <p onClick={addDayAndTime} className="pAddd" >
              + Add Time
            </p>
          // </div>
        )}
        {!isLastIndex && (
          // <div className="deleteDayAndTime">
          <p onClick={deleteCurrentTime} className="delete-day-timee">
            - Delete Time
          </p>
          // </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AddTime;