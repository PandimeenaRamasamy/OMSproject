import React from "react";
import "./Pendingpage.scss";
import imagerest from "../../assets/images/Pendingimage.png";
import Toggle from "./Toggle";

const Pendingpage = () => {
  return (
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
              <Toggle/>

            </div>
             <div className="DineinToggle">
              <label className="labelpending">Pick Up</label>
              <Toggle/>

            </div>

            
                <div className="DineinToggle">
                <label className="labelpending">Delivery</label>
                <Toggle/>

                </div>

            <div className="DineinToggle">
              <label className="labelpending">Completed</label>
              <h1 className="completedheading">90%</h1>

            </div>

            
          

          </div>

          <div className="btnpending">
            <button className="btnpend">Publish</button>

          </div>

           </div>
     
     
     
      </div>
    </div>
  );
};

export default Pendingpage;
