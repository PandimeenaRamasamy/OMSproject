// import React, { useState, useImperativeHandle, useEffect } from "react";
// import "./style.scss";
// import DayAndTime from "../Delivery/components/AddTime";
// // import  from "../../Assests/Image/Vector.svg";

// import { PostDeliveryDataRequest } from "../../../redux/Actions/PostDataAction";
// import AddTime from "../Delivery/components/AddTime";
// import vector from "../../../assets/images/Vector.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { getLocationId } from "../../../redux/Actions/PostDataAction";

// const Delivery = React.forwardRef((props, ref) => {
//   const [isEnable, setIsEnable] = useState(true);
//   const [showdelivery, setShowDelivery] = useState(false);
//   const [allChecked, setAllChecked] = useState(false);
//   // const data = useSelector((state) => state.getlocationdata.data);

//   const dispatch = useDispatch();
//   const reducer = useSelector((state) => state.deliveryDataReducer);

//   //opening time/ closing time
//   const [openingTime, setOpeningTime] = useState("00:00");
//   const [closingTime, setClosingTime] = useState("00:00");

//   // const [timeSlots, setTimeSlots] = useState([
//   //   {
//   //     deliveryServiceTimeFrom: "",
//   //     deliveryServiceTimeTo: "",
//   //   },
//   // ]);
//   const [timeSlots, setTimeSlots] = useState([
    
//     { deliveryServiceTimeFrom: '00.00', deliveryServiceTimeTo: '00.00' }
// ]);

// useEffect(() => {
//      // This should print 2
//      setTimeSlots({ deliveryServiceTimeFrom: '00.00', deliveryServiceTimeTo: '00.00' })
// }, []);

// console.log("time slotssssssss",timeSlots)
//   // useEffect(() => {
//   //   if (timeSlots.length === 0) {
//   //     setTimeSlots([
//   //       {
//   //         deliveryServiceTimeFrom: "",
//   //         deliveryServiceTimeTo: "",
//   //       },
//   //     ]);
//   //   }
//   // }, []);

//   //Delivery payment method
//   const [selectedMethods, setSelectedMethods] = useState([]);

//   //price details
//   const [minPriceValue, setMinPriceValue] = useState(100);
//   const [maxPriceValue, setMaxPriceValue] = useState("");

//   const [dayAndTimeComp, setDayAndTimeComp] = useState([
//     <DayAndTime
//       key={0}
//       openingTime={openingTime}
//       closingTime={closingTime}
//       setOpeningTime={setOpeningTime}
//       setClosingTime={setClosingTime}
//     />,
//   ]);

//   //packaging charge
//   const [packageCharge, setPackageCharge] = useState();

//   //for schedule delivery
//   const [scheduledDay, setScheduledDay] = useState([
//     "EOD",
//     "2D",
//     "3D",
//     "4D",
//     "5D",
//     "6D",
//     "7D",
//   ]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showScheduledDelivery, setShowScheduledDelivery] = useState(false);

//   //for maximum radius
//   const [maxRadius, setMaxRadius] = useState();
//   const [brachCount, setbrachCount] = useState();

//   const [batchOrder, setBatchOrder] = useState("no");

//   const [selectedOption, setSelectedOption] = useState("no");

//   const [feesStructure, setFeesStructure] = useState("BasedOnDistance");

//   //BOD
//   const [defaultMile, setDefaultMile] = useState();
//   const [additionalMile, setAdditionalMile] = useState();
//   const [isBOD, setIsBOD] = useState(false);

//   //Flat Fee
//   const [flatFee, setFlatFee] = useState();
//   const [isFlatFee, setIsFlatFee] = useState(false);

//   //Inhouse
//   const [inHouse, setInHouse] = useState(false);
//   const [showInHouse, setShowInHouse] = useState(false);

//   //3rd party
//   const [thirdParty, setThirdParty] = useState(false);
//   const [showThirdParty, setShowTHirdParty] = useState(false);

//   const [doorDash, setDoorDash] = useState();
//   const [dunzo, setDunzo] = useState();
//   const [uberEats, setUberEats] = useState();

//   const [showDunzo, setShowDunzo] = useState();
//   const [showDoorDash, setShowDoorDash] = useState();
//   const [showUberEats, setShowUberEats] = useState();

//   const [selectedThirdParties, setSelectedThirdParties] = useState([]);
//   const [deliveryOption, setDeliveryOption] = useState("no");

//   const data = {
//     location: {
//       id: "c43f3a9c-60c7-4443-b1da-477c2ad3c97c",
//       merchantId: "8dfe7674-709d-431c-a233-628e839ecc76",
//       restaurantName: "A2B",
//       name: "aruna",
//       phone: "+91 587283487r2",
//       email: "fdyu1@gmail.com",
//       addressLine1:
//         "71,amarajar st,New Meenakshi Nagar,New Ramnad Road Madurai.",
//       addressLine2: null,
//       addressLine3: null,
//       city: "Madurai",
//       state: "TamilNadu",
//       pinCode: "625009",
//       country: "India",
//       attributes:
//         '{"gstNumber": "seconddata12334", "DeliveryDetails": {"inHouse": {"flatFee": "enabled", "maximumRadius": "7","isEnabled": true, "batchOrder": "Yes", "feesStructure": "based on distance", "cashOnDelivery": "yes", "initial2MileAmount": "$5", "additional1MileAmount": "$1", "defaultCountOfBatchOrder": "3"}, "thirdParty": {"isEnabled": true, "doorDashId": "545238i874", "uberEatsId": "694925"}, "deliveryPayment": ["pay at store", "apple pay"], "packagingCharge": "5", "maximumOrderPrice": "$1000", "minimumOrderPrice": "$100", "scheduledDelivery": "yes", "deliverySettingTime": [], "scheduledDeliveryDuration": "EOD"}}',
//     },
//     // {\"deliveryServiceTimeTo\": \"11:00PM\", \"deliveryServiceTimeFrom\": \"08:00AM\"}, {\"deliveryServiceTimeTo\": \"10:00PM\", \"deliveryServiceTimeFrom\": \"06:00PM\"}
//     media: [],
//     availabilityDtos: [
//       {
//         createdTime: null,
//         endTime: "07:00",
//         name: "HappyHours",
//         startTime: "05:00",
//         weekDay: "5",
//       },
//       {
//         createdTime: null,
//         endTime: "12:00PM",
//         name: "lunch",
//         startTime: "08:00AM",
//         weekDay: "4",
//       },
//       {
//         createdTime: null,
//         endTime: "12:00PM",
//         name: "lunch",
//         startTime: "08:00AM",
//         weekDay: "5",
//       },
//     ],
//   };

//   // const payloadData = {

//   //   locationId:datafromapi && datafromapi[0] ?datafromapi[0].locationId:"" ,

//   //   deliverySettingTime,
//   //   deliveryPayment: selectedMethods,
//   //   scheduledDelivery: deliveryOption,
//   //   minimumOrderPrice: minPriceValue,
//   //   maximumOrderPrice: maxPriceValue,
//   //   scheduledDeliveryDuration: scheduledDay[currentIndex],
//   //   packagingCharge: packageCharge,
//   //   deliveryOption: {},
//   // };

