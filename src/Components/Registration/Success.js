import React, { useState } from "react";
import "./Success.scss";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Stepform from "../Onboarding/Steperform/Stepform";
import { getDataRequest } from "../../redux/Actions/PostDataAction";

const AlcoholModal = ({ onCloseRequest ,pathname}) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch=useDispatch();
  const AAlocationdata = useSelector((state) => state.getlocationdata.data);
  const [onboard,setonboard]=useState(false);
  let navigate = useNavigate();
  const setting=()=>{

    if(pathname==="Registraion")
      {
        console.log("setting");
        navigate('/outlet/Onboaring', { state: { pagename: "Onboaring" } });
        dispatch(getDataRequest());

      } 
    else if(pathname==="Onboarding")  
      {
        console.log("setting");
        navigate('/outlet/Outlet-Details',  { state: { pagename: "Outlet Details" } });
        dispatch(getDataRequest());
      }
   
  
   
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

export default AlcoholModal;
