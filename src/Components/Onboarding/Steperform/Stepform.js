import React, { useState, useEffect, useRef } from "react";
import "./Stepform.scss";
import { BiNotepad } from "react-icons/bi";
import { PiNotepadBold } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { TfiNotepad } from "react-icons/tfi";
import Restaurant from "../RestaurantDetails/Restaurant";
import Fssai from "../../Onboarding/Fssai/Fssai";
import BankDetails from "../BankDetails/BankDetails";
import Location from "../Location/Location";
import { useDispatch } from "react-redux";
import { postOnBoardingDataRequest } from "../../../redux/Actions/PostDataAction";
import { useNavigate } from 'react-router-dom';
import Outlet from '../../Outletnavbar/Outlet.scss'

function Stepform({data}) {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [mainForm, setMainForm] = useState({});
  const restaurantDetailsRef = useRef();
  const locationRef = useRef();
  const fssaiRef = useRef();
  const bankRef = useRef();

  {data && data.map((location, index) => (
    console.log("datasteperform",location.location.id)) )}



  const steps = [
    {
      title: "RestaurantDetails",
      component: <Restaurant ref={restaurantDetailsRef} data={data}/>,
      icon: <BiNotepad className="image" />,
    },
    {
      title: "Location",
      component: <Location ref={locationRef} data={data} />,
      icon: <CiLocationOn className="image" />,
    },
    {
      title: "FSSAI",
      component: <Fssai ref={fssaiRef} data={data}/>,
      icon: <PiNotepadBold className="image" />,
    },
    {
      title: "BankDetails",
      component: <BankDetails ref={bankRef} data={data}/>,
      icon: <TfiNotepad className="image" />,
    },
  ];

  const [visitedSteps, setVisitedSteps] = useState(
    new Array(steps.length).fill(false)
  );

  useEffect(() => {
    const updatedVisitedSteps = [...visitedSteps];
    updatedVisitedSteps[activeStep] = true;
    setVisitedSteps(updatedVisitedSteps);
  }, [activeStep]);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const handleSaveAndNext = () => {
    let isValid = true;
    let newFormData = { ...mainForm };

    switch (activeStep) {
      case 0:
        isValid = restaurantDetailsRef.current.validate();
        if (isValid) {
          newFormData = {
            ...newFormData,
            restaurant_details: restaurantDetailsRef.current.getFormData(),
          };
        }
        break;
      case 1:
        isValid = locationRef.current.getValidate();
        if (isValid) {
          newFormData = {
            ...newFormData,
            location_details: locationRef.current.getFormData(),
          };
        }
        break;
      case 2:
        newFormData = {
          ...newFormData,
          fssai_details: fssaiRef.current.getFormData(),
        };
        break;
      case 3:
        newFormData = {
          ...newFormData,
          bank_details: bankRef.current.getFormData(),
        };
        console.log(newFormData);
        break;
      default:
        break;
    }

    if (isValid) {
      setMainForm(newFormData);
      handleNextStep(newFormData);
    }
  };

  const clearAll = () => {
    if (
      restaurantDetailsRef.current &&
      restaurantDetailsRef.current.resetForm
    ) {
      restaurantDetailsRef.current.resetForm();
    }
    if (locationRef.current && locationRef.current.resetForm) {
      locationRef.current.resetForm();
    }
    if (fssaiRef.current && fssaiRef.current.resetForm) {
      fssaiRef.current.resetForm();
    }
    if (bankRef.current && bankRef.current.resetForm) {
      bankRef.current.resetForm();
    }
    setMainForm({});
  };

  const handleNextStep = (formData) => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      dispatch(postOnBoardingDataRequest(formData));
    }
  };
  const categories = ['Registration', 'OnBoarding', 'Outlet Details','Subscription'];
  let navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState('Registration');

  
  const handleCategoryClick = (category) => {
      setActiveCategory(category);
    
  };
  const Registarionnavigation = () => {
      navigate('./PostDataForm')
     };

   const StepperFormnavigation=()=>{
      navigate('/Stepform')}

  const progress =(visitedSteps.filter((step) => step).length / steps.length) * 100;

  return (
    <>
    
    <div className="page-contentonboard">
      <div className="stepformonboard">
        <div className="containeronboard">
          <div className="sub-containeronboard">
            <div className="stepper-progressonboard">
              <div
                className="progress-baronboard"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="stepper-containeronboard">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`steponboard ${
                    index === activeStep ? "activeonboard" : ""
                  } ${visitedSteps[index] ? "visitedonboard" : ""}`}
                  onClick={() => handleStepClick(index)}
                >
                  {step.icon}
                  <div className="icon-textonboard">{step.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="component-containeronboard">
          {steps[activeStep].component}
        </div>
      </div>
      <div className="btn-containeronboard">
        <div className="btn-footer1onboard">
          <div>
            <button className="clear_allonboard" onClick={clearAll}>
              Clear ALL
            </button>
          </div>
          <div>
            <button className="save_nextonboard" onClick={handleSaveAndNext}>
              Save & Next
            </button>
          </div>
        </div>
      </div>
    </div>
   
    </>
  );
}

export default Stepform;
