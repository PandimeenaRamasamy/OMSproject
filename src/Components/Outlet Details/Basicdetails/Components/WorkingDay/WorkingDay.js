// import React, { useState ,useRef} from "react";
// import "./style.scss";
// import DayAndTime from "../AddTime/AddTime";
// import { v4 as uuidv4 } from "uuid";
// import AddDayAndTime from "../AddDayAndTime";
// import { ImCross } from "react-icons/im";
// const WorkingDay = ({
//   timeSlots,
//   setTimeSlots,
//   activeMeals,
//   meals,
//   namePrefix,
//   setOpeningTime,
//   setClosingTime,
//   restaurantSessionid,
// }) => {
//   const getDisabledDays = () => {
//     const disabledDays = {};
//     timeSlots[restaurantSessionid].forEach((slot) => {
//       Object.keys(slot.checkedDays).forEach((day) => {
//         if (slot.checkedDays[day]) {
//           disabledDays[day] = true;
//         }
//       });
//     });
//     return disabledDays;
//   };

//   const [items, setItems] = useState([
//     "breakfast", "lunch", "dinner", "cafe", "snacks", "happyHours"
//   ]);
//   const inputRef = useRef(null);

//   const [addnewenable, setaddnewenable] = useState(false);
//   const [newitem, setnewitem] = useState("");
//   const [deleteenble, setdeleteenble] = useState(false);
//   const [doneshow,setdoneshow]=useState(false);

//   const handleAddnew = () => {
//     const updateitems = [...items, newitem];
//     setItems(updateitems);
//     setaddnewenable(false);
//   };

//   const handledelete = (meal) => {
//     const updateitems = items.filter((item) => item !== meal);
//     setItems(updateitems);
//     setdoneshow(true);
//   };

//   const disabledDays = getDisabledDays();
//   const handleBlur = () => {
//     handleAddnew()
   
//   };

//   return (
//     <div className="workingDay">
//       <div className="session">
//         {items.map((meal) => (
//           <div className="sessionContainer" key={meal}>
//             <label className={deleteenble?'dele':'nodele'}>
//             <div  style={{position:'relative',left:'80px',top:'-20px'}}>
//               {deleteenble && (
//                 <button
//                 style={{width:'15px',height:'15px'}}
                 
                 
//                   onClick={() => handledelete(meal)}
//                 >
//                   <ImCross style={{ fontSize: "8px", color: "black",position:'relative',top:'-10px'}} />
//                 </button>
//               )}
//             </div>
//               <input
//                 type="radio"
//                 id={meal}
//                 name={namePrefix}
             

//                 value={meal}
//                 onChange={() => activeMeals(restaurantSessionid, meal)}
//                 checked={meals === meal}
//               />
//               <p className="sessionName">
//                 {meal.charAt(0).toUpperCase() + meal.slice(1)}
//               </p>
//             </label>
          
//           </div>
//         ))}
//         {addnewenable && (
//           <div >
//             <input type="text"   ref={inputRef} onChange={(e) => setnewitem(e.target.value)} className="addnewfield" />
//             <button onClick={handleAddnew} className="Additembutton">Add</button>
//           </div>
//         )}
//         {!addnewenable && (
//           <div style={{marginTop:'10px'}}>
//             <button  className="addnewbutton" onClick={() => setaddnewenable(true)}> +AddNew</button>
          
           
//           </div>
//         )}
        
//           {
//               doneshow &&  (
//                 <div style={{marginTop:'10px'}}>
//                   <button type="button" className="donebutton" onClick={() => {setdoneshow(false)
//                   setdeleteenble(!deleteenble)
//                 }}>Done</button>
//                 </div>
                
//               )
//             }
//             {
//               !doneshow && (
//                 <div style={{marginTop:'10px'}}>
//                   <button  type="button" className="deletebutton" onClick={() => setdeleteenble(!deleteenble)}>-Delete</button>
//                 </div>
//               ) 
//             }
//       </div>
//       <div className="addDayAndTimeWor">
//         {timeSlots?.[restaurantSessionid]?.map((slots, index) => (
//           <AddDayAndTime
//             key={index}
//             timeSlots={timeSlots}
//             slots={slots}
//             setTimeSlots={setTimeSlots}
//             index={index}
//             isLastIndex={index === timeSlots?.[restaurantSessionid]?.length - 1}
//             restaurantSessionid={restaurantSessionid}
//             setOpeningTime={setOpeningTime}
//             setClosingTime={setClosingTime}
//             disabledDays={disabledDays}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };


