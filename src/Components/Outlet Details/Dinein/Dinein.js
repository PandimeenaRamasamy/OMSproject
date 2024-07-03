
import React, { useState,useImperativeHandle,useEffect } from "react";

import "./Dinein.scss";
import { FaExclamation } from 'react-icons/fa';
import Tooltip from '../../Tooltip/Tooltip';
import { useDispatch,useSelector } from "react-redux";
import info from "../../../assets/images/info.png";

import { getLocationId } from "../../../redux/Actions/PostDataAction";
import addphoto from "../../../assets/images/Addphotos.png";


const Dinein = React.forwardRef((props,ref) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [DineinselectedButton, setDineinselectedButton] = useState(false);
  const [InteractiveselectedButton, setInteractiveselectedButton] = useState(false); 
  const [CheckinselectedButton, setCheckinselectedButton] = useState(false);
  const [ReservationinselectedButton, setReservationinselectedButton] =useState(false);  
  const [Interactivedinein, setInteractivedinein] = useState("");
  const [Mergentdigitvaliadtion, setMergentdigitvaliadtion] = useState("no");

  const data = useSelector((state) => state.getlocationdata.data);  
  const loactiondata = useSelector((state) => state.locationiddata.locationId);

  const datafromapi = useSelector((state) => state.postData.data);
  const data2 = useSelector((state) => state.registration.data);

  const [Outletdetails, setOutletdetails] = useState({

    locationId:data2 && data2||"",
    dineIn: "",
    highChair: "no",
    interactiveDineIn: "",
    merchant4DigitValidation: "no",
    checkIn: {
      maximumPeopleAllowedOnline: "",
      maximumPeopleAllowedOffline: "",
      lateShowTime:"",
      autoCancelTime: "",
      abandonTime: "",
      autoAssign: "no",
    },
    reservation: {
      minimumPeopleAllowed: "",
      maximumPeopleAllowed: "",
      reservationServiceTimeFrom: "",
      reservationServiceTimeTo: "",
      days: [],
      bufferDays: "",
    },
  });



  
  
 


  const [dineinerrors, setDineInErrors] = useState({
   
    dineIn: "",
    highChair: "",
    interactiveDineIn: "",
    merchant4DigitValidation: "",
    checkIn: {
      maximumPeopleAllowedOnline: "",
      maximumPeopleAllowedOffline: "",
      lateShowTime: "",
      autoCancelTime: "",
      abandonTime: "",
      autoAssign: "",
    },
    reservation: {
      minimumPeopleAllowed: "",
      maximumPeopleAllowed: "",
      reservationServiceTimeFrom: "",
      reservationServiceTimeTo: "",
      days: [],
      bufferDays: "",
    },
  });
  // const data=[
  //       {
  //           "location": {
  //               "id": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
  //               "merchantId": "8dfe7674-709d-431c-a233-628e839ecc76",
  //               "restaurantName": "A2B",
  //               "name": "arunaa",
  //               "phone": "+91 587283487r2",
  //               "email": "fdyu11@gmail.com",
  //               "addressLine1": "71,Kamarajar st,New Meenakshi Nagar,New Ramnad Road Madurai.",
  //               "addressLine2": null,
  //               "addressLine3": null,
  //               "city": "Madurai",
  //               "state": "TamilNadu",
  //               "pinCode": "625009",
  //               "country": "India",
  //               "attributes": "{\"cuisines\": [\"Fast Food\", \"North Indian\", \"Fast Food\", \"North Indian\"], \"amenities\": [\"free-wifi\", \"free-wifi\"], \"gstNumber\": \"erry4639\", \"BankDetails\": {\"ifscCode\": \"SBI4365\", \"accountNumber\": \"123345789380\", \"AccountHolderName\": \"arun\"}, \"websiteLink\": \"www.rest.com\", \"FSSAIDetails\": {\"documents\": \"a5ccd036-5c81-4d24-922d-a80008cc0182\", \"isEnabled\": \"yes\", \"expirationDate\": \"024-7-12\", \"registerNumber\": \"8610764743\"}, \"FaceBookLink\": \"rest.fb.com\", \"DineInDetails\": {\"dineIn\": \"enabled\", \"checkIn\": {\"autoAssign\": \"yes\", \"abandonTime\": \"00:15Am\", \"lateShowTime\": \"15:24\", \"autoCancelTime\": \"12:45\", \"maximumPeopleAllowedOnline\": \"25\", \"maximumPeopleAllowedOffline\": null}, \"highChair\": \"no\", \"reservation\": {\"days\": [\"wednesday\", \"sunday\"], \"bufferDays\": 3, \"maximumPeopleAllowed\": \"25\", \"minimumPeopleAllowed\": \"2\", \"reservationServiceTimeTo\": \"15:24\", \"reservationServiceTimeFrom\": \"00:00AM\"}, \"interactiveDineIn\": \"enabled\", \"merchant4DigitValidation\": \"enabled\"}, \"instagramLink\": \"rest_insta\", \"SafetyMeasures\": \"We sanitize all tables and chairs after every use\", \"WhatsappNumber\": \"6578740562764958\", \"RestaurantNumber\": \"436789908295\"}"
  //           },
  //           "media": [
  //               {
  //                   "entityId": "4eedcaf5-b1cf-4025-bbb9-09b313cf61b8",
  //                   "entityType": "LOGO",
  //                   "fileName": "oms_1718802295219_fa66d701-1479-419c-8bf8-02f669aaa66b",
  //                   "mimeType": "image/webp",
  //                   "sortOrder": null,
  //                   "tag": null
  //               }
  //           ],
  //           "availabilityDtos": []
  //       }
  //   ]
  const [checkedDays, setCheckedDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  // useEffect(() => {
    
  //   if (Array.isArray(data) && data.length > 0 && data[0].location) {
      
  //     if (data[0].location.attributes) {
  //       try {
  //         const attributes = JSON.parse(data[0].location.attributes);
  //         const dineInDetails = attributes.DineInDetails || {};
  //         const checkInDetails = dineInDetails.checkIn || {};
  //         const reservationDetails = dineInDetails.reservation || {};
  //         console.log("checkInDetails", checkInDetails);

  //         setOutletdetails({
  //           locationId:data2 && data2||data[0].location.id,
  //           dineIn: dineInDetails.dineIn || "",
  //           highChair: dineInDetails.highChair||"no",
          

  //           checkIn: {
  //             maximumPeopleAllowedOnline: checkInDetails.maximumPeopleAllowedOnline || "",
  //             maximumPeopleAllowedOffline: checkInDetails.maximumPeopleAllowedOffline || "",
  //             lateShowTime: checkInDetails.lateShowTime || "",
  //             autoCancelTime: checkInDetails.autoCancelTime || "",
  //             abandonTime: checkInDetails.abandonTime || "",
  //             autoAssign: checkInDetails.autoAssign || "no",
  //           },
  //           reservation: {
  //             minimumPeopleAllowed: reservationDetails.minimumPeopleAllowed || "",
  //             maximumPeopleAllowed: reservationDetails.maximumPeopleAllowed || "",
  //             reservationServiceTimeFrom: reservationDetails.reservationServiceTimeFrom || "",
  //             reservationServiceTimeTo: reservationDetails.reservationServiceTimeTo || "",
  //             days: reservationDetails.days || [],
  //             bufferDays: reservationDetails.bufferDays || "",
  //           },
  //         });
  //         setDineinselectedButton(!!dineInDetails.dineIn);
  //         setInteractiveselectedButton(dineInDetails.interactiveDineIn ? "yes" : "no");
  //         if(dineInDetails.merchant4DigitValidation)
  //           {
  //             setMergentdigitvaliadtion("yes")
              
  //             setMergentdigitvaliadtion("yes");
  //           }

  //           if(dineInDetails.highChair)
  //             {
  //               setDineinselectedButton(true);
  //             }
  //         setCheckinselectedButton(!!dineInDetails.checkIn);
  //         setReservationinselectedButton(!!dineInDetails.reservation);
  //         setCheckedDays(
  //           (reservationDetails.days || []).reduce((acc, day) => {
  //             acc[day.toLowerCase()] = true;
  //             return acc;
  //           }, {})
  //         );
  //       } catch (error) {
  //         console.error("Failed to parse attributes", error);
  //       }
  //     }
  //   } else {
  //     console.log("Location data not present");
  //   }
  // }, [data]);
  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem("Dinein"));
    if (savedData) {


      const newCheckedDays = {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
      };

      savedData?.reservation?.days.forEach((day) => {
        newCheckedDays[day] = true;
      });
      setCheckedDays(newCheckedDays);
      if(savedData?.merchant4DigitValidation)
        {
          setMergentdigitvaliadtion("yes");
        }
      setOutletdetails({
        locationId:data2 && data2||"",
      
        dineIn: savedData.dineIn || "",
        highChair: savedData.highChair || "no",
        interactiveDineIn: savedData.interactiveDineIn || "",
        merchant4DigitValidation: savedData.merchant4DigitValidation || "no",
      
        checkIn: {
          maximumPeopleAllowedOnline: savedData.checkIn?.maximumPeopleAllowedOnline || "",
          maximumPeopleAllowedOffline: savedData.checkIn?.maximumPeopleAllowedOffline || "",
          lateShowTime: savedData.checkIn?.lateShowTime || "",
          autoCancelTime: savedData.checkIn?.autoCancelTime || "",
          abandonTime: savedData.checkIn?.abandonTime || "",
          autoAssign: savedData.checkIn?.autoAssign || "no",
        },
        reservation: {
          minimumPeopleAllowed: savedData?.reservation?.minimumPeopleAllowed || "",
          maximumPeopleAllowed: savedData?.reservation?.maximumPeopleAllowed || "",
          reservationServiceTimeFrom: savedData?.reservation?.reservationServiceTimeFrom || "",
          reservationServiceTimeTo: savedData?.reservation?.reservationServiceTimeTo || "",
          days: savedData?.reservation?.days || [],
          bufferDays: savedData?.reservation?.bufferDays || "",
        },
      });
    }
     


    if(savedData?.highChair==="yes"||savedData?.highChair==="Yes")
      {
        setDineinselectedButton(true);
      }

    if(savedData==="yes")  
      {
        setInteractiveselectedButton(true);
      }

     if( savedData?.checkIn)
      {
        setCheckinselectedButton(true);
      } 
     if(savedData?.reservation)
      {
        setReservationinselectedButton(true);
      } 






    // Clear sessionStorage on page refresh
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("registrationform");
      sessionStorage.removeItem("Restaurantdata");
      sessionStorage.removeItem("Location");
      sessionStorage.removeItem("Fssai");
      sessionStorage.removeItem("Bankdetails");
      sessionStorage.removeItem("Basicdetail");
      sessionStorage.removeItem("Resimage");
      sessionStorage.removeItem("Dinein");
      sessionStorage.removeItem("Pickup");
      sessionStorage.removeItem("Delivery");
      sessionStorage.removeItem("Kitchen");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return() => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
     
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0 && data[0].location) {
      if (data[0].location.attributes) {
        try {
          const attributes = JSON.parse(data[0].location.attributes);
          const dineInDetails = attributes.DineInDetails || {};
          const reservationDetails = dineInDetails.reservation || {};
          const days = reservationDetails.days || [];

          const newCheckedDays = {
            Monday: false,
            Tuesday: false,
            Wednesday: false,
            Thursday: false,
            Friday: false,
            Saturday: false,
            Sunday: false,
          };

          days.forEach((day) => {
            newCheckedDays[day] = true;
          });

          setCheckedDays(newCheckedDays);
          if(dineInDetails?.merchant4DigitValidation)
            {
              setMergentdigitvaliadtion("yes");
            }

          setOutletdetails({
            locationId: loactiondata&& loactiondata||null,
            dineIn: dineInDetails.dineIn || "",
            highChair: dineInDetails.highChair || "no",
            interactiveDineIn: dineInDetails.interactiveDineIn || "",
            merchant4DigitValidation: dineInDetails.merchant4DigitValidation || "no",
          
            checkIn: {
              maximumPeopleAllowedOnline: dineInDetails.checkIn?.maximumPeopleAllowedOnline || "",
              maximumPeopleAllowedOffline: dineInDetails.checkIn?.maximumPeopleAllowedOffline || "",
              lateShowTime: dineInDetails.checkIn?.lateShowTime || "",
              autoCancelTime: dineInDetails.checkIn?.autoCancelTime || "",
              abandonTime: dineInDetails.checkIn?.abandonTime || "",
              autoAssign: dineInDetails.checkIn?.autoAssign || "no",
            },
            reservation: {
              minimumPeopleAllowed: reservationDetails.minimumPeopleAllowed || "",
              maximumPeopleAllowed: reservationDetails.maximumPeopleAllowed || "",
              reservationServiceTimeFrom: reservationDetails.reservationServiceTimeFrom || "",
              reservationServiceTimeTo: reservationDetails.reservationServiceTimeTo || "",
              days: reservationDetails.days || [],
              bufferDays: reservationDetails.bufferDays || "",
            },
          });


          if(dineInDetails?.highChair==="yes"||dineInDetails?.highChair==="Yes")
            {
              setDineinselectedButton(true);
            }

          if(Mergentdigitvaliadtion==="yes")  
            {
              setInteractiveselectedButton(true);
            }

           if( dineInDetails?.checkIn)
            {
              setCheckinselectedButton(true);
            } 
           if(dineInDetails?.reservation)
            {
              setReservationinselectedButton(true);
            } 




        } catch (error) {
          console.error("Failed to parse attributes", error);
        }
      }
    } else {
      console.log("Location data not present");
    }
  }, [data, data2]);
  // const handleDayChange = (day) => {
  //   const updatedDays = Outletdetails.reservation.days.includes(day)
  //     ? Outletdetails.reservation.days.filter((d) => d !== day)
  //     : [...Outletdetails.reservation.days, day];
  //   setOutletdetails({
  //     ...Outletdetails,
  //     reservation: {
  //       ...Outletdetails.reservation,
  //       days: updatedDays,
  //     },
  //   });
  // };



  const handleDayChange = (day) => {
    const currentDays = Outletdetails.reservation.days || [];
    const updatedDays = currentDays.includes(day)
      ? currentDays.filter((d) => d !== day)
      : [...currentDays, day];
    setOutletdetails({
      ...Outletdetails,
      reservation: {
        ...Outletdetails.reservation,
        days: updatedDays,
      },
    });

    setCheckedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

   
  const handleDineinEnable = (e) => {
    e.preventDefault();
    setDineinselectedButton(true);
    setOutletdetails({ ...Outletdetails, dineIn: e.target.value });
  };

  const handleDineinDisable = (e) => {
    e.preventDefault();
    setDineinselectedButton(false);
    setOutletdetails({ ...Outletdetails, dineIn: e.target.value });
  };

  const handleInteractiveEnable = (e) => {
    e.preventDefault();
    setInteractiveselectedButton(true);
  };

  const handleInteractiveDisable = (e) => {
    e.preventDefault();
    setInteractiveselectedButton(false);
  };
  const handleCheckinEnable = (e) => {
    e.preventDefault();
    setCheckinselectedButton(true);
  };

  const handleCheckinDisable = (e) => {
    e.preventDefault();
    setCheckinselectedButton(false);
  };
  const handleReservationEnable = (e) => {
    e.preventDefault();
    setReservationinselectedButton(true);
  };

  const handleReservationDisable = (e) => {
    e.preventDefault();
    setReservationinselectedButton(false);
  };

  const Interactivefield = (enordis, button) => {
    setInteractivedinein(button);
    setOutletdetails({ ...Outletdetails, interactiveDineIn: enordis });
  };

  const merchantvalidationfield = (enordis, button) => {
    setMergentdigitvaliadtion(button);
    setOutletdetails({ ...Outletdetails, merchant4DigitValidation: enordis });
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    alert(`Selected option: ${selectedOption}`);
  };

  
  const handleKeyPress = (event) => {
   
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  };

  const getFormData=()=>{
    return Outletdetails;


}

  useImperativeHandle(ref,()=>({
    getFormData,
    validate,


}))
const validate=()=>{
  const errors={
    checkIn:{},
  };
  let isValid=true;
  if(CheckinselectedButton && !Outletdetails.checkIn.maximumPeopleAllowedOnline)
    {
      errors.checkIn.maximumPeopleAllowedOnline="Please Fill this Field"
      isValid=false;
    }
    if(CheckinselectedButton && !Outletdetails.checkIn.maximumPeopleAllowedOffline)
      {
        errors.checkIn.maximumPeopleAllowedOffline="Please Fill this Field"
        isValid=false;
      }
      if(CheckinselectedButton && !Outletdetails.checkIn.lateShowTime)
        {
          errors.checkIn.lateShowTime="Please Fill this Field"
          isValid=false;
        }
        if(CheckinselectedButton && !Outletdetails.checkIn.autoCancelTime)
          {
            errors.checkIn.autoCancelTime="Please Fill this Field"
            isValid=false;
          }
          if(CheckinselectedButton && !Outletdetails.checkIn.abandonTime)
            {
              errors.checkIn.autoCancelTime="Please Fill this Field"
              isValid=false;
            }
    
    setDineInErrors(errors);
    return isValid;
}

const handleBlur = (event, field) => {
  if (event.target.value.trim() === '') {
    alert(`${field} must not be empty`);
  }
};

 

  return (
    <div className="main-divdine">
      <div className="submain-divdine">
        <div className="headingdine">
          <h5>Dine in Details 
             <Tooltip message="dining in">
                    <div className="icon-background">
                      <img src={info} alt="" />
                        {/* <FaExclamation color="black" size={5} /> */}
                    </div>
                </Tooltip>
         

          </h5>
         
        </div>

  {/* dine in details */}

        <div className="Dinein1">
          <form>
            <div className="">
              <div className="lables1">
                <label htmlFor="BusinessLegalName" className="label">
                  Dine in 
                </label>
              </div>
              <div className="lablesdine">
                <label htmlFor="BusinessLegalName" className="labeldine">
                  Please mention the dine in service
                </label>
              </div>

              <div style={{ marginTop: "10px" }} className="enabledisablebtn">
                <button
                  className={` ${DineinselectedButton ? "blue" : "inactive"}`}
                  value="enable"
                  onClick={(event) => handleDineinEnable(event)}
                >
                  Enable{" "}
                </button>
                <button
                  className={` ${
                    !DineinselectedButton ? "blue" : "inactive"
                  }`}
                  value="disable"
                  onClick={(event) => handleDineinDisable(event)}
                >
                  {" "}
                  Disable{" "}
                </button>
              </div>

              {DineinselectedButton && (
                <div>
                  <div style={{ marginTop: "20px" }}>
                    <div className="labelhighchair">
                      <label
                        htmlFor="BusinessLegalName"
                        className="labelhighchair1"
                      >
                        High Chair
                      </label>
                    </div>
                    <div className="labelhighchair">
                      <label
                        htmlFor="BusinessLegalName"
                        className="labelhighchair2"
                      >
                        Chair with long legs for children
                      </label>
                    </div>
                  </div>

                  <div className="highchairradio">
                    <div className="highchairradio1">
                      <label htmlFor="" style={{display:'flex',flexDirection:'row'}} >
                      <input
                        type="radio"
                        value="yes"
                        className="radioStyledine"
                        checked={Outletdetails.highChair === "yes"}
                        onChange={(event) =>
                          setOutletdetails({
                            ...Outletdetails,
                            highChair: event.target.value,
                          })
                        }
                      /> <span className="radionamedine">Yes</span>
                      </label>
                    
                      {/* <label className="chairradiodine">Yes</label> */}
                    </div>

                    <div className="highchairradio2">
                      <label htmlFor=""  style={{display:'flex',flexDirection:'row'}}>
                      <input
                        type="radio"
                        value="no"
                        className="radioStyledine"
                        checked={Outletdetails.highChair === "no"}
                        onChange={(event) =>
                          setOutletdetails({
                            ...Outletdetails,
                            highChair: event.target.value,
                          })
                        }
                      /> <span className="radionamedine">No</span>
                      </label>
                     

                      {/* <label className="chairradiodine">No</label> */}
                    </div>
                  </div>
                </div>
                
              )}
              {dineinerrors.highChair &&<div className="errors">{dineinerrors.highChair}</div>}
            </div>
            
          </form>
        </div>

       <hr />

 {/* Interactive details */}

        <div className="Interactive2">
          <div className="headingdine">
            <h5>Interactive Dine-in Details
            <Tooltip message="Interactive Dine-in Details">
                    <div className="icon-background" >
                        {/* <FaExclamation color="black" size={5} fontSize={20}/> */}
                        <img src={info} alt="" />
                    </div>
                </Tooltip>
            </h5>
          </div>

          <div className="">
            <div className="lables1">
              <label htmlFor="BusinessLegalName" className="label">
                Interactive Dine-in
              </label>
            </div>
            <div className="lables2Inter">
              <label htmlFor="BusinessLegalName" className="labelInteractive">
                Please mention the Interactive Dine-in service
              </label>
            </div>

            <div style={{ marginTop: "10px" }} className="enabledisablebtn">
              <button
                className={` ${
                  InteractiveselectedButton ? "blue" : "inactive"
                }`}
                value="enabled"
                onClick={(event) => handleInteractiveEnable(event)}
              >
                Enable{" "}
              </button>
              <button
                className={` ${
                  !InteractiveselectedButton ? "blue" : "inactive"
                }`}
                value="Disabled"
                onClick={(event) => handleInteractiveDisable(event)}
              >
                {" "}
                Disable{" "}
              </button>
            </div>

            {InteractiveselectedButton && (
              <div className="interactivefn">
                <form onSubmit={handleSubmit2} className="interactivefn">
                
                


                

                  

                 

                  <div className="merchantlable1">

                    <label htmlFor="BusinessLegalName" className="labelInter">
                      Merchant 4 digit Validation
                      <Tooltip message="Merchant 4 digit Validation">
                    <div className="icon-background">
                        <FaExclamation color="black" size={7} />
                    </div>
                </Tooltip>
                    </label>
                  </div>
                  <div className="merchantlable2">
                    <label htmlFor="BusinessLegalName" className="labelInter">
                      Please mention the validation service
                    </label>
                  </div>

                  <div
                    style={{ marginTop: "10px" }}
                    className="enabledisablebtn"
                  >
                    <button
                      type="button"
                      onClick={() => merchantvalidationfield("Enable", "yes")}
                      
                      className={`
                        ${Mergentdigitvaliadtion === "yes" ? "blue" : "inactive"}
                    `}
                    >
                      Enable
                    </button>

                    <button
                      type="button"
                      onClick={() => merchantvalidationfield("Disable", "no")}
                     
                      className={`
                        ${Mergentdigitvaliadtion === "no" ? "blue" : "inactive"}
                    `}
                    >
                      Disable
                    </button>
                  </div>
                  
                </form>
              </div>
            )}
          </div>
          </div>
          <hr />

{/* Checkin details */}

          <div className="checkin3">
            <div className="headingdine">
              <h5>Checkin Details</h5>
            </div>
            <div className="">
              <div className="">
                <div className="lables1">
                  <label htmlFor="BusinessLegalName" className="label">
                    Checkin
                  </label>
                </div>
                <div className="lablescheckin">
                  <label htmlFor="BusinessLegalName" className="labelcheck">
                    Please mention the checkin service
                  </label>
                </div>
                <div style={{ marginTop: "10px" }} className="enabledisablebtn">
                  <button
                    className={` ${
                      CheckinselectedButton ? "blue" : "inactive"
                    }`}
                    value="enabled"
                    onClick={(event) => handleCheckinEnable(event)}
                  >
                    Enable{" "}
                  </button>
                  <button
                    className={` ${
                      !CheckinselectedButton ? "blue" : "inactive"
                    }`}
                    value="Disabled"
                    onClick={(event) => handleCheckinDisable(event)}
                  >
                    {" "}
                    Disable{" "}
                  </button>
                </div>
                {CheckinselectedButton && (
                  <div className="checkfn">
                    <form onSubmit={handleSubmit2} className="checkfn">
                      <div>
                        <div className="checkinform1">
                          <div className="check1">
                            <label htmlFor="maximumpeopleon" id="maximuminon">
                              Maximum People allowed online
                            </label>
                            <input
                              type="text"
                              placeholder="20"
                              style={{fontSize:'14px'}}
                              id="maximuminonline"
                              value={Outletdetails.checkIn.maximumPeopleAllowedOnline}
                              maxLength={3}
                              onKeyPress={handleKeyPress}
                              onBlur={(event) => handleBlur(event, 'Maximum People allowed online')}
                              onChange={(event) => {
                                setOutletdetails({
                                  ...Outletdetails,
                                  checkIn: {
                                    ...Outletdetails.checkIn,
                                    maximumPeopleAllowedOnline:
                                      event.target.value,
                                  },
                                });
                              }}
                            />
                          </div>

                          <div className="check1">
                            <label htmlFor="maximumpeopleoff" id="maximuminoff">
                              Maximum People allowed offline
                            </label>
                            <input
                              type="text"
                              placeholder="20"
                              value={Outletdetails.checkIn.maximumPeopleAllowedOffline}
                              id="maximuminoffline"
                              style={{fontSize:'14px',padding:'10px'}}
                              maxLength={3}
                              onBlur={(event) => handleBlur(event, 'Maximum People allowed offline')}

                              onKeyPress={handleKeyPress}
                              
                              onChange={(event) => {
                                setOutletdetails({
                                  ...Outletdetails,
                                  checkIn: {
                                    ...Outletdetails.checkIn,
                                    maximumPeopleAllowedOffline:
                                      event.target.value,
                                  },
                                });
                              }}
                            />
                          </div>
                        </div>
                        <div className="checkinform2">
                          <div className="check2">
                            <label htmlFor="Lateshowtime" id="maximuminon">
                              Late show time
                              <Tooltip message=" Late show time">
                    <div className="icon-background">
                        {/* <FaExclamation color="black" size={5} /> */}
                        <img src={info} alt="" />
                    </div>
                </Tooltip>
                            </label>
                              <input
                                type="time"
                                id="maximuminonline"
                                value={Outletdetails.checkIn.lateShowTime}
                                style={{fontSize:'12px'}}
                                onBlur={(event) => handleBlur(event, 'Late show time')}
                                onChange={(event) => {
                                  setOutletdetails({
                                    ...Outletdetails,
                                    checkIn: {
                                      ...Outletdetails.checkIn,
                                      lateShowTime: event.target.value,
                                    },
                                  });
                                }}
                              />
                          </div>
                          <div className="check2">
                            <label htmlFor="AutocancelTime" id="maximuminoff">
                              Auto cancel Time
                              <Tooltip message=" Auto cancel Time">
                    <div className="icon-background">
                        {/* <FaExclamation color="black" size={5} /> */}
                        <img src={info} alt="" />
                    </div>
                </Tooltip>
                            </label>
                            <input
                              type="time"
                              id="maximuminoffline"
                              onBlur={(event) => handleBlur(event, 'Auto cancel Time')}
                              value={Outletdetails.checkIn.autoCancelTime}
                              style={{fontSize:'12px'}}
                              onChange={(event) => {
                                setOutletdetails({
                                  ...Outletdetails,
                                  checkIn: {
                                    ...Outletdetails.checkIn,
                                    autoCancelTime: event.target.value,
                                  },
                                });
                              }}
                            />
                          </div>
                          <div className="check2">
                            <label htmlFor="Abandontime" id="maximuminoff">
                              Abandon time
                              <Tooltip message=" Abandon time">
                    <div className="icon-background">
                        {/* <FaExclamation color="black" size={5} /> */}
                        <img src={info} alt="" />
                    </div>
                </Tooltip>
                            </label>
                            <input
                              type="time"
                              id="maximuminoffline"
                              value={Outletdetails.checkIn.abandonTime}
                              style={{fontSize:'12px'}}
                              onBlur={(event) => handleBlur(event, 'Abandon time')}
                              onChange={(event) => {
                                setOutletdetails({
                                  ...Outletdetails,
                                  checkIn: {
                                    ...Outletdetails.checkIn,
                                    abandonTime: event.target.value,
                                  },
                                });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="Autoassignradio">
                      <div className="auto">
                        <label
                          htmlFor="BusinessLegalName"
                          className="labelcheckin1"
                        >
                          Auto Assign option
                        </label>
                      </div>
                      <div className="auto">
                        <label
                          htmlFor="BusinessLegalName"
                          className="labelcheckin2"
                        >
                          Assign table automatically to the customer
                        </label>
                      </div>


                      
                  



                      <div className="highchairradio">
                        <div className="highchairradio1" >
                          <label htmlFor=""  style={{display:'flex',flexDirection:'row'}}>
                          <input
                            type="radio"
                            className="radioStyledine"
                            value="yes"
                            checked={Outletdetails.checkIn.autoAssign === "yes"}
                            onChange={(event) =>
                              setOutletdetails({
                                ...Outletdetails,
                                checkIn: {
                                  ...Outletdetails.checkIn,
                                  autoAssign: event.target.value,
                                },
                              })
                            }
                          /> <span className="radionamedine">Yes</span>
                          </label>
                          
                          
                        </div>
                        <div className="highchairradio2">
                          <label htmlFor=""  style={{display:'flex',flexDirection:'row'}}>
                          <input
                            type="radio"
                            value="no"
                            className="radioStyledine"
                            checked={Outletdetails.checkIn.autoAssign === "no"}
                            onChange={(event) =>
                              setOutletdetails({
                                ...Outletdetails,
                                checkIn: {
                                  ...Outletdetails.checkIn,
                                  autoAssign: event.target.value,
                                },
                              })
                            }
                          /> <span className="radionamedine">No</span>
                          </label>
                          
                         
                        </div>
                      </div>
                     </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
      

        <hr />

{/* Reservation details */}

        <div className="reservation4">
          <div className="headingdine">
            <h5>Reservation Details</h5>
          </div>
          <div className="">
            <div className="">
              <div className="reservation">
                <label htmlFor="" className="reservarionlabel">
                  Reservation
                </label>
              </div>
              <div className="lablesreserv">
                <label htmlFor="" className="labelreserv">
                  Please mention the reservation service
                </label>
              </div>
              <div style={{ marginTop: "10px" }} className="enabledisablebtn">
                <button
                  className={` ${
                    ReservationinselectedButton ? "blue" : "inactive"
                  }`}
                  value="enabled"
                  onClick={(event) => handleReservationEnable(event)}
                >
                  Enable{" "}
                </button>
                <button
                  className={` ${
                    !ReservationinselectedButton ? "blue" : "inactive"
                  }`}
                  value="Disabled"
                  onClick={(event) => handleReservationDisable(event)}
                >
                  {" "}
                  Disable{" "}
                </button>
              </div>
              {ReservationinselectedButton && (
                <div>
                  <div className="checkinform1">
                    <div className="check1">
                      <label htmlFor="maximumpeopleon" id="maximuminon">
                        Minimum no of people allowed
                      </label>
                      <input
                        type="text"
                        id="maximuminonline"
                        placeholder="5"
                        style={{fontSize:'14px'}}
                        maxLength={3}
                        value={Outletdetails.reservation.minimumPeopleAllowed}
                        onKeyPress={handleKeyPress}
                        onChange={(event) => {
                          setOutletdetails({
                            ...Outletdetails,
                            reservation: {
                              ...Outletdetails.reservation,
                              minimumPeopleAllowed: event.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="check1">
                      <label htmlFor="maximumpeopleoff" id="maximuminoff">
                        Maximum no of people allowed
                      </label>
                      <input
                        type="text"
                        placeholder="5"
                        id="maximuminoffline"
                        style={{fontSize:'14px'}}
                        maxLength={3}
                        value={Outletdetails.reservation.maximumPeopleAllowed}
                        onKeyPress={handleKeyPress}
                        onChange={(event) => {
                          setOutletdetails({
                            ...Outletdetails,
                            reservation: {
                              ...Outletdetails.reservation,
                              maximumPeopleAllowed: event.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div style={{marginTop:'20px'}}>
                  <label htmlFor="BusinessLegalName" className="lablesforreservation">
                Reservation serive time
                </label>
            
                  
                  
                  <div className="checkinform2">
                    <div className="check2">
                      <label htmlFor="Lateshowtime" id="maximuminon">
                        From
                      </label>
                      <input
                        type="time"
                        value={Outletdetails.reservation.reservationServiceTimeFrom}
                        id="maximuminonline"
                        onChange={(event) => {
                          setOutletdetails({
                            ...Outletdetails,
                            reservation: {
                              ...Outletdetails.reservation,
                              reservationServiceTimeFrom: event.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="check2">
                      <label htmlFor="AutocancelTime" id="maximuminoff">
                        To
                      </label>
                      <input
                        type="time"
                        id="maximuminoffline"
                        value={Outletdetails.reservation.reservationServiceTimeTo}
                        onChange={(event) => {
                          setOutletdetails({
                            ...Outletdetails,
                            reservation: {
                              ...Outletdetails.reservation,
                              reservationServiceTimeTo: event.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>  
                  
                  </div>
                
               
                  <div style={{marginTop:'20px'}}>
                  <label htmlFor="BusinessLegalName" className="lablesforreservation">
                    Reservation available days
                  </label>

                  {/* <div className="reservecheckbox">
                    {Object.keys(checkedDays).map((day) => (
                      <div key={day} className="checkbox-container">
                        <input
                          type="checkbox"
                          style={{ marginLeft: day === "Monday" ? "-10px" : "8px" }}
                          name={day}
                          checked={Outletdetails.reservation.days.includes(day)}
                          onChange={() => handleDayChange(day)}
                          className="radioStylecheckbox"
                        />
                        <label style={{ fontSize: "16px",marginTop:'8px' }}>{day}</label>
                      </div>
                    ))}
                  </div> */}
                    <div className="reservecheckbox">
      {Object.keys(checkedDays).map((day) => (
        <div key={day} className="checkbox-container">
          <input
            type="checkbox"
            style={{ marginLeft: day === "Monday" ? "-10px" : "8px" }}
            name={day}
            checked={checkedDays[day]}
            onChange={() => handleDayChange(day)}
            className="radioStylecheckbox"
          />
          <label style={{ fontSize: "16px", marginTop: "8px" }}>{day}</label>
        </div>
      ))}
    </div>       </div>
                  
                 <div style={{marginTop:'20px'}}>
                 <label htmlFor="BusinessLegalName" className="lablesforreservation">
                    Reservation Buffer Days
                  </label>
                  <div className="Reservation available days">
                    <div className="check2">
                      <label htmlFor="Lateshowtime" id="reservationdays">
                        Minimum no.of days before reservation should be placed
                      </label>
                      <input
                        type="text"
                        id="bufferbox"
                        value={Outletdetails.reservation.bufferDays}
                        placeholder="2 days"
                        style={{fontSize:'14px'}}
                        maxLength={3}
                        onKeyPress={handleKeyPress}
                        onChange={(event) => {
                          setOutletdetails({
                            ...Outletdetails,
                            reservation: {
                              ...Outletdetails.reservation,
                              bufferDays: event.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                 </div>
                
                </div>
              )}
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
      
        
      </div>
      <br />
    </div>
  );
});


export default Dinein;


