import React, { useState } from "react";
import "./Onboardsuccess.scss";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataRequest } from "../../../redux/Actions/PostDataAction";

const Onboradsucess = ({ onCloseRequest }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch=useDispatch();
  const AAlocationdata = useSelector((state) => state.getlocationdata.data);
  const [onboard,setonboard]=useState(false);
  let navigate = useNavigate();
  const setting=()=>{
   
    console.log("setting");
    navigate('/outlet/Onboaring', { state: { APidata: AAlocationdata } });
    dispatch(getDataRequest());
   
  }

  return (
    <div className="alcoholModalsuccsees">
        <div>
        <p className="sucessmsg">Your Data was Successfully stored</p>
        </div>
     <br />

      <div className="alcoholModalButton">
        <button className="declineButton" onClick={()=>{
                onCloseRequest();
                setting()

            }
            
            }>
          OK
        </button>
      </div>
     

     
    </div>
  );
};

export default Onboradsucess;
