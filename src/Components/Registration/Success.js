import React, { useState } from "react";
import "./Success.scss";

const AlcoholModal = ({ onCloseRequest }) => {
  const [isChecked, setIsChecked] = useState(false);
  
  const [onboard,setonboard]=useState(false);
  
  return (
    <div className="alcoholModalsuccsees">
        <div>
        <p className="sucessmsg">Your Data was Successfully stored</p>
        </div>
     <br />

      <div className="alcoholModalButton">
        <button className="declineButton" onClick={
            ()=>{
                onCloseRequest()
                setonboard(true);
                

            }
            
            }>
          OK
        </button>
      </div>
     
    </div>
  );
};

export default AlcoholModal;
