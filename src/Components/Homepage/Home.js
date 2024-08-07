import React, { useState,useContext } from 'react'
import './Home.scss'
import Homeimg from '../../assets/images/Home.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { LocationContext } from "../LocationProvider";
import Pending from '../Pendingpage/Pendingpage'
import imagerest from "../../assets/images/Pendingimage.png";
import Toggle from "../../Components/Pendingpage/Toggle";

import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {


 

  const categories = ['Live Outlets', 'Pending Request'];

  
    const [activeCategory, setActiveCategory] = useState('Live Outlets');

    
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
      
    };

  const {publish,deleteoutlet,setdeleteoutlet,duplicatePage ,pages} = useContext(LocationContext);


  let navigate = useNavigate();
  const goToAbout = () => {
    navigate('/outlet/Registration',{ state: { pagename: "Registration" } });
    // window.location.reload()
  };
  // const handleCategoryClick = (category) => {
   
  //     const path = category.toLowerCase().replace(' ', '-');
   
  //     navigate(`/${path}`);

    
   
  // };

  const data = useSelector((state) => state.getlocationdata.data);
 
  const data2 = useSelector((state) => state.registration.data);
  // if(data2)
  // {
  //   setshowoutlets(true);
  const {  togglebutton1,
    setToggleButton1,
    togglebutton2,
    setToggleButton2,
    togglebutton3,
    setToggleButton3,
  
    initialcounts
  
  } = useContext(LocationContext);
  // }


  return (

    <>
   


    <div className='main'>



     
     <p className='homeoutlet'>Outlet Management</p> 

     <div>
     <nav className="navv">
          <ul className="nav-listts">
            {/* {categories.map((category, index) => (
              <li
                key={category}
                className={`nav-item nav${index} `}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))} */}

            <div className='linkitems' style={{width:'400px',height:'30px',display:"flex",flexDirection:"row"}}>
            {categories.map((category) => (
                    <li
                        key={category}
                        className={`nav-items ${activeCategory === category ? 'activee' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </li>
                ))}
                </div>  
          </ul>
        </nav>    
        </div>  



        {activeCategory === 'Live Outlets' && publish&& 
        <Pending pagenaming="Liveproject"/>




        
        
        
        
}
{
  activeCategory==='Live Outlets' && !publish && <div className='homeimg'>
  <img src={Homeimg} alt="" />
  <button onClick={goToAbout} className='Addoutlet'>+ Add outlet</button>
</div>
}


{activeCategory === 'Pending Request' && 
  <div style={{ width: "1200px", height: "auto", display: 'flex', flexWrap: "wrap", flexDirection: 'row', gap:"80px" }}>
    {pages.map(page => (
      <Pending key={page.id} pagenaming="PendingRequest" />
    ))}
  </div>
}
       

        


          
        
            
    </div>
  </>
  )
}

export default Home