// import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
// import { useSelector } from "react-redux";
// import "./Dinein.scss";

// const Dinein = forwardRef((props, ref) => {
//   const [Outletdetails, setOutletdetails] = useState({
//     checkIn: {
//       maximumPeopleAllowedOnline: "",
//       maximumPeopleAllowedOffline: "",
//       lateShowTime: "",
//       autoCancelTime: "",
//       abandonTime: "",
//       autoAssign: "no",
//     },
//     reservation: {
//       minimumPeopleAllowed: "",
//       maximumPeopleAllowed: "",
//       reservationServiceTimeFrom: "",
//       reservationServiceTimeTo: "",
//       days: [],
//       bufferDays: "",
//     },
//   });

//   const [CheckinselectedButton, setCheckinselectedButton] = useState(false);
//   const [ReservationinselectedButton, setReservationinselectedButton] = useState(false);
//   const [checkedDays, setCheckedDays] = useState({
//     sunday: false,
//     monday: false,
//     tuesday: false,
//     wednesday: false,
//     thursday: false,
//     friday: false,
//     saturday: false,
//   });

//   // const data = useSelector((state) => state.getlocationdata.data);

//   const data=[
//     {
//         "location": {
//             "id": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
//             "merchantId": "8dfe7674-709d-431c-a233-628e839ecc76",
//             "restaurantName": "A2B",
//             "name": "arunaa",
//             "phone": "+91 587283487r2",
//             "email": "fdyu11@gmail.com",
//             "addressLine1": "71,Kamarajar st,New Meenakshi Nagar,New Ramnad Road Madurai.",
//             "addressLine2": null,
//             "addressLine3": null,
//             "city": "Madurai",
//             "state": "TamilNadu",
//             "pinCode": "625009",
//             "country": "India",
//             "attributes": "{\"cuisines\": [\"Fast Food\", \"North Indian\", \"Fast Food\", \"North Indian\"], \"amenities\": [\"free-wifi\", \"free-wifi\"], \"gstNumber\": \"erry4639\", \"BankDetails\": {\"ifscCode\": \"SBI4365\", \"accountNumber\": \"123345789380\", \"AccountHolderName\": \"arun\"}, \"websiteLink\": \"www.rest.com\", \"FSSAIDetails\": {\"documents\": \"a5ccd036-5c81-4d24-922d-a80008cc0182\", \"isEnabled\": \"yes\", \"expirationDate\": \"024-7-12\", \"registerNumber\": \"8610764743\"}, \"FaceBookLink\": \"rest.fb.com\", \"DineInDetails\": {\"dineIn\": \"enabled\", \"checkIn\": {\"autoAssign\": \"no\", \"abandonTime\": \"00:15Am\", \"lateShowTime\": \"15:24\", \"autoCancelTime\": \"12:45\", \"maximumPeopleAllowedOnline\": \"25\", \"maximumPeopleAllowedOffline\": null}, \"highChair\": \"yes\", \"reservation\": {\"days\": [\"wednesday\", \"sunday\"], \"bufferDays\": 3, \"maximumPeopleAllowed\": \"25\", \"minimumPeopleAllowed\": \"2\", \"reservationServiceTimeTo\": \"00:00PM\", \"reservationServiceTimeFrom\": \"00:00AM\"}, \"interactiveDineIn\": \"enabled\", \"merchant4DigitValidation\": \"enabled\"}, \"instagramLink\": \"rest_insta\", \"SafetyMeasures\": \"We sanitize all tables and chairs after every use\", \"WhatsappNumber\": \"6578740562764958\", \"RestaurantNumber\": \"436789908295\"}"
//         },
//         "media": [
//             {
//                 "entityId": "4eedcaf5-b1cf-4025-bbb9-09b313cf61b8",
//                 "entityType": "LOGO",
//                 "fileName": "oms_1718802295219_fa66d701-1479-419c-8bf8-02f669aaa66b",
//                 "mimeType": "image/webp",
//                 "sortOrder": null,
//                 "tag": null
//             }
//         ],
//         "availabilityDtos": []
//     }
// ]

