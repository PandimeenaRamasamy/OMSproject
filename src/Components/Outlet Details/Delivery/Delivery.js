

import React, { useState, useImperativeHandle, useEffect,useContext } from "react";
import "./style.scss";
import DayAndTime from "../Delivery/components/AddTime";
// import  from "../../Assests/Image/Vector.svg";
import Tooltip from '../../Tooltip/Tooltip';
import info from "../../../assets/images/info.png";

import { PostDeliveryDataRequest } from "../../../redux/Actions/PostDataAction";
import AddTime from "../Delivery/components/AddTime";
import vector from "../../../assets/images/Vector.svg";
import { useDispatch, useSelector } from "react-redux";
import { getLocationId } from "../../../redux/Actions/PostDataAction";
import {LocationContext} from '../../LocationProvider'

const Delivery = React.forwardRef((props, ref) => {
  const [isEnable, setIsEnable] = useState(false);
  const [showdelivery, setShowDelivery] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const data = useSelector((state) => state.getlocationdata.data);
  const loactiondata = useSelector((state) => state.locationiddata.locationId);

  const {  togglebutton1,
    setToggleButton1,
    togglebutton2,
    setToggleButton2,
    togglebutton3,
    setToggleButton3,

  
  } = useContext(LocationContext);
  
  useEffect(()=>{
    if(togglebutton3)
    {
      setShowDelivery(true)    
    }

  },[])


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
  const [minPriceValue, setMinPriceValue] = useState(0);
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

  const [time2, settime2] = useState(false);
  const [time3, settime3] = useState(false);

  const [timeSlot, setTimeSlot] = useState([
    { openingTime: "", closingTime: "" },
    { openingTime: "", closingTime: "" },
    { openingTime: "", closingTime: "" }

  ]);
  const [deliverySettingError, setDeliverySettingError] = useState("");
  const [selectedMethodsError, setSelectedMethodsError] = useState("");
  const [deliveryOptionError, setDeliveryOptionError] = useState("");
  const [minPriceValueError, setMinPriceValueError] = useState("");
  const [maxPriceValueError, setMaxPriceValueError] = useState("");
  const [scheduledDeliveryDurationError, setScheduledDeliveryDurationError] = useState("");
  const [packagingChargeError, setPackagingChargeError] = useState("");
  


  const addtime = (index) => {
    if (index === "second") {
      settime2(true);
    }
    if (index === "third") {
      settime3(true);
    }
  };
 
  let deliveycounting=0;

  const validateDeliverySetting = () => {
    let isValid = true;



    if (!timeSlot.some((slot) => slot.openingTime && slot.closingTime)) {
      setDeliverySettingError("Please fill out all delivery setting time slots.");
      isValid = false;
     
    } else {
      setDeliverySettingError("");
    }

    if (selectedMethods.length === 0) {
      setSelectedMethodsError("Please select at least one delivery method.");
      
      isValid = false;
    } else {
      setSelectedMethodsError("");
    }

    if (!deliveryOption) {
      setDeliveryOptionError("Please select a delivery option.");

      isValid = false;
    } else {
      setDeliveryOptionError("");
    }

    if (!minPriceValue) {
      setMinPriceValueError("Please enter a minimum price value.");
      isValid = false;
    } else {
      setMinPriceValueError("");
    }

    if (!maxPriceValue) {
      setMaxPriceValueError("Please enter a maximum price value.");
      isValid = false;
     
    } else {
      setMaxPriceValueError("");
    }

    if (scheduledDay.length === 0 || scheduledDay[0] === "") {
      setScheduledDeliveryDurationError("Please select a scheduled delivery duration.");
      isValid = false;
     
    } else {
      setScheduledDeliveryDurationError("");
    }

    if (!packageCharge) {
      setPackagingChargeError("Please enter a packaging charge.");
      isValid = false;
     
    } else {
      setPackagingChargeError("");
    }

    return isValid;
  };



  const getdeliverycount=()=>{
    if (timeSlot.some((slot) => slot.openingTime && slot.closingTime)){
      deliveycounting=deliveycounting+1;

    }
    if(selectedMethods.length >0)
    {
      deliveycounting=deliveycounting+1;
    }
    if(deliveryOption==="yes"||deliveryOption==="Yes")
    {
      if(minPriceValue)
      {
        deliveycounting=deliveycounting+1;
      }
      if(maxPriceValue)
      {
        deliveycounting=deliveycounting+1;
      }
    }
    if(scheduledDay.length >0 || scheduledDay[0] !== "")
    {
      deliveycounting=deliveycounting+1;

    }
    if(packageCharge)
    {
      deliveycounting=deliveycounting+1;
    }


    return deliveycounting;
  }



const handleeclick=()=>
  {
    console.log("hellooooo",validateDeliverySetting())
  }






      


  const deletetime = (slot) => {
    const newTimeSlot = [...timeSlot];
    if (slot === "second") {
      settime2(false);
      newTimeSlot[1] = { openingTime: "", closingTime: "" };
    }
    if (slot === "third") {
      settime3(false);
      newTimeSlot[2] = { openingTime: "", closingTime: "" };
    }
    setTimeSlot(newTimeSlot);
  };
  const handleTimeChange = (index, field, value) => {
    setTimeSlot(prevState => {
      const newTimeSlot = [...prevState];
      if (!newTimeSlot[index]) {
        newTimeSlot[index] = { openingTime: "", closingTime: "" };
      }
      newTimeSlot[index][field] = value;
      return newTimeSlot;
    });
  };

  const deliverySetting = timeSlot
  .filter(slot => slot.openingTime && slot.closingTime)  // Filter out incomplete time slots
  .map(slot => ({
    deliveryServiceTimeFrom: slot.openingTime,
    deliveryServiceTimeTo: slot.closingTime,
  }));
const print=()=>{
  console.log("timeeee slotsssss",timeSlot)
  console.log("deliverySetting",deliverySetting)

}








  const [locationId, setlocationId] = useState();

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0 && data[0].location) {
      setlocationId(loactiondata && loactiondata);

      if (data[0].location.attributes) {
        const deliveryDetails = JSON.parse(
          data[0].location.attributes
        ).DeliveryDetails;

        if (deliveryDetails) {
          setShowDelivery(true);
          setIsEnable(true);
        }
        if (deliveryDetails?.deliveryPayment) {
          setSelectedMethods(deliveryDetails.deliveryPayment || []);
          console.log(deliveryDetails.deliveryPayment);
        }
        setPackageCharge(deliveryDetails?.packagingCharge || "");
        setInHouse(deliveryDetails?.inHouse?.isEnabled);
        setShowInHouse(deliveryDetails?.isInHouseEnabled);
        setMaxPriceValue(
          deliveryDetails?.maximumOrderPrice.replace("$", "") || ""
        );
        setMinPriceValue(
          deliveryDetails?.minimumOrderPrice.replace("$", "") || ""
        );
        setDeliveryOption(deliveryDetails?.scheduledDelivery);
        setShowScheduledDelivery(deliveryDetails?.scheduledDelivery === "yes");
        if( deliveryDetails?.deliverySettingTime)
          {
            const mappedTimeSlot = deliveryDetails.deliverySettingTime.map((time, index) => ({
              openingTime: time.deliveryServiceTimeFrom,
              closingTime: time.deliveryServiceTimeTo
            }));
        
            setTimeSlot(mappedTimeSlot);
            if (mappedTimeSlot.length > 1) settime2(true);
            if (mappedTimeSlot.length > 2) settime3(true);
          }

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
          setFlatFee(deliveryDetails?.inHouse?.flatFee);
          setDefaultMile(deliveryDetails?.inHouse?.initial2MileAmount);
          setAdditionalMile(deliveryDetails?.inHouse?.additional1MileAmount);
          setSelectedOption(deliveryDetails?.inHouse?.cashOnDelivery);
          setBatchOrder(deliveryDetails?.inHouse?.batchOrder);
          setbrachCount(deliveryDetails?.inHouse?.defaultCountOfBatchOrder);
          setFeesStructure(deliveryDetails?.inHouse?.feesStructure);
          setMaxRadius(deliveryDetails?.inHouse?.maximumRadius);
        }

        if (deliveryDetails?.thirdParty?.isEnabled) {
          setDoorDash(deliveryDetails.thirdParty.doorDashId || "");
          setDunzo(deliveryDetails.thirdParty.dunzoId || "");
          setUberEats(deliveryDetails.thirdParty.uberEatsId || "");

          setShowDoorDash(!!deliveryDetails.thirdParty.doorDashId);
          setShowDunzo(!!deliveryDetails.thirdParty.dunzoId);
          setShowUberEats(!!deliveryDetails.thirdParty.uberEatsId);
        }
      }
    }
    console.log("inhouse", inHouse);
  }, []);

  const data2 = useSelector((state) => state.registration.data);
  const enableClick = () => {
    setShowDelivery(true);
    setIsEnable(true);
    // if (isEnable === false) {
     
      setToggleButton3(true)
    // }
  };

  const disableClick = () => {
    setShowDelivery(false);
    setIsEnable(false);
    setToggleButton3(false)
    // if (isEnable === true) {
     
     
    // }
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
    if(currentIndex===0)
      {
        setCurrentIndex(currentIndex);
      }


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

  const deliverySettingTim = timeSlots.map((slot) => ({
    deliveryServiceTimeFrom: slot.openingTime,
    deliveryServiceTimeTo: slot.closingTime,
  }));

  const datafromapi = useSelector((state) => state.postData.data);

  let payloadData = {
    locationId: locationId || (data2 && data2),
    deliverySettingTime:deliverySetting,
    deliveryPayment: selectedMethods,
    scheduledDelivery: deliveryOption,
    minimumOrderPrice: minPriceValue,
    maximumOrderPrice: maxPriceValue,
    scheduledDeliveryDuration: scheduledDay[currentIndex],
    packagingCharge: packageCharge,
    deliveryOption: {},
  };

  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem("Delivery"));
  //   if (savedData) {
  //  payloadData = savedData
      
  //   }
    if (savedData) {
      setShowDelivery(true);
      setIsEnable(true);
    }
    if (savedData?.deliveryPayment) {
      setSelectedMethods(savedData.deliveryPayment || []);
      console.log(savedData.deliveryPayment);
    }
    setPackageCharge(savedData?.packagingCharge || "");
    setInHouse(savedData?.inHouse?.isEnabled);
    setShowInHouse(savedData?.isInHouseEnabled);
    setMaxPriceValue(
      savedData?.maximumOrderPrice || ""
    );
    setMinPriceValue(
      savedData?.minimumOrderPrice || ""
    );

    setDeliveryOption(savedData?.scheduledDelivery);
    setShowScheduledDelivery(savedData?.scheduledDelivery === "yes");
    if( savedData?.deliverySettingTime)
      {
        const mappedTimeSlot = savedData.deliverySettingTime.map((time, index) => ({
          openingTime: time.deliveryServiceTimeFrom,
          closingTime: time.deliveryServiceTimeTo
        }));
    
        setTimeSlot(mappedTimeSlot);
        if (mappedTimeSlot.length > 1) settime2(true);
        if (mappedTimeSlot.length > 2) settime3(true);
      }

      setThirdParty(savedData?.thirdParty?.isEnabled);

      const updatedScheduledDay = [...scheduledDay];
      updatedScheduledDay[0] = savedData?.scheduledDeliveryDuration;
      setScheduledDay(updatedScheduledDay);

      const index = updatedScheduledDay.indexOf(
        savedData?.scheduledDeliveryDuration
      );
      setCurrentIndex(index);

      if (savedData?.deliveryOption?.inHouse?.isEnabled) {


        setInHouse(savedData?.deliveryOption?.inHouse?.isEnabled);
        setFlatFee(savedData?.deliveryOption?.inHouse?.flatFee);
        setDefaultMile(savedData?.deliveryOption?.inHouse?.initial2MileAmount);
        setAdditionalMile(savedData?.deliveryOption?.inHouse?.additional1MileAmount);
        setSelectedOption(savedData?.deliveryOption?.inHouse?.cashOnDelivery);
        setBatchOrder(savedData?.deliveryOption?.inHouse?.batchOrder);
        setbrachCount(savedData?.deliveryOption?.inHouse?.defaultCountOfBatchOrder);
        setFeesStructure(savedData?.deliveryOption?.inHouse?.feesStructure);
        setMaxRadius(savedData?.deliveryOption?.inHouse?.maximumRadius);
      }

      if (savedData?.deliveryOption?.thirdParty?.isEnabled) {
        setDoorDash(savedData?.deliveryOption?.thirdParty.doorDashId || "");
        setDunzo(savedData?.deliveryOption?.thirdParty.dunzoId || "");
        setUberEats(savedData?.deliveryOption?.thirdParty.uberEatsId || "");

        setShowDoorDash(!!savedData?.deliveryOption?.thirdParty.doorDashId);
        setShowDunzo(!!savedData?.deliveryOption?.thirdParty.dunzoId);
        setShowUberEats(!!savedData?.deliveryOption?.thirdParty.uberEatsId);
      }







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

  const getFormData = () => {
    return payloadData;
  };

  useImperativeHandle(ref, () => ({
    getFormData,
    validateDeliverySetting,
    getdeliverycount
  }));
  const basicdetail = useSelector((state) => state.basicDetails.Details);


  const restauarantstartingtime=basicdetail?.restaurantSessionDto[0]?.basicTime[0]?.start_time;
  const restauarantendingtime=basicdetail?.restaurantSessionDto[0]?.basicTime[0]?.end_time;
  console.log("badicssss start",restauarantstartingtime
    )
    console.log("badicssss end",restauarantendingtime

      )
      const [sametime,setsametime]=useState(false);
  

  return (
    <div className="delivery" style={{marginBottom:showdelivery?'70px':'500px'}}>
      <div className="delivery-header">
        <h2>Delivery Details</h2>
        <h3>Delivery</h3>
        {/* <button onClick={()=>handleeclick()
        }>click</button>
         */}
        <p>Please mention the delivery service</p>
      </div>
      <div className='switchButtonStyles'>
        <input
          type="submit"
          className={showdelivery ? "blue" : "hello"}
          value="Enable"
          onClick={enableClick}
        />
        <input
          type="submit"
          className={!showdelivery ? "blue" : "hello"}
          value="Disable"
          onClick={disableClick}
        />
      </div>
      {showdelivery && (
        <div className="deliveryContent">
          <h3>Delivery service time</h3>
        <div className="checkBoxContainerdel">
          <label>
            <input className="checkboxdel" type="checkbox" onClick={()=>{
              setsametime(!sametime)
              console.log(true)

            }}/>
              <p className="cPname">Same as restaurant working time</p>
            </label>
          </div>
          <div className="timslot">
            {/* <button onClick={print}>print</button> */}


            <div className="timeone">
              <label htmlFor="" className="label1">From</label>
              <label htmlFor="" className="label2">To</label>
              <div className="inputs">
              <input type="time"  className="input1" value={   sametime && restauarantstartingtime||timeSlot[0]?.openingTime} 
          onChange={(e) => handleTimeChange(0, "openingTime", e.target.value)} />
           
              <input type="time" className="input2" value={  sametime && restauarantendingtime|| timeSlot[0]?.closingTime}
          onChange={(e) => handleTimeChange(0, "closingTime", e.target.value)}/>
         
          
              </div>
             
              {
                !time2 &&
                <p onClick={() => addtime("second")} className="timeslotaddbtn">
                + Add Time slots
              </p>

              }
              
            </div>
            {time2 && (
              <div className="timesecond">
                <label htmlFor="" className="label1">From</label>
                <label htmlFor="" className="label2">To</label>
                <div className="inputs">
                <input type="time" className="input1" value={timeSlot[1]?.openingTime}
            onChange={(e) => handleTimeChange(1, "openingTime", e.target.value)}/>
          
                <input type="time" className="input2" value={timeSlot[1]?.closingTime}
            onChange={(e) => handleTimeChange(1, "closingTime", e.target.value)}/>
             <div className="deletesession"> {
                time2 &&  <p className="timeslotdelbtn" onClick={() => deletetime('second')} >
                - Delete Session
              </p>
              }</div>
                </div>
               
                {
                  !time3 && <p onClick={() => addtime("third")} className="timeslotaddbtn" style={{marginTop:'-25px'}}>
                  + Add Time slots
                </p>
                }
                
               
              </div>
            )}
            {time3 && (
              <div className="timethird" style={{marginTop:'-30px'}}>
                <label htmlFor="" className="label1">From</label>
                <label htmlFor="" className="label2">To</label>
                <div className="inputs" >
                <input type="time" className="input1" value={timeSlot[2]?.openingTime}
            onChange={(e) => handleTimeChange(2, "openingTime", e.target.value)}/>
                <input type="time" className="input2" value={timeSlot[2]?.closingTime}
            onChange={(e) => handleTimeChange(2, "closingTime", e.target.value)}/>
            <div className="deletesession">
               
            <p className="timeslotdelbtn" onClick={() => deletetime('third')}>
                  - Delete Session
                </p>
            </div>
                </div>
              
              </div>
            )}
          </div>






          

          <div className="payment">
            <h3>Delivery Payment</h3>
            <p>Please mention the payment methods</p>
            <div className="paymentMethod">

            <input
                  className="inputcheck"
                  value="cards"
                  type="checkbox"
                  checked={selectedMethods.includes("cards")}
                  onChange={handleCheckboxChange}
                />
              <label>
                
                <p className="cPname1">Cards</p>
              </label>
              <input
                  className="inputcheck"
                  value="pay at store"
                  type="checkbox"
                  checked={selectedMethods.includes("pay at store")}
                  onChange={handleCheckboxChange}
                />
              <label>
               
                <p className="cPname2">Pay at store</p>
              </label>
              <input
                  className="inputcheck"
                  value="apple pay"
                  type="checkbox"
                  checked={selectedMethods.includes("apple pay")}
                  onChange={handleCheckboxChange}
                />
              <label>
               
                <p className="cPname3">Apple Pay</p>
              </label>
              <input
                  className="inputcheck"
                  value="google pay"
                  type="checkbox"
                  checked={selectedMethods.includes("google pay")}
                  onChange={handleCheckboxChange}
                />
              <label className="payname">
               
                <p className="cPname4">Google Pay</p>
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
                    <p > { currentIndex===0? "EOD":scheduledDay[currentIndex]}</p>
                    
                  </div>
                  {/* <button onClick={()=>{
                    console.log("current index",currentIndex)
                  }}>click</button> */}
                  <div className="arrow">
                    <div className="downsideArrow" onClick={handleDownClick}>
                      <img src={vector} alt="" />
                    </div>
                    <div className="upsideArrow" onClick={handleUpClick}>
                      <img src={vector} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>
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
                  checked={showInHouse === true}
                  onClick={() => setShowInHouse(!showInHouse)}
                />
                <p className="cPname">Inhouse</p>
              </label>
              <label>
                <input
                  className="checkbox"
                  value="3rd party"
                  type="checkbox"
                  checked={showThirdParty === true}
                  onClick={() => setShowTHirdParty(!showThirdParty)}
                />
                <p className="cPname">3rd party</p>
              </label>
            </div>
          </div>

          {/* Inhouse */}

          <div
            className="inHousedeliveryoption"
            style={{ height: showInHouse ? "850px" : "70px" }}
          >
            {showInHouse && (
              <div className="inhouse">
                <div
                  className="header"
                  onClick={() => setShowInHouse((inho) => !inho)}
                >
                  <h3>Inhouse</h3>
                 
                </div>
                {showInHouse && (
                  <div className="body">
                    <p>Use restaurant person to deliver the food</p>

                    <div className="distance">
                      <h5 className="h5distance">Maximum Radius</h5>
                      <input
                        type="text"
                        className="inputfiled"
                        placeholder="7 Miles"
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
                              checked={
                                batchOrder === "yes" || batchOrder === "Yes"
                              }
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
                              checked={
                                batchOrder === "no" || batchOrder === "No"
                              }
                              onChange={handlebatchOrder}
                            />
                            <p className="sessionName">No</p>
                          </label>
                        </div>
                      </div>
                      <div className="defaultCountt">
                        <p>Default count of branch order</p>
                        <input
                          type="text"
                          className="defaultinput"
                          placeholder="3"
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
                                placeholder="$5"
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
                                 placeholder="$1"
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
                              <span className="symbol"></span>
                              <input
                                type="text"
                                placeholder="$1"
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

          <div
            className="thirdpartydeliveryoption"
            style={{
              height: showThirdParty ? "30vh" : "20vh",
              marginTop: !inHouse ? "-70px" : "-10px",
            }}
          >
            {showThirdParty && (
              <div className="thirdParty">
                <div
                  className="header"
                  onClick={() => setShowTHirdParty((tp) => !tp)}
                >
                  <h3>3rd Party</h3>
                 
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
                        <p className="cPname">Doordash 
                          </p>
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
                        <p className="cPname">Dunzo </p>
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
                        <p className="cPname">Uber Eats </p>
                      </label>
                    </div>

                    <div className="thirdPartyInputContaianer">
                      {showDoorDash && (
                        <div className="thirdPartyInput">
                          <p>Doordash ID <Tooltip message="Doordash">
                    <div className="icon-backgrounddel">
                        {/* <FaExclamation color="black" size={5} /> */}
                        <img src={info} alt="" />
                    </div>
                </Tooltip></p>
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
                          <p>Dunzo ID <Tooltip message="Dunzo">
                    <div className="icon-backgrounddel">
                        {/* <FaExclamation color="black" size={5} /> */}
                        <img src={info} alt="" />
                    </div>
                </Tooltip></p>
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
                          <p>UberEats ID<Tooltip message="Uber Eats ">
                    <div className="icon-backgrounddel">
                        {/* <FaExclamation color="black" size={5} /> */}
                        <img src={info} alt="" />
                    </div>
                </Tooltip></p>
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