//   // useEffect(() => {
//   //   const deliveryDetails = JSON.parse(data.location.attributes).DeliveryDetails;
//   //   setSelectedMethods(deliveryDetails.deliveryPayment || []);
//   //   setPackageCharge(deliveryDetails.packagingCharge || '');
//   //   setInHouse(deliveryDetails.isInHouseEnabled);
//   //   setShowInHouse(deliveryDetails.isInHouseEnabled);
//   //   setMaxPriceValue(deliveryDetails.maximumOrderPrice.replace('$', '') || '');
//   //   setMinPriceValue(deliveryDetails.minimumOrderPrice.replace('$', '') || '');
//   //   setDeliveryOption(deliveryDetails.scheduledDelivery);
//   //   setShowScheduledDelivery(deliveryDetails.scheduledDelivery === 'yes');
//   //   setTimeSlots(deliveryDetails.deliverySettingTime || []);
//   //   setThirdParty(deliveryDetails.isThirdPartyEnabled);
//   //   setScheduledDay[0]=deliveryDetails.scheduledDeliveryDuration
//   //   const index = scheduledDay.indexOf(deliveryDetails.scheduledDeliveryDuration);
//   //   setCurrentIndex(index);
//   //   console.log("eod",deliveryDetails.scheduledDeliveryDuration,"index",index)
//   //   console.log("delivery time",deliveryDetails.deliverySettingTime)
//   // }, []);
//   useEffect(() => {
//     console.log("useffect  time slotssssssss", timeSlots);
//   }, [timeSlots]);

 

//   const enableClick = () => {
//     setShowDelivery(true);
//     if (isEnable !== false) {
//       setIsEnable(!isEnable);
//     }
//   };

//   const disableClick = () => {
//     setShowDelivery(false);
//     if (isEnable === false) {
//       setIsEnable(!isEnable);
//     }
//   };

//   const handleCheckboxChange = (event) => {
//     const value = event.target.value;
//     setSelectedMethods((prevSelectedMethods) =>
//       prevSelectedMethods.includes(value)
//         ? prevSelectedMethods.filter((method) => method !== value)
//         : [...prevSelectedMethods, value]
//     );
//   };

//   const handleRadioChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleScheduleChange = (event) => {
//     setDeliveryOption(event.target.value);
//   };

//   const addDayAndTime = () => {
//     if (timeSlots.length < 3) {
//       setTimeSlots([
//         ...timeSlots,
//         { deliveryServiceTimeFrom: "", deliveryServiceTimeTo: "" },
//       ]);
//     }
//   };

//   const handleDelete = () => {
//     if (timeSlots.length > 1) {
//       const newArray = [...timeSlots];
//       newArray.pop();
//       setTimeSlots(newArray);
//     }
//   };

//   const handlebatchOrder = (event) => {
//     setBatchOrder(event.target.value);
//   };

//   const handleUpClick = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const handleDownClick = () => {
//     if (currentIndex < scheduledDay.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handleFeesStructure = (event) => {
//     setFeesStructure(event.target.value);
//   };

//   const toggleAll = () => {
//     if (allChecked) {
//       setAllChecked(false);
//       setShowDoorDash(false);
//       setShowDunzo(false);
//       setShowUberEats(false);
//       setSelectedThirdParties([]);
//     } else {
//       setAllChecked(true);
//       setShowDoorDash(true);
//       setShowDunzo(true);
//       setShowUberEats(true);
//       setSelectedThirdParties(["doordash", "dunzo", "uberEats"]);
//     }
//   };

//   const handleCheckboxChanges = (service, setService) => {
//     setService((prev) => {
//       const newState = !prev;
//       let newSelected = [...selectedThirdParties];
//       if (newState) {
//         newSelected.push(service);
//       } else {
//         newSelected = newSelected.filter((item) => item !== service);
//       }
//       setSelectedThirdParties(newSelected);
//       if (allChecked && !newState) {
//         setAllChecked(false);
//       }

//       return newState;
//     });
//   };

//   const deliverySettingTime = timeSlots.map((slot) => ({
//     deliveryServiceTimeFrom: slot.deliveryServiceTimeFrom,
//     deliveryServiceTimeTo: slot.deliveryServiceTimeTo,
//   }));

//   const datafromapi = useSelector((state) => state.postData.data);

//   const payloadData = {
//     locationId: datafromapi && datafromapi[0] ? datafromapi[0].locationId : "",

//     deliverySettingTime,
//     deliveryPayment: selectedMethods,
//     scheduledDelivery: deliveryOption,
//     minimumOrderPrice: minPriceValue,
//     maximumOrderPrice: maxPriceValue,
//     scheduledDeliveryDuration: scheduledDay[currentIndex],
//     packagingCharge: packageCharge,
//     deliveryOption: {},
//   };

//   if (inHouse) {
//     payloadData.deliveryOption.inHouse = {
//       isEnabled: inHouse,
//       maximumRadius: maxRadius,
//       cashInDelivery: selectedOption,
//       batchOrder: batchOrder,
//       defaultCountBatchOrder: brachCount,
//       feesStructure: feesStructure,
//       initialMileAmount: defaultMile,
//       additional1MileAmount: additionalMile,
//       flatFee: flatFee,
//     };
//     payloadData.deliveryOption.thirdParty = {
//       isEnabled: thirdParty,
//     };
//   }

//   if (thirdParty) {
//     payloadData.deliveryOption.thirdParty = {
//       isEnabled: thirdParty,
//       thirdParty: selectedThirdParties,
//       dunzoId: dunzo,
//       doorDashId: doorDash,
//       uberEatsId: uberEats,
//     };
//     payloadData.deliveryOption.inhouse = {
//       isEnabled: inHouse,
//     };
//   }

//   const handleClearAllButton = () => {
//     setTimeSlots([{ openingTime: "00:00", closingTime: "00:00" }]);
//     setSelectedMethods([]);
//     setDeliveryOption("no");
//     setMinPriceValue(100);
//     setMaxPriceValue("");
//     setPackageCharge(0);
//     setMaxRadius(0);
//     setbrachCount(0);
//     setDefaultMile(0);
//     setAdditionalMile(0);
//     setFlatFee(0);
//     setSelectedThirdParties([]);
//     setDunzo("");
//     setUberEats("");
//     setDoorDash("");
//   };

//   const getFormData = () => {
//     return payloadData;
//   };

//   useImperativeHandle(ref, () => ({
//     getFormData,
//   }));
//   const convertTo24HourFormat = (time) => {
//     const [hoursAndMinutes, period] = [time.slice(0, -2), time.slice(-2)];
//     let [hours, minutes] = hoursAndMinutes.split(":").map(Number);

//     if (period.toLowerCase() === "pm" && hours !== 12) hours += 12;
//     if (period.toLowerCase() === "am" && hours === 12) hours = 0;