//   useEffect(() => {
//     if (data && data.location && data.location.attributes) {
//       try {
//         const attributes = JSON.parse(data.location.attributes);
//         const dineInDetails = attributes.DineInDetails || {};
//         const checkInDetails = dineInDetails.checkIn || {};
//         const reservationDetails = dineInDetails.reservation || {};

//         setOutletdetails({
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

//         setCheckinselectedButton(dineInDetails.checkIn ? true : false);
//         setReservationinselectedButton(dineInDetails.reservation ? true : false);
//         setCheckedDays(
//           reservationDetails.days.reduce((acc, day) => {
//             acc[day.toLowerCase()] = true;
//             return acc;
//           }, checkedDays)
//         );
//       } catch (error) {
//         console.error("Failed to parse attributes", error);
//       }
//     }
//   }, [data]);

//   const handleCheckinEnable = () => {
//     setCheckinselectedButton(true);
//   };

//   const handleCheckinDisable = () => {
//     setCheckinselectedButton(false);
//   };

//   const handleReservationEnable = () => {
//     setReservationinselectedButton(true);
//   };

//   const handleReservationDisable = () => {
//     setReservationinselectedButton(false);
//   };

//   const handleDayChange = (day) => {
//     setCheckedDays((prev) => {
//       const newCheckedDays = { ...prev, [day]: !prev[day] };
//       const selectedDays = Object.keys(newCheckedDays).filter((key) => newCheckedDays[key]);
//       setOutletdetails({
//         ...Outletdetails,
//         reservation: {
//           ...Outletdetails.reservation,
//           days: selectedDays,
//         },
//       });
//       return newCheckedDays;
//     });
//   };

//   const handleKeyPress = (event) => {
//     if (!/^\d$/.test(event.key)) {
//       event.preventDefault();
//     }
//   };

//   useImperativeHandle(ref, () => ({
//     getFormData: () => Outletdetails,
//     resetForm: () => {
//       setOutletdetails({
//         checkIn: {
//           maximumPeopleAllowedOnline: "",
//           maximumPeopleAllowedOffline: "",
//           lateShowTime: "",
//           autoCancelTime: "",
//           abandonTime: "",
//           autoAssign: "no",
//         },
//         reservation: {
//           minimumPeopleAllowed: "",
//           maximumPeopleAllowed: "",
//           reservationServiceTimeFrom: "",
//           reservationServiceTimeTo: "",
//           days: [],
//           bufferDays: "",
//         },
//       });
//       setCheckinselectedButton(false);
//       setReservationinselectedButton(false);
//       setCheckedDays({
//         sunday: false,
//         monday: false,
//         tuesday: false,
//         wednesday: false,
//         thursday: false,
//         friday: false,
//         saturday: false,
//       });
//     },
//     validate: () => {
//       // Implement validation logic if needed
//     },
//   }));

//   return (
//     <div>
//       {/* Checkin details */}
//       <div className="checkin3">
//         <div className="headingdine">
//           <h5>Checkin Details</h5>
//         </div>
//         <div>
//           <div className="lables1">
//             <label htmlFor="BusinessLegalName" className="label">Checkin</label>
//           </div>
//           <div className="lables2">
//             <label htmlFor="BusinessLegalName" className="label">Please mention the checkin service</label>
//           </div>
//           <div style={{ marginTop: "10px" }} className="enabledisablebtn">
//             <button
//               className={`Enable_btn ${CheckinselectedButton ? "blue" : ""}`}
//               value="enabled"
//               onClick={handleCheckinEnable}
//             >
//               Enable
//             </button>
//             <button
//               className={`Disable_btn ${!CheckinselectedButton ? "blue" : ""}`}
//               value="Disabled"
//               onClick={handleCheckinDisable}
//             >
//               Disable
//             </button>
//           </div>
//           {CheckinselectedButton && (
//             <div className="interactivefn">
//               <form className="interactivefn">
//                 <div className="checkinform1">
//                   <div className="check1">
//                     <label htmlFor="maximumpeopleon" id="maximuminon">Maximum People allowed online</label>
//                     <input
//                       type="text"
//                       placeholder="20"
//                       style={{ fontSize: '14px' }}
//                       id="maximuminonline"
//                       maxLength={3}
//                       onKeyPress={handleKeyPress}
//                       value={Outletdetails.checkIn.maximumPeopleAllowedOnline}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           checkIn: {
//                             ...Outletdetails.checkIn,
//                             maximumPeopleAllowedOnline: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                   </div>

