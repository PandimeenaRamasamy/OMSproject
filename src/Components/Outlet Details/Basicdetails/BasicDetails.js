import React, { useEffect, useMemo, useState,useImperativeHandle } from "react";

import { v4 as uuidv4 } from "uuid";
// import { saveBasicDetailsRequest } from "../../actions/basicDetailsActions";
import "./BasicDetails.scss";
import RestaurantSession from "./Components/RestaurantSession";
import Alcohol from "./Components/Alcohol";
import RestaurantCategory from "./Components/RestauantCategory";
import AlcoholModal from "./Components/AlcoholModal";
// import { saveBasicDetailsRequest } from "../../../redux/Actions/PostDataAction";
import { useDispatch, useSelector } from "react-redux";
// import { getLocationId } from "../../../redux/Actions/PostDataAction";
// import { GetLocationData } from "../../../redux/Api";


const BasicDetails = React.forwardRef((props,ref) => {
  // const dispatch = useDispatch();
  // const basicDetailsReducer = useSelector((state) => state.basicDetailsReducer);
  // console.log("basicDetailsReducer", basicDetailsReducer);

  const uid = useMemo(() => uuidv4(), []);
    // const data = useSelector((state) => state.getlocationdata.data);

  // const locationId = useSelector((state) => state.postData.data);
  
  // const LocationId = dispatch(getLocationId(locationId));
  // const Locid = LocationId.payload;
  
  const [isAlcoholModalOpen, setIsAlcoholModalOpen] = useState(false);
  const [selectedAlcoholOption, setSelectedAlcoholOption] = useState("");

  const [cPillsText, setCPillsText] = useState([]);
  const [aPillsText, setAPillsText] = useState([]);
  const [pPillsText, setPPillsText] = useState([]);

  const [cModalText, setCModalText] = useState([
    "Biriyani",
    "Dosa",
    "Vada",
    "Soup",
    "Paniyaram",
    "Naan",
    "Chappathi",
  ]);
  const [aModalText, setAModalText] = useState([
    "Free Wifi",
    "Suite Room",
    "Park",
    "GameRoom",
    "AC",
    "Butler",
    "Hall",
  ]);
  const [pModalText, setPModalText] = useState([
    "Two Wheeler",
    "Four Wheeler",
    "Heavy Vechicle",
  ]);

  const [safetyMeasures, setSafetyMeasures] = useState("");

  // id:string : {
  //   openingTime: string,
  //   closingTime: string,
  //   isContainWeeks: boolean,
  //   checkedDays?: {allDay: boolean, mon: boolean, tues: boolean, wedne: boolean, thur: boolean, fri: boolean, sat: boolean, sund: boolean}
  // }[]
  const [timeSlots, setTimeSlots] = useState({
    [uid]: [
      {
        openingTime: "00:00",
        closingTime: "00:00",
        isContainWeeks: false,
        checkedDays: {
          monday: true,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
      },
    ],
  });

  // console.log("from basic details", { timeSlots });

  // console.log([timeSlots])

  // {[id]: string}
  // const basicDetailsFromRedux = useSelector((state) => state.basicDetails);
  // console.log("basicDetailsFromRedux from (0_-)", basicDetailsFromRedux)

  const [mealsMap, setMealsMap] = useState({ [uid]: "breakfast" });

  const basicDetailsFromRedux = useSelector((state)=>state.getlocationdata)
  // console.log("basicDetailsFromRedux",basicDetailsFromRedux);

  const attributes = basicDetailsFromRedux?.data?.[0]?.location?.attributes && JSON.parse(basicDetailsFromRedux?.data?.[0]?.location?.attributes)
  // console.log({attributes})

  const restaurantSessionDto = basicDetailsFromRedux?.data?.[0]?.availabilityDtos 
  // console.log({restaurantSessionDto})

  const getDayName = (weekday) => {
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    return days[weekday - 1];
};


const resultDto = restaurantSessionDto?.reduce((acc, curr) => {
  let { name, startTime, endTime, weekday } = curr;
  startTime = startTime.slice(0, 5);
  endTime = endTime.slice(0, 5);

  // Find the group by name
  let nameGroup = acc.find(group => group.name === name);
  if (!nameGroup) {
      nameGroup = { name, basicTime: [] };
      acc.push(nameGroup);
  }

  // Find the basicTime group by startTime and endTime
  let timeGroup = nameGroup.basicTime.find(time => time.start_time === startTime && time.end_time === endTime);
  if (!timeGroup) {
      timeGroup = { start_time: startTime, end_time: endTime, weekday: [] };
      nameGroup.basicTime.push(timeGroup);
  }

  // Add the day name to the weekday array if it's not already present
  if (weekday) {
      const dayName = getDayName(parseInt(weekday));
      console.log({dayName, bul:timeGroup.weekday.includes(dayName), timeGroup})
      if (!timeGroup.weekday.includes(dayName) && dayName) {
          timeGroup.weekday.push(dayName);
      }
  }

  return acc;
}, []);
// console.log({resultDto});

  useEffect(() => {
    if(attributes || resultDto) {
    const payload = {...attributes, restaurantSessionDto: resultDto}
    console.log("useretrieveData",payload)
    retrieveData(payload)
  }
  },[])

  const handleTimeChange = (time, id, type, index) => {
    if (type === "opening") {
      setTimeSlots((prev) => {
        const restaurantSessionTimeArray = prev?.[id];
        restaurantSessionTimeArray[index].openingTime = time;

        return {
          ...prev,
          [id]: restaurantSessionTimeArray,
        };
      });
    } else {
      setTimeSlots((prev) => {
        const restaurantSessionTimeArray = prev?.[id];
        restaurantSessionTimeArray[index].closingTime = time;

        return {
          ...prev,
          [id]: restaurantSessionTimeArray,
        };
      });
    }
  };

  const handleAddService = () => {
    if (service.length < 6) {
      const id = uuidv4();
      setMealsMap((prevMealsMap) => ({ ...prevMealsMap, [id]: "breakfast" }));
      setTimeSlots((prevTime) => ({
        ...prevTime,
        [id]: [
          {
            openingTime: "00:00",
            closingTime: "00:00",
            isContainWeeks: false,
            checkedDays: {
              monday: true,
              tuesday: false,
              wednesday: false,
              thursday: false,
              friday: false,
              saturday: false,
              sunday: false,
            },
          },
        ],
      }));
      setService([
        ...service,
        {
          id: id,
          component: (
            <RestaurantSession
              timeSlots={timeSlots}
              setTimeSlots={setTimeSlots}
              setOpeningTime={(time, index) =>
                handleTimeChange(time, id, "opening", index)
              }
              setClosingTime={(time, index) =>
                handleTimeChange(time, id, "closing", index)
              }
              key={id}
              restaurantSessionid={id}
              deleteRestaurantSession={deleteRestaurantSession}
              onMealsChange={(id, name) => handleMealsChange(id, name)}
              meals={mealsMap[id]}
            />
          ),
        },
      ]);
    }
  };

  // For Re-rendering Purpose :
  useEffect(() => {
    setService((prevService) =>
      prevService.map((service) => ({
        ...service,
        component: (
          <RestaurantSession
            timeSlots={timeSlots}
            setTimeSlots={setTimeSlots}
            setOpeningTime={(time, index) =>
              handleTimeChange(time, service.id, "opening", index)
            }
            setClosingTime={(time, index) =>
              handleTimeChange(time, service.id, "closing", index)
            }
            key={service.id}
            restaurantSessionid={service.id}
            deleteRestaurantSession={deleteRestaurantSession}
            onMealsChange={(id, name) => handleMealsChange(id, name)}
            meals={mealsMap[service.id]}
          />
        ),
      }))
    );
  }, [mealsMap, timeSlots]);

  const handleMealsChange = (id, meals) => {
    setMealsMap((prevMealsMap) => ({ ...prevMealsMap, [id]: meals }));
  };

  const deleteRestaurantSession = (id) => {
    setService((prevService) =>
      prevService.filter((service) => service.id !== id)
    );
    setMealsMap((prevMealsMap) => {
      const newMealsMap = { ...prevMealsMap };
      delete newMealsMap[id];
      return newMealsMap;
    });

    setTimeSlots((prevTime) => {
      const newTimes = { ...prevTime };
      delete newTimes[id];
      return newTimes;
    });
  };

  const handleOpenAlcoholModal = (event) => {
    setSelectedAlcoholOption(event.target.value);
    if (event.target.value === "Serve Alcohol") {
      setIsAlcoholModalOpen(true);
    }
  };

  const handleCloseAlcoholModal = () => {
    setIsAlcoholModalOpen(false);
  };

  const handleDeclineAlcohol = () => {
    setSelectedAlcoholOption("Doesn't Serve Alcohol");
    setIsAlcoholModalOpen(false);
  };

  const handleAgreeAlcohol = () => {
    setSelectedAlcoholOption("Serve Alcohol");
    setIsAlcoholModalOpen(false);
  };

  const [service, setService] = useState([
    {
      id: uid,
      component: (
        <RestaurantSession
          timeSlots={timeSlots}
          setTimeSlots={setTimeSlots}
          setOpeningTime={(time, index) =>
            handleTimeChange(time, uid, "opening", index)
          }
          setClosingTime={(time, index) =>
            handleTimeChange(time, uid, "closing", index)
          }
          key={uid}
          restaurantSessionid={uid}
          deleteRestaurantSession={deleteRestaurantSession}
          onMealsChange={(uid, name) => handleMealsChange(uid, name)}
          meals={mealsMap[uid]}
        />
      ),
    },
  ]);

  // Clear All Fields Function :
  // const handleClearAll = () => {
  //   const unid = uuidv4();
  //   setTimeSlots({
  //     [unid]: [
  //       {
  //         openingTime: "00:00",
  //         closingTime: "00:00",
  //         isContainWeeks: false,
  //         checkedDays: {
  //           monday: true,
  //           tuesday: false,
  //           wednesday: false,
  //           thursday: false,
  //           friday: false,
  //           saturday: false,
  //           sunday: false,
  //         },
  //       },
  //     ],
  //   });
  //   setService([
  //     {
  //       id: unid,
  //       component: (
  //         <RestaurantSession
  //           timeSlots={timeSlots}
  //           setTimeSlots={setTimeSlots}
  //           setOpeningTime={(time, index) =>
  //             handleTimeChange(time, unid, "opening", index)
  //           }
  //           setClosingTime={(time, index) =>
  //             handleTimeChange(time, unid, "closing", index)
  //           }
  //           key={unid}
  //           restaurantSessionid={unid}
  //           deleteRestaurantSession={deleteRestaurantSession}
  //           onMealsChange={(unid, name) => handleMealsChange(unid, name)}
  //           meals={mealsMap[unid]}
  //         />
  //       ),
  //     },
  //   ]);
  //   setMealsMap({ [unid]: "breakfast" });
  //   setCModalText([
  //     "Biriyani",
  //     "Dosa",
  //     "Vada",
  //     "Soup",
  //     "Paniyaram",
  //     "Naan",
  //     "Chappathi",
  //   ]);
  //   setAModalText([
  //     "Free Wifi",
  //     "Suite Room",
  //     "Park",
  //     "GameRoom",
  //     "AC",
  //     "Butler",
  //     "Hall",
  //   ]);
  //   setPModalText(["Two Wheeler", "Four Wheeler", "Heavy Vechicle"]);
  //   setCPillsText([]);
  //   setAPillsText([]);
  //   setPPillsText([]);
  //   setSafetyMeasures("");
  //   setSelectedAlcoholOption("");
  // };

 
    const RestaurantSessions = service.map((serv) => {
      const sessionTimes =
        timeSlots[serv.id]?.map((slot) => ({
          start_time: slot.openingTime + ":00",
          end_time: slot.closingTime + ":00",
          weekday: slot.isContainWeeks
            ? Object.keys(slot.checkedDays).filter(
                (day) => slot.checkedDays[day]
              )
            : [null],
        })) || [null]; 

      return {
        name: mealsMap[serv.id],
        basicTime: sessionTimes,
      };
    });

    
    const datafromapi = useSelector((state) => state.postData.data);
    // console.log("list of location ID",datafromapi);

    const dataForbasicDetails = useSelector((state)=>state.postDataReducergetLocation)
    // console.log("dataForbasicDetails",dataForbasicDetails);
    
    const data2 = useSelector((state) => state.registration.data);
    // console.log("current location ID",data2);



  

    // console.log("restaurant session data",Full_X_X.data[0].availabilityDtos)
    // console.log("restaurant category",Full_X_X.data[0].location.attributes.parking)
    // Full_X_X.map((item)=>setPPillsText(...item, item.data.locationattributes.parking))


    // const getAPI = useSelector((state) => state.get)
    // console.log("data2 from basic details -_-", data2);

    // useEffect(()=>{
    //   console.log("aksnkalfnla",dataForbasicDetails);
    // },[])

    // const mockbasicDetailsData =
    // [
    //     {
    //         "location": {
    //             "id": "c43f3a9c-60c7-4443-b1da-477c2ad3c97c",
    //             "merchantId": "8dfe7674-709d-431c-a233-628e839ecc76",
    //             "restaurantName": "A2B",
    //             "name": "aruna",
    //             "phone": "+91 587283487r2",
    //             "email": "fdyu1@gmail.com",
    //             "addressLine1": "71,amarajar st,New Meenakshi Nagar,New Ramnad Road Madurai.",
    //             "addressLine2": null,
    //             "addressLine3": null,
    //             "city": "Madurai",
    //             "state": "TamilNadu",
    //             "pinCode": "625009",
    //             "country": "India",
    //             "attributes": "{\"parking\": [\"four wheeler\", \"two wheeler\"], \"cuisines\": [\"fast Food\", \"North Indian\"], \"amenities\": [\"free-wifi\"], \"gstNumber\": \"erts4639\", \"BankDetails\": {\"ifscCode\": \"SBI4365\", \"accountNumber\": \"12334578938999\", \"AccountHolderName\": \"arun\"}, \"websiteLink\": \"www.rest.com\", \"FaceBookLink\": \"rest.fb.com\", \"DineInDetails\": {\"dineIn\": \"disabled\", \"checkIn\": {\"autoAssign\": \"no\", \"abandonTime\": \"00:15Am\", \"lateShowTime\": \"10:24\", \"autoCancelTime\": \"12:45\", \"maximumPeopleAllowedOnline\": \"25\", \"maximumPeopleAllowedOffline\": null}, \"highChair\": \"yes\", \"reservation\": {\"days\": [\"wednesday\", \"sunday\"], \"bufferDays\": 3, \"maximumPeopleAllowed\": \"25\", \"minimumPeopleAllowed\": \"3\", \"reservationServiceTimeTo\": \"00:00PM\", \"reservationServiceTimeFrom\": \"00:00AM\"}, \"interactiveDineIn\": \"enabled\", \"merchant4DigitValidation\": \"enabled\"}, \"PickUpDetails\": {\"eta\": \"40mins\", \"payment\": [\"card\", \"applePay\"], \"serviceTimeTo\": \"00:00PM\", \"packagingCharge\": \"3\", \"serviceTimeFrom\": \"00:00AM\", \"scheduledDuration\": \"Eta\"}, \"instagramLink\": \"rest_insta\", \"KitchenDetails\": {\"kdsAlert\": \"15mins\", \"lastOrderTime\": \"00:00AM\"}, \"SafetyMeasures\": \"We sanitize all  tables and chairs after every use\", \"WhatsappNumber\": \"6578740562764958\", \"DeliveryDetails\": {\"deliveryPayment\": [\"pay at store\", \"apple pay\"], \"packagingCharge\": \"5\", \"isInHouseEnabled\": false, \"maximumOrderPrice\": \"$1000\", \"minimumOrderPrice\": \"$100\", \"scheduledDelivery\": \"yes\", \"deliverySettingTime\": [{\"deliveryServiceTimeTo\": \"11:00PM\", \"deliveryServiceTimeFrom\": \"08:00AM\"}, {\"deliveryServiceTimeTo\": \"10:00PM\", \"deliveryServiceTimeFrom\": \"06:00PM\"}], \"isThirdPartyEnabled\": false, \"scheduledDeliveryDuration\": \"EOD\"}, \"RestaurantNumber\": \"436789908295\"}"
    //         },
    //         "media": [],
    //         "availabilityDtos": [
    //             {
    //                 "createdTime": null,
    //                 "endTime": "07:00",
    //                 "name": "HappyHours",
    //                 "startTime": "05:00",
    //                 "weekDay": "5"
    //             },
    //             {
    //                 "createdTime": null,
    //                 "endTime": "12:00PM",
    //                 "name": "lunch",
    //                 "startTime": "08:00AM",
    //                 "weekDay": "4"
    //             },
    //             {
    //                 "createdTime": null,
    //                 "endTime": "12:00PM",
    //                 "name": "lunch",
    //                 "startTime": "08:00AM",
    //                 "weekDay": "5"
    //             }
    //         ]
    //     }
    // ]

    // console.log("mockbasicDetailsDataParsed",JSON.parse(mockbasicDetailsData[0].location.attributes));

     
    const payload = {
      // locationId: datafromapi && datafromapi[0] ?datafromapi[0].locationId:"",
      // locationId: data2 && data2||"",
      // locationId: "bfffa7b7-33ed-4ea6-b3f8-be95b11d70dc", 
      locationId: data2 && data2||"",
      restaurantSessionDto: RestaurantSessions,
      cuisines: cPillsText,
      amenities: aPillsText,
      parking: pPillsText,
      safetyMeasures,
      alcohol: selectedAlcoholOption,
    };

    // console.log("payload from basic details button", payload);
    
    
 

  const getFormData=()=>{
    return payload;
}

const retrieveData = (tempPayload) => {

  setSelectedAlcoholOption(tempPayload?.alcohol ?? '')
  setSafetyMeasures(tempPayload?.SafetyMeasures ?? '')
  setPPillsText(tempPayload?.parking ?? [])
  setAPillsText(tempPayload?.amenities ?? [])
  setCPillsText(tempPayload?.cuisines ?? [])

  setPModalText(prev => prev.filter(p => !pPillsText.includes(p)))
  setAModalText(prev => prev.filter(p => !aPillsText.includes(p)))
  setCModalText(prev => prev.filter(p => !cPillsText.includes(p)))



  const tempService = [];
  const tempMealsMap = {};
  const tempTimeSlots = {};

  //restaurantSesssionDto change name after checking be's response
  tempPayload?.restaurantSessionDto?.forEach(restaurantSessions => {
    let tempId = uuidv4();
    tempMealsMap[tempId] = restaurantSessions?.name ?? 'breakfast'
    tempService.push({
      id: tempId,
      component: (
        <RestaurantSession
          timeSlots={timeSlots}
          setTimeSlots={setTimeSlots}
          setOpeningTime={(time, index) =>
            handleTimeChange(time, tempId, "opening", index)
          }
          setClosingTime={(time, index) =>
            handleTimeChange(time, tempId, "closing", index)
          }
          key={tempId}
          restaurantSessionid={tempId}
          deleteRestaurantSession={deleteRestaurantSession}
          onMealsChange={(tempId, name) => handleMealsChange(tempId, name)}
          meals={mealsMap[tempId]}
        />
      ),
    },)

    const currentRestaurantSlot = [];
    restaurantSessions?.basicTime?.forEach(time => {
      currentRestaurantSlot.push({
        openingTime: time?.start_time ?? "00:00",
        closingTime: time?.end_time ?? "00:00",
        isContainWeeks: time.weekday.length === 0 ?false : true,
        checkedDays: {
          monday: time.weekday.includes('monday'),
          tuesday: time.weekday.includes('tuesday'),
          wednesday: time.weekday.includes('wednesday'),
          thursday: time.weekday.includes('thursday'),
          friday: time.weekday.includes('friday'),
          saturday: time.weekday.includes('saturday'),
          sunday: time.weekday.includes('sunday'),
        },
      })
    })

    tempTimeSlots[tempId] = currentRestaurantSlot

  })
  setService(tempService)
  setMealsMap(tempMealsMap)
  setTimeSlots(tempTimeSlots)
}

  useImperativeHandle(ref,()=>({
    getFormData,
}))

  return (
    <div className="basic-details-container">
      <div className="basicDetails">
        <p className="heading">Basic Details</p>
        <div className="serviceStyle">
          {service.map((serv) => serv.component)}
        </div>
        <button onClick={handleAddService} className="addNewService">
          + Add New Service
        </button>
        <div className="basicDetailsLine"></div>
        <RestaurantCategory
          cPillsText={cPillsText}
          setCPillsText={setCPillsText}
          aPillsText={aPillsText}
          setAPillsText={setAPillsText}
          pPillsText={pPillsText}
          setPPillsText={setPPillsText}
          safetyMeasures={safetyMeasures}
          setSafetyMeasures={setSafetyMeasures}
          cModalText={cModalText}
          setCModalText={setCModalText}
          aModalText={aModalText}
          setAModalText={setAModalText}
          pModalText={pModalText}
          setPModalText={setPModalText}
        />
        <Alcohol
          onRadioChange={handleOpenAlcoholModal}
          selectedOption={selectedAlcoholOption}
        />
      </div>
      {isAlcoholModalOpen && (
        <div className="alcoholModalOverlay">
          <AlcoholModal
            onCloseRequest={handleCloseAlcoholModal}
            onDecline={handleDeclineAlcohol}
            onAgree={handleAgreeAlcohol}
          />
        </div>
      )}
      {/* <div className="footerButtonsContainer">
        <div className="footerButtonsInnerContainer">
          <button className="clearAllButton" onClick={handleClearAll}>
            Clear All
          </button>
          <button className="saveAndNextButton" onClick={handleSave}>
            Save & Next
          </button>
        </div>
      </div> */}
    </div>
  );
});

export default BasicDetails;