//     return `${hours.toString().padStart(2, "0")}:${minutes
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   const convertTo12HourFormat = (time) => {
//     let [hours, minutes] = time.split(":").map(Number);
//     const period = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours.toString().padStart(2, "0")}:${minutes
//       .toString()
//       .padStart(2, "0")}${period}`;
//   };

//   const handleTimeChange = (index, key, value) => {
//     const updatedTimeSlots = timeSlots.map((slot, i) =>
//       i === index ? { ...slot, [key]: convertTo12HourFormat(value) } : slot
//     );
//     setTimeSlots(updatedTimeSlots);
//   };

//   return (
//     <div className="delivery">
//       <div className="delivery-header">
//         <h2>Delivery Details</h2>
//         <h3>Delivery</h3>
//         <p>Please mention the delivery service</p>
//       </div>
//       <div className="button">
//         <input
//           type="submit"
//           className={showdelivery ? "enableBtn" : "disableBtn"}
//           value="Enable"
//           onClick={enableClick}
//         />
//         <input
//           type="submit"
//           className={showdelivery ? "disableBtn" : "enableBtn"}
//           value="Disable"
//           onClick={disableClick}
//         />
//       </div>
//       {showdelivery && (
//         <div className="deliveryContent">
//           <h3>Delivery service time</h3>
//           <div className="checkBoxContainer">
//             <label>
//               <input className="checkboxdelivery" type="checkbox" />
//               <p className="cPname">Same as restaurant working time</p>
//             </label>
//           </div>
//           <div className="addTime">


//            <div>
//             <input type="time" onChange={(e)=>setTimeSlots(convertTo12HourFormat(e.target.value))}/>
//             <input type="time" onChange={(e)=>setTimeSlots(convertTo12HourFormat(e.target.value))} />
//            </div>



            
//             {/* <AddTime
//                 key={index}
//                 timeSlot={slot}
//                 setTimeSlot={(newSlot) => {
//                   const newSlots = [...timeSlots];
//                   newSlots[index] = newSlot;
//                   setTimeSlots(newSlots);
                 
//                 }}
//               /> */}

//             {timeSlots.length > 1 && (
//               <p className="deleteTime" onClick={handleDelete}>
//                 - Delete Session
//               </p>
//             )}

//             <p onClick={addDayAndTime} className="Addtimeslot">
//               + Add Time slots
//             </p>
//           </div>

//           <div className="payment">
//             <h3>Delivery Payment</h3>
//             <p>Please mention the payment methods</p>
//             <div className="paymentMethod">
//               <label>
//                 <input
//                   className="checkbox"
//                   value="cards"
//                   type="checkbox"
//                   checked={selectedMethods.includes("cards")}
//                   onChange={handleCheckboxChange}
//                 />
//                 <p className="cPname">Cards</p>
//               </label>
//               <label>
//                 <input
//                   className="checkbox"
//                   value="pay at store"
//                   type="checkbox"
//                   checked={selectedMethods.includes("pay at store")}
//                   onChange={handleCheckboxChange}
//                 />
//                 <p className="cPname">Pay at store</p>
//               </label>
//               <label>
//                 <input
//                   className="checkbox"
//                   value="apple pay"
//                   type="checkbox"
//                   checked={selectedMethods.includes("apple pay")}
//                   onChange={handleCheckboxChange}
//                 />
//                 <p className="cPname">Apple Pay</p>
//               </label>
//               <label>
//                 <input
//                   className="checkbox"
//                   value="google pay"
//                   type="checkbox"
//                   checked={selectedMethods.includes("google pay")}
//                   onChange={handleCheckboxChange}
//                 />
//                 <p className="cPname">Google Pay</p>
//               </label>
//             </div>
//           </div>

//           <div className="schedule">
//             <h3>Scheduled Delivery</h3>
//             <p>Customer can place delivery order for future/next session</p>
//             <div className="radioBtn">
//               <div className="sessionContainer">
//                 <label>
//                   <input
//                     type="radio"
//                     id="yes"
//                     name="delivery"
//                     value="yes"
//                     checked={deliveryOption === "yes"}
//                     onChange={handleScheduleChange}
//                     onClick={() => setShowScheduledDelivery(true)}
//                   />
//                   <p className="sessionName">Yes</p>
//                 </label>
//               </div>
//               <div className="sessionContainer">
//                 <label>
//                   <input
//                     type="radio"
//                     id="no"
//                     name="delivery"
//                     value="no"
//                     defaultChecked
//                     checked={deliveryOption === "no"}
//                     onChange={handleScheduleChange}
//                     onClick={() => setShowScheduledDelivery(false)}
//                   />
//                   <p className="sessionName">No</p>
//                 </label>
//               </div>
//             </div>
//           </div>
//           {showScheduledDelivery && (
//             <>
//               <div className="priceDetails">
//                 <h3>Price Detail</h3>
//                 <div className="input-container">
//                   <p>Minimum order price</p>
//                   <span className="symbol">$</span>
//                   <input
//                     type="text"
//                     value={minPriceValue}
//                     placeholder="0 - 100"
//                     onChange={(e) => {
//                       const val = e.target.value;
//                       if (!isNaN(val) && val >= 0 && val <= 100) {
//                         setMinPriceValue(val);
//                       }
//                     }}
//                     className="input1"
//                   />
//                 </div>
//                 <div className="input-container">
//                   <p className="inputcontainermaximum">Maximum order price</p>
//                   <span className="symbol">$</span>
//                   <input
//                     type="text"
//                     value={maxPriceValue}
//                     placeholder="Upto 1000"
//                     onChange={(e) => {
//                       const val = e.target.value;
//                       if (!isNaN(val) && val <= 1000) {
//                         setMaxPriceValue(val);
//                       }
//                     }}
//                     className="input"
//                   />
//                 </div>
//               </div>

//               <div className="deliveryInfo">
//                 <h3>Scheduled Delivery Duration</h3>
//                 <p>Please mention the Scheduled delivery duration</p>
//                 <div className="scheduleContainer">
//                   <div className="scheduledContent">
//                     <p>{scheduledDay[currentIndex]}</p>
//                   </div>
//                   <div className="arrow">
//                     <div className="downsideArrow" onClick={handleDownClick}>
//                       <img src={vector} alt="" />
//                     </div>
//                     <div className="upsideArrow" onClick={handleUpClick}>
//                       <img src={vector} alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="packageCharge">
//                 <h3>Packaging Charge</h3>
//                 <div className="input-container">
//                   <span className="symbol">$</span>
//                   <input
//                     type="text"
//                     placeholder="Upto 1000"
//                     value={packageCharge}
//                     onChange={(e) => {
//                       const val = e.target.value;
//                       if (!isNaN(val) && val <= 1000) {
//                         setPackageCharge(val);
//                       }
//                     }}
//                     className="input"
//                   />
//                 </div>
//               </div>
//             </>
//           )}

//           <div className="deliveryOption">
//             <h3>Delivery Option</h3>
//             <div className="deliveryOptionContainer">
//               <label>
//                 <input
//                   className="checkbox"
//                   value="in house"
//                   type="checkbox"
//                   checked={inHouse === true}
//                   onClick={() => setInHouse(!inHouse)}
//                 />
//                 <p className="cPname">Inhouse</p>
//               </label>
//               <label>
//                 <input
//                   className="checkbox"
//                   value="3rd party"
//                   type="checkbox"
//                   checked={thirdParty === true}
//                   onClick={() => setThirdParty(!thirdParty)}
//                 />
//                 <p className="cPname">3rd party</p>
//               </label>
//             </div>
//           </div>

//           {/* Inhouse */}

//           <div
//             className="inHousedeliveryoption"
//             style={{ height: showInHouse ? "850px" : "100px" }}
//           >
//             {inHouse && (
//               <div className="inhouse">
//                 <div
//                   className="header"
//                   onClick={() => setShowInHouse((inho) => !inho)}
//                 >
//                   <h3
//                     style={{
//                       fontSize: "18px",
//                       fontWeight: "500",
//                       fontFamily: "Poppins",
//                     }}
//                   >
//                     Inhouse
//                   </h3>
//                   <img
//                     className={showInHouse ? "arrowUp" : "arrowDown"}
//                     onClick={() => setShowInHouse(!showInHouse)}
//                     src={vector}
//                     alt=""
//                   />
//                 </div>
//                 {showInHouse && (
//                   <div className="body">
//                     <p style={{ fontSize: "14px", fontWeight: "400",marginTop:'-20px' }}>
//                       Use restaurant person to deliver the food
//                     </p>

//                     <div className="distance">
//                       <h5>Maximum Radius</h5>
//                       <input
//                         type="text"
//                         placeholder="in miles(Upto 100)"
//                         value={maxRadius}
//                         onChange={(e) => {
//                           const val = e.target.value;
//                           if (!isNaN(val) && val <= 100) {
//                             setMaxRadius(val);
//                           }
//                         }}
//                       />
//                     </div>

//                     <div className="cod">
//                       <h3
//                         style={{
//                           fontFamily: "Poppins",
//                           fontSize: "18px",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Cash On Delivery
//                       </h3>
//                       <p>Collect order bill amount from cutomer offline</p>
//                       <div className="radioBtn">
//                         <div className="sessionContainer">
//                           <label>
//                             <input
//                               type="radio"
//                               id="yes"
//                               name="cod"
//                               value="yes"
//                               checked={selectedOption === "yes"}
//                               onChange={handleRadioChange}
//                             />
//                             <p className="sessionName">Yes</p>
//                           </label>
//                         </div>
//                         <div className="sessionContainer">
//                           <label>
//                             <input
//                               type="radio"
//                               id="no"
//                               name="cod"
//                               value="no"
//                               checked={selectedOption === "no"}
//                               onChange={handleRadioChange}
//                             />
//                             <p className="sessionName">No</p>
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="batchOrder">
//                       <h3
//                         style={{
//                           fontFamily: "Poppins",
//                           fontSize: "17px",
//                           fontWeight: "600",
//                         }}
//                       >
//                         Batch Order
//                       </h3>
//                       <p>Allow multiple order delivery in single ride</p>
//                       <div className="radioBtn">
//                         <div className="sessionContainer">
//                           <label>
//                             <input
//                               type="radio"
//                               id="yes"
//                               name="batchOrder"
//                               value="yes"
//                               checked={
//                                 batchOrder === "yes" || batchOrder === "Yes"
//                               }
//                               onChange={handlebatchOrder}
//                             />
//                             <p className="sessionName">Yes</p>
//                           </label>
//                         </div>
//                         <div className="sessionContainer">
//                           <label>
//                             <input
//                               type="radio"
//                               id="no"
//                               name="batchOrder"
//                               value="no"
//                               checked={
//                                 batchOrder === "no" || batchOrder === "No"
//                               }
//                               onChange={handlebatchOrder}
//                             />
//                             <p className="sessionName">No</p>
//                           </label>
//                         </div>
//                       </div>
//                       <div className="defaultCount">
//                         <p
//                           style={{
//                             fontFamily: "Poppins",
//                             fontSize: "16px",
//                             fontWeight: "400",
//                             color:"#666666"
//                           }}
//                         >
//                           Default count of branch order
//                         </p>
//                         <input
//                         className="input"
//                           type="text"
//                           placeholder="Upto 30"
//                           value={brachCount}
//                           onChange={(e) => {
//                             const val = e.target.value;
//                             if (!isNaN(val) && val <= 30) {
//                               setbrachCount(val);
//                             }
//                           }}
//                         />
//                       </div>
//                     </div>

//                     <div className="feesStructure">
//                       <h3
//                         style={{
//                           fontFamily: "Poppins",
//                           fontSize: "16px",
//                           fontWeight: "500",
//                         }}
//                       >
//                         Fees Structure
//                       </h3>
//                       <p>Please maintain a fees structure</p>

//                       <div className="radioBtn">
//                         <div className="sessionContainer">
//                           <label>
//                             <input
//                               type="radio"
//                               id="based on distance"
//                               name="feesStructure"
//                               value="based on distance"
//                               checked={feesStructure === "based on distance"}
//                               onClick={() => {
//                                 setIsBOD(true);
//                                 setIsFlatFee(false);
//                               }}
//                               onChange={handleFeesStructure}
//                             />
//                             <p className="sessionName">Based on distance</p>
//                           </label>
//                         </div>
//                         <div className="sessionContainer">
//                           <label>
//                             <input
//                               type="radio"
//                               id="flat fee"
//                               name="feesStructure"
//                               value="flat fee"
//                               checked={feesStructure === "flat fee"}
//                               onClick={() => {
//                                 setIsFlatFee(true);
//                                 setIsBOD(false);
//                               }}
//                               onChange={handleFeesStructure}
//                             />
//                             <p>Flat Fee</p>
//                           </label>
//                         </div>
//                       </div>

//                       {feesStructure === "based on distance" && (
//                         <div className="basedOnDistance">
//                           <h3
//                             style={{
//                               fontFamily: "Poppins",
//                               fontSize: "16px",
//                               fontWeight: 500,
//                             }}
//                           >
//                             Based on Distance
//                           </h3>
//                           <p>Amount based on distance</p>
//                           <div className="distanceInput">
//                             <div className="input-container">
//                               <p>Initial 2 miles amount</p>
//                               <span className="symbol"></span>
//                               <input
//                                 type="text"
//                                 value={defaultMile}
//                                 onChange={(e) => {
//                                   const val = e.target.value;
//                                   if (!isNaN(val)) {
//                                     setDefaultMile(val);
//                                   }
//                                 }}
//                                 className="input"
//                               />
//                             </div>
//                             <div className="input-container">
//                               <p>Additional 1 mile amount</p>
//                               <span className="symbol"></span>
//                               <input
//                                 type="text"
//                                 value={additionalMile}
//                                 onChange={(e) => {
//                                   const val = e.target.value;
//                                   if (!isNaN(val)) {
//                                     setAdditionalMile(val);
//                                   }
//                                 }}
//                                 className="input"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       {feesStructure === "flat fee" && (
//                         <div className="flatfee">
//                           <h3
//                             style={{
//                               fontFamily: "Poppins",
//                               fontSize: "16px",
//                               fontWeight: 500,
//                             }}
//                           >
//                             Flat Fee
//                           </h3>
//                           <p>The flat amount for every order</p>
//                           <div className="flatfeeInput">
//                             <div className="input-container">
//                               <p>Amount</p>
//                               <span className="symbol">$</span>
//                               <input
//                                 type="text"
//                                 value={flatFee}
//                                 onChange={(e) => {
//                                   const val = e.target.value;
//                                   if (!isNaN(val)) {
//                                     setFlatFee(val);
//                                   }
//                                 }}
//                                 className="input"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* 3rd party */}

//           <div
//             className="thirdpartydeliveryoption"
//             style={{ height: showThirdParty ? "30vh" : "20vh" }}
//           >
//             {thirdParty && (
//               <div className="thirdParty">
//                 <div
//                   className="header"
//                   onClick={() => setShowTHirdParty((tp) => !tp)}
//                 >
//                   <h3>3rd Party</h3>
                  
//                   <img
//                     className={showThirdParty ? "arrowUp" : "arrowDown"}
//                     onClick={() => setShowTHirdParty(!showThirdParty)}
//                     src={vector}
//                     alt=""
//                   />
//                 </div>
//                 {showThirdParty && (
//                   <div className="body">
//                     <p>User 3rd party deliver partners</p>
//                     <div className="thirdPartyCheckBox">
//                       <label>
//                         <input
//                           className="checkbox"
//                           value="all"
//                           type="checkbox"
//                           checked={allChecked}
//                           onClick={toggleAll}
//                         />
//                         <p className="cPname">All</p>
//                       </label>
//                       <label>
//                         <input
//                           className="checkbox"
//                           value="doordash"
//                           type="checkbox"
//                           checked={showDoorDash}
//                           onClick={() =>
//                             handleCheckboxChanges("doordash", setShowDoorDash)
//                           }
//                         />
//                         <p className="cPname">Doordash</p>
//                       </label>
//                       <label>
//                         <input
//                           className="checkbox"
//                           value="dunzo"
//                           type="checkbox"
//                           checked={showDunzo}
//                           onClick={() =>
//                             handleCheckboxChanges("dunzo", setShowDunzo)
//                           }
//                         />
//                         <p className="cPname">Dunzo</p>
//                       </label>
//                       <label>
//                         <input
//                           className="checkbox"
//                           value="uberEats"
//                           type="checkbox"
//                           checked={showUberEats}
//                           onClick={() =>
//                             handleCheckboxChanges("uberEats", setShowUberEats)
//                           }
//                         />
//                         <p className="cPname">Uber Eats</p>
//                       </label>
//                     </div>

//                     <div className="thirdPartyInputContaianer">
//                       {showDoorDash && (
//                         <div className="thirdPartyInput">
//                           <p>Doordash ID</p>
//                           <input
//                             type="text"
//                             value={doorDash}
//                             onChange={(e) => {
//                               setDoorDash(e.target.value);
//                             }}
//                           />
//                         </div>
//                       )}
//                       {showDunzo && (
//                         <div className="thirdPartyInput">
//                           <p>Dunzo ID</p>
//                           <input
//                             type="text"
//                             value={dunzo}
//                             onChange={(e) => {
//                               setDunzo(e.target.value);
//                             }}
//                           />
//                         </div>
//                       )}
//                       {showUberEats && (
//                         <div className="thirdPartyInput">
//                           <p>UberEats ID</p>
//                           <input
//                             type="text"
//                             value={uberEats}
//                             onChange={(e) => {
//                               setUberEats(e.target.value);
//                             }}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// });

// export default Delivery;

































import React, {  useState ,useImperativeHandle,useEffect} from "react";
import "./style.scss";
import DayAndTime from "../Delivery/components/AddTime";
// import  from "../../Assests/Image/Vector.svg";

import { PostDeliveryDataRequest } from "../../../redux/Actions/PostDataAction";
import AddTime from "../Delivery/components/AddTime";
import vector from "../../../assets/images/Vector.svg";
import { useDispatch, useSelector } from "react-redux";
import { getLocationId } from "../../../redux/Actions/PostDataAction";

const Delivery = React.forwardRef((props,ref) => {
  const [isEnable, setIsEnable] = useState(false);
  const [showdelivery, setShowDelivery] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
    const data = useSelector((state) => state.getlocationdata.data);

  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.deliveryDataReducer);

  //opening time/ closing time
  const [openingTime, setOpeningTime] = useState("00:00");
  const [closingTime, setClosingTime] = useState("00:00");

  const [timeSlots, setTimeSlots] = useState([
    { openingTime: "00:00", closingTime: "00:00" },
  ]);

  //Delivery payment method
  const [selectedMethods, setSelectedMethods] = useState([]);

  //price details
  const [minPriceValue, setMinPriceValue] = useState(100);
  const [maxPriceValue, setMaxPriceValue] = useState("");

  const [dayAndTimeComp, setDayAndTimeComp] = useState([
    <DayAndTime
      key={0}
      openingTime={openingTime}
      closingTime={closingTime}
      setOpeningTime={setOpeningTime}
      setClosingTime={setClosingTime}
    />,
  ]);

  //packaging charge
  const [packageCharge, setPackageCharge] = useState();

  //for schedule delivery
  const [scheduledDay, setScheduledDay] = useState([
    "EOD",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScheduledDelivery, setShowScheduledDelivery] = useState(false);

  //for maximum radius
  const [maxRadius, setMaxRadius] = useState();
  const [brachCount, setbrachCount] = useState();

  const [batchOrder, setBatchOrder] = useState("no");

  const [selectedOption, setSelectedOption] = useState("no");

  const [feesStructure, setFeesStructure] = useState("based on distance");

  //BOD
  const [defaultMile, setDefaultMile] = useState();
  const [additionalMile, setAdditionalMile] = useState();
  const [isBOD, setIsBOD] = useState(false);

  //Flat Fee
  const [flatFee, setFlatFee] = useState();
  const [isFlatFee, setIsFlatFee] = useState(false);

  //Inhouse
  const [inHouse, setInHouse] = useState(false);
  const [showInHouse, setShowInHouse] = useState(false);

  //3rd party
  const [thirdParty, setThirdParty] = useState(false);
  const [showThirdParty, setShowTHirdParty] = useState(false);

  const [doorDash, setDoorDash] = useState();
  const [dunzo, setDunzo] = useState();
  const [uberEats, setUberEats] = useState();

  const [showDunzo, setShowDunzo] = useState();
  const [showDoorDash, setShowDoorDash] = useState();
  const [showUberEats, setShowUberEats] = useState();

  const [selectedThirdParties, setSelectedThirdParties] = useState([]);
  const [deliveryOption, setDeliveryOption] = useState("no");

  const data4 = {
        location: {
          id: "c43f3a9c-60c7-4443-b1da-477c2ad3c97c",
          merchantId: "8dfe7674-709d-431c-a233-628e839ecc76",
          restaurantName: "A2B",
          name: "aruna",
          phone: "+91 587283487r2",
          email: "fdyu1@gmail.com",
          addressLine1:
            "71,amarajar st,New Meenakshi Nagar,New Ramnad Road Madurai.",
          addressLine2: null,
          addressLine3: null,
          city: "Madurai",
          state: "TamilNadu",
          pinCode: "625009",
          country: "India",
          attributes:
            '{"gstNumber": "seconddata12334", "DeliveryDetails": {"inHouse": {"flatFee": "enabled", "maximumRadius": "7","isEnabled": true, "batchOrder": "Yes", "feesStructure": "based on distance", "cashOnDelivery": "yes", "initial2MileAmount": "$5", "additional1MileAmount": "$1", "defaultCountOfBatchOrder": "3"}, "thirdParty": {"isEnabled": true, "doorDashId": "545238i874", "uberEatsId": "694925"}, "deliveryPayment": ["pay at store", "apple pay"], "packagingCharge": "5", "maximumOrderPrice": "$1000", "minimumOrderPrice": "$100", "scheduledDelivery": "yes", "deliverySettingTime": [], "scheduledDeliveryDuration": "EOD"}}',
        },
        // {\"deliveryServiceTimeTo\": \"11:00PM\", \"deliveryServiceTimeFrom\": \"08:00AM\"}, {\"deliveryServiceTimeTo\": \"10:00PM\", \"deliveryServiceTimeFrom\": \"06:00PM\"}
        media: [],
        availabilityDtos: [
          {
            createdTime: null,
            endTime: "07:00",
            name: "HappyHours",
            startTime: "05:00",
            weekDay: "5",
          },
          {
            createdTime: null,
            endTime: "12:00PM",
            name: "lunch",
            startTime: "08:00AM",
            weekDay: "4",
          },
          {
            createdTime: null,
            endTime: "12:00PM",
            name: "lunch",
            startTime: "08:00AM",
            weekDay: "5",
          },
        ],
      };

const  [locationId,setlocationId]=useState();

  useEffect(() => {
   


    if (Array.isArray(data) && data.length > 0 && data[0].location) {

      setlocationId(data[0].location.id)

      if (data[0].location.attributes) {

    const deliveryDetails = JSON.parse(
      data[0].location.attributes
    ).DeliveryDetails;



    if (deliveryDetails) {
      setShowDelivery(true);
      setIsEnable(true);
      
    }
    if(deliveryDetails?.deliveryPayment){
    setSelectedMethods(deliveryDetails.deliveryPayment || []);
    console.log(deliveryDetails.deliveryPayment)
      }
    setPackageCharge(deliveryDetails?.packagingCharge || "");
    setInHouse(deliveryDetails?.inHouse?.isEnabled);
    setShowInHouse(deliveryDetails?.isInHouseEnabled);
    setMaxPriceValue(deliveryDetails?.maximumOrderPrice.replace("$", "") || "");
    setMinPriceValue(deliveryDetails?.minimumOrderPrice.replace("$", "") || "");
    setDeliveryOption(deliveryDetails?.scheduledDelivery);
    setShowScheduledDelivery(deliveryDetails?.scheduledDelivery === "yes");
    // if( deliveryDetails.deliverySettingTime)
    //   {
    //     setTimeSlots(deliveryDetails.deliverySettingTime)
    //   }
 
 
   
    setThirdParty(deliveryDetails?.thirdParty?.isEnabled);
 
    const updatedScheduledDay = [...scheduledDay];
    updatedScheduledDay[0] = deliveryDetails?.scheduledDeliveryDuration;
    setScheduledDay(updatedScheduledDay);
 
    const index = updatedScheduledDay.indexOf(
      deliveryDetails?.scheduledDeliveryDuration
    );
    setCurrentIndex(index);
 
    // Setting additional states for third-party delivery services
 
    if (deliveryDetails?.inHouse?.isEnabled) {
      setFlatFee(deliveryDetails.inHouse.flatFee);
      setDefaultMile(deliveryDetails.inHouse.initial2MileAmount);
      setAdditionalMile(deliveryDetails.inHouse.additional1MileAmount);
      setSelectedOption(deliveryDetails.inHouse.cashOnDelivery);
      setBatchOrder(deliveryDetails.inHouse.batchOrder);
      setbrachCount(deliveryDetails.inHouse.defaultCountOfBatchOrder);
      setFeesStructure(deliveryDetails.inHouse.feesStructure);
      setMaxRadius(deliveryDetails.inHouse.maximumRadius);
    }
 
    if (deliveryDetails?.thirdParty?.isEnabled) {
      setDoorDash(deliveryDetails.thirdParty.doorDashId || "");
      setDunzo(deliveryDetails.thirdParty.dunzoId || "");
      setUberEats(deliveryDetails.thirdParty.uberEatsId || "");
 
      setShowDoorDash(!!deliveryDetails.thirdParty.doorDashId);
      setShowDunzo(!!deliveryDetails.thirdParty.dunzoId);
      setShowUberEats(!!deliveryDetails.thirdParty.uberEatsId);
    }
  }}
    console.log("inhouse", inHouse);

  }, [])

  const data2 = useSelector((state) => state.registration.data);
  const enableClick = () => {
    setShowDelivery(true);
    if (isEnable === false) {
      setIsEnable(true);
    }
  };

  const disableClick = () => {
    setShowDelivery(false);
    if (isEnable === true) {
      setIsEnable(false);
    }
    
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedMethods((prevSelectedMethods) =>
      prevSelectedMethods.includes(value)
        ? prevSelectedMethods.filter((method) => method !== value)
        : [...prevSelectedMethods, value]
    );
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleScheduleChange = (event) => {
    setDeliveryOption(event.target.value);
  };

  const addDayAndTime = () => {
    if (timeSlots.length < 3) {
      setTimeSlots([
        ...timeSlots,
        { openingTime: "00:00", closingTime: "00:00" },
      ]);
    }
  };

  const handleDelete = () => {
    if (timeSlots.length > 1) {
      const newArray = [...timeSlots];
      newArray.pop();
      setTimeSlots(newArray);
    }
  };

  const handlebatchOrder = (event) => {
    setBatchOrder(event.target.value);
  };

  const handleUpClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDownClick = () => {
    if (currentIndex < scheduledDay.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleFeesStructure = (event) => {
    setFeesStructure(event.target.value);
  };

  const toggleAll = () => {
    if (allChecked) {
      setAllChecked(false);
      setShowDoorDash(false);
      setShowDunzo(false);
      setShowUberEats(false);
      setSelectedThirdParties([]);
    } else {
      setAllChecked(true);
      setShowDoorDash(true);
      setShowDunzo(true);
      setShowUberEats(true);
      setSelectedThirdParties(["doordash", "dunzo", "uberEats"]);
    }
  };

  const handleCheckboxChanges = (service, setService) => {
    setService((prev) => {
      const newState = !prev;
      let newSelected = [...selectedThirdParties];
      if (newState) {
        newSelected.push(service);
      } else {
        newSelected = newSelected.filter((item) => item !== service);
      }
      setSelectedThirdParties(newSelected);
      if (allChecked && !newState) {
        setAllChecked(false);
      }

      return newState;
    });
  };

 
    const deliverySettingTime = timeSlots.map((slot) => ({
      deliveryServiceTimeFrom: slot.openingTime,
      deliveryServiceTimeTo: slot.closingTime,
    }));


    const datafromapi = useSelector((state) => state.postData.data);

    const payloadData = {

      locationId:locationId||data2 && data2,
      deliverySettingTime,
      deliveryPayment: selectedMethods,
      scheduledDelivery: deliveryOption,
      minimumOrderPrice: minPriceValue,
      maximumOrderPrice: maxPriceValue,
      scheduledDeliveryDuration: scheduledDay[currentIndex],
      packagingCharge: packageCharge,
      deliveryOption: {},
    };



    if (inHouse) {
      payloadData.deliveryOption.inHouse = {
        isEnabled: inHouse,
        maximumRadius: maxRadius,
        cashInDelivery: selectedOption,
        batchOrder: batchOrder,
        defaultCountBatchOrder: brachCount,
        feesStructure: feesStructure,
        initialMileAmount: defaultMile,
        additional1MileAmount: additionalMile,
        flatFee: flatFee,
      };
      payloadData.deliveryOption.thirdParty = {
        isEnabled: thirdParty,
      };
    }

    if (thirdParty) {
      payloadData.deliveryOption.thirdParty = {
        isEnabled: thirdParty,
        thirdParty: selectedThirdParties,
        dunzoId: dunzo,
        doorDashId: doorDash,
        uberEatsId: uberEats,
      };
      payloadData.deliveryOption.inhouse = {
        isEnabled: inHouse,
      };
    }

  

  const handleClearAllButton = () => {
    setTimeSlots([{ openingTime: "00:00", closingTime: "00:00" }]);
    setSelectedMethods([]);
    setDeliveryOption("no");
    setMinPriceValue(100);
    setMaxPriceValue("");
    setPackageCharge(0);
    setMaxRadius(0);
    setbrachCount(0);
    setDefaultMile(0);
    setAdditionalMile(0);
    setFlatFee(0);
    setSelectedThirdParties([]);
    setDunzo("");
    setUberEats("");
    setDoorDash("");
  };

  const getFormData=()=>{
    return payloadData;


}

  useImperativeHandle(ref,()=>({
    getFormData,


}))

 

  return (
    <div className="delivery">
      <div className="delivery-header">
        <h2>Delivery Details</h2>
        <h3>Delivery</h3>
        <p>Please mention the delivery service</p>
      </div>
      <div className="button">
        <input
          type="submit"
          className={isEnable ? "enableBtn" : "disableBtn"}
          value="Enable"
          onClick={enableClick}
        />
        <input
          type="submit"
          className={isEnable ? "disableBtn" : "enableBtn"}
          value="Disable"
          onClick={disableClick}
        />
      </div>
      {showdelivery && (
        <div className="deliveryContent">
          <h3>Delivery service time</h3>
          <div className="checkBoxContainer">
            <label>
              <input className="checkbox" type="checkbox" />
              <p className="cPname">Same as restaurant working time</p>
            </label>
          </div>
          <div className="addTime">
            {timeSlots.map((slot, index) => (
              <AddTime
                key={index}
                timeSlot={slot}
                setTimeSlot={(newSlot) => {
                  const newSlots = [...timeSlots];
                  newSlots[index] = newSlot;
                  setTimeSlots(newSlots);
                }}
              />
            ))}
                    {timeSlots.length > 1 && (
              <p className="deleteTime" onClick={handleDelete}>
                - Delete Session
              </p>
            )}
            <p onClick={addDayAndTime} className="Addtimeslot">+ Add Time slots</p>
            
          </div>
          {/* <p className="deleteTime" onClick={handleDelete}>
              - Delete Session
            </p> */}

          <div className="payment">
            <h3>Delivery Payment</h3>
            <p>Customer can place delivery order for future/next session</p>
            <div className="paymentMethod">
              <label>
                <input
                  className="checkbox"
                  value="cards"
                  type="checkbox"
                  checked={selectedMethods.includes("cards")}
                  onChange={handleCheckboxChange}
                />
                <p className="cPname">Cards</p>
              </label>
              <label>
                <input
                  className="checkbox"
                  value="pay at store"
                  type="checkbox"
                  checked={selectedMethods.includes("pay at store")}
                  onChange={handleCheckboxChange}
                />
                <p className="cPname">Pay at store</p>
              </label>
              <label>
                <input
                  className="checkbox"
                  value="apple pay"
                  type="checkbox"
                  checked={selectedMethods.includes("apple pay")}
                  onChange={handleCheckboxChange}
                />
                <p className="cPname">Apple Pay</p>
              </label>
              <label>
                <input
                  className="checkbox"
                  value="google pay"
                  type="checkbox"
                  checked={selectedMethods.includes("google pay")}
                  onChange={handleCheckboxChange}
                />
                <p className="cPname">Google Pay</p>
              </label>
            </div>
          </div>

          <div className="schedule">
            <h3>Scheduled Delivery</h3>
            <p>Customer can place delivery order for future/next session</p>
            <div className="radioBtn">
              <div className="sessionContainer">
                <label>
                  <input
                    type="radio"
                    id="yes"
                    name="delivery"
                    value="yes"
                    checked={deliveryOption === "yes"}
                    onChange={handleScheduleChange}
                    onClick={() => setShowScheduledDelivery(true)}
                  />
                  <p className="sessionName">Yes</p>
                </label>
              </div>
              <div className="sessionContainer">
                <label>
                  <input
                    type="radio"
                    id="no"
                    name="delivery"
                    value="no"
                    defaultChecked
                    checked={deliveryOption === "no"}
                    onChange={handleScheduleChange}
                    onClick={() => setShowScheduledDelivery(false)}
                  />
                  <p className="sessionName">No</p>
                </label>
              </div>
            </div>
          </div>
          {showScheduledDelivery && (
            <>
            <div className="priceDetails">
              <h3>Price Detail</h3>
              <div className="input-container">
                <p>Minimum order price</p>
                <span className="symbol">$</span>
                <input
                  type="text"
                  value={minPriceValue}
                  placeholder="0 - 100"
                  onChange={(e) => {
                    const val = e.target.value;
                    if (!isNaN(val) && val >= 0 && val <= 100) {
                      setMinPriceValue(val);
                    }
                  }}
                  className="input"
                />
              </div>
              <div className="input-container">
                <p>Maximum order price</p>
                <span className="symbol">$</span>
                <input
                  type="text"
                  value={maxPriceValue}
                  placeholder="Upto 1000"
                  onChange={(e) => {
                    const val = e.target.value;
                    if (!isNaN(val) && val <= 1000) {
                      setMaxPriceValue(val);
                    }
                  }}
                  className="input"
                />
              </div>
            </div>
            <div className="deliveryInfo">
              <h3>Scheduled Delivery Duration</h3>
              <p>Please mention the Scheduled delivery duration</p>
              <div className="scheduleContainer">
                <div className="scheduledContent">
                  <p>{scheduledDay[currentIndex]}</p>
                </div>
                <div className="arrow">
                  <div className="downsideArrow" onClick={handleDownClick}>
                    <img src={vector} alt=""/>
                  </div>
                  <div className="upsideArrow" onClick={handleUpClick}>
                    <img src={vector} alt=""/>
                  </div>
                </div>
              </div>
            </div></>
            
          )}

          <div className="packageCharge">
            <h3>Packaging Charge</h3>
            <div className="input-container">
              <span className="symbol">$</span>
              <input
                type="text"
                placeholder="Upto 1000"
                value={packageCharge}
                onChange={(e) => {
                  const val = e.target.value;
                  if (!isNaN(val) && val <= 1000) {
                    setPackageCharge(val);
                  }
                }}
                className="input"
              />
            </div>
          </div>
          <div className="deliveryOption">
            <h3>Delivery Option</h3>
            <div className="deliveryOptionContainer">
              <label>
                <input
                  className="checkbox"
                  value="in house"
                  type="checkbox"
                  checked={inHouse === true}
                  onClick={() => setInHouse(!inHouse)}
                />
                <p className="cPname">Inhouse</p>
              </label>
              <label>
                <input
                  className="checkbox"
                  value="3rd party"
                  type="checkbox"
                  checked={thirdParty === true}
                  onClick={() => setThirdParty(!thirdParty)}
                />
                <p className="cPname">3rd party</p>
              </label>
            </div>

          </div>

          {/* Inhouse */}

          <div className="inHousedeliveryoption" style={{height: showInHouse ? '850px' : '70px'}} >
          {inHouse && (
            <div className="inhouse">
              <div className="header" onClick={() => setShowInHouse((inho) => !inho)}>
                <h3>Inhouse</h3>
                <img
                  className={showInHouse ? "arrowUp" : "arrowDown"}
                  onClick={() => setShowInHouse(!showInHouse)}
                  src={vector} alt=""
                />
              </div>
              {showInHouse && (
                <div className="body">
                  <p>Use restaurant person to deliver the food</p>

                  <div className="distance">
                    <h5>Maximum Radius</h5>
                    <input
                      type="text"
                      placeholder="in miles(Upto 100)"
                      value={maxRadius}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (!isNaN(val) && val <= 100) {
                          setMaxRadius(val);
                        }
                      }}
                    />
                  </div>

                  <div className="cod">
                    <h3>Cash On Delivery</h3>
                    <p>Collect order bill amount from cutomer offline</p>
                    <div className="radioBtn">
                      <div className="sessionContainer">
                        <label>
                          <input
                            type="radio"
                            id="yes"
                            name="cod"
                            value="yes"
                            checked={selectedOption === "yes"}
                            onChange={handleRadioChange}
                          />
                          <p className="sessionName">Yes</p>
                        </label>
                      </div>
                      <div className="sessionContainer">
                        <label>
                          <input
                            type="radio"
                            id="no"
                            name="cod"
                            value="no"
                            checked={selectedOption === "no"}
                            onChange={handleRadioChange}
                          />
                          <p className="sessionName">No</p>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="batchOrder">
                    <h3>Batch Order</h3>
                    <p>Allow multiple order delivery in single ride</p>
                    <div className="radioBtn">
                      <div className="sessionContainer">
                        <label>
                          <input
                            type="radio"
                            id="yes"
                            name="batchOrder"
                            value="yes"
                            checked={batchOrder === "yes" ||batchOrder === "Yes"}
                            onChange={handlebatchOrder}
                          />
                          <p className="sessionName">Yes</p>
                        </label>
                      </div>
                      <div className="sessionContainer">
                        <label>
                          <input
                            type="radio"
                            id="no"
                            name="batchOrder"
                            value="no"
                            checked={batchOrder === "no"||batchOrder === "No"}
                            onChange={handlebatchOrder}
                          />
                          <p className="sessionName">No</p>
                        </label>
                      </div>
                    </div>
                    <div className="defaultCount">
                      <p>Default count of branch order</p>
                      <input
                        type="text"
                        placeholder="Upto 30"
                        value={brachCount}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (!isNaN(val) && val <= 30) {
                            setbrachCount(val);
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="feesStructure">
                    <h3>Fees Structure</h3>
                    <p>Please maintain a fees structure</p>

                    <div className="radioBtn">
                      <div className="sessionContainer">
                        <label>
                          <input
                            type="radio"
                            id="based on distance"
                            name="feesStructure"
                            checked={feesStructure === "based on distance"}
                            value="based on distance"
                            onClick={() => {
                              setIsBOD(true);
                              setIsFlatFee(false);
                            }}
                            onChange={handleFeesStructure}
                          />
                          <p className="sessionName">Based on distance</p>
                        </label>
                      </div>
                      <div className="sessionContainer">
                        <label>
                          <input
                            type="radio"
                            id="flat fee"
                            name="feesStructure"
                            checked={feesStructure === "flat fee"}
                            value="flat fee"
                            onClick={() => {
                              setIsFlatFee(true);
                              setIsBOD(false);
                            }}
                            onChange={handleFeesStructure}
                          />
                          <p className="sessionName">Flat Fee</p>
                        </label>
                      </div>
                    </div>



                    {feesStructure === "based on distance" && (
                        <div className="basedOnDistance">
                          <h3
                            style={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              fontWeight: 500,
                            }}
                          >
                            Based on Distance
                          </h3>
                          <p>Amount based on distance</p>
                          <div className="distanceInput">
                            <div className="input-container">
                              <p>Initial 2 miles amount</p>
                              <span className="symbol"></span>
                              <input
                                type="text"
                                value={defaultMile}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  if (!isNaN(val)) {
                                    setDefaultMile(val);
                                  }
                                }}
                                className="input"
                              />
                            </div>
                            <div className="input-container">
                              <p>Additional 1 mile amount</p>
                              <span className="symbol"></span>
                              <input
                                type="text"
                                value={additionalMile}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  if (!isNaN(val)) {
                                    setAdditionalMile(val);
                                  }
                                }}
                                className="input"
                              />
                            </div>
                          </div>
                        </div>
                      )}


                {feesStructure === "flat fee" && (
                        <div className="flatfee">
                          <h3
                            style={{
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              fontWeight: 500,
                            }}
                          >
                            Flat Fee
                          </h3>
                          <p>The flat amount for every order</p>
                          <div className="flatfeeInput">
                            <div className="input-container">
                              <p>Amount</p>
                              <span className="symbol">$</span>
                              <input
                                type="text"
                                value={flatFee}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  if (!isNaN(val)) {
                                    setFlatFee(val);
                                  }
                                }}
                                className="input"
                              />
                            </div>
                          </div>
                        </div>
                      )}


                  
                  </div>
                </div>
              )}


            </div>
          )}
          </div>

          {/* 3rd party */}

          <div className="thirdpartydeliveryoption" style={{height: showThirdParty ? '30vh' : '20vh',marginTop:!inHouse?'-800px':''}}>


          {thirdParty && (
            <div className="thirdParty"      >
              <div className="header"  onClick={() => setShowTHirdParty((tp) => !tp)}>
                <h3>3rd Party</h3>
                <img
                  className={showThirdParty ? "arrowUp" : "arrowDown"}
                  onClick={() => setShowTHirdParty(!showThirdParty)}
                  src={vector} alt=""
                />
              </div>
              {showThirdParty && (
                <div className="body">
                  <div className="thirdPartyCheckBox">
                    <label>
                      <input
                        className="checkbox"
                        value="all"
                        type="checkbox"
                        checked={allChecked}
                        onClick={toggleAll}
                      />
                      <p className="cPname">All</p>
                    </label>
                    <label>
                      <input
                        className="checkbox"
                        value="doordash"
                        type="checkbox"
                        checked={showDoorDash}
                        onClick={() =>
                          handleCheckboxChanges("doordash", setShowDoorDash)
                        }
                      />
                      <p className="cPname">Doordash</p>
                    </label>
                    <label>
                      <input
                        className="checkbox"
                        value="dunzo"
                        type="checkbox"
                        checked={showDunzo}
                        onClick={() =>
                          handleCheckboxChanges("dunzo", setShowDunzo)
                        }
                      />
                      <p className="cPname">Dunzo</p>
                    </label>
                    <label>
                      <input
                        className="checkbox"
                        value="uberEats"
                        type="checkbox"
                        checked={showUberEats}
                        onClick={() =>
                          handleCheckboxChanges("uberEats", setShowUberEats)
                        }
                      />
                      <p className="cPname">Uber Eats</p>
                    </label>
                  </div>

                  <div className="thirdPartyInputContaianer">
                    {showDoorDash && (
                      <div className="thirdPartyInput">
                        <p>Doordash ID</p>
                        <input
                          type="text"
                          value={doorDash}
                          onChange={(e) => {
                            setDoorDash(e.target.value);
                          }}
                        />
                      </div>
                    )}
                    {showDunzo && (
                      <div className="thirdPartyInput">
                        <p>Dunzo ID</p>
                        <input
                          type="text"
                          value={dunzo}
                          onChange={(e) => {
                            setDunzo(e.target.value);
                          }}
                        />
                      </div>
                    )}
                    {showUberEats && (
                      <div className="thirdPartyInput">
                        <p>UberEats ID</p>
                        <input
                          type="text"
                          value={uberEats}
                          onChange={(e) => {
                            setUberEats(e.target.value);
                          }}

                        />
                       
                      </div>
                    )}
                    
                  </div>
                
                </div>
              )}
            </div>
          )}
        </div>
        </div>

      )}
      

     
    </div>
  );
});

export default Delivery;
