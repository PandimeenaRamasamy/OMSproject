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
  return (
    <div className="workingDay">
      <div className="session">
        <div className="sessionContainer">
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
        </div>
      </div>

      <div className="addDayAndTimeWor">
        {timeSlots?.[restaurantSessionid]?.map((slots, index) => (
          <AddDayAndTime
            slots={slots}
            setTimeSlots={setTimeSlots}
            index={index}
            isLastIndex={index === timeSlots?.[restaurantSessionid]?.length - 1} //show add time
            restaurantSessionid={restaurantSessionid}
            setOpeningTime={setOpeningTime}
            setClosingTime={setClosingTime}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkingDay;
