
import React, { useState, useEffect } from "react";
import "./OutletStepperForm.scss";

import React, { useState, useEffect,useRef} from 'react';
import './OutletStepperForm.scss';

import { CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { GiPressureCooker } from "react-icons/gi";

import { CiDeliveryTruck } from "react-icons/ci";

import { BiReceipt } from "react-icons/bi";

import { CiImageOn } from "react-icons/ci";
import { ImSpoonKnife } from "react-icons/im";
import Dinein from "../Dinein/Dinein";
import Pickup from "../PickUp/Pickup";
import Kitchen from "../Kitchen/Kitchen";
import RestaurantImage from "../Restaurant Image/InputRefs";
import Pickup from "../PickUp/Pickup"
import Kitchen from '../Kitchen/Kitchen'
import RestaurantImage from '../Restaurant Image/InputRefs'
import { useDispatch } from 'react-redux';
import { postDineinDataRequest } from '../../../redux/Actions/PostDataAction';

import BasicDetails from "../Basicdetails/BasicDetails";
import Delivery from "../Delivery/Delivery";

// function Delivery() {
//   return <h2>Delivery</h2>;
// }

function Reciept() {
  return <h2>Reciept</h2>;
}
function Stepform() {

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Basic Details",
      component: <BasicDetails />,
      icon: <CiUser className="image" />,
    },
    {
      title: "Restaurant Image",
      component: <RestaurantImage />,
      icon: <CiImageOn className="image" />,
    },
    {
      title: "DineIn",
      component: <Dinein />,
      icon: <ImSpoonKnife className="image" />,
    },
    {
      title: "Pickup",
      component: <Pickup />,
      icon: <FiShoppingBag className="image" />,
    },
    {
      title: "Delivery",
      component: <Delivery />,
      icon: <CiDeliveryTruck className="image" />,
    },
    {
      title: "Kitchen",
      component: <Kitchen />,
      icon: <GiPressureCooker className="image" />,
    },
    {
      title: "Reciept",
      component: <Reciept />,
      icon: <BiReceipt className="image" />,
    },
  ];

 
  
   const dispatch=useDispatch();
   
   const pickUpformRef=useRef();
   const kitchenformRef=useRef();
   const restrauntimageref=useRef();
   const dineinref=useRef();
 
  const[pickupForm,setPickupForm]=useState("")
  const[kitchenForm,setKitchenForm]=useState("")
  const[restrauntImageForm,setrestrauntImageForm]=useState("")
  const[dineInForm,setDineInForm]=useState("")

 


  
  const [visitedSteps, setVisitedSteps] = useState(new Array(steps.length).fill(false));


  useEffect(() => {
    const updatedVisitedSteps = [...visitedSteps];
    updatedVisitedSteps[activeStep] = true;
    setVisitedSteps(updatedVisitedSteps);
  }, [activeStep]);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };


  
 const handleSaveandNext=()=>{
    let newFormData1={}
    switch(activeStep)
    {

      case 1:
        newFormData1={...newFormData1,RestrauntImage:restrauntimageref.current.getFormData()}
        setrestrauntImageForm(newFormData1)
        break;
      case 2:
          newFormData1={DineIn:dineinref.current.getFormData()}
          setDineInForm(newFormData1)
          dispatch( postDineinDataRequest(newFormData1))
          break;
          
         


        


      case 3:
        newFormData1={...newFormData1,Pickup:pickUpformRef.current.getFormData()}
        setPickupForm(newFormData1);
        break;

        case 5:
          newFormData1={...newFormData1,Kitchen:kitchenformRef.current.getFormData()}
          setKitchenForm(newFormData1)
          break;

        

    }
    console.log(dineInForm) 
    
    
    handleNextStep();

 } 
   
   

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }

  };

  const progress =
    (visitedSteps.filter((step) => step).length / steps.length) * 100;

    
    
    
  


  return (
    <div className="page-content">
      <div className="stepform">
        <div className="container">
          <div className="sub-container">
            <div className="stepper-progress">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="stepper-container">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step ${index === activeStep ? "active" : ""} ${
                    visitedSteps[index] ? "visited" : ""
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  {step.icon}
                  <div className="icon-text">{step.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="component-container">{steps[activeStep].component}</div>
      </div>
      <div className="btn-container">
        <div className="btn-footer">
          <div>
            <button className="clear_all">Clear ALL</button>
          </div>
          <div>

            <button className="save_next" onClick={handleNextStep}>
              Save & Next
            </button>

            <button className='save_next' onClick={handleSaveandNext}>Save & Next</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepform;
