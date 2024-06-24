import React, { useEffect, useMemo, useState,useImperativeHandle } from "react";

import { v4 as uuidv4 } from "uuid";
// import { saveBasicDetailsRequest } from "../../actions/basicDetailsActions";
import "./BasicDetails.scss";
import RestaurantSession from "./Components/RestaurantSession";
import Alcohol from "./Components/Alcohol";
import RestaurantCategory from "./Components/RestauantCategory";
import AlcoholModal from "./Components/AlcoholModal";
import { saveBasicDetailsRequest } from "../../../redux/Actions/PostDataAction";
import { useDispatch, useSelector } from "react-redux";
import { getLocationId } from "../../../redux/Actions/PostDataAction";


const BasicDetails = React.forwardRef((props,ref) => {
  const dispatch = useDispatch();
  // const basicDetailsReducer = useSelector((state) => state.basicDetailsReducer);
  // console.log("basicDetailsReducer", basicDetailsReducer);

  const uid = useMemo(() => uuidv4(), []);
    const data = useSelector((state) => state.getlocationdata.data);

  const locationId = useSelector((state) => state.postData.data);
  
  const LocationId = dispatch(getLocationId(locationId));
  const Locid = LocationId.payload;
  
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
  const basicDetailsFromRedux = useSelector((state) => state.basicDetails);
  const [mealsMap, setMealsMap] = useState({ [uid]: "breakfast" });

  useEffect(() => {
    retrieveData(basicDetailsFromRedux)
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

  const handleClearAll = () => {
    const unid = uuidv4();
    setTimeSlots({
      [unid]: [
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
    setService([
      {
        id: unid,
        component: (
          <RestaurantSession
            timeSlots={timeSlots}
            setTimeSlots={setTimeSlots}
            setOpeningTime={(time, index) =>
              handleTimeChange(time, unid, "opening", index)
            }
            setClosingTime={(time, index) =>
              handleTimeChange(time, unid, "closing", index)
            }
            key={unid}
            restaurantSessionid={unid}
            deleteRestaurantSession={deleteRestaurantSession}
            onMealsChange={(unid, name) => handleMealsChange(unid, name)}
            meals={mealsMap[unid]}
          />
        ),
      },
    ]);
    setMealsMap({ [unid]: "breakfast" });
    setCModalText([
      "Biriyani",
      "Dosa",
      "Vada",
      "Soup",
      "Paniyaram",
      "Naan",
      "Chappathi",
    ]);
    setAModalText([
      "Free Wifi",
      "Suite Room",
      "Park",
      "GameRoom",
      "AC",
      "Butler",
      "Hall",
    ]);
    setPModalText(["Two Wheeler", "Four Wheeler", "Heavy Vechicle"]);
    setCPillsText([]);
    setAPillsText([]);
    setPPillsText([]);
    setSafetyMeasures("");
    setSelectedAlcoholOption("");
  };

 
    const RestaurantSessions = service.map((serv) => {
      const sessionTimes =
        timeSlots[serv.id]?.map((slot) => ({
          start_time: slot.openingTime,
          end_time: slot.closingTime,
          weekday: slot.isContainWeeks
            ? Object.keys(slot.checkedDays).filter(
                (day) => slot.checkedDays[day]
              )
            : [],
        })) || [];

      return {
        name: mealsMap[serv.id],
        basicTime: sessionTimes,
      };
    });
    const datafromapi = useSelector((state) => state.postData.data);
  
    const payload = {

      locationId: datafromapi && datafromapi[0] ?datafromapi[0].locationId:"",
      restaurantSessionDto: RestaurantSessions,
      cuisines: cPillsText,
      amenities: aPillsText,
      parking: pPillsText,
      safetyMeasures,
      alcohol: selectedAlcoholOption,
    };

    console.log("payload from basic details button", payload);
  
 

  const getFormData=()=>{
    return payload;


}

const retrieveData = (tempPayload) => {
  setSelectedAlcoholOption(tempPayload?.alcohol ?? '')
  setSafetyMeasures(tempPayload?.safetyMeasures ?? '')
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