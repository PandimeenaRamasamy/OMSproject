import React, { useState,useContext } from 'react'
import "./Pendingpage.scss";
import imagerest from "../../assets/images/Pendingimage.png";
import Toggle from "./Toggle";
import { LocationContext } from "../LocationProvider";

const Pendingpage = () => {

  const { showoutlets, setshowoutlets,count,setcount} = useContext(LocationContext);


  const {  togglebutton1,
    setToggleButton1,
    togglebutton2,
    setToggleButton2,
    togglebutton3,
    setToggleButton3,

  
  } = useContext(LocationContext);

  // if(togglebutton2)
  // {
  //   count=count*
  // }



  return (
    <>
    {showoutlets&&

       <div className="pendingmain">
       <div className="pendingimg">
         <img src={imagerest}></img>
       </div>
 
       <div className="pendingcontent">
 
 
         <div className="pendingcontent1">
           <div className="pendingheading">
             <h1 className="pendingheading">Thalapakatti Biriyani (Adyar)</h1>
           </div>
           <div className="pendingbtndot">
             hth
 
           </div>
          </div>
 
          <div className="pendingcontent2">
           <div className="pendingtoggle">
             <div className="DineinToggle">
               <label className="labelpending">Dine In</label>
               <Toggle toggle={togglebutton1} settaggle={setToggleButton1}/>
 
             </div>
              <div className="DineinToggle">
               <label className="labelpending">Pick Up</label>
               <Toggle toggle={togglebutton2} settaggle={setToggleButton2}/>
 
             </div>
 
             
                 <div className="DineinToggle">
                 <label className="labelpending">Delivery</label>
                 <Toggle toggle={togglebutton3} settaggle={setToggleButton3}/>
 
                 </div>
 
             <div className="DineinToggle">
               <label className="labelpending">Completed</label>
               {/* {
                count *2.9 >=100? setcount(99):setcount(count*2.9)
               } */}
               <h1 className="completedheading">

              {count}

                
                
                %</h1>
 
             </div>
 
             
           
 
           </div>
 
           <div className="btnpending">
             <button className="btnpend">Publish</button>
 
           </div>
 
            </div>
      
      
      
       </div>
     </div>
}</>
   
  );
};

export default Pendingpage;
