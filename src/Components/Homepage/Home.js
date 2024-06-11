import React from 'react'

import './Home.css'
import Homeimg from '../Homepage/images/Home.png'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import { useNavigate } from 'react-router-dom';
const Home = () => {

  let navigate = useNavigate();

  const goToAbout = () => {
    navigate('/outlet');
  };

  return (
    <div className='main'>
     {/* <Sidenavbar/> */}
     <p className='homeoutlet'>Outlet Management</p>
  
       
            
            <div className='homeimg'>
                <img src={Homeimg} alt="" />
                <button onClick={goToAbout} className='Addoutlet'>+ Add outlet</button>
            </div>


    
    </div>
  )
}

export default Home