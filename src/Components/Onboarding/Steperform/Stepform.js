import React, { useState, useEffect, useRef } from 'react';
import './Stepform.css';
import { BiNotepad } from "react-icons/bi";
import { PiNotepadBold } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { TfiNotepad } from "react-icons/tfi";
import Restaurant from "../RestaurantDetails/Restaurant";
import Fssai from '../../Onboarding/Fssai/Fssai';
import BankDetails from '../BankDetails/BankDetails';
import Location from '../Location/Location';
import { useDispatch } from 'react-redux';
import { postOnBoardingDataRequest } from '../../../redux/Actions/PostDataAction';

function Stepform() {
  const dispatch=useDispatch()
  const [activeStep, setActiveStep] = useState(0); 
  const [mainForm, setMainForm] = useState({});
  const restaurantdetailsref=useRef();
  const locationref=useRef();
  const fssairef=useRef();
  const bankref=useRef();

  const steps = [
    { title: 'RestaurantDetails', component: <Restaurant ref={restaurantdetailsref}  />, icon: <BiNotepad className='image' /> },
    { title: 'Location', component: <Location ref={locationref}  />, icon: <CiLocationOn className='image' /> },
    { title: 'FSSAI', component: <Fssai ref={fssairef}  />, icon: <PiNotepadBold className='image' /> },
    { title: 'BankDetails', component: <BankDetails ref={bankref} />, icon: <TfiNotepad className='image' /> },
  ];
  let newformdata={};
  
  const [visitedSteps, setVisitedSteps] = useState(new Array(steps.length).fill(false));

  useEffect(() => {
    const updatedVisitedSteps = [...visitedSteps];
    updatedVisitedSteps[activeStep] = true;
    setVisitedSteps(updatedVisitedSteps);
  }, [activeStep]);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  
  const handleSaveAndNext=()=>{
  
   switch(activeStep)
   {
    case 0:
      newformdata={...mainForm,restaurant_details:restaurantdetailsref.current.getFormData()};
      break;
      case 1:
        newformdata={...mainForm,location_Details:locationref.current.getFormData()};
        break;
        case 2:
        newformdata={...mainForm,fssai_details:fssairef.current.getFormData()};
        break;
        case 3:
        newformdata={...mainForm,bank_details:bankref.current.getFormData()};
        break;
        default:
        break;
   } 
   setMainForm(newformdata);
   
   
   handleNextStep();
  }
  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
      
    }
    else{
      console.log("Action not fetched")
      dispatch(postOnBoardingDataRequest(mainForm))

    }
  };

  const progress = ((visitedSteps.filter(step => step).length) / steps.length) * 100;

  return (
    <div className="page-contentonboard">
      <div className='stepformonboard'>
        <div className='containeronboard'>
          <div className='sub-containeronboard'>
            <div className="stepper-progressonboard">
              <div className="progress-baronboard" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="stepper-containeronboard">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`steponboard ${index === activeStep ? 'activeonboard' : ''} ${visitedSteps[index] ? 'visitedonboard' : ''}`}
                  onClick={() => handleStepClick(index)}
                >
                  {step.icon}
                  <div className='icon-textonboard'>{step.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='component-containeronboard'>
          {steps[activeStep].component}
        </div>
      </div>
      <div className='btn-containeronboard'>
        <div className='btn-footer1onboard'>
          <div>
            <button className='clear_allonboard'>Clear ALL</button>
          </div>
          <div>
            <button className='save_nextonboard' onClick={handleSaveAndNext}>Save&Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepform;
