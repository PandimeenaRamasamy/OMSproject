import React, { useState, useEffect, useRef } from 'react';
import './Stepform.css';
import { BiNotepad } from "react-icons/bi";
import { PiNotepadBold } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { TfiNotepad } from "react-icons/tfi";
import Restaurant from "../RestaurantDetails/Restaurant";
import Fssai from '../../Fssai/Fssai';
import BankDetails from '../BankDetails/BankDetails';
import Location from '../Location/Location';

function Stepform() {
  const [activeStep, setActiveStep] = useState(0);
   
  const [mainForm, setMainForm] = useState({});
const restaurantdetailsref=useRef();
const locationref=useRef();
const Fssairef=useRef();
  const steps = [
    { title: 'Restaurant Details', component: <Restaurant ref={restaurantdetailsref}  />, icon: <BiNotepad className='image' /> },
    { title: 'Location', component: <Location ref={locationref}  />, icon: <CiLocationOn className='image' /> },
    { title: 'FSSAI', component: <Fssai ref={Fssairef} />, icon: <PiNotepadBold className='image' /> },
    { title: 'Bank Details', component: <BankDetails />, icon: <TfiNotepad className='image' /> },
  ];

  
  const [visitedSteps, setVisitedSteps] = useState(new Array(steps.length).fill(false));

  useEffect(() => {
    const updatedVisitedSteps = [...visitedSteps];
    updatedVisitedSteps[activeStep] = true;
    setVisitedSteps(updatedVisitedSteps);
  }, [activeStep]);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };
  const handleSaveAndNext=()=>{
   let newformdata={};
   switch(activeStep)
   {
    case 0:
      newformdata={...mainForm,restaurantdetails:restaurantdetailsref.current.getFormData()};
      break;
      
        
      default:
        break;
   } 
   setMainForm(newformdata);
   console.log(newformdata);
   handleNextStep();
  }

  const progress = ((visitedSteps.filter(step => step).length) / steps.length) * 100;

  return (
    <div className="page-content">
      <div className='stepform'>
        <div className='container'>
          <div className='sub-container'>
            <div className="stepper-progress">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="stepper-container">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step ${index === activeStep ? 'active' : ''} ${visitedSteps[index] ? 'visited' : ''}`}
                  onClick={() => handleStepClick(index)}
                >
                  {step.icon}
                  <div className='icon-text'>{step.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='component-container'>
          {steps[activeStep].component}
        </div>
      </div>
      <div className='btn-container'>
        <div className='btn-footer'>
          <div>
            <button className='clear_all'>Clear ALL</button>
          </div>
          <div>
            <button className='save_next' onClick={handleSaveAndNext}>Save & Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepform;
