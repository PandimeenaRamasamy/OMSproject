// import React, { useState,useContext, useEffect } from 'react'
// import "./Pendingpage.scss";
// import imagerest from "../../assets/images/Pendingimage.png";
// import Toggle from "./Toggle";
// import { LocationContext } from "../LocationProvider";
// import { Flip, ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import ThreeDots from './ThreeDots';

// import Modal from './Modal';
// import ModalPickup from './ModalPickup';



// const Pendingpage = ({pagenaming}) => {

//   const { showoutlets, initialcounts,setinitialcounts} = useContext(LocationContext);


//   const {  togglebutton1,
//     setToggleButton1,
//     togglebutton2,
//     setToggleButton2,
//     togglebutton3,
//     setToggleButton3,
//     pagecounts,setpagecounts
//     ,publish,setpublish,
//     deleteoutlet
  
//   } = useContext(LocationContext);

//   // if(togglebutton2)
//   // {
//   //   count=count*
//   // }
//   const intialcalc=(pagecounts.Registrationc+
//     pagecounts.Restaurantc+
//     pagecounts.locationc+
//     pagecounts.Bankdetailsc+
//     pagecounts.Basicdetailsc+pagecounts.kithen)

  

  
//   useEffect(()=>{
//     if(pagecounts.delivery===0 && pagecounts.pickupc===0 && pagecounts.dineinc===0)
//       {
//         setinitialcounts((intialcalc/20)*100)
  
//       }


//     if(pagecounts.pickupc>0)
//     {
//       setinitialcounts(((intialcalc+5)/25)*100)
//       console.log("btn enabled")

//     }
//     else if(togglebutton2 && pagecounts.pickupc===0 )
//     {
//       setinitialcounts(((intialcalc)/25)*100)
//       console.log("button enabled")
    
//     }
//      if( pagecounts.pickupc>0 && !togglebutton2 )
//       {
//         setinitialcounts(((intialcalc-5)/20)*100)
//         console.log("button enabled dd")
       
//       }




//    if(pagecounts.dineinc>0)
//       {
//         setinitialcounts(((intialcalc+5)/25)*100)
  
//       }
//       else if(togglebutton1 && pagecounts.dineinc===0 )
//         {
//           setinitialcounts(((intialcalc)/25)*100)
         
      
//         }
//       if(pagecounts.delivery>0)
//         {
//           setinitialcounts(((intialcalc+6)/26)*100)
    
//         }
//         else if(togglebutton3 && pagecounts.delivery===0 )
//           {
//             setinitialcounts(((intialcalc)/25)*100)
//           ;
            
//           }
//         if(pagecounts.pickupc>0 &&pagecounts.dineinc>0)
//           {
//             setinitialcounts(((intialcalc+10)/30)*100)
      
//           }
//           else if(togglebutton1 && togglebutton2 &&  pagecounts.pickupc===0  && pagecounts.dineinc===0 )
//             {
//               setinitialcounts(((intialcalc)/30)*100)
            
              
//             }


//            if(pagecounts.dineinc>0 && pagecounts.delivery>0)
//             {
//               setinitialcounts(((intialcalc+11)/31)*100)
        
//             }
//             else if(togglebutton1 && togglebutton3 &&  pagecounts.delivery===0  && pagecounts.dineinc===0 )
//               {
//                 setinitialcounts(((intialcalc)/31)*100)
                
//               }
//              if(pagecounts.delivery>0 && pagecounts.pickupc)
//               {
//                 setinitialcounts(((intialcalc+11)/31)*100)
          
//               }
//               else if(togglebutton2 && togglebutton3 &&  pagecounts.delivery===0  && pagecounts.pickupc===0 )
//                 {
//                   setinitialcounts(((intialcalc)/31)*100)
                 
//                 }
//                if(pagecounts.delivery>0 && pagecounts.pickupc>0 && pagecounts.dineinc>0)
//                 {
//                   setinitialcounts(((intialcalc+16)/36)*100)
            
