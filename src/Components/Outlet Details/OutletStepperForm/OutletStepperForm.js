import "./OutletStepperForm.scss";
import React, { useState, useEffect, useRef } from 'react';
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
import { useDispatch } from 'react-redux';
import { postDineinDataRequest, PostRestaurantImageDataRequest, PostDeliveryDataRequest, PostPickupDataRequest, PostKitchenDataRequest, saveBasicDetailsRequest } from '../../../redux/Actions/PostDataAction';
import BasicDetails from "../Basicdetails/BasicDetails";
import Delivery from "../Delivery/Delivery";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Receipt() {
  return <h2>Receipt</h2>;
}

function Stepform() {
  const [outletactiveStep, setOutletActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Array(7).fill(false));
  const [validSteps, setValidSteps] = useState(new Array(7).fill(false)); // State to track valid steps
  const dispatch = useDispatch();
  const pickUpformRef = useRef();
  const kitchenformRef = useRef();
  const restrauntimageref = useRef();
  const dineinref = useRef();
  const deliveryref = useRef();
  const basicDetailsref = useRef();

  const [pickupForm, setPickupForm] = useState("");
  const [kitchenForm, setKitchenForm] = useState("");
  const [restrauntImageForm, setrestrauntImageForm] = useState("");
  const [dineInForm, setDineInForm] = useState("");
  const [deliveryform, setDeliveryForm] = useState("");
  const [basicDetailsForm, setBasicDetailsForm] = useState('');

  const outletsteps = [
    {
      title: "Basic Details",
      component: <BasicDetails ref={basicDetailsref} />,
      icon: <CiUser className="image" />,
    },
    {
      title: "Restaurant Image",
      component: <RestaurantImage ref={restrauntimageref} />,
      icon: <CiImageOn className="image" />,
    },
    {
      title: "DineIn",
      component: <Dinein ref={dineinref} />,
      icon: <ImSpoonKnife className="image" />,
    },
    {
      title: "Pickup",
      component: <Pickup ref={pickUpformRef} />,
      icon: <FiShoppingBag className="image" />,
    },
    {
      title: "Delivery",
      component: <Delivery ref={deliveryref} />,
      icon: <CiDeliveryTruck className="image" />,
    },
    {
      title: "Kitchen",
      component: <Kitchen ref={kitchenformRef} />,
      icon: <GiPressureCooker className="image" />,
    },
    {
      title: "Receipt",
      component: <Receipt />,
      icon: <BiReceipt className="image" />,
    },
  ];

  const [outletvisitedSteps, setOutletVisitedSteps] = useState(new Array(outletsteps.length).fill(false));

  useEffect(() => {
    const updatedVisitedSteps = [...outletvisitedSteps];
    updatedVisitedSteps[outletactiveStep] = true;
    setOutletVisitedSteps(updatedVisitedSteps);
  }, [outletactiveStep]);

  const handleStepClick = (index) => {
    if (index !== outletactiveStep) {
      const updatedVisitedSteps = [...outletvisitedSteps];
      for (let i = index + 1; i < outletsteps.length; i++) {
        updatedVisitedSteps[i] = false;
      }
      setOutletVisitedSteps(updatedVisitedSteps);
      setOutletActiveStep(index);
    }
  };

  const handleSaveandNext = async () => {
    let newFormData1 = {};
    let isValid = true;
    switch (outletactiveStep) {
      case 0:
        newFormData1 = basicDetailsref.current.getFormData();
        setBasicDetailsForm(newFormData1);
        dispatch(saveBasicDetailsRequest(newFormData1));
        setValidSteps((prev) => {
          const updated = [...prev];
          updated[outletactiveStep] = true;
          return updated;
        });
        toast.success("Data submitted successfully!");
        break;
      case 1:
        newFormData1 = restrauntimageref.current.getFormData();
        setrestrauntImageForm(newFormData1);
        dispatch(PostRestaurantImageDataRequest(newFormData1));
        setValidSteps((prev) => {
          const updated = [...prev];
          updated[outletactiveStep] = true;
          return updated;
        });
        toast.success("Data submitted successfully!");
        break;
      case 2:
        isValid = dineinref.current.validate();
        if (isValid) {
          newFormData1 = dineinref.current.getFormData();
          setDineInForm(newFormData1);
          dispatch(postDineinDataRequest(newFormData1));
          setCompletedSteps((prev) => {
            const updated = [...prev];
            updated[outletactiveStep] = true;
            return updated;
          });
          setValidSteps((prev) => {
            const updated = [...prev];
            updated[outletactiveStep] = true;
            return updated;
          });
          toast.success("Data submitted successfully!");
        }
        break;
      case 3:
        isValid = pickUpformRef.current.validate();
        if (isValid) {
          newFormData1 = pickUpformRef.current.getFormData();
          setPickupForm(newFormData1);
          dispatch(PostPickupDataRequest(newFormData1));
          setCompletedSteps((prev) => {
            const updated = [...prev];
            updated[outletactiveStep] = true;
            return updated;
          });
          setValidSteps((prev) => {
            const updated = [...prev];
            updated[outletactiveStep] = true;
            return updated;
          });
          toast.success("Data submitted successfully!");
        } else {
          toast.error("Please fill out the required fields before moving to the next step.");
        }
        break;
      case 4:
        newFormData1 = deliveryref.current.getFormData();
        setDeliveryForm(newFormData1);
        dispatch(PostDeliveryDataRequest(newFormData1));
        setCompletedSteps((prev) => {
          const updated = [...prev];
          updated[outletactiveStep] = true;
          return updated;
        });
        setValidSteps((prev) => {
          const updated = [...prev];
          updated[outletactiveStep] = true;
          return updated;
        });
        toast.success("Data submitted successfully!");
        break;
      case 5:
        isValid = kitchenformRef.current.validate();
        if (isValid) {
          newFormData1 = kitchenformRef.current.getFormData();
          setKitchenForm(newFormData1);
          dispatch(PostKitchenDataRequest(newFormData1));
          setCompletedSteps((prev) => {
            const updated = [...prev];
            updated[outletactiveStep] = true;
            return updated;
          });
          setValidSteps((prev) => {
            const updated = [...prev];
            updated[outletactiveStep] = true;
            return updated;
          });
          toast.success("Data submitted successfully!");
        } else {
          toast.error("Please fill out the required fields before moving to the next step.");
        }
        break;
      default:
        console.log("There is no Api call");
        break;
    }

  
      handleNextStep();
  };

  const handleNextStep = () => {
    if (outletactiveStep < outletsteps.length - 1) {
      setOutletActiveStep(outletactiveStep + 1);
    }
  };


  const progress = (outletvisitedSteps.filter((step) => step).length / outletsteps.length) * 100;

  return (
    <div className="page-content">
      <div className="stepform">
        <div className="Stepperformcontainer">
          <div className="sub-container">
            <div className="stepper-progress">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="stepper-container">
              {outletsteps.map((step, index) => (
                <div
                  key={index}
                  className={`step ${completedSteps[index] ? "completed" : ""} ${validSteps[index] ? "valid" : ""} ${
                    outletvisitedSteps[index] ? "visited" : ""
                  } ${index === outletactiveStep ? "active" : ""}`}
                  onClick={() => handleStepClick(index)}
                >
                  {step.icon}
                  <div className="icon-text">{step.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="component-container">
          {outletsteps[outletactiveStep].component}
        </div>
      </div>
      <div className="btn-footer">
        <button className="save_next" onClick={handleSaveandNext}>
          Save & Next
        </button>
        <button className="clear_all" >
          Clear All
        </button>
        <ToastContainer position="top-center" transition={Flip} />
      </div>
    </div>
  );
}

export default Stepform;
