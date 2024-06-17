import React from "react";
import "./style.scss";
import AddTime from "../AddTime/AddTime";

// slots : {
//   openingTime: string,
//   closingTime: string,
//   isContainWeeks: boolean,
//   checkedDays?: {allDay: boolean, mon: boolean, tues: boolean, wedne: boolean, thur: boolean, fri: boolean, sat: boolean, sund: boolean}
// }

const AddDayAndTime = ({
  slots,
  index,
  setTimeSlots,
  isLastIndex,
  restaurantSessionid,
  setOpeningTime,
  setClosingTime,
}) => {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTimeSlots((prevTime) => {
      const timeSlot = prevTime[restaurantSessionid];
      timeSlot[index].checkedDays[name] = checked;
      return { ...prevTime, [restaurantSessionid]: timeSlot };
    });
  };

  const addDayAndTime = () => {
    //2 cases 1) if last element is isContainWeeks true -> then append before that element
    // 2) if last element is isContains false -> append in last
    setTimeSlots((prevTime) => {
      const timeSlot = [...prevTime[restaurantSessionid]];
      const newSlot = {
        openingTime: "00:00",
        closingTime: "00:00",
        isContainWeeks: false,
        checkedDays: {
          monday: true,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
      };
      if (timeSlot[timeSlot?.length - 1].isContains === true) {
        //case 1
        timeSlot.splice(timeSlot.length - 1, 0, newSlot);
      } else {
        //case 2
        timeSlot.push(newSlot);
      }

      return { ...prevTime, [restaurantSessionid]: timeSlot };
    });
  };

  const deleteCurrentTime = () => {
    setTimeSlots((prevTime) => {
      const timeSlot = [...prevTime[restaurantSessionid]];
      timeSlot.splice(index, 1);
      return { ...prevTime, [restaurantSessionid]: timeSlot };
    });
  };

  return (
    <div className="addDayAndTime">
      <AddTime
        openingTime={slots.openingTime}
        setOpeningTime={setOpeningTime}
        closingTime={slots.closingTime}
        setClosingTime={setClosingTime}
        restaurantSessionid={restaurantSessionid}
        index={index}
      />
      <span>
        {isLastIndex && (
          <div className="addDayAndTime">
            <p onClick={addDayAndTime} className="pAdd">
              + Add Time
            </p>
          </div>
        )}
        {!isLastIndex && (
          // <div className="deleteDayAndTime">
          <p onClick={deleteCurrentTime} className="delete-day-time">
            - Delete Time
          </p>
          // </div>
        )}
      </span>
      {slots?.isContainWeeks && (
        <div className="checkboxWrapper">
          {Object.keys(slots?.checkedDays).map((day) => (
            <div className="checkBoxContainer" key={day}>
              <label>
                <input
                  className="checkbox"
                  type="checkbox"
                  name={day}
                  checked={slots.checkedDays[day]}
                  onChange={handleCheckboxChange}
                />
                <p className="cPname">
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </p>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddDayAndTime;