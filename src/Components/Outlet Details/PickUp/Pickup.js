import React, { useState, useEffect, useImperativeHandle } from 'react';
import "./Pickup.scss";
import vector from "../../../assets/images/Vector.svg";
import { useDispatch, useSelector } from "react-redux";
import { getLocationId } from "../../../redux/Actions/PostDataAction";

const Pickup = React.forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const [schedulepick, setSchedulePick] = useState(true);
  const datafromapi = useSelector((state) => state.postData.data);
  const data = useSelector((state) => state.getlocationdata.data);
  const loactiondata = useSelector((state) => state.locationiddata.locationId);
  const data2 = useSelector((state) => state.registration.data);
  const [form, setForm] = useState({
    locationId: data2 && data2 || "",
    serviceTimeFrom: "",
    serviceTimeTo: "",
    payment: [],
    scheduledDuration: "",
    packagingCharge: "",
    eta: ""
  });
  const [pickuperror, setPickUpError] = useState({
    serviceTimeFrom: "",
    serviceTimeTo: "",
    payment: [],
    scheduledDuration: "",
    packagingCharge: "",
    eta: ""
  });
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem("Pickup"));
    if (savedData) {
      setForm({
        locationId: data2 && data2 || "",
        serviceTimeFrom: savedData.serviceTimeFrom || "",
        serviceTimeTo: savedData.serviceTimeTo || "",
        payment: savedData.payment || [],
        scheduledDuration: savedData.scheduledDuration || "",
        packagingCharge: savedData.packagingCharge || "",
        eta: savedData.eta || "",
      });
      setIsEnabled(true);
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
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0 && data[0].location) {
      const location = data[0].location;
      try {
        const attributes = JSON.parse(location.attributes || "{}");
        const PickUp = attributes.PickUpDetails || {};
        if (attributes.PickUpDetails) {
          setIsEnabled(true);
        }
        setForm({
          locationId: loactiondata && loactiondata || null,
          serviceTimeFrom: PickUp.serviceTimeFrom || "",
          serviceTimeTo: PickUp.serviceTimeTo || "",
          payment: PickUp.payment || [],
          scheduledDuration: PickUp.scheduledDuration || "",
          packagingCharge: PickUp.packagingCharge || "",
          eta: PickUp.eta || "",
        });
      } catch (error) {
        console.error("Failed to parse attributes", error);
      }
    }
  }, [data]);

  const handleEnable = () => {
    setIsEnabled(true);
  };

  const handleDisable = () => {
    setIsEnabled(false);
  };

  const getFormData = () => {
    return form;
  };

  const handleSchedulePickup = () => {
    setSchedulePick(false);
  };

  const handleSchedulePickuptrue = () => {
    setSchedulePick(true);
  };

  useImperativeHandle(ref, () => ({
    getFormData,
    validate,
  }));

  const validate = () => {
    let isValid = true;
    const errors = {};
    if (!form.serviceTimeFrom && isEnabled) {
      errors.serviceTimeFrom = "Please fill this field";
      isValid = false;
    }
    if (!form.serviceTimeTo && isEnabled) {
      errors.serviceTimeTo = "Please fill this field";
      isValid = false;
    }
    if (!form.packagingCharge && isEnabled) {
      errors.packagingCharge = "Please fill this field";
      isValid = false;
    }
    if (!form.scheduledDuration && isEnabled && schedulepick) {
      errors.scheduledDuration = "Please fill this field";
      isValid = false;
    }
    if (!form.eta && isEnabled) {
      errors.eta = "Please fill this field";
      isValid = false;
    }
    setPickUpError(errors);
    return isValid;
  };

  const handleDownClick = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setForm({ ...form, scheduledDuration: newIndex });
    }
  };
  
const handleUpClick = () => {
  const newIndex = currentIndex + 1;
  setCurrentIndex(newIndex);
  setForm({ ...form, scheduledDuration: newIndex });
};

  const handlecheckedchange = (e) => {
    const value = e.target.value;
    const ischecked = e.target.checked;
    if (ischecked) {
      setForm({ ...form, payment: [...form.payment, value] });
    }
  };

  return (
    <div className='Pickup_container'>
      <div className='Pickup_form'>
        <div><h5 className='Pickup_heading1'>Pick Up Details</h5></div>
        <div><h5 className='Pickup_heading2'>Pick Up</h5></div>
        <div><h5 className='Pickup_heading3'>Please Mention The Pick Up Service</h5></div>
        <div className='switchButtonStyles'>
          <button className={` ${isEnabled ? 'blue' : 'hello'}`} onClick={handleEnable}>Enable</button>
          <button className={` ${!isEnabled ? 'blue' : 'hello'}`} onClick={handleDisable}>Disable</button>
        </div>
        {isEnabled && (
          <>
            <div><h5 className='Pickup_heading4'>Pick up service time</h5></div>
            <div className='checkbox_class'>
              <input type="checkbox" className='checkbox1'></input>
              <h5 className='Pickup_heading5'>Same as Restaurant Working Time</h5>
            </div>
            <div className='from_to'>
              <h5 className='Pickup_heading6'>From</h5>
              <h5 className='Pickup_heading6 Pickup_heading6to'>To</h5>
            </div>
            <div className='from_to_input'>
              <input type="time" value={form.serviceTimeFrom} className='textbox1' placeholder='11:00 AM' style={{
                borderColor: pickuperror.serviceTimeFrom ? "red" : "#B3B3B3",
              }} onChange={(e) => setForm({ ...form, "serviceTimeFrom": e.target.value })}></input>
              <input type="time" value={form.serviceTimeTo} className='textbox2' placeholder='8:00 PM' onChange={(e) => setForm({ ...form, "serviceTimeTo": e.target.value })} style={{
                borderColor: pickuperror.serviceTimeTo ? "red" : "#B3B3B3",
              }}></input>
              {pickuperror.serviceTimeFrom && <div className='error_pickup'>{pickuperror.serviceTimeFrom}</div>}
              {pickuperror.serviceTimeTo && <div className='error-flex'>{pickuperror.serviceTimeTo}</div>}
            </div>
            <h5 className='Pickup_heading7'>Pick up Payment</h5>
            <h5 className='Pickup_heading10'>Please mention the payment methods</h5>
            <div style={{ display: 'flex' }}>
              <input type='checkbox' style={{ marginLeft: '0px' }} value="Cards" className='Pickcheck' onChange={handlecheckedchange} checked={form.payment.includes("Cards")}></input><label style={{ fontSize: "16px", marginTop: "20px", marginLeft: '10px' }}>Cards</label>
              <input type='checkbox' style={{ marginLeft: '30px' }} className='Pickcheck' value="Pay at store" onChange={handlecheckedchange} checked={form.payment.includes("Pay at store")}></input><label style={{ fontSize: "16px", marginTop: "20px", marginLeft: '10px' }}>Pay at store</label>
              <input type='checkbox' style={{ marginLeft: '30px' }} className='Pickcheck' value="Apple Pay" onChange={handlecheckedchange} checked={form.payment.includes("Apple Pay")}></input><label style={{ fontSize: "16px", marginTop: "20px", marginLeft: '10px' }}>Apple Pay</label>
              <input type='checkbox' style={{ marginLeft: '30px' }} className='Pickcheck' value="Google Pay" onChange={handlecheckedchange} checked={form.payment.includes("Google Pay")}></input><label style={{ fontSize: "16px", marginTop: "20px", marginLeft: '10px' }}>Google Pay</label>
            </div>
            <div>
              <h5 className='Pickup_heading13'>Schedule Pick Up</h5>
              <h5 className='Pickup_heading11'>Customer can place pick-up order for future/next session</h5>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <input type="radio" defaultChecked name="YesorNo" className='radioo1' onClick={handleSchedulePickuptrue} style={{ width: "20px" }} ></input><label className='' style={{ fontSize: "16px", marginTop: "20px", marginLeft: "6px" }}>Yes</label>
                <input type="radio" name="YesorNo" className='radioo2' onClick={handleSchedulePickup} style={{ width: "20px" }}></input><label className='' style={{ fontSize: "16px", marginTop: "20px", marginLeft: "6px" }}>No</label>
              </div>
            </div>
            {schedulepick && (
              <div>
                <h5 className='Pickup_heading12'>Scheduled Pick up time Duration </h5>
                <h5 className='Pickup_heading3'>Please mention the scheduled pick up time duration</h5>
                <div className='pickupduration'>
                  <input type="text" value={form.scheduledDuration} style={{
                    borderColor: pickuperror.scheduledDuration ? "red" : "#B3B3B3",
                  }} placeholder='EOD' className='updown' min="0" onChange={(e) => setForm({ ...form, "scheduledDuration": e.target.value })}></input>
                </div>
                <div className="arrow1">
                  <div className="downsideArrow" onClick={handleUpClick}>
                    <img src={vector} alt="" />
                  </div>
                  <div className="upsideArrow" onClick={handleDownClick}>
                    <img src={vector} alt="" />
                  </div>
                </div>
                {pickuperror.scheduledDuration && <div className='error_pickup'>{pickuperror.scheduledDuration}</div>}
              </div>
            )}
            <div className='PackagingCharge'>
              <h5 className='Pickup_heading7'>Packaging Charge </h5>
              <input type="text" value={form.packagingCharge} style={{
                borderColor: pickuperror.packagingCharge ? "red" : "#B3B3B3",
              }} className='Pack_type' placeholder='$' onChange={(e) => setForm({ ...form, "packagingCharge": e.target.value })}></input>
              {pickuperror.packagingCharge && <div className='error_pickup'>{pickuperror.packagingCharge}</div>}
            </div>
            <div className='picketa'>
              <h5 className='Pickup_heading7'>Pick up ETA </h5>
              <h5 className='Pickup_heading3'>Please mention the Estimated time of arrival for Pick up</h5>
              <input type="text" value={form.eta} style={{
                borderColor: pickuperror.ETA ? "red" : "#B3B3B3",
              }} className='ETA_type' placeholder='30 mins' onChange={(e) => setForm({ ...form, "eta": e.target.value })}></input>
              {pickuperror.eta && <div className='error_pickup'>{pickuperror.eta}</div>}
            </div>
          </>
        )}
      </div>
    </div>
  );
});

export default Pickup;
