import React, { useState, useContext, useEffect } from "react";
import "./Toggle.scss";
import { LocationContext } from "../LocationProvider";
import ModalPickup from "./ModalPickup";

const Toggle = ({ toggle, settaggle, page }) => {
  const {
    togglebutton1,
    setToggleButton1,
    togglebutton2,
    setToggleButton2,
    togglebutton3,
    setToggleButton3,
    wholecount,
    setwholecount,
    pagecounts,
    setpagecounts,
  } = useContext(LocationContext);
  // const [currenttoggle,setcurrenttoggle]=useState();;

  useEffect(() => {
    if (page === "pickup") {
      if (toggle === false) {
        console.log("pivv");
        sessionStorage.removeItem("Pickup");
        setpagecounts({ ...pagecounts, pickupc: 0 });
      }
    }

    if (page === "dinein") {
      if (toggle === false) {
        sessionStorage.removeItem("Dinein");
        setpagecounts({ ...pagecounts, dineinc: 0 });
      }
    }
    if (page === "delivery") {
      if (toggle === false) {
        sessionStorage.removeItem("Delivery");
        setpagecounts({ ...pagecounts, delivery: 0 });
      }
    }
  }, []);

  //  if(toggle==='toggle1')
  //  {

  //   setcurrenttoggle(togglebutton1)
  //  }
  //  if(toggle==='toggle2')
  //   {
  //     setcurrenttoggle(togglebutton2)
  //   }
  //   if(toggle==='toggle3')
  //     {
  //       setcurrenttoggle(togglebutton3)
  //     }

  // if(page==="dinein")
  // {

  //   if(toggle===false)
  //   {

  //     sessionStorage.removeItem("Dinein");
  //     setwholecount(wholecount-1)

  //   }

  // }
  // if(page==="pickup")
  //   {

  //     if(toggle===false)
  //     {
  //       sessionStorage.removeItem("Pickup");
  //       setwholecount(wholecount-1)

  //     }

  //   }
  //   if(page==="delivery")
  //     {

  //       if(toggle===false)
  //       {

  //         sessionStorage.removeItem("Delivery");
  //         setwholecount(wholecount-1)

  //       }

  //     }

  return (
    <div>
      <div className="togglemain">
        <button
          className={`toggleBtn${toggle ? " Toggled" : ""}`}
          onClick={() => settaggle(!toggle)}
        >
          <div className="thumb"></div>
        </button>
      </div>
    </div>
  );
};

export default Toggle;
