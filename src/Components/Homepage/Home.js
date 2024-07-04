import React, { useState,useContext } from 'react'
import './Home.scss'
import Homeimg from '../../assets/images/Home.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { LocationContext } from "../LocationProvider";
import Pending from '../Pendingpage/Pendingpage'

const Home = () => {


 

  const categories = ['LiveOutlets', 'PendingRequest'];

  
    const [activeCategory, setActiveCategory] = useState('LiveOutlets');

    
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
      
    };

  const { showoutlets, setshowoutlets } = useContext(LocationContext);


  let navigate = useNavigate();
  const goToAbout = () => {
    navigate('/outlet/Registration',{ state: { pagename: "Registration" } });
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
  // }

  return (
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
        {activeCategory === 'LiveOutlets' && <div className='homeimg'>
                <img src={Homeimg} alt="" />
                <button onClick={goToAbout} className='Addoutlet'>+ Add outlet</button>
            </div>
}
        {activeCategory === 'PendingRequest' && <Pending/>}
       

        


          
        
            
    </div>
  )
}

export default Home