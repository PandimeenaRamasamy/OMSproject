
import React, { createContext, useState } from 'react';

// Create a context
export const LocationContext = createContext();

// Create a provider component
export const LocationProvider = ({ children }) => {
  const [locationBtn, setLocationBtn] = useState(false);
  const [showoutlets,setshowoutlets]=useState(false);

  return (
    <LocationContext.Provider value={{ locationBtn, setLocationBtn,showoutlets,setshowoutlets }}>
      {children}
    </LocationContext.Provider>
  );
};