import React from 'react'

import './Home.css'
import Homeimg from '../Homepage/images/Home.png'
import Sidenavbar from '../Sidenavbar/Sidenavbar'

const Home = () => {
  return (
    <div className='main'>
     <Sidenavbar/>
     <p className='homeoutlet'>Outlet Management</p>
  
       
            
            <div className='homeimg'>
                <img src={Homeimg} alt="" />
                <button>+ Add outlet</button>
            </div>


    
    </div>
  )
}

export default Home