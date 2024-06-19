
import './Landing.scss';
import React, { useState, useEffect } from 'react';

import Sidenavbar from './Components/Sidenavbar/Sidenavbar'
import Outlet from './Components/Outletnavbar/Outlet'
import Home from './Components/Homepage/Home';
import { Routes, Route } from 'react-router-dom';
import PostDataForm from './Components/Registration/PostData'
import Stepform from './Components/Onboarding/Steperform/Stepform';
import Updateoutlet from './Components/UpdateOutlet/Updateoutlet';

function Landing() {

  const MIN_WIDTH = 800; 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [belowMinWidth, setBelowMinWidth] = useState(window.innerWidth <=MIN_WIDTH);
  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setBelowMinWidth(window.innerWidth <=MIN_WIDTH);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
  return (
   
     <div className="app">
     {belowMinWidth ? (
         <div className="warning-message">
             Your screen width is below the minimum width of {MIN_WIDTH}px. Please resize your window.
         </div>
         
     ) : (<div className='Appcontainer'>
      <Sidenavbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/outlet" element={  <Outlet />} />
        <Route path="/PostDataForm" element={  <PostDataForm />} />
        <Route path="/Stepform" element={  <Stepform />} />
        <Route path="/outlet/Stepform" element={  <Stepform />} />
        <Route path="/outlet/PostDataForm" element={  <PostDataForm />} />

        <Route path="/Updateoutlet" element={  <Updateoutlet />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes></div>
     )}


 </div>
  );
}

export default Landing;


