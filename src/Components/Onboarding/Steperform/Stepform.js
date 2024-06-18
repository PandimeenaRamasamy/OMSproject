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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Stepform() {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [mainForm, setMainForm] = useState({});
  const restaurantDetailsRef = useRef();
  const locationRef = useRef();
  const fssaiRef = useRef();
  const bankRef = useRef();

  const steps = [
    {
      title: "RestaurantDetails",
      component: <Restaurant ref={restaurantDetailsRef} />,
      icon: <BiNotepad className="image" />,
    },
    {
      title: "Location",
      component: <Location ref={locationRef} />,
      icon: <CiLocationOn className="image" />,
    },
    {
      title: "FSSAI",
      component: <Fssai ref={fssaiRef} />,
      icon: <PiNotepadBold className="image" />,
    },
    {
      title: "BankDetails",
      component: <BankDetails ref={bankRef} />,
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
    if (index > activeStep) {
      let isValid = true;
      switch (activeStep) {
        case 0:
          isValid = restaurantDetailsRef.current.validate();
          break;
        case 1:
          isValid = locationRef.current.getValidate();
          break;
        case 2:
          isValid = fssaiRef.current.validate();
          break;
        default:
          break;
      }
      if (!isValid) {
        toast.error("Please fill out the required fields before moving to the next step.");
        return;
      }
    }
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
        isValid = fssaiRef.current.validate();
        if (isValid) {
          newFormData = {
            ...newFormData,
            fssai_details: fssaiRef.current.getFormData(),
          };
        }
        break;
      case 3:
        isValid = bankRef.current.validate();
        if (isValid) {
          newFormData = {
            ...newFormData,
            bank_details: bankRef.current.getFormData(),
          };
        }
        break;
      default:
        break;
    }

    if (isValid) {
      setMainForm(newFormData);
      handleNextStep(newFormData);
    } else {
      toast.error("Please fill out the required fields.", {
        style: {
          backgroundColor: '', // Background color
          color: 'red', // Text color
          fontFamily: 'Arial, sans-serif', // Font family
          fontSize: '14px', // Font size
          padding: '12px', // Padding,
          position: "top",
          

        },
      });
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
      toast.success("Data submitted successfully!");

    } else {
      dispatch(postOnBoardingDataRequest(formData));
      toast.success("Data submitted successfully!");
    }
  };

  const progress =
    (visitedSteps.filter((step) => step).length / steps.length) * 100;

  return (
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
      {/* Render ToastContainer from react-toastify */}
      <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
    </div>
  );
}

export default Stepform;
