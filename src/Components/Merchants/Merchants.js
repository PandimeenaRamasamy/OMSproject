import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostDataForm from "../Registration/PostData";
import Stepform from "../Onboarding/Steperform/Stepform";

const Merchants = ({ dataitem }) => {
  let navigate = useNavigate();

  const restaurantName = useSelector(
    (state) => state.registration.restaurantData.restaurantName
  );
  // console.log(restaurantName)
  const goToAbout = () => {
    navigate("./outlet");
  };

  const [branches, setbranches] = useState({
    resname: restaurantName,
    locationId: "",
  });
  let resname = "";
  
  const datafromapi = useSelector((state) => state.postData.data);

  if (datafromapi.length > 0) {
    resname = datafromapi[0].location.restaurantName;
    console.log(resname);
  }

  console.log(branches.resname);
  return (
    <div>
      Merchants
      <div>
      <div>
            {datafromapi.length > 0 &&
              datafromapi.map((location, index) => (
                <div key={index}>
                  <button   onClick={goToAbout}>
                  {datafromapi[index].location.restaurantName}
                </button>
                </div>
              
                
              ))}
          </div>
       
      </div>
    </div>
  );
};

export default Merchants;
