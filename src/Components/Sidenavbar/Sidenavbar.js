// import "./Sidenavbar.scss";
// import Thalapa from "../../assets/images/thalappakatti-logo-anim.png";
// import dropdown from "../../assets/images/down-arrow.png";
// import dollar from "../../assets/images/dollar.png";
// import group from "../../assets/images/group.png";
// import handimg from "../../assets/images/handimg.png";
// import key from "../../assets/images/key.png";
// import menu from "../../assets/images/menu.png";
// import offer from "../../assets/images/offer.png";
// import pay from "../../assets/images/pay.png";
// import printing from "../../assets/images/printing.png";
// import statistics from "../../assets/images/statistics.png";
// import userimg from "../../assets/images/userimg.png";
// import React, { useState, useEffect ,useContext} from "react";
// import Merchants from "../Merchants/Merchants";
// import { getDataRequest } from "../../redux/Actions/PostDataAction";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getLocationRequest } from "../../redux/Actions/PostDataAction";
// import { LocationContext } from "../LocationProvider";
// // import Registration from '../Registration/Registration'

// // const Sidenavbar = () => {
// //   const dispatch = useDispatch();
// //   let navigate = useNavigate();
// //   const { locationBtn, setLocationBtn } = useContext(LocationContext);

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isopen, setisopen] = useState(false);
//   const toggle = () => {
//     setisopen(!isopen);
//   };

//   // dispatch(getDataRequest())

//   useEffect(() => {
//     dispatch(getDataRequest());
//   }, []);

//   const getLocationhangle = () => {
//     console.log("clicking");

//     dispatch(getDataRequest());
//   };

//   const datafromapi = useSelector((state) => state.postData.data);
//   console.log("data api api ", datafromapi);

// //   const toggleDropdown = () => {
//     // setDropdownOpen(!dropdownOpen);
// //   };

//   //     dispatch(getLocationRequest())

//   const AAlocationdata = useSelector((state) => state.getlocationdata.data);
//   console.log("AA", AAlocationdata);
//   const goToupdate = (locationIddata) => {
//     dispatch(getLocationRequest(locationIddata));

//     if (AAlocationdata) {
//       navigate("/outlet/Registration", { state: { APidata: AAlocationdata } });
//     }
//   };
 
//   const [currentIndex,setCurrentIndex]=useState();

 

//   return (
//     <>
//       <div className="sidenav">
//         <div className="pagelinks">
//           <div className="resnamelocation">
//             <img src={Thalapa} alt="" className="resimg" />
//             <div>
//               <br />
//               <p className="resname">Thalapakatti Biriyan</p>
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
            
//             <div>
//               <div>
                

//                 { Array.isArray(datafromapi) && datafromapi.length > 0 &&
//                   datafromapi.map((location, index) => (
//                     <div key={index}>
//                       <button
//                         className="btnlocation"
//                         disabled={locationBtn}
//                         style={{backgroundColor:index!==currentIndex?'white':'#67833e',color:index!==currentIndex?'#67833e':'white',opacity:index!==currentIndex?'0.7':'1.0'}}
//                         onClick={() =>
//                           {
//                             goToupdate(datafromapi[index].locationId)
//                             setLocationBtn(true);
//                             setCurrentIndex(index);
//                           }
                          
//                         }

//                       >
//                         {datafromapi[index].restaurantName}
//                       </button>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidenavbar;











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
import {setName } from '../../redux/Actions/PostDataAction'
// import Registration from '../Registration/Registration'
 
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

  const [locationdata,setlocationdata]= useState();

  
 
  const handlelocalstorage=(locationdata)=>{
  console.log('location data',locationdata);
  dispatch(setName(locationdata));


  
}
const goToNew = () => {
  navigate('/outlet/Registration',{ state: { pagename: "Registration" } });
};
 
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
               
 
                { Array.isArray(datafromapi) && datafromapi.length > 0 &&
                  datafromapi.map((location, index) => (
                    <div key={index}>
                      <button
                        className="btnlocation"
                       
                        style={{backgroundColor:index!==currentIndex?'white':'#67833e',color:index!==currentIndex?'#67833e':'white',opacity:index!==currentIndex?'0.7':'1.0'}}
                        onClick={() =>
                          {
                            goToupdate(datafromapi[index].locationId)
                            setLocationBtn(true);
                            setCurrentIndex(index);
                            handlelocalstorage(datafromapi[index].locationId);
                          }
                         
                        }
 
                      >
                        {datafromapi[index].restaurantName}
                      </button>
                    </div>
                  ))}
                 
              </div>
              
            </div>
            <div className="Addoutletbtn">
                  <button onClick={goToNew} className='Addoutlet'>+ Add outlet</button>

                  </div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Sidenavbar;
