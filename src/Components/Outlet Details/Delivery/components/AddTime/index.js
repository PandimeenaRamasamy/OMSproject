import React from "react";
import "./style.scss";
import Time from "../Time";

const AddTime = ({ timeSlot, setTimeSlot }) => {
  const { deliveryServiceTimeFrom, deliveryServiceTimeTo } = timeSlot;

  console.log("Add time ,Timeslotssss",deliveryServiceTimeFrom
    );

  return (
    <div className="AddTime">
      <div className="time">
        <div className="timeContainer">
          <div className="nameBox">From</div>
          <div className="timeBox">
            <Time
              selectedTime={timeSlot}
              setSelectedTime={(time) =>
                setTimeSlot({ ...timeSlot, deliveryServiceTimeFrom: time })
              }
            />
          </div>
        </div>
        <div className="timeContainer">
          <div className="nameBox">To</div>
          <div className="timeBox">
            <Time
              selectedTime={timeSlot}
              setSelectedTime={(time) =>
                setTimeSlot({ ...timeSlot, deliveryServiceTimeTo: time })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTime;
