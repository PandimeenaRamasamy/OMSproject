
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
import { useDispatch } from 'react-redux';
import { postDineinDataRequest } from '../../../redux/Actions/PostDataAction';
import { PostRestaurantImageDataRequest } from "../../../redux/Actions/PostDataAction";
import { PostDeliveryDataRequest } from "../../../redux/Actions/PostDataAction";

import BasicDetails from "../Basicdetails/BasicDetails";
import Delivery from "../Delivery/Delivery";
import { PostPickupDataRequest } from "../../../redux/Actions/PostDataAction";
import { PostKitchenDataRequest } from "../../../redux/Actions/PostDataAction";
import { saveBasicDetailsRequest } from "../../../redux/Actions/PostDataAction";
import { Flip, ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function Reciept() {
  return <h2>Reciept</h2>;
}
function Stepform() {

  const [activeStep, setActiveStep] = useState(0);
  const dispatch=useDispatch();
   
   const pickUpformRef=useRef();
   const kitchenformRef=useRef();
   const restrauntimageref=useRef();
   const dineinref=useRef();
   const deliveryref=useRef();
   const basicDetailsref=useRef();
 
  const[pickupForm,setPickupForm]=useState("")
  const[kitchenForm,setKitchenForm]=useState("")
  const[restrauntImageForm,setrestrauntImageForm]=useState("")
  const[dineInForm,setDineInForm]=useState("")
  const [deliveryform,setDeliveryForm]=useState("");
  const[basicDetailsForm,setBasicDetailsForm]=useState('');


  const steps = [
    {
      title: "Basic Details",
      component: <BasicDetails ref={basicDetailsref}/>,
      icon: <CiUser className="image" />,
    },
    {
      title: "Restaurant Image",
      component: <RestaurantImage ref={restrauntimageref} />,
      icon: <CiImageOn className="image" />,
    },
    {
      title: "DineIn",
      component: <Dinein  ref={dineinref}/>,
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
      title: "Reciept",
      component: <Reciept />,
      icon: <BiReceipt className="image" />,
    },
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


  
 const handleSaveandNext=()=>{
    let newFormData1={}
    let isValid=true
    switch(activeStep)
    {
      
      case 0:
        newFormData1=basicDetailsref.current.getFormData()
        setBasicDetailsForm(newFormData1)
        dispatch(saveBasicDetailsRequest(newFormData1))  
        toast.success("Data submitted successfully!");
    
        break;
      case 1: isValid=restrauntimageref.current.validate();
        if(isValid)
          {
        newFormData1=restrauntimageref.current.getFormData()
        setrestrauntImageForm(newFormData1)
        dispatch(PostRestaurantImageDataRequest(newFormData1))
        toast.success("Data submitted successfully!");

          }  
          else{
            toast.error("Please fill out the required fields before moving to the next step.");
          }  
        break;
      case 2: 
      isValid=dineinref.current.validate();
        if(isValid)
          {
          newFormData1=dineinref.current.getFormData()
          setDineInForm(newFormData1)
          dispatch(postDineinDataRequest(newFormData1))

          
          }

          toast.success("Data submitted successfully!");


          break;
      case 3:
        isValid=pickUpformRef.current.validate();
        if(isValid)
          {
        newFormData1=pickUpformRef.current.getFormData()
        setPickupForm(newFormData1);
        dispatch(PostPickupDataRequest(newFormData1))
        toast.success("Data submitted successfully!");

          }
          else{
            toast.error("Please fill out the required fields before moving to the next step.");
          }  
        break;

        case 4:
          newFormData1=deliveryref.current.getFormData()
        setDeliveryForm(newFormData1);
        dispatch(PostDeliveryDataRequest(newFormData1))
        toast.success("Data submitted successfully!");

        break;

       
        case 5:
          isValid=kitchenformRef.current.validate();
          if(isValid)
            {
          newFormData1=kitchenformRef.current.getFormData()
          setKitchenForm(newFormData1)
          dispatch(PostKitchenDataRequest(newFormData1))
          toast.success("Data submitted successfully!");

          break;
            }
            else{
              toast.error("Please fill out the required fields before moving to the next step.");
            }  
        default:
          console.log(" There is no Api call") ;
          break;
      



        

    }
    console.log(dineInForm) 
    
    if(isValid)
      {
    handleNextStep();
      }

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
        <div className="Stepperformcontainer">
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

        

            <button className='save_next' onClick={handleSaveandNext}>Save & Next</button>

          </div>
        </div>
      </div>
      <ToastContainer
position="top-center"
autoClose={1600}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Flip}/>
    </div>
  );
}

export default Stepform;
