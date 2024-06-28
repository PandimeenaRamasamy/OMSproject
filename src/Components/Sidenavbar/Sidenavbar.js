import "./Sidenavbar.scss";
import Thalapa from "../../assets/images/thalappakatti-logo-anim.png";
import dropdown from "../../assets/images/down-arrow.png";
import dollar from "../../assets/images/dollar.png";
import group from "../../assets/images/group.png";
import handimg from "../../assets/images/handimg.png";
import key from "../../assets/images/key.png";
import menu from "../../assets/images/menu.png";
import offer from "../../assets/images/offer.png";
import pay from "../../assets/images/pay.png";
import printing from "../../assets/images/printing.png";
import statistics from "../../assets/images/statistics.png";
import userimg from "../../assets/images/userimg.png";
import React, { useState, useEffect ,useContext} from "react";
import Merchants from "../Merchants/Merchants";
import { getDataRequest } from "../../redux/Actions/PostDataAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLocationRequest } from "../../redux/Actions/PostDataAction";
import { LocationContext } from "../LocationProvider";
// import Registration from '../Registration/Registration'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Sidenavbar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { locationBtn, setLocationBtn } = useContext(LocationContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  // dispatch(getDataRequest())

  useEffect(() => {
    dispatch(getDataRequest());
  }, []);

  const getLocationhangle = () => {
    console.log("clicking");

    dispatch(getDataRequest());
  };

  const datafromapi = useSelector((state) => state.postData.data);
  console.log("data api api ", datafromapi);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //     dispatch(getLocationRequest())

  const AAlocationdata = useSelector((state) => state.getlocationdata.data);
  console.log("AA", AAlocationdata);
  const goToupdate = (locationIddata) => {
    dispatch(getLocationRequest(locationIddata));

    if (AAlocationdata) {
      navigate("/outlet/Registration", { state: { APidata: AAlocationdata } });
    }
  };
 
  const [currentIndex,setCurrentIndex]=useState();

 

  return (
    <>
      <div className="sidenav">
        <div className="pagelinks">
          <div className="resnamelocation">
            <img src={Thalapa} alt="" className="resimg" />
            <div>
              <br />
              <p className="resname">Thalapakatti Biriyan</p>
              <div className="dropdown">
                <br />
                <p className="reslocation">Aarapalayam</p>

                <button className="dropdown-toggle" onClick={toggleDropdown}>
                  <img src={dropdown} alt="" />
                </button>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <a href="#option1" className="dropdown-item">
                      Option 1
                    </a>
                    <a href="#option2" className="dropdown-item">
                      Option 2
                    </a>
                    <a href="#option3" className="dropdown-item">
                      Option 3
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pagelink pg4">
            <img src={userimg} alt="" />
            <p>Outlet Management</p>
          </div>
          <div>
            
            <div>
              <div>
                

                {Array.isArray(datafromapi)&& datafromapi.length > 0 &&
                  datafromapi.map((location, index) => (
                    <div key={index}>
                      <button
                        className="btnlocation"
                        disabled={locationBtn}
                        style={{backgroundColor:index!==currentIndex?'white':'#67833e',color:index!==currentIndex?'#67833e':'white',opacity:index!==currentIndex?'0.7':'1.0'}}
                        onClick={() =>
                          {
                            goToupdate(datafromapi[index].locationId)
                            setLocationBtn(true);
                            setCurrentIndex(index);
                          }
                          
                        }
                       
                        // onMouseEnter={() => { 
                        //   setLocationBtn(true)
                        //   toast.error("Please fill out the required fields.", {
                        //     style: {
                        //       backgroundColor: '', // Background color
                        //       color: 'red', // Text color
                        //       fontFamily: 'Arial, sans-serif', // Font family
                        //       fontSize: '14px', // Font size
                        //       padding: '12px', // Padding,
                        //       position: "top",
                              
                    
                        //     },
                        //   });
                       
                        // }}
                        // onMouseLeave={() => setLocationBtn(true)}

                      >
                        {datafromapi[index].restaurantName}
                      </button>
                    </div>
                  ))}


              </div>

              <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenavbar;



// import "./Sidenavbar.scss";
// import Thalapa from "../../assets/images/thalappakatti-logo-anim.png";
// import dropdown from "../../assets/images/down-arrow.png";
// import userimg from "../../assets/images/userimg.png";
// import React, { useState, useEffect, useContext } from "react";
// import { getDataRequest, getLocationRequest } from "../../redux/Actions/PostDataAction";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { LocationContext } from "../LocationProvider";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Sidenavbar = () => {
//   const dispatch = useDispatch();
//   let navigate = useNavigate();
//   const { locationBtn, setLocationBtn } = useContext(LocationContext);

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isopen, setisopen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(null);

//   useEffect(() => {
//     dispatch(getDataRequest());
//   }, [dispatch]);

//   const getLocationHandle = () => {
//     console.log("clicking");
//     dispatch(getDataRequest());
//   };

//   const dataFromApi = useSelector((state) => state.postData.data);
//   console.log("data api api ", dataFromApi);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const AAlocationData = useSelector((state) => state.getlocationdata.data);
//   console.log("AA", AAlocationData);

//   const goToUpdate = (locationIdData) => {
//     dispatch(getLocationRequest(locationIdData));
//     if (AAlocationData) {
//       navigate("/outlet/Registration", { state: { APIdata: AAlocationData } });
//     }
//   };

//   return (
//     <>
//       <div className="sidenav">
//         <div className="pagelinks">
//           <div className="resnamelocation">
//             <img src={Thalapa} alt="" className="resimg" />
//             <div>
//               <br />
//               <p className="resname">Thalapakatti Biriyani</p>
//               <div className="dropdown">
//                 <br />
//                 <p className="reslocation">Aarapalayam</p>
//                 <button className="dropdown-toggle" onClick={toggleDropdown}>
//                   <img src={dropdown} alt="" />
//                 </button>
//                 {dropdownOpen && (
//                   <div className="dropdown-menu">
//                     <a href="#option1" className="dropdown-item">
//                       Option 1
//                     </a>
//                     <a href="#option2" className="dropdown-item">
//                       Option 2
//                     </a>
//                     <a href="#option3" className="dropdown-item">
//                       Option 3
//                     </a>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="pagelink pg4">
//             <img src={userimg} alt="" />
//             <p>Outlet Management</p>
//           </div>

//           <div>
//             {dataFromApi.length > 0 &&
//               dataFromApi.map((location, index) => (
//                 <div key={index}>
//                   <button
//                     className="btnlocation"
//                     disabled={locationBtn}
//                     style={{
//                       backgroundColor: index !== currentIndex ? 'white' : '#67833e',
//                       color: index !== currentIndex ? '#67833e' : 'white',
//                       opacity: index !== currentIndex ? '0.7' : '1.0'
//                     }}
//                     onClick={() => {
//                       goToUpdate(dataFromApi[index].locationId);
//                       setLocationBtn(true);
//                       setCurrentIndex(index);
//                     }}
//                     onMouseEnter={() => {
//                       if (locationBtn) {
//                         toast.error("Please fill out the required fields.", {
//                           style: {
//                             backgroundColor: 'white', // Background color
//                             color: 'red', // Text color
//                             fontFamily: 'Arial, sans-serif', // Font family
//                             fontSize: '14px', // Font size
//                             padding: '12px', // Padding
//                           },
//                         });
//                       }
//                     }}
//                     onMouseLeave={() => setLocationBtn(true)}
//                   >
//                     {dataFromApi[index].restaurantName}
//                   </button>
//                 </div>
//               ))}
//           </div>

//           <ToastContainer
//             position="top-center"
//             autoClose={3000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidenavbar;

















// import "./Sidenavbar.scss";
// import Thalapa from "../../assets/images/thalappakatti-logo-anim.png";
// import dropdown from "../../assets/images/down-arrow.png";
// import userimg from "../../assets/images/userimg.png";
// import React, { useState, useEffect, useContext } from "react";
// import { getDataRequest, getLocationRequest } from "../../redux/Actions/PostDataAction";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { LocationContext } from "../LocationProvider";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Sidenavbar = () => {
//   const dispatch = useDispatch();
//   let navigate = useNavigate();
//   const { locationBtn, setLocationBtn } = useContext(LocationContext);

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isopen, setisopen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(null);

//   useEffect(() => {
//     dispatch(getDataRequest());
//   }, [dispatch]);

//   const getLocationHandle = () => {
//     console.log("clicking");
//     dispatch(getDataRequest());
//   };

//   const dataFromApi = useSelector((state) => state.postData.data);
//   console.log("data api api ", dataFromApi);

//   const toggleDropdown = () => {
    // setDropdownOpen(!dropdownOpen);
//   };

//   const AAlocationData = useSelector((state) => state.getlocationdata.data);
//   console.log("AA", AAlocationData);

//   const goToUpdate = (locationIdData) => {
//     dispatch(getLocationRequest(locationIdData));
//     if (AAlocationData) {
//       navigate("/outlet/Registration", { state: { APIdata: AAlocationData } });
//     }
//   };



//   // if(locationBtn)
//   //   {
//   //     toast.error("Please fill out the required fields.", {
//   //       style: {
//   //         backgroundColor: 'white', // Background color
//   //         color: 'red', // Text color
//   //         fontFamily: 'Arial, sans-serif', // Font family
//   //         fontSize: '14px', // Font size
//   //         padding: '12px', // Padding
//   //       },
//   //     });
//   //   }
//   const handleMouseEnter = () => {


   
     
    
//   };

//   const handleMouseLeave = () => {
//     // You can perform any action on mouse leave if required
//   };

//   return (
//     <>
//       <div className="sidenav">
//         <div className="pagelinks">
//           <div className="resnamelocation">
//             <img src={Thalapa} alt="" className="resimg" />
//             <div>
//               <br />
//               <p className="resname">Thalapakatti Biriyani</p>
//               <div className="dropdown">
//                 <br />
//                 <p className="reslocation">Aarapalayam</p>
//                 <button className="dropdown-toggle" onClick={toggleDropdown}>
//                   <img src={dropdown} alt="" />
//                 </button>
//                 {dropdownOpen && (
//                   <div className="dropdown-menu">
//                     <a href="#option1" className="dropdown-item">
//                       Option 1
//                     </a>
//                     <a href="#option2" className="dropdown-item">
//                       Option 2
//                     </a>
//                     <a href="#option3" className="dropdown-item">
//                       Option 3
//                     </a>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="pagelink pg4">
//             <img src={userimg} alt="" />
//             <p>Outlet Management</p>
//           </div>

//           <div>



//             {Array.isArray(dataFromApi) && dataFromApi.length >0 &&
//               dataFromApi.map((location, index) => (
//                 <div key={index}>
//                   <button
//                     className="btnlocation"
//                     disabled={locationBtn}
//                     style={{
//                       backgroundColor: index !== currentIndex ? 'white' : '#67833e',
//                       color: index !== currentIndex ? '#67833e' : 'white',
//                       opacity: index !== currentIndex ? '0.7' : '1.0'
//                     }}
//                     onClick={() => {
//                       goToUpdate(dataFromApi[index].locationId);
//                       setLocationBtn(true);
//                       setCurrentIndex(index);
//                     }}


//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     {dataFromApi[index].restaurantName}
//                   </button>
//                 </div>
//               ))}
//           </div>

//           <ToastContainer
//             position="top-center"
//             autoClose={3000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidenavbar;






















