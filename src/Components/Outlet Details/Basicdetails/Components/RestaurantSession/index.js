import React, { useState } from "react";
import "./style.scss";
import vector from "../../../../../assets/images/Vector.svg";
import WorkingDay from "../../Components/WorkingDay/WorkingDay";
// import AddDayAndTime from "../../Components/AddDayAndTime";

const RestaurantSession = ({
  timeSlots,
  setOpeningTime,
  setClosingTime,
  restaurantSessionid,
  deleteRestaurantSession,
  onMealsChange,
  setTimeSlots,
  meals,
}) => {
  const [openSession, setOpenSession] = useState(false);

  const handleOpenSession = () => {
    setOpenSession((isOpen) => !isOpen);
  };

  const handleAddDayandTime = () => {
    //2 cases 1) if last element is isContainWeeks false -> then just make it's isContainWeeks true
    // 2) if last element is isContains true -> then append new in last
    const timeSlot = [...timeSlots[restaurantSessionid]];
    if (timeSlot[timeSlot.length - 1].isContainWeeks === false) {
      timeSlot[timeSlot.length - 1].isContainWeeks = true;
      setTimeSlots((prevTime) => ({
        ...prevTime,
        [restaurantSessionid]: timeSlot,
      }));
    } else {
      setTimeSlots((prevTime) => ({
        ...prevTime,
        [restaurantSessionid]: [
          ...prevTime[restaurantSessionid],
          {
            openingTime: "00:00",
            closingTime: "00:00",
            isContainWeeks: true,
            checkedDays: {
              monday: true,
              tuesday: false,
              wednesday: false,
              thursday: false,
              friday: false,
              saturday: false,
              sunday: false,
            },
          },
        ],
      }));
    }
  };

  return (
    <div className="restaurantSessionContainer">
      <div className="sessionHeaderRes">
        <p>Restaurant Session - {meals}</p>
        <img
          src={vector}
          alt="drop-down"
          onClick={handleOpenSession}
          className={`${!openSession ? "open" : ""}`}
        />
        <p
          className="deleteSessionStyle"
          onClick={() => deleteRestaurantSession(restaurantSessionid)}
        >
          - Delete Session
        </p>
      </div>
      {openSession && (
        <div className="sessionBodyRes">
          <WorkingDay
            timeSlots={timeSlots}
            setTimeSlots={setTimeSlots}
            setOpeningTime={setOpeningTime}
            setClosingTime={setClosingTime}
            activeMeals={onMealsChange}
            meals={meals}
            namePrefix={`meal-${restaurantSessionid}`}
            restaurantSessionid={restaurantSessionid}
          />
          <div className="addBtn">
            <p>
              Setup for specific days?{" "}
              <span onClick={handleAddDayandTime}>+ Add Day/Time</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantSession;