// export default WorkingDay;
import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
import AddDayAndTime from "../AddDayAndTime";
import { ImCross } from "react-icons/im";
import DayAndTime from "../AddTime/AddTime";
import { v4 as uuidv4 } from "uuid";

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
    const disabledDays = {};
    timeSlots[restaurantSessionid].forEach((slot) => {
      Object.keys(slot.checkedDays).forEach((day) => {
        if (slot.checkedDays[day]) {
          disabledDays[day] = true;
        }
      });
    });
    return disabledDays;
  };

  const [items, setItems] = useState([
    "breakfast", "lunch", "dinner", "cafe", "snacks", "happyHours"
  ]);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  const [addnewenable, setaddnewenable] = useState(false);
  const [newitem, setnewitem] = useState("");
  const [deleteenble, setdeleteenble] = useState(false);
  const [doneshow, setdoneshow] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleAddnew();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleAddnew = () => {
    if (newitem.trim()) {
      const updateitems = [...items, newitem];
      setItems(updateitems);
      setaddnewenable(false);
      setnewitem("");
    }
  };

  const handledelete = (meal) => {
    const updateitems = items.filter((item) => item !== meal);
    setItems(updateitems);
    setdoneshow(true);
  };

  const disabledDays = getDisabledDays();
  const handleBlur = (e) => {
    handleAddnew();
    if(e.target.value==="")
    {
      setaddnewenable(false);

    }

  
  };

  return (
    <div className="workingDay">
      <div className="session" ref={wrapperRef}>
      {items.map((meal) => (
      <div className="sessionContainer" key={meal}>
        <label className={`sessionLabel ${deleteenble ? 'dele' : 'nodele'}`}>
          {deleteenble && (
            <button
              className="deleteButton"
             
            >
              <ImCross className="crossIcon"  onClick={() => handledelete(meal)}/>
            </button>
          )}
          <input
            type="radio"
            id={meal}
            name={namePrefix}
            value={meal}
            onChange={() => activeMeals(restaurantSessionid, meal)}
            checked={meals === meal}
          />
          <p className="sessionName">
            {meal.charAt(0).toUpperCase() + meal.slice(1)}
          </p>
        </label>
      </div>
    ))}
        {addnewenable && (
          <div>
            <input
              type="text"
              ref={inputRef}
              value={newitem}
              onChange={(e) => setnewitem(e.target.value)}
              className="addnewfield"
              onBlur={(e)=>handleBlur(e)}
            />
            <button onClick={handleAddnew} className="Additembutton">Add</button>
          </div>
        )}
        {!addnewenable && (
          <div style={{ marginTop: '10px' }}>
            <button className="addnewbutton" onClick={() => setaddnewenable(true)}> +AddNew</button>
          </div>
        )}
        {doneshow && (
          <div style={{ marginTop: '10px' }}>
            <button type="button" className="donebutton" onClick={() => { setdoneshow(false); setdeleteenble(!deleteenble); }}>Done</button>
          </div>
        )}
        {!doneshow && (
          <div style={{ marginTop: '10px' }}>
            <button type="button" className="deletebutton" onClick={() => setdeleteenble(!deleteenble)}>-Delete</button>
          </div>
        )}
      </div>
      <div className="addDayAndTimeWor">
        {timeSlots?.[restaurantSessionid]?.map((slots, index) => (
          <AddDayAndTime
            key={index}
            timeSlots={timeSlots}
            slots={slots}
            setTimeSlots={setTimeSlots}
            index={index}
            isLastIndex={index === timeSlots?.[restaurantSessionid]?.length - 1}
            restaurantSessionid={restaurantSessionid}
            setOpeningTime={setOpeningTime}
            setClosingTime={setClosingTime}
            disabledDays={disabledDays}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkingDay;
