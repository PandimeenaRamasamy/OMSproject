
import React, { createContext, useState } from 'react';

// Create a context
export const LocationContext = createContext();

// Create a provider component
export const LocationProvider = ({ children }) => {
  const [locationBtn, setLocationBtn] = useState(false);
  const [showoutlets,setshowoutlets]=useState(false);
  const [count,setcount]=useState(0);
  const [togglebutton1, setToggleButton1] = useState(false);
  const [togglebutton2, setToggleButton2] = useState(false);
  const [togglebutton3, setToggleButton3] = useState(false);


  return (
    <LocationContext.Provider value={{ 
      locationBtn,
       setLocationBtn,
       showoutlets,
       setshowoutlets,
       count,
       setcount,
       togglebutton1,
       setToggleButton1,
       togglebutton2, setToggleButton2,
       togglebutton3, setToggleButton3}}>
      {children}
    </LocationContext.Provider>
  );
};