//                   <div className="check1">
//                     <label htmlFor="maximumpeopleoff" id="maximuminoff">Maximum People allowed offline</label>
//                     <input
//                       type="text"
//                       placeholder="20"
//                       style={{ fontSize: '14px' }}
//                       id="maximuminoffline"
//                       maxLength={3}
//                       onKeyPress={handleKeyPress}
//                       value={Outletdetails.checkIn.maximumPeopleAllowedOffline}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           checkIn: {
//                             ...Outletdetails.checkIn,
//                             maximumPeopleAllowedOffline: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div className="checkinform2">
//                   <div className="check2">
//                     <label htmlFor="Lateshowtime" id="maximuminon">Late show time</label>
//                     <input
//                       type="time"
//                       id="maximuminonline"
//                       style={{ fontSize: '12px' }}
//                       value={Outletdetails.checkIn.lateShowTime}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           checkIn: {
//                             ...Outletdetails.checkIn,
//                             lateShowTime: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                   </div>
//                   <div className="check2">
//                     <label htmlFor="AutocancelTime" id="maximuminoff">Auto cancel Time</label>
//                     <input
//                       type="time"
//                       id="maximuminoffline"
//                       style={{ fontSize: '12px' }}
//                       value={Outletdetails.checkIn.autoCancelTime}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           checkIn: {
//                             ...Outletdetails.checkIn,
//                             autoCancelTime: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                   </div>
//                   <div className="check2">
//                     <label htmlFor="Abandontime" id="maximuminoff">Abandon time</label>
//                     <input
//                       type="time"
//                       id="maximuminoffline"
//                       style={{ fontSize: '12px' }}
//                       value={Outletdetails.checkIn.abandonTime}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           checkIn: {
//                             ...Outletdetails.checkIn,
//                             abandonTime: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div className="Autoassignradio">
//                   <div className="lables1">
//                     <label htmlFor="BusinessLegalName" className="label">Auto Assign</label>
//                   </div>
//                   <div className="radio1">
//                     <input
//                       type="radio"
//                       id="yes"
//                       name="assign"
//                       value="yes"
//                       checked={Outletdetails.checkIn.autoAssign === "yes"}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           checkIn: {
//                             ...Outletdetails.checkIn,
//                             autoAssign: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                     <label htmlFor="yes">Yes</label>
//                   </div>
//                   <div className="radio2">
//                     <input
//                       type="radio"
//                       id="no"
//                       name="assign"
//                       value="no"
//                       checked={Outletdetails.checkIn.autoAssign === "no"}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           checkIn: {
//                             ...Outletdetails.checkIn,
//                             autoAssign: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                     <label htmlFor="no">No</label>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Reservation details */}
//       <div className="Reservation3">
//         <div className="headingdine">
//           <h5>Reservation Details</h5>
//         </div>
//         <div>
//           <div className="lables1">
//             <label htmlFor="BusinessLegalName" className="label">Reservation</label>
//           </div>
//           <div className="lables2">
//             <label htmlFor="BusinessLegalName" className="label">Please mention the Reservation service</label>
//           </div>
//           <div style={{ marginTop: "10px" }} className="enabledisablebtn">
//             <button
//               className={`Enable_btn ${ReservationinselectedButton ? "blue" : ""}`}
//               value="enabled"
//               onClick={handleReservationEnable}
//             >
//               Enable
//             </button>
//             <button
//               className={`Disable_btn ${!ReservationinselectedButton ? "blue" : ""}`}
//               value="Disabled"
//               onClick={handleReservationDisable}
//             >
//               Disable
//             </button>
//           </div>
//           {ReservationinselectedButton && (
//             <div className="interactivefn">
//               <form className="interactivefn">
//                 <div className="reservationform1">
//                   <div className="reservation1">
//                     <label htmlFor="MinimumPeople" id="minimumPeople">Minimum people allowed</label>
//                     <input
//                       type="text"
//                       placeholder="2"
//                       style={{ fontSize: '14px' }}
//                       id="minimumpeople"
//                       maxLength={3}
//                       onKeyPress={handleKeyPress}
//                       value={Outletdetails.reservation.minimumPeopleAllowed}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           reservation: {
//                             ...Outletdetails.reservation,
//                             minimumPeopleAllowed: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                   </div>
//                   <div className="reservation1">
//                     <label htmlFor="MaximumPeople" id="maximumPeople">Maximum people allowed</label>
//                     <input
//                       type="text"
//                       placeholder="25"
//                       style={{ fontSize: '14px' }}
//                       id="maximumpeople"
//                       maxLength={3}
//                       onKeyPress={handleKeyPress}
//                       value={Outletdetails.reservation.maximumPeopleAllowed}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           reservation: {
//                             ...Outletdetails.reservation,
//                             maximumPeopleAllowed: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                   </div>
//                   <div className="reservation1">
//                     <label htmlFor="BufferDays" id="bufferDays">Buffer days</label>
//                     <input
//                       type="text"
//                       placeholder="3"
//                       style={{ fontSize: '14px' }}
//                       id="bufferdays"
//                       maxLength={3}
//                       onKeyPress={handleKeyPress}
//                       value={Outletdetails.reservation.bufferDays}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           reservation: {
//                             ...Outletdetails.reservation,
//                             bufferDays: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div className="reservationform2">
//                   <div className="reservation2">
//                     <label htmlFor="reservationServiceTimeFrom" id="reservationServiceTimeFrom">Reservation Service Time From</label>
//                     <input
//                       type="time"
//                       id="reservationServiceTimeFrom"
//                       style={{ fontSize: '12px' }}
//                       value={Outletdetails.reservation.reservationServiceTimeFrom}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           reservation: {
//                             ...Outletdetails.reservation,
//                             reservationServiceTimeFrom: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                   </div>
//                   <div className="reservation2">
//                     <label htmlFor="reservationServiceTimeTo" id="reservationServiceTimeTo">Reservation Service Time To</label>
//                     <input
//                       type="time"
//                       id="reservationServiceTimeTo"
//                       style={{ fontSize: '12px' }}
//                       value={Outletdetails.reservation.reservationServiceTimeTo}
//                       onChange={(event) => {
//                         setOutletdetails({
//                           ...Outletdetails,
//                           reservation: {
//                             ...Outletdetails.reservation,
//                             reservationServiceTimeTo: event.target.value,
//                           },
//                         });
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div className="daysSelection">
//                   <div className="lables1">
//                     <label htmlFor="reservationDays" className="label">Reservation Days</label>
//                   </div>
//                   <div className="daysCheckboxes">
//                     {Object.keys(checkedDays).map((day) => (
//                       <div key={day} className="checkboxContainer">
//                         <input
//                           type="checkbox"
//                           id={day}
//                           checked={checkedDays[day]}
//                           onChange={() => handleDayChange(day)}
//                         />
//                         <label htmlFor={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Dinein;



