//                 }
//                 else if(togglebutton1 && togglebutton2 && togglebutton3 && pagecounts.dineinc===0&& pagecounts.delivery===0  && pagecounts.pickupc===0 )
//                   {
//                     setinitialcounts(((intialcalc)/36)*100)
                    
                    
//                   }


             

              
    

//   },[togglebutton1,togglebutton2,togglebutton3])

 
//   return (

//     <>
//     {showoutlets&& !deleteoutlet &&

//        <div className="pendingmain">
//        <div className="pendingimg">
//          <img src={imagerest}></img>
//        </div>
//        <div className="pendingcontent">
//          <div className="pendingcontent1">
//            <div className="pendingheading">
//              <h1 className="pendingheading">Thalapakatti Biriyani (Adyar)</h1>
//            </div>
//            <div className="pendingbtndot">
//             <ThreeDots/>
 
//            </div>
//           </div>
 
//           <div className="pendingcontent2">
//            <div className="pendingtoggle">
//              <div className="DineinToggle">
//                <label className="labelpending">Dine In</label>
//                <Toggle toggle={togglebutton1} settaggle={setToggleButton1} page="dinein"/>
 
//              </div>
//               <div className="DineinToggle">
//                <label className="labelpending">Pick Up</label>
//                <Toggle toggle={togglebutton2} settaggle={setToggleButton2} page="pickup"/>
//                {!togglebutton2 && <ModalPickup />}
              
 
//              </div>
             
//                  <div className="DineinToggle">
//                  <label className="labelpending">Delivery</label>
//                  <Toggle toggle={togglebutton3} settaggle={setToggleButton3} page="delivery"/>
 
//                  </div> 
//              <div className="DineinToggle">
//                <label className="labelpending">Completed</label>
//                {/* {
//                 count *2.9 >=100? setcount(99):setcount(count*2.9)
//                } */}
//                <h1 className="completedheading">
//               {/* {Math.floor((count/36)*100)} */}                
            
//                   {/* {(100/wholecount) *wholecount}  */}
//                   {Math.round(initialcounts)}%</h1> 
//              </div>
//            </div>
//            {
//             pagenaming==="PendingRequest" && 
//             <div className="btnpending">
//              <button className="btnpend" onClick={()=>{
//               if(initialcounts>=90){
//                 setpublish(true);

//               console.log("above 90")}}}>Publish</button>
//              <ToastContainer position="top-center" transition={Flip} />
//            </div>
//            }
           
//             </div>    
//        </div>

//      </div>

// }</>
   
//   );
// };

// export default Pendingpage;
import React, { useContext, useEffect } from 'react';
import './Pendingpage.scss';
import imagerest from '../../assets/images/Pendingimage.png';
import Toggle from './Toggle';
import { LocationContext } from '../LocationProvider';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThreeDots from './ThreeDots';
import ModalPickup from './ModalPickup';
import ModalDinein from './ModalDinein';
import ModalDelivery from './Modaldelivery'


