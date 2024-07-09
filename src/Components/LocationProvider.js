
import React, { createContext, useState } from 'react';

// Create a context
export const LocationContext = createContext();

// Create a provider component
export const LocationProvider = ({ children }) => {
  const [locationBtn, setLocationBtn] = useState(false);
  const [showoutlets,setshowoutlets]=useState(false);
  const [count,setcount]=useState(0);
  const [togglebutton1, setToggleButton1] = useState(true);
  const [togglebutton2, setToggleButton2] = useState(true);
  const [togglebutton3, setToggleButton3] = useState(true);
  const [wholecount,setwholecount]=useState(0);
  const [pages, setPages] = useState([{ id: 1 }]); // Initial state with one page

  const duplicatePage = () => {
    setPages([...pages, { id: pages.length + 1 }]); 

    

    console.log("duplication");
    
    // Add a new page with a unique id
  };
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
      pages, setPages,
      duplicatePage,

      
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