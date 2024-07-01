import React, { useState } from "react";
import "./style.scss";
import DayAndTime from "../AddTime/AddTime";
import { v4 as uuidv4 } from "uuid";
import AddDayAndTime from "../AddDayAndTime";

const WorkingDay = ({
  timeSlots,
  setTimeSlots,
  activeMeals,
  meals,
  namePrefix,
  setOpeningTime,
  setClosingTime,
  restaurantSessionid,
}) => {
  const getDisabledDays = () => {
    // for checkbox validation ------------------------------------
    const disabledDays = {};

        timeSlots[restaurantSessionid].forEach((slot) => {
          // console.log(`Checking time slot with id: ${id}`); // Log for debugging
          // console.log(`Slot:`, slot); // Log each slot for debugging
          Object.keys(slot.checkedDays).forEach((day) => {
            if (slot.checkedDays[day]) {
              // console.log(`Disabling day: ${day}`); // Log which days are being disabled
              disabledDays[day] = true; // Mark days as disabled if selected in other sessions
            }
          });
        });
    // console.log("Final disabledDays:", disabledDays); // Log the final disabledDays object
    return disabledDays;
  };

  const disabledDays = getDisabledDays(); // Get the disabled days
  // console.log("disabled Days :",disabledDays);
  // for checkbox validation --------------------------------------
  return (
    <div className="workingDay">
      <div className="session">
      {/* for checkbox validation  ----------------------------------------------------*/}
      {["breakfast", "lunch", "dinner", "cafe", "snacks", "happyHours"].map((meal) => (
          <div className="sessionContainer" key={meal}>
            <label>
              <input
                type="radio"
                id={meal}
                name={namePrefix}
                value={meal}
                onChange={() => activeMeals(restaurantSessionid, meal)}
                checked={meals === meal}
              />
              <p className="sessionName">{meal.charAt(0).toUpperCase() + meal.slice(1)}</p>
            </label>
          </div>
        ))}
        {/* for checkbox validation -----------------------------------------------------*/}
        {/* <div className="sessionContainer">
          <label>
            <input
              type="radio"
              id="breakfast"
              name={namePrefix}
              value="breakfast"
              onChange={() => activeMeals(restaurantSessionid, "breakfast")}
              checked={meals === "breakfast"}
            />
            <p className="sessionName">BreakFast</p>
          </label>
        </div>
        <div className="sessionContainer">
          <label>
            <input
              type="radio"
              id="lunch"
              name={namePrefix}
              value="lunch"
              onChange={() => activeMeals(restaurantSessionid, "lunch")}
              checked={meals === "lunch"}
            />
            <p className="sessionName">Lunch</p>
          </label>
        </div>
        <div className="sessionContainer">
          <label>
            <input
              type="radio"
              id="dinner"
              name={namePrefix}
              value="dinner"
              onChange={() => activeMeals(restaurantSessionid, "dinner")}
              checked={meals === "dinner"}
            />
            <p className="sessionName">Dinner</p>
          </label>
        </div>
        <div className="sessionContainer">
          <label>
            <input
              type="radio"
              id="cafe"
              name={namePrefix}
              value="cafe"
              onChange={() => activeMeals(restaurantSessionid, "cafe")}
              checked={meals === "cafe"}
            />
            <p className="sessionName">Cafe</p>
          </label>
        </div>
        <div className="sessionContainer">
          <label>
            <input
              type="radio"
              id="snacks"
              name={namePrefix}
              value="snacks"
              onChange={() => activeMeals(restaurantSessionid, "snacks")}
              checked={meals === "snacks"}
            />
            <p className="sessionName">Snacks</p>
          </label>
        </div>
        <div className="sessionContainer">
          <label>
            <input
              type="radio"
              id="happyHours"
              name={namePrefix}
              value="happyHours"
              onChange={() => activeMeals(restaurantSessionid, "happyHours")}
              checked={meals === "happyHours"}
            />
            <p className="sessionName">Happy Hours</p>
          </label>
        </div> */}
      </div>

      <div className="addDayAndTimeWor">
        {timeSlots?.[restaurantSessionid]?.map((slots, index) => (
          <AddDayAndTime 
            key={index} // Add a key prop for checkbox validation
            timeSlots={timeSlots}
            slots={slots}
            setTimeSlots={setTimeSlots}
            index={index}
            isLastIndex={index === timeSlots?.[restaurantSessionid]?.length - 1} //show add time
            restaurantSessionid={restaurantSessionid}
            setOpeningTime={setOpeningTime}
            setClosingTime={setClosingTime}
            disabledDays={disabledDays} // Pass disabledDays to AddDayAndTime checkbox validation
          />
        ))}
      </div>
    </div>
  );
};

export default WorkingDay;