import React, { useState,useImperativeHandle,useEffect } from "react";

import "./Dinein.scss";

import { useDispatch,useSelector } from "react-redux";
import { getLocationId } from "../../../redux/Actions/PostDataAction";

const Dinein = React.forwardRef((props,ref) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [DineinselectedButton, setDineinselectedButton] = useState(false);
  const [InteractiveselectedButton, setInteractiveselectedButton] = useState(false); 
  const [CheckinselectedButton, setCheckinselectedButton] = useState(false);
  const [ReservationinselectedButton, setReservationinselectedButton] =useState(false);  
  const [Interactivedinein, setInteractivedinein] = useState("");
  const [Mergentdigitvaliadtion, setMergentdigitvaliadtion] = useState("");

  const data = useSelector((state) => state.getlocationdata.data);  

  const datafromapi = useSelector((state) => state.postData.data);
  const data2 = useSelector((state) => state.registration.data);

  const [Outletdetails, setOutletdetails] = useState({

    locationId:"",
    dineIn: "",
    highChair: "",
    interactiveDineIn: "",
    merchant4DigitValidation: "",
    checkIn: {
      maximumPeopleAllowedOnline: "",
      maximumPeopleAllowedOffline: "",
      lateShowTime:"",
      autoCancelTime: "",
      abandonTime: "",
      autoAssign: "yes",
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

  useEffect(() => {
    // Ensure data is an array and has at least one element
    if (Array.isArray(data) && data.length > 0 && data[0].location) {
      // Check if location attributes exist
      if (data[0].location.attributes) {
        try {
          const attributes = JSON.parse(data[0].location.attributes);
          const dineInDetails = attributes.DineInDetails || {};
          const checkInDetails = dineInDetails.checkIn || {};
          const reservationDetails = dineInDetails.reservation || {};
          console.log("checkInDetails", checkInDetails);

          setOutletdetails({
            locationId:data2 && data2||data[0].location.id,
            dineIn: dineInDetails.dineIn || "",
            highChair: "",

            checkIn: {
              maximumPeopleAllowedOnline: checkInDetails.maximumPeopleAllowedOnline || "",
              maximumPeopleAllowedOffline: checkInDetails.maximumPeopleAllowedOffline || "",
              lateShowTime: checkInDetails.lateShowTime || "",
              autoCancelTime: checkInDetails.autoCancelTime || "",
              abandonTime: checkInDetails.abandonTime || "",
              autoAssign: checkInDetails.autoAssign || "no",
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
          setDineinselectedButton(!!dineInDetails.dineIn);
          setInteractiveselectedButton(dineInDetails.interactiveDineIn ? "yes" : "no");

          setCheckinselectedButton(!!dineInDetails.checkIn);
          setReservationinselectedButton(!!dineInDetails.reservation);
          setCheckedDays(
            (reservationDetails.days || []).reduce((acc, day) => {
              acc[day.toLowerCase()] = true;
              return acc;
            }, {})
          );
        } catch (error) {
          console.error("Failed to parse attributes", error);
        }
      }
    } else {
      console.log("Location data not present");
    }
  }, [data]);
     
           
          
  const handleDayChange = (day) => {
    const updatedDays = Outletdetails.reservation.days.includes(day)
      ? Outletdetails.reservation.days.filter((d) => d !== day)
      : [...Outletdetails.reservation.days, day];
    setOutletdetails({
      ...Outletdetails,
      reservation: {
        ...Outletdetails.reservation,
        days: updatedDays,
      },
    });
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

  const [checkedDays, setCheckedDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
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
  const errors={};
  let isValid=true;
  if(!Outletdetails.highChair && DineinselectedButton)
    {
      errors.highChair="Please Click Yes or No"
      isValid=false;
    }
    
    setDineInErrors(errors);
    return isValid;
}



 

  return (
    <div className="main-divdine">
      <div className="submain-divdine">
        <div className="headingdine">
          <h5>Dine in Details</h5>
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
              <div className="lables2">
                <label htmlFor="BusinessLegalName" className="label">
                  Please mention the dine in service
                </label>
              </div>

              <div style={{ marginTop: "10px" }} className="enabledisablebtn">
                <button
                  className={`Enable_btn ${DineinselectedButton ? "blue" : ""}`}
                  value="enable"
                  onClick={(event) => handleDineinEnable(event)}
                >
                  Enable{" "}
                </button>
                <button
                  className={`Disable_btn ${
                    !DineinselectedButton ? "blue" : ""
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
                    <div className="lables1">
                      <label
                        htmlFor="BusinessLegalName"
                        className="labelhighchair"
                      >
                        High Chair
                      </label>
                    </div>
                    <div className="lables2">
                      <label
                        htmlFor="BusinessLegalName"
                        className="labelhighchair"
                      >
                        Chair with long legs for children
                      </label>
                    </div>
                  </div>

                  <div className="highchairradio">
                    <div className="highchairradio1">
                      <input
                        type="radio"
                        value={Outletdetails.highChair }
                        className="radioStyle"
                        checked={Outletdetails.highChair === "yes"}
                        onChange={(event) =>
                          setOutletdetails({
                            ...Outletdetails,
                            highChair: event.target.value,
                          })
                        }
                      />
                      <label className="chairradio">Yes</label>
                    </div>

                    <div className="highchairradio2">
                      <input
                        type="radio"
                        value={Outletdetails.highChair }
                        className="radioStyle"
                        checked={Outletdetails.highChair === "no"}
                        onChange={(event) =>
                          setOutletdetails({
                            ...Outletdetails,
                            highChair: event.target.value,
                          })
                        }
                      />

                      <label className="chairradio">No</label>
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
            <h5>Interactive Dine-in Details</h5>
          </div>

          <div className="">
            <div className="lables1">
              <label htmlFor="BusinessLegalName" className="label">
                Interactive Dine-in
              </label>
            </div>
            <div className="lables2">
              <label htmlFor="BusinessLegalName" className="label">
                Please mention the Interactive Dine-in service
              </label>
            </div>

            <div style={{ marginTop: "10px" }} className="enabledisablebtn">
              <button
                className={`Enable_btn ${
                  InteractiveselectedButton ? "blue" : ""
                }`}
                value="enabled"
                onClick={(event) => handleInteractiveEnable(event)}
              >
                Enable{" "}
              </button>
              <button
                className={`Disable_btn ${
                  !InteractiveselectedButton ? "blue" : ""
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
                  <div className="lables1">
                    <label htmlFor="BusinessLegalName" className="labelInter">
                      Interactive Dine-in{" "}
                    </label>
                  </div>
                  <div className="lables2">
                    <label htmlFor="BusinessLegalName" className="labelInter">
                      {" "}
                      Please mention the Interactive Dine-in service{" "}
                    </label>
                  </div>

                  <div
                    style={{ marginTop: "10px" }}
                    className="enabledisablebtnInter"
                  >
                    <button
                      type="button"
                      onClick={() => Interactivefield("Enable", "yes")}
                      className="enablebtninter"
                      style={{
                        backgroundColor:
                          Interactivedinein === "yes" ? "#0D79DC" : "#979797",
                      }}
                    >
                      Enable
                    </button>

                    <button
                      type="button"
                      onClick={() => Interactivefield("Disable", "no")}
                      className="disablebtninter"
                      style={{
                        backgroundColor:
                          Interactivedinein === "no" ? "#0D79DC" : "#979797",
                      }}
                    >
                      Disable
                    </button>
                  </div>

                  <div className="lables1">
                    <label htmlFor="BusinessLegalName" className="labelInter">
                      Merchant 4 digit Validation
                    </label>
                  </div>
                  <div className="lables2">
                    <label htmlFor="BusinessLegalName" className="labelInter">
                      Please mention the validation service
                    </label>
                  </div>

                  <div
                    style={{ marginTop: "10px" }}
                    className="enabledisablebtninter"
                  >
                    <button
                      type="button"
                      onClick={() => merchantvalidationfield("Enable", "yes")}
                      className="enablebtninter"
                      style={{
                        backgroundColor:
                          Mergentdigitvaliadtion === "yes"
                            ? "#0D79DC"
                            : "#979797",
                      }}
                    >
                      Enable
                    </button>

                    <button
                      type="button"
                      onClick={() => merchantvalidationfield("Disable", "no")}
                      className="disablebtninter"
                      style={{
                        backgroundColor:
                          Mergentdigitvaliadtion === "no"
                            ? "#0D79DC"
                            : "#979797",
                      }}
                    >
                      Disable
                    </button>
                  </div>
                </form>
              </div>
            )}
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
                <div className="lables2">
                  <label htmlFor="BusinessLegalName" className="label">
                    Please mention the checkin service
                  </label>
                </div>
                <div style={{ marginTop: "10px" }} className="enabledisablebtn">
                  <button
                    className={`Enable_btn ${
                      CheckinselectedButton ? "blue" : ""
                    }`}
                    value="enabled"
                    onClick={(event) => handleCheckinEnable(event)}
                  >
                    Enable{" "}
                  </button>
                  <button
                    className={`Disable_btn ${
                      !CheckinselectedButton ? "blue" : ""
                    }`}
                    value="Disabled"
                    onClick={(event) => handleCheckinDisable(event)}
                  >
                    {" "}
                    Disable{" "}
                  </button>
                </div>
                {CheckinselectedButton && (
                  <div className="interactivefn">
                    <form onSubmit={handleSubmit2} className="interactivefn">
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
                              style={{fontSize:'14px'}}
                              maxLength={3}
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
                            </label>
                              <input
                                type="time"
                                id="maximuminonline"
                                value={Outletdetails.checkIn.lateShowTime}
                                style={{fontSize:'12px'}}
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
                            </label>
                            <input
                              type="time"
                              id="maximuminoffline"
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
                            </label>
                            <input
                              type="time"
                              id="maximuminoffline"
                              value={Outletdetails.checkIn.abandonTime}
                              style={{fontSize:'12px'}}
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
                      <div className="lables1">
                        <label
                          htmlFor="BusinessLegalName"
                          className="labelcheckin1"
                        >
                          Auto Assign option
                        </label>
                      </div>
                      <div className="lables2">
                        <label
                          htmlFor="BusinessLegalName"
                          className="labelcheckin2"
                        >
                          Assign table automatically to the customer
                        </label>
                      </div>
                      <div className="highchairradio">
                        <div className="highchairradio1">
                          <input
                            type="radio"
                            className="radioStyle"
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
                          />
                          <label className="chairradio">Yes</label>
                        </div>
                        <div className="highchairradio2">
                          <input
                            type="radio"
                            value="no"
                            className="radioStyle"
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
                          />
                          <label className="chairradio">No</label>
                        </div>
                      </div>
                     </div>
                    </form>
                  </div>
                )}
              </div>
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
              <div className="lables1">
                <label htmlFor="BusinessLegalName" className="label">
                  Reservation
                </label>
              </div>
              <div className="lables2">
                <label htmlFor="BusinessLegalName" className="label">
                  Please mention the reservation service
                </label>
              </div>
              <div style={{ marginTop: "10px" }} className="enabledisablebtn">
                <button
                  className={`Enable_btn ${
                    ReservationinselectedButton ? "blue" : ""
                  }`}
                  value="enabled"
                  onClick={(event) => handleReservationEnable(event)}
                >
                  Enable{" "}
                </button>
                <button
                  className={`Disable_btn ${
                    !ReservationinselectedButton ? "blue" : ""
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
                  <label htmlFor="BusinessLegalName" className="labelreserve">
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
                  <label htmlFor="BusinessLegalName" className="labelreserve">
                    Reservation available days
                  </label>

                  <div className="reservecheckbox">
                    {Object.keys(checkedDays).map((day) => (
                      <div key={day} className="checkbox-container">
                        <input
                          type="checkbox"
                          name={day}
                          checked={Outletdetails.reservation.days.includes(day)}
                          onChange={() => handleDayChange(day)}
                          className="radioStyle"
                        />
                        <label style={{ fontSize: "13px",marginTop:'7px' }}>{day}</label>
                      </div>
                    ))}
                  </div>
                  <label htmlFor="BusinessLegalName" className="labelreserve">
                    Reservation Buffer Days
                  </label>
                  <div className="Reservation available days">
                    <div className="check2">
                      <label htmlFor="Lateshowtime" id="reservationdays">
                        Minimum no.of days before reservation should be placed
                      </label>
                      <input
                        type="text"
                        id="maximuminonline"
                        value={Outletdetails.reservation.bufferDays}
                        placeholder="2"
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


