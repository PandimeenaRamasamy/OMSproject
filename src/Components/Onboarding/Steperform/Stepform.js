import React, { useState, useEffect, useRef } from "react";
import "./Stepform.scss";

import Restaurant from "../RestaurantDetails/Restaurant";
import Fssai from "../../Onboarding/Fssai/Fssai";
import BankDetails from "../BankDetails/BankDetails";
import Location from "../Location/Location";
import { useDispatch, useSelector } from "react-redux";
import { postOnBoardingDataRequest,setOnboardingForm } from "../../../redux/Actions/PostDataAction";
import Success from '../../Registration/Success'
import { useNavigate } from 'react-router-dom';
import Outlet from '../../Outletnavbar/Outlet.scss'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Stepform({data}) {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [mainForm, setMainForm] = useState({});
  const restaurantDetailsRef = useRef();
  const locationRef = useRef();
  const fssaiRef = useRef();
  const bankRef = useRef();
  const navigate=useNavigate();

  {data && data.map((location, index) => (
    console.log("datasteperform",location.location.id)) )}
    const success=useSelector((state)=>state.onBoard.data)



  const steps = [
    {
      title: "Restaurant Details",
      component: <Restaurant ref={restaurantDetailsRef} data={data}/>,
      icon: <svg width="24" height="24" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.25 8C3.25 7.80109 3.32902 7.61032 3.46967 7.46967C3.61032 7.32902 3.80109 7.25 4 7.25H10C10.1989 7.25 10.3897 7.32902 10.5303 7.46967C10.671 7.61032 10.75 7.80109 10.75 8C10.75 8.19891 10.671 8.38968 10.5303 8.53033C10.3897 8.67098 10.1989 8.75 10 8.75H4C3.80109 8.75 3.61032 8.67098 3.46967 8.53033C3.32902 8.38968 3.25 8.19891 3.25 8ZM19.75 4.25V19.25C19.75 19.8467 19.5129 20.419 19.091 20.841C18.669 21.2629 18.0967 21.5 17.5 21.5H2.5C1.90326 21.5 1.33097 21.2629 0.90901 20.841C0.487053 20.419 0.25 19.8467 0.25 19.25V4.25C0.25 3.65326 0.487053 3.08097 0.90901 2.65901C1.33097 2.23705 1.90326 2 2.5 2H4.75C4.75 1.60218 4.90804 1.22064 5.18934 0.93934C5.47064 0.658035 5.85218 0.5 6.25 0.5H13.75C14.1478 0.5 14.5294 0.658035 14.8107 0.93934C15.092 1.22064 15.25 1.60218 15.25 2H17.5C18.0967 2 18.669 2.23705 19.091 2.65901C19.5129 3.08097 19.75 3.65326 19.75 4.25ZM6.25 3.5H13.75V2.75V2H6.25V3.5ZM18.25 4.25C18.25 4.05109 18.171 3.86032 18.0303 3.71967C17.8897 3.57902 17.6989 3.5 17.5 3.5H15.25C15.25 3.89782 15.092 4.27936 14.8107 4.56066C14.5294 4.84196 14.1478 5 13.75 5H6.25C5.85218 5 5.47064 4.84196 5.18934 4.56066C4.90804 4.27936 4.75 3.89782 4.75 3.5H2.5C2.30109 3.5 2.11032 3.57902 1.96967 3.71967C1.82902 3.86032 1.75 4.05109 1.75 4.25V19.25C1.75 19.4489 1.82902 19.6397 1.96967 19.7803C2.11032 19.921 2.30109 20 2.5 20H17.5C17.6989 20 17.8897 19.921 18.0303 19.7803C18.171 19.6397 18.25 19.4489 18.25 19.25V4.25ZM14.5 11H4C3.80109 11 3.61032 11.079 3.46967 11.2197C3.32902 11.3603 3.25 11.5511 3.25 11.75C3.25 11.9489 3.32902 12.1397 3.46967 12.2803C3.61032 12.421 3.80109 12.5 4 12.5H14.5C14.6989 12.5 14.8897 12.421 15.0303 12.2803C15.171 12.1397 15.25 11.9489 15.25 11.75C15.25 11.5511 15.171 11.3603 15.0303 11.2197C14.8897 11.079 14.6989 11 14.5 11ZM14.5 14.75H4C3.80109 14.75 3.61032 14.829 3.46967 14.9697C3.32902 15.1103 3.25 15.3011 3.25 15.5C3.25 15.6989 3.32902 15.8897 3.46967 16.0303C3.61032 16.171 3.80109 16.25 4 16.25H14.5C14.6989 16.25 14.8897 16.171 15.0303 16.0303C15.171 15.8897 15.25 15.6989 15.25 15.5C15.25 15.3011 15.171 15.1103 15.0303 14.9697C14.8897 14.829 14.6989 14.75 14.5 14.75Z" fill="#2F2F2F"/>
      </svg>
      
      ,
    },
    {
      title: "Location",
      component: <Location ref={locationRef} data={data} />,
      icon:<svg width="26" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1573_3984)">
      <path d="M12 6C11.2089 6 10.4355 6.2346 9.77772 6.67412C9.11992 7.11365 8.60723 7.73836 8.30448 8.46927C8.00173 9.20017 7.92252 10.0044 8.07686 10.7804C8.2312 11.5563 8.61216 12.269 9.17157 12.8284C9.73098 13.3878 10.4437 13.7688 11.2196 13.9231C11.9956 14.0775 12.7998 13.9983 13.5307 13.6955C14.2616 13.3928 14.8864 12.8801 15.3259 12.2223C15.7654 11.5645 16 10.7911 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12C11.6044 12 11.2178 11.8827 10.8889 11.6629C10.56 11.4432 10.3036 11.1308 10.1522 10.7654C10.0009 10.3999 9.96126 9.99778 10.0384 9.60982C10.1156 9.22186 10.3061 8.86549 10.5858 8.58579C10.8655 8.30608 11.2219 8.1156 11.6098 8.03843C11.9978 7.96126 12.3999 8.00087 12.7654 8.15224C13.1308 8.30362 13.4432 8.55996 13.6629 8.88886C13.8827 9.21776 14 9.60444 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12Z" fill="#2F2F2F"/>
      <path d="M12.0001 24.0001C11.158 24.0044 10.3272 23.8069 9.57713 23.4241C8.82709 23.0413 8.17966 22.4844 7.68907 21.8001C3.87807 16.5431 1.94507 12.5911 1.94507 10.0531C1.94507 7.3863 3.00443 4.82877 4.89011 2.94309C6.77579 1.05741 9.33332 -0.00195312 12.0001 -0.00195312C14.6668 -0.00195312 17.2243 1.05741 19.11 2.94309C20.9957 4.82877 22.0551 7.3863 22.0551 10.0531C22.0551 12.5911 20.1221 16.5431 16.3111 21.8001C15.8205 22.4844 15.173 23.0413 14.423 23.4241C13.673 23.8069 12.8421 24.0044 12.0001 24.0001ZM12.0001 2.18105C9.91248 2.18343 7.91108 3.01377 6.43494 4.48992C4.95879 5.96607 4.12845 7.96747 4.12607 10.055C4.12607 12.0651 6.01907 15.7821 9.45507 20.5211C9.74676 20.9228 10.1294 21.2498 10.5718 21.4753C11.0141 21.7008 11.5036 21.8184 12.0001 21.8184C12.4966 21.8184 12.986 21.7008 13.4284 21.4753C13.8707 21.2498 14.2534 20.9228 14.5451 20.5211C17.9811 15.7821 19.8741 12.0651 19.8741 10.055C19.8717 7.96747 19.0413 5.96607 17.5652 4.48992C16.089 3.01377 14.0877 2.18343 12.0001 2.18105Z" fill="#2F2F2F"/>
      </g>
      <defs>
      <clipPath id="clip0_1573_3984">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      
    },
    {
      title: "FSSAI",
      component: <Fssai ref={fssaiRef} data={data}/>,
      icon:<svg width="24" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10C6.20435 10 5.44129 10.3161 4.87868 10.8787C4.31607 11.4413 4 12.2044 4 13C4 13.7957 4.31607 14.5587 4.87868 15.1213C5.44129 15.684 6.20435 16 7 16H11C11.7957 16 12.5587 15.684 13.1213 15.1213C13.6839 14.5587 14 13.7957 14 13C14 12.2044 13.6839 11.4413 13.1213 10.8787C12.5587 10.3161 11.7957 10 11 10H7ZM12 13C12 13.2652 11.8946 13.5196 11.7071 13.7071C11.5196 13.8947 11.2652 14 11 14H7C6.73478 14 6.48043 13.8947 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13C6 12.7348 6.10536 12.4804 6.29289 12.2929C6.48043 12.1054 6.73478 12 7 12H11C11.2652 12 11.5196 12.1054 11.7071 12.2929C11.8946 12.4804 12 12.7348 12 13ZM14 19C14 19.2652 13.8946 19.5196 13.7071 19.7071C13.5196 19.8947 13.2652 20 13 20H5C4.73478 20 4.48043 19.8947 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19C4 18.7348 4.10536 18.4805 4.29289 18.2929C4.48043 18.1054 4.73478 18 5 18H13C13.2652 18 13.5196 18.1054 13.7071 18.2929C13.8946 18.4805 14 18.7348 14 19ZM16.536 3.12102L14.878 1.46502C14.4149 0.999267 13.864 0.629977 13.2572 0.378513C12.6504 0.127049 11.9998 -0.00159798 11.343 1.49812e-05H5C3.67441 0.00160284 2.40356 0.528897 1.46622 1.46624C0.528882 2.40357 0.00158786 3.67442 0 5.00002V19C0.00158786 20.3256 0.528882 21.5965 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H13C14.3256 23.9984 15.5964 23.4711 16.5338 22.5338C17.4711 21.5965 17.9984 20.3256 18 19V6.65702C18.0019 6.0001 17.8735 5.34934 17.6222 4.74239C17.3709 4.13543 17.0017 3.58435 16.536 3.12102ZM15.122 4.53502C15.2627 4.67745 15.3893 4.83317 15.5 5.00002H13V2.50002C13.1671 2.60954 13.3226 2.73587 13.464 2.87702L15.122 4.53502ZM16 19C16 19.7957 15.6839 20.5587 15.1213 21.1213C14.5587 21.684 13.7957 22 13 22H5C4.20435 22 3.44129 21.684 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V5.00002C2 4.20437 2.31607 3.44131 2.87868 2.8787C3.44129 2.31609 4.20435 2.00002 5 2.00002H11V5.00002C11 5.53045 11.2107 6.03916 11.5858 6.41423C11.9609 6.7893 12.4696 7.00002 13 7.00002H16V19Z" fill="#2F2F2F"/>
      </svg>
      
    },
    {
      title: "BankDetails",
      component: <BankDetails ref={bankRef} data={data}/>,
      icon: <svg width="24" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.535 3.12202L14.879 1.46402C14.4157 0.998333 13.8646 0.629159 13.2576 0.377864C12.6507 0.126569 11.9999 -0.00185599 11.343 2.02654e-05H5C3.67441 0.00160812 2.40356 0.528902 1.46622 1.46624C0.528882 2.40358 0.00158786 3.67443 0 5.00002V19C0.00158786 20.3256 0.528882 21.5965 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H13C14.3256 23.9984 15.5964 23.4711 16.5338 22.5338C17.4711 21.5965 17.9984 20.3256 18 19V6.65702C18.0016 6.0002 17.873 5.34959 17.6215 4.74281C17.37 4.13604 17.0007 3.58515 16.535 3.12202ZM15.121 4.53602C15.2628 4.67734 15.3898 4.83282 15.5 5.00002H13V2.50002C13.1669 2.61134 13.3227 2.7386 13.465 2.88002L15.121 4.53602ZM16 19C16 19.7957 15.6839 20.5587 15.1213 21.1213C14.5587 21.684 13.7956 22 13 22H5C4.20435 22 3.44129 21.684 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V5.00002C2 4.20437 2.31607 3.44131 2.87868 2.8787C3.44129 2.31609 4.20435 2.00002 5 2.00002H11V5.00002C11 5.53045 11.2107 6.03916 11.5858 6.41423C11.9609 6.78931 12.4696 7.00002 13 7.00002H16V19ZM13 9.00002C13.2652 9.00002 13.5196 9.10538 13.7071 9.29291C13.8946 9.48045 14 9.73481 14 10C14 10.2652 13.8946 10.5196 13.7071 10.7071C13.5196 10.8947 13.2652 11 13 11H5C4.73478 11 4.48043 10.8947 4.29289 10.7071C4.10536 10.5196 4 10.2652 4 10C4 9.73481 4.10536 9.48045 4.29289 9.29291C4.48043 9.10538 4.73478 9.00002 5 9.00002H13ZM14 14C14 14.2652 13.8946 14.5196 13.7071 14.7071C13.5196 14.8947 13.2652 15 13 15H5C4.73478 15 4.48043 14.8947 4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14C4 13.7348 4.10536 13.4805 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4805 14 13.7348 14 14ZM13.808 17.413C13.9634 17.6269 14.0279 17.8936 13.9872 18.1548C13.9466 18.416 13.8041 18.6505 13.591 18.807C12.5778 19.529 11.3778 19.9432 10.135 20C9.40888 19.9965 8.70482 19.7501 8.135 19.3C7.807 19.075 7.682 19 7.435 19C6.76643 19.1035 6.13562 19.3769 5.603 19.794C5.39175 19.9446 5.13024 20.0072 4.87369 19.9686C4.61715 19.93 4.38565 19.7932 4.22808 19.5871C4.07052 19.381 3.99922 19.1217 4.02925 18.864C4.05927 18.6063 4.18827 18.3704 4.389 18.206C5.27018 17.522 6.32828 17.1036 7.439 17C8.10513 17.0107 8.74912 17.2409 9.271 17.655C9.50889 17.869 9.81517 17.9913 10.135 18C10.9527 17.9388 11.739 17.6594 12.412 17.191C12.6266 17.0355 12.8942 16.9715 13.1559 17.0131C13.4177 17.0547 13.6522 17.1986 13.808 17.413Z" fill="#2F2F2F"/>
      </svg>
      
    },
  ];

  const [visitedSteps, setVisitedSteps] = useState(
    new Array(steps.length).fill(false)
  );
  const [successmgs, setsuccessmgs] = useState(false);
  
  useEffect(() => {
    const updatedVisitedSteps = [...visitedSteps];
    updatedVisitedSteps[activeStep] = true;
    setVisitedSteps(updatedVisitedSteps);
  }, [activeStep]);

  let restaurantdata={}
  let locationdata={}
  let Fssaidata={}
  let Bankdetailsdata={}

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
          
          dispatch(postOnBoardingDataRequest(newFormData));

         


        }
        restaurantdata=restaurantDetailsRef.current.getFormData();
        sessionStorage.setItem(
          "Restaurantdata",
          JSON.stringify(restaurantdata)
        );
        break;
      case 1:
        isValid = locationRef.current.getValidate();
        if (isValid) {
          newFormData = {
            ...newFormData,
            location_Details: locationRef.current.getFormData(),
      
          };
          dispatch(postOnBoardingDataRequest(newFormData));
         
        }
        locationdata=locationRef.current.getFormData();
        sessionStorage.setItem(
          "Location",
          JSON.stringify(locationdata)
        );
        break;
      case 2:
        isValid = fssaiRef.current.validate();
        if (isValid) {
          newFormData = {
            ...newFormData,
            fssai_details: fssaiRef.current.getFormData(),
          };
          dispatch(postOnBoardingDataRequest(newFormData));
         
        }
        Fssaidata=fssaiRef.current.getFormData();
        sessionStorage.setItem(
          "Fssai",
          JSON.stringify(Fssaidata)
        );
        break;
      case 3:
        isValid = bankRef.current.validate();
        if (isValid) {
          newFormData = {
            ...newFormData,
            bank_details: bankRef.current.getFormData(),
          };
          dispatch(postOnBoardingDataRequest(newFormData));

         
           
        toast.success("Data has been stored successfully!");
        setTimeout(() => {
          navigate('/outlet/Outlet-Details',  { state: { pagename: "Outlet Details" } });
        }, 3000);

        }
        Bankdetailsdata=bankRef.current.getFormData();
        sessionStorage.setItem(
          "Bankdetails",
          JSON.stringify(Bankdetailsdata)
        );

        // toast.success("All yor Data submitted successfully!");
       





          // navigate('/outlet/Outlet-Details');
        

        // navigate('/outlet/Outlet-Details');
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
     
      toast.success("Data has been stored successfully!");
      
    
  

      

    } else {
      

      
    }
  };
  const handleCloseSuccessModal = () => {
    setsuccessmgs(false);
    clearAll();
  };
  const categories = ['Registration', 'OnBoarding', 'Outlet Details','Subscription'];


  const [activeCategory, setActiveCategory] = useState('Registration');

  
  const handleStepClick = (index) => {
      setActiveStep(index);
    
  };
  const Registarionnavigation = () => {
      navigate('./PostDataForm')
     };

   const StepperFormnavigation=()=>{
      navigate('/Stepform')}

  const progress =(visitedSteps.filter((step) => step).length / steps.length) * 100;
  console.log("hello",success)


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
                   onClick={()=>handleStepClick(index)}               >
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
    {successmgs   && (
            <div className="alcoholModalOverlaysuccess">
              <Success onCloseRequest={handleCloseSuccessModal} pathname="Onboarding" />
            </div>
          )}
   
    </>
  );
}

export default Stepform;
