import React, { useState } from 'react';
import "./Toggle.scss";
 
const Toggle = () => {
  const [togglebutton, setToggleButton] = useState(false);
 
  return (
    <div > 
        <div className='togglemain'>
      <button
        className={`toggleBtn${togglebutton ? " Toggled" : ""}`}
        onClick={() => setToggleButton(!togglebutton)}
      >
        <div className='thumb'></div>
      
      </button>
      </div>
    </div>
  );
};
 
export default Toggle;