import React, {  useState ,useImperativeHandle} from "react";
import "./style.scss";
import DayAndTime from "../Delivery/components/AddTime";
// import  from "../../Assests/Image/Vector.svg";

import { PostDeliveryDataRequest } from "../../../redux/Actions/PostDataAction";
import AddTime from "../Delivery/components/AddTime";
import vector from "../../../assets/images/Vector.svg";
import { useDispatch, useSelector } from "react-redux";
import { getLocationId } from "../../../redux/Actions/PostDataAction";

const Delivery = React.forwardRef((props,ref) => {
  const [isEnable, setIsEnable] = useState(true);
  const [showdelivery, setShowDelivery] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

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

  const [batchOrder, setBatchOrder] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const [feesStructure, setFeesStructure] = useState("");

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

  const enableClick = () => {
    setShowDelivery(true);
    if (isEnable !== false) {
      setIsEnable(!isEnable);
    }
  };

  const disableClick = () => {
    setShowDelivery(false);
    if (isEnable === false) {
      setIsEnable(!isEnable);
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


    const locationId = useSelector((state) => state.postData.data);  
    const LocationId = dispatch(getLocationId(locationId));
    const Locid = LocationId.payload;

    const payloadData = {

      locationId: Locid,

      locationId: "6f0d05ab-3c6d-4812-b29a-22822cabdeea",

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
            <p className="deleteTime" onClick={handleDelete}>
              - Delete Session
            </p>
            <p onClick={addDayAndTime} className="Addtimeslot">+ Add Time slots</p>
          </div>

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
            </div>
          )}

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
                  onClick={() => setInHouse(!inHouse)}
                />
                <p className="cPname">Inhouse</p>
              </label>
              <label>
                <input
                  className="checkbox"
                  value="3rd party"
                  type="checkbox"
                  onClick={() => setThirdParty(!thirdParty)}
                />
                <p className="cPname">3rd party</p>
              </label>
            </div>

          </div>

          {/* Inhouse */}

          <div className="inHousedeliveryoption" style={{height: showInHouse ? '100vh' : '20vh'}} >
          {inHouse && (
            <div className="inhouse">
              <div className="header">
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
                            checked={batchOrder === "yes"}
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
                            checked={batchOrder === "no"}
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

                    {isBOD && (
                      <div className="basedOnDistance">
                        <h3>Based on Distance</h3>
                        <p>Amount based on distance</p>
                        <div className="distanceInput">
                          <div className="input-container">
                            <p>Initial 2 miles amount</p>
                            <span className="symbol">$</span>
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
                            <span className="symbol">$</span>
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

                    {isFlatFee && !isBOD && (
                      <div className="flatfee">
                        <h3>Flat Fee</h3>
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

          <div className="thirdpartydeliveryoption" style={{height: showThirdParty ? '30vh' : '20vh'}}>


          {thirdParty && (
            <div className="thirdParty">
              <div className="header">
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
