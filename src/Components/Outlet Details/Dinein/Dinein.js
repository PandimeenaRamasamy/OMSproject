import React, { useState,useImperativeHandle } from "react";

import "./Dinein.scss";

import { useDispatch } from "react-redux";

const Dinein = React.forwardRef((props,ref) => {
  // const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [DineinselectedButton, setDineinselectedButton] = useState(false);
  const [InteractiveselectedButton, setInteractiveselectedButton] = useState(false); 
  const [CheckinselectedButton, setCheckinselectedButton] = useState(false);
  const [ReservationinselectedButton, setReservationinselectedButton] =useState(false);  
  const [Interactivedinein, setInteractivedinein] = useState("");
  const [Mergentdigitvaliadtion, setMergentdigitvaliadtion] = useState("");
  const [Outletdetails, setOutletdetails] = useState({
    locationId: "3ad3b065-ae91-4524-8cc7-2fdb5d3abb0b",
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


}))

 

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
                  value="enabled"
                  onClick={(event) => handleDineinEnable(event)}
                >
                  Enable{" "}
                </button>
                <button
                  className={`Disable_btn ${
                    !DineinselectedButton ? "blue" : ""
                  }`}
                  value="Disabled"
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
                        value="yes"
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
                        value="no"
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
                              style={{fontSize:'14px'}}
                              id="maximuminonline"
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
                        style={{fontSize:'14px'}}
                        maxLength={3}
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
                        id="maximuminoffline"
                        style={{fontSize:'14px'}}
                        maxLength={3}
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
