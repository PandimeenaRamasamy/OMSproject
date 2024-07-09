
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
  const [wholecount,setwholecount]=useState(0);
  const [pagecounts,setpagecounts]=useState({

    Registrationc:0,
    Restaurantc:0,
    locationc:0,
    Bankdetailsc:0,
    Basicdetailsc:0,
    dineinc:0,
    pickupc:0,
    delivery:0,
    kithen:0


  })

  const [publish,setpublish]=useState(false)
  console.log("counts",pagecounts);
  const [initialcounts,setinitialcounts]=useState(0);
  const [deleteoutlet,setdeleteoutlet]=useState(false);

  return (
    <LocationContext.Provider value={{ 
      locationBtn,
       setLocationBtn,
       showoutlets,
       initialcounts,setinitialcounts,deleteoutlet,setdeleteoutlet,
       setshowoutlets,
       count,
       setcount,
       wholecount,setwholecount,
       togglebutton1,
       setToggleButton1,
       publish,setpublish,
       pagecounts,
       setpagecounts,
       togglebutton2, setToggleButton2,
       togglebutton3, setToggleButton3}}>
      {children}
    </LocationContext.Provider>
  );
};