const Pendingpage = ({ pagenaming }) => {
  const { showoutlets, initialcounts, setinitialcounts } = useContext(LocationContext);

  const {
    togglebutton1,
    setToggleButton1,
    togglebutton2,
    setToggleButton2,
    togglebutton3,
    setToggleButton3,
    pagecounts,
    setpagecounts,
    publish,
    setpublish,
    deleteoutlet
  } = useContext(LocationContext);

  const intialcalc = (pagecounts.Registrationc +
    pagecounts.Restaurantc +
    pagecounts.locationc +
    pagecounts.Bankdetailsc +
    pagecounts.Basicdetailsc + pagecounts.kithen);

  useEffect(() => {
    if (pagecounts.delivery === 0 && pagecounts.pickupc === 0 && pagecounts.dineinc === 0) {
      setinitialcounts((intialcalc / 20) * 100);
    }
    if (pagecounts.pickupc > 0) {
      setinitialcounts(((intialcalc + 5) / 25) * 100);
    } else if (togglebutton2 && pagecounts.pickupc === 0) {
      setinitialcounts(((intialcalc) / 25) * 100);
    }
    if (pagecounts.pickupc > 0 && !togglebutton2) {
      setinitialcounts(((intialcalc - 5) / 20) * 100);
    }
    if (pagecounts.dineinc > 0) {
      setinitialcounts(((intialcalc + 5) / 25) * 100);
    } else if (togglebutton1 && pagecounts.dineinc === 0) {
      setinitialcounts(((intialcalc) / 25) * 100);
    }
    if (pagecounts.delivery > 0) {
      setinitialcounts(((intialcalc + 6) / 26) * 100);
    } else if (togglebutton3 && pagecounts.delivery === 0) {
      setinitialcounts(((intialcalc) / 25) * 100);
    }
    if (pagecounts.pickupc > 0 && pagecounts.dineinc > 0) {
      setinitialcounts(((intialcalc + 10) / 30) * 100);
    } else if (togglebutton1 && togglebutton2 && pagecounts.pickupc === 0 && pagecounts.dineinc === 0) {
      setinitialcounts(((intialcalc) / 30) * 100);
    }
    if (pagecounts.dineinc > 0 && pagecounts.delivery > 0) {
      setinitialcounts(((intialcalc + 11) / 31) * 100);
    } else if (togglebutton1 && togglebutton3 && pagecounts.delivery === 0 && pagecounts.dineinc === 0) {
      setinitialcounts(((intialcalc) / 31) * 100);
    }
    if (pagecounts.delivery > 0 && pagecounts.pickupc) {
      setinitialcounts(((intialcalc + 11) / 31) * 100);
    } else if (togglebutton2 && togglebutton3 && pagecounts.delivery === 0 && pagecounts.pickupc === 0) {
      setinitialcounts(((intialcalc) / 31) * 100);
    }
    if (pagecounts.delivery > 0 && pagecounts.pickupc > 0 && pagecounts.dineinc > 0) {
      setinitialcounts(((intialcalc + 16) / 36) * 100);
    } else if (togglebutton1 && togglebutton2 && togglebutton3 && pagecounts.dineinc === 0 && pagecounts.delivery === 0 && pagecounts.pickupc === 0) {
      setinitialcounts(((intialcalc) / 36) * 100);
    }
  }, [togglebutton1, togglebutton2, togglebutton3]);

  return (
    <>
      {showoutlets && !deleteoutlet &&
        <div className="pendingmain">
          <div className="pendingimg">
            <img src={imagerest} alt="Pending" />
          </div>
          <div className="pendingcontent">
            <div className="pendingcontent1">
              <div className="pendingheading">
                <h1 className="pendingheading">Thalapakatti Biriyani (Adyar)</h1>
              </div>
              <div className="pendingbtndot">
                <ThreeDots />
              </div>
            </div>
            <div className="pendingcontent2">
              <div className="pendingtoggle">
                <div className="DineinToggle">
                  <label className="labelpending">Dine In</label>
                  <Toggle toggle={togglebutton1} settaggle={setToggleButton1} page="dinein" />
                </div>
                <div className="DineinToggle">
                  <label className="labelpending">Pick Up</label>
                  <Toggle toggle={togglebutton2} settaggle={setToggleButton2} page="pickup" />
                  {!togglebutton2 && <ModalPickup />}
                </div>
                <div className="DineinToggle">
                  <label className="labelpending">Delivery</label>
                  <Toggle toggle={togglebutton3} settaggle={setToggleButton3} page="delivery" />
                </div>
                <div className="DineinToggle">
                  <label className="labelpending">Completed</label>
                  <h1 className="completedheading">{Math.round(initialcounts)}%</h1>
                </div>
              </div>
              {pagenaming === "PendingRequest" &&
                <div className="btnpending">
                  <button className="btnpend" onClick={() => {
                    if (initialcounts >= 90) {
                      setpublish(true);
                    }
                  }}>Publish</button>
                  <ToastContainer position="top-center" transition={Flip} />
                </div>
              }
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Pendingpage;

