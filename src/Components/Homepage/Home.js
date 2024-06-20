import React from 'react'
import './Home.scss'
import Homeimg from '../../assets/images/Home.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {


  const locationdata=  [
   
  ]


  let navigate = useNavigate();
  const goToAbout = () => {
    navigate('/outlet/Registration',{ state: { APidata: locationdata } });
  };
  return (
    <div className='main'>
     
     <p className='homeoutlet'>Outlet Management</p>   
            <div className='homeimg'>
                <img src={Homeimg} alt="" />
                <button onClick={goToAbout} className='Addoutlet'>+ Add outlet</button>
            </div>
    </div>
  )
}

export default Home