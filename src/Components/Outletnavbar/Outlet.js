// // // import React ,{useState,useEffect}from 'react'
// // // import './Outlet.scss'
// // // import Registration from '../Registration/PostData';
// // // import StepperForm from '../Onboarding/Steperform/Stepform';
// // // import { act } from 'react-dom/test-utils';
// // // import  OutletStepperForm from  '../Outlet Details/OutletStepperForm/OutletStepperForm';
// // // import { useLocation } from 'react-router-dom';
// // // const Outlet = () => {
// // //     const categories = ['Registration', 'OnBoarding', 'Outlet Details','Subscription'];

  
// // //     const [activeCategory, setActiveCategory] = useState('Registration');

// // //     const location = useLocation();
// // //     const datamap = location.state;
// // //        const { APidata } = location.state || {};
// // //        if (APidata) {
// // //         console.log("Received APidata: ", APidata);
// // //         // Use the APidata as needed
// // //     }
 

// // //     console.log("received api from api",APidata)





// // //     // datamap.map((item,index)=>
// // //     // {
// // //     //     console.log(item.location.id)
// // //     // })
// // // //   console.log(APidata[0].location.restaurantName)
// // //     const handleCategoryClick = (category) => {
// // //         setActiveCategory(category);
      
// // //     };
// // //   return (
// // //     <>
// // //     <div className='outletnavorg'>
// // //         <p>Outlet Management</p>
       
// // //         <nav className="navbar">
// // //             <ul className="nav-list">
// // //                 {categories.map((category,index) => (
// // //                     <li
// // //                         key={category}
// // //                         className={`nav-item  nav${index} ${activeCategory === category ? 'active' : ''}`}
// // //                         onClick={() => handleCategoryClick(category)}
// // //                     >
// // //                         {category}
// // //                     </li>
// // //                 ))}
              
// // //             </ul>
// // //         </nav>


      
// // //     </div>
// // //     {activeCategory === 'Registration' && <Registration data={APidata}/>}
// // //     {activeCategory === 'OnBoarding' && <StepperForm  data={APidata}/>}
// // //     {activeCategory === 'Outlet Details' && <OutletStepperForm  data={APidata}/>}
  
// // //         {/* {activeCategory === 'Veg' && <Vegdispla/>}
// // //         {activeCategory === 'Non-Veg' && <Nonvegdidsplay/>} */}
   
// // //     </>
// // //   )
// // // }

// // // export default Outlet


// // // // import React from 'react';
// // // // import { useLocation } from "react-router-dom";

// // // // const Outlet = () => {
// // // //     const location = useLocation();
// // // //     const { APidata } = location.state || {};

   

// // // //     return (
// // // //         <div style={{marginLeft:'400px',marginTop:'100px'}}>
// // // //             <h1>Outlet Component</h1>
// // // //             {APidata && APidata.map((location, index) => (
// // // //                 <div key={index}>
// // // //                     <h2>{location.location.restaurantName}</h2>
// // // //                     <p>{location.location.id}</p>
// // // //                     {/* Render other properties as needed */}
// // // //                 </div>
// // // //             ))}
// // // //         </div>
// // // //     );
// // // // }

// // // // export default Outlet;






import React, { useEffect } from 'react';
import './Outlet.scss';
import { useNavigate, useLocation, Outlet as RouterOutlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Outlet = () => {
  const categories = ['Registration', 'Onboaring', 'Outlet Details', 'Subscription'];
  const navigate = useNavigate();
  const location = useLocation();
  const datamap = location.state;
  const { pagename } = location.state || {};

  // useEffect(() => {
  //   if (APidata) {
  //     console.log("Received APidata: ", APidata);
      
  //   }
  // }, [APidata]);
  console.log("outlet name",pagename);

  // console.log("Received API data: ", APidata);
  const data = useSelector((state) => state.getlocationdata.data);
  const locationid="876"
  const handleCategoryClick = (category) => {
    const path = category.toLowerCase().replace(' ', '-');
   
    navigate(`/outlet/${path}`);
  };

  return (
    <>
      <div className='outletnavorg'>
        <p className='outletheading'>Outlet Management</p>
        <nav className="nav">
          <ul className="nav-list">
            {categories.map((category, index) => (
              <li
                key={category}
                className={`nav-item nav${index} ${location.pathname.includes(category.toLowerCase().replace(' ', '-')) ? 'activee' : ''} ${category===pagename ?'activee':''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <RouterOutlet />
    </>
  );
};

export default Outlet;


// import React, { useEffect } from 'react';
// import './Outlet.scss';
// import { useNavigate, useLocation, Outlet as RouterOutlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Outlet = () => {
//   const categories = ['Registration', 'Onboarding', 'Outlet Details', 'Subscription'];
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { pagename } = location.state || {};

//   const data = useSelector((state) => state.getlocationdata.data);

//   const handleCategoryClick = (category) => {
//     const path = category.toLowerCase().replace(' ', '-');
    
//       navigate(`/outlet/${path}`,{ state: { pagename:pagename} });
    
//   };

//   useEffect(() => {
//     if (pagename) {
//       console.log("Outlet name:", pagename);
//     }
//   }, [pagename]);

//   return (
//     <>
//       <div className='outletnavorg'>
//         <p>Outlet Management</p>
//         <nav className="navbar">
//           <ul className="nav-list">
//             {categories.map((category, index) => (
//               <li
//                 key={category}
//                 className={`nav-item nav${index} ${location.pathname.includes(category.toLowerCase().replace(' ', '-')) ? 'active' : ''} ${ category===pagename?'active':''}`  }
//                 onClick={() => handleCategoryClick(category)}
//               >
//                 {category}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//       <RouterOutlet />
//     </>
//   );
// };

// export default Outlet;

