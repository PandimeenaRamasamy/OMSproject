import React, { useState,useContext } from 'react';
import "./Toggle.scss";
import { LocationContext } from "../LocationProvider";
 
const Toggle = ({toggle,settaggle}) => {
  // const {  togglebutton1,
  //   setToggleButton1,
  //   togglebutton2,
  //   setToggleButton2,
  //   togglebutton3,
  //   setToggleButton3,

  
  // } = useContext(LocationContext);
  // const [currenttoggle,setcurrenttoggle]=useState();;
  
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
  return (
    <div > 
        <div className='togglemain'>
      <button
        className={`toggleBtn${toggle ? " Toggled" : ""}`}
        onClick={() => settaggle(!toggle)}
      >
        <div className='thumb'></div>
      
      </button>
      </div>
    </div>
  );
};
 
export default Toggle;