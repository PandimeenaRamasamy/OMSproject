import React, { useState } from "react";
import "./Dinein.css";
import { postDineinDataRequest } from '../../Actions/PostDataAction'
import { useDispatch } from 'react-redux';


const Dinein = () => {

    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('');
    const [Outletdetails, setOutletdetails] = useState(
        {
            locationId: '4d974ed6-11ff-4b79-89f2-191097b07cb9',
            dineIn: '',
            highChair: '',
            interactiveDineIn: '',
            merchant4DigitValidation: '',
            checkin: {
                maximumPeopleAllowedOnline: '',
                maximumPeopleAllowedOffline: '',
                lateShowTime: '',
                autoCancelTime: '',
                abandonTime: '',
                autoAssign: ''
            },
            reservation: {
                minimumPeopleAllowed: '',
                maximumPeopleAllowed: '',
                reservationServiceTimeFrom: '',
                reservationServiceTimeTo: '',
                days: [],
                bufferDays: ''
            }
        }
    )

    const handlesubmitoutlet = (event) => {
        event.preventDefault();
        console.log(Outletdetails);
    }

    const handleDayChange = (day) => {
        const updatedDays = Outletdetails.reservation.days.includes(day)
            ? Outletdetails.reservation.days.filter(d => d !== day)
            : [...Outletdetails.reservation.days, day];
        setOutletdetails({
            ...Outletdetails, reservation: {

                ...Outletdetails.reservation,
                days: updatedDays
            }
        })
    };


    const [DineinselectedButton, setDineinselectedButton] = useState('');
    const [InteractiveselectedButton, setInteractiveselectedButton] = useState('');
    const [CheckinselectedButton, setCheckinselectedButton] = useState('');
    const [ReservationinselectedButton, setReservationinselectedButton] = useState('');
    const [Interactivedinein, setInteractivedinein] = useState('');
    const [Mergentdigitvaliadtion, setMergentdigitvaliadtion] = useState('');



    const [Dineinselectedfn, setDineinselectedfn] = useState('');
    const [Interactiveselectedfn, setInteractiveselectedfn] = useState('');
    const [Checkinselectedfn, setCheckinselectedfn] = useState('');
    const [Reservationinselectedfn, setReservationinselectedfn] = useState('');


    const handleButtonClick = (button, category) => {
        if (category === 'Dinein') {
            setDineinselectedButton(button);
            if (button === 'yes') {
                setDineinselectedfn('yes')
            }
            else {
                setDineinselectedfn('')
            }

        }
        else if (category === 'Interactive') {
            setInteractiveselectedButton(button)
            if (button === 'yes') {
                setInteractiveselectedfn('yes')
            }
            else {
                setInteractiveselectedfn('')
            }

        }
        else if (category === 'Checkin') {
            setCheckinselectedButton(button)
            if (button === 'yes') {
                setCheckinselectedfn('yes')
            }
            else {
                setCheckinselectedfn('')
            }

        }
        else if (category === 'Reservation') {
            setReservationinselectedButton(button)
            if (button === 'yes') {
                setReservationinselectedfn('yes')
            }
            else {
                setReservationinselectedfn('')
            }

        }

    };



    const Interactivefield = (enordis, button) => {
        setInteractivedinein(button)
        setOutletdetails({ ...Outletdetails, interactiveDineIn: enordis })
    }

    const merchantvalidationfield = (enordis, button) => {
        setMergentdigitvaliadtion(button)
        setOutletdetails({ ...Outletdetails, merchant4DigitValidation: enordis })

    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
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

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedDays((prevCheckedDays) => ({
            ...prevCheckedDays,
            [name]: checked,
        }));
    };






    return (
        <div className="main-divfssai">

            <div className="submain-divfssai">
                <div className="headingfssai">
                    <h5>Dine in Details</h5>
                </div>




                {/* dine in details */}

                <div className="Dinein1">
                    <form  >
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

                            <div style={{ marginTop: '10px' }} className="enabledisablebtn">
                                <button
                                    type="button"

                                    value="Enable"
                                    onClick={(event) => {
                                        handleButtonClick('yes', 'Dinein')
                                        setOutletdetails({ ...Outletdetails, dineIn: event.target.value })


                                    }
                                    }






                                    className="enablebtn"
                                    style={{
                                        backgroundColor: DineinselectedButton === 'yes' ? '#0D79DC' : '#979797',

                                    }}
                                >
                                    Enable
                                </button>
                                <button
                                    type="button"
                                    value="Disable"
                                    onClick={(event) => {
                                        handleButtonClick('no', 'Dinein')
                                        setOutletdetails({ ...Outletdetails, dineIn: event.target.value })


                                    }
                                    }


                                    className="disablebtn"
                                    style={{
                                        backgroundColor: DineinselectedButton === 'no' ? '#0D79DC' : '#979797',

                                    }}
                                >
                                    Disable
                                </button>
                            </div>
                            {
                                Dineinselectedfn && <div>
                                    <form onSubmit={handleSubmit2}>
                                        <div className="lables1">
                                            <label htmlFor="BusinessLegalName" className="label">
                                                High Chair
                                            </label>
                                        </div>
                                        <div className="lables2">
                                            <label htmlFor="BusinessLegalName" className="label">
                                                Chair with long legs for children
                                            </label>
                                        </div>

                                        <div className="highchairradio">
                                            <div className="highchairradio1">
                                                <input
                                                    type="radio"
                                                    value="yes"
                                                    checked={Outletdetails.highChair === 'yes'}
                                                    onChange={(event) => setOutletdetails({ ...Outletdetails, highChair: event.target.value })}
                                                    className="radioStyle"
                                                />
                                                <label className="chairradio">Yes</label>
                                            </div>
                                            <div className="highchairradio2">
                                                <input
                                                    type="radio"
                                                    value="no"
                                                    checked={Outletdetails.highChair === 'no'}
                                                    onChange={(event) => setOutletdetails({ ...Outletdetails, highChair: event.target.value })}
                                                    className="radioStyle"
                                                />
                                                <label className="chairradio">No</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            }
                        </div>
                    </form>
                </div>
                <hr />


                {/* Interactive details */}

                <div className="Interactive2">
                    <div className="headingfssai">
                        <h5>Interactive Dine-in Details</h5>
                    </div>

                    <div className="">
                        <form >
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


                                <div style={{ marginTop: '10px' }} className="enabledisablebtn">
                                    <button
                                        type="button"
                                        onClick={(event) => {

                                            handleButtonClick('yes', 'Interactive')
                                            setOutletdetails({ ...Outletdetails, interactiveDineIn: event.target.value })
                                        }
                                        }



                                        className="enablebtn"
                                        style={{
                                            backgroundColor: InteractiveselectedButton === 'yes' ? '#0D79DC' : '#979797',

                                        }}
                                    >
                                        Enable
                                    </button>
                                    <button
                                        type="button"
                                        onClick={(event) => {
                                            handleButtonClick('no', 'Interactive')
                                            setOutletdetails({ ...Outletdetails, interactiveDineIn: event.target.value })

                                        }
                                        }



                                        className="disablebtn"
                                        style={{
                                            backgroundColor: InteractiveselectedButton === 'no' ? '#0D79DC' : '#979797',

                                        }}
                                    >
                                        Disable
                                    </button>
                                </div>

                                {
                                    Interactiveselectedfn &&
                                    <div className="interactivefn">
                                        <form onSubmit={handleSubmit2} className="interactivefn">
                                            <div className="lables1">
                                                <label htmlFor="BusinessLegalName" className="labelInter">
                                                    Interactive Dine-in
                                                </label>
                                            </div>
                                            <div className="lables2">
                                                <label htmlFor="BusinessLegalName" className="labelInter">
                                                    Please mention the Interactive Dine-in service
                                                </label>
                                            </div>

                                            <div style={{ marginTop: '10px' }} className="enabledisablebtnInter">
                                                <button
                                                    type="button"
                                                    onClick={() => Interactivefield('Enable', 'yes')}
                                                    className="enablebtn"
                                                    style={{
                                                        backgroundColor: Interactivedinein === 'yes' ? '#0D79DC' : '#979797',

                                                    }}
                                                >
                                                    Enable
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => Interactivefield('Disable', 'no')}
                                                    className="disablebtn"
                                                    style={{
                                                        backgroundColor: Interactivedinein === 'no' ? '#0D79DC' : '#979797',

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

                                            <div style={{ marginTop: '10px' }} className="enabledisablebtn">
                                                <button
                                                    type="button"
                                                    onClick={() => merchantvalidationfield('Enable', 'yes')}

                                                    className="enablebtn"
                                                    style={{
                                                        backgroundColor: Mergentdigitvaliadtion === 'yes' ? '#0D79DC' : '#979797',

                                                    }}
                                                >
                                                    Enable
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => merchantvalidationfield('Disable', 'no')}

                                                    className="disablebtn"
                                                    style={{
                                                        backgroundColor: Mergentdigitvaliadtion === 'no' ? '#0D79DC' : '#979797',

                                                    }}
                                                >
                                                    Disable
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                }
                            </div>

                        </form>
                    </div>

                    <hr />


                    {/* Checkin details */}

                    <div className="checkin3">
                        <div className="headingfssai">
                            <h5>Checkin Details</h5>
                        </div>
                        <div className="">
                            <form>
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
                                    <div style={{ marginTop: '10px' }} className="enabledisablebtn">
                                        <button
                                            type="button"
                                            onClick={() => handleButtonClick('yes', 'Checkin')}
                                            className="enablebtn"
                                            style={{
                                                backgroundColor: CheckinselectedButton === 'yes' ? '#0D79DC' : '#979797',

                                            }}
                                        >
                                            Enable
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleButtonClick('no', 'Checkin')}
                                            className="disablebtn"
                                            style={{
                                                backgroundColor: CheckinselectedButton === 'no' ? '#0D79DC' : '#979797',

                                            }}
                                        >
                                            Disable
                                        </button>
                                    </div>
                                    {
                                        Checkinselectedfn &&
                                        <div className="interactivefn">
                                            <form onSubmit={handleSubmit2} className="interactivefn">
                                                <div>
                                                    <div className="checkinform1">
                                                        <div className="check1">
                                                            <label htmlFor="maximumpeopleon" id="maximuminon" >Maximum People allowed online</label>
                                                            <input type="text" id="maximuminonline" onChange={(event) => {
                                                                setOutletdetails({
                                                                    ...Outletdetails, checkin: {
                                                                        ...Outletdetails.checkin,
                                                                        maximumPeopleAllowedOnline: event.target.value

                                                                    }
                                                                })
                                                            }
                                                            } />
                                                        </div>




                                                        <div className="check1">
                                                            <label htmlFor="maximumpeopleoff" id="maximuminoff">Maximum People allowed offline</label>
                                                            <input type="text" id="maximuminoffline" onChange={(event) => {
                                                                setOutletdetails({
                                                                    ...Outletdetails, checkin: {
                                                                        ...Outletdetails.checkin,
                                                                        maximumPeopleAllowedOffline: event.target.value

                                                                    }
                                                                })
                                                            }
                                                            } />
                                                        </div>
                                                    </div>
                                                    <div className="checkinform2">
                                                        <div className="check2">
                                                            <label htmlFor="Lateshowtime" id="maximuminon" >Late show time</label>
                                                            <input type="text" id="maximuminonline"
                                                                onChange={(event) => {
                                                                    setOutletdetails({
                                                                        ...Outletdetails, checkin: {
                                                                            ...Outletdetails.checkin,
                                                                            lateShowTime: event.target.value

                                                                        }
                                                                    })
                                                                }
                                                                }
                                                            />
                                                        </div>
                                                        <div className="check2">
                                                            <label htmlFor="AutocancelTime" id="maximuminoff">Auto cancel Time</label>
                                                            <input type="text" id="maximuminoffline"
                                                                onChange={(event) => {
                                                                    setOutletdetails({
                                                                        ...Outletdetails, checkin: {
                                                                            ...Outletdetails.checkin,
                                                                            autoCancelTime: event.target.value

                                                                        }
                                                                    })
                                                                }
                                                                }

                                                            />
                                                        </div>
                                                        <div className="check2">
                                                            <label htmlFor="Abandontime" id="maximuminoff">Abandon time</label>
                                                            <input type="text" id="maximuminoffline"
                                                                onChange={(event) => {
                                                                    setOutletdetails({
                                                                        ...Outletdetails, checkin: {
                                                                            ...Outletdetails.checkin,
                                                                            abandonTime: event.target.value

                                                                        }
                                                                    })
                                                                }
                                                                }

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lables1">
                                                    <label htmlFor="BusinessLegalName" className="labelcheckin1">
                                                        Auto Assign option
                                                    </label>
                                                </div>
                                                <div className="lables2">
                                                    <label htmlFor="BusinessLegalName" className="labelcheckin2">
                                                        Assign table automatically to the customer
                                                    </label>
                                                </div>
                                                <div className="highchairradio">
                                                    <div className="highchairradio1">
                                                        <input
                                                            type="radio"
                                                            className="radioStyle"
                                                            value="yes"
                                                            checked={Outletdetails.checkin.autoAssign === 'yes'}
                                                            onChange={(event) => setOutletdetails({
                                                                ...Outletdetails, checkin: {
                                                                    ...Outletdetails.checkin,
                                                                    autoAssign: event.target.value

                                                                }
                                                            })}

                                                        />
                                                        <label className="chairradio">Yes</label>
                                                    </div>
                                                    <div className="highchairradio2">
                                                        <input
                                                            type="radio"
                                                            value="no"
                                                            className="radioStyle"
                                                            checked={Outletdetails.checkin.autoAssign === 'no'}
                                                            onChange={(event) => setOutletdetails({
                                                                ...Outletdetails, checkin: {
                                                                    ...Outletdetails.checkin,
                                                                    autoAssign: event.target.value

                                                                }
                                                            })}

                                                        />
                                                        <label className="chairradio">No</label>
                                                    </div>
                                                </div>



                                            </form>
                                        </div>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Reservation details */}


                <div className="reservation4">
                    <div className="headingfssai">
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
                            <div style={{ marginTop: '10px' }} className="enabledisablebtn">
                                <button
                                    type="button"
                                    onClick={() => handleButtonClick('yes', 'Reservation')}
                                    className="enablebtn"
                                    style={{
                                        backgroundColor: ReservationinselectedButton === 'yes' ? '#0D79DC' : '#979797',

                                    }}>

                                    Enable
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleButtonClick('no', 'Reservation')}
                                    className="disablebtn"
                                    style={{
                                        backgroundColor: ReservationinselectedButton === 'no' ? '#0D79DC' : '#979797',

                                    }}>

                                    Disable
                                </button>
                            </div>
                            {
                                Reservationinselectedfn &&
                                <div>
                                    <div className="checkinform1">
                                        <div className="check1">
                                            <label htmlFor="maximumpeopleon" id="maximuminon" >Minimum no of people allowed</label>
                                            <input type="text" id="maximuminonline"
                                                onChange={(event) => {
                                                    setOutletdetails({
                                                        ...Outletdetails, reservation: {
                                                            ...Outletdetails.reservation,
                                                            minimumPeopleAllowed: event.target.value

                                                        }
                                                    })
                                                }
                                                }


                                            />
                                        </div>
                                        <div className="check1">
                                            <label htmlFor="maximumpeopleoff" id="maximuminoff">Maximum no of people allowed</label>
                                            <input type="text" id="maximuminoffline"
                                                onChange={(event) => {
                                                    setOutletdetails({
                                                        ...Outletdetails, reservation: {
                                                            ...Outletdetails.reservation,
                                                            maximumPeopleAllowed: event.target.value

                                                        }
                                                    })
                                                }
                                                }

                                            />
                                        </div>
                                    </div>
                                    <label htmlFor="BusinessLegalName" className="labelreserve">
                                        Reservation serive time
                                    </label>
                                    <div className="checkinform2">
                                        <div className="check2">
                                            <label htmlFor="Lateshowtime" id="maximuminon" >From</label>
                                            <input type="text" id="maximuminonline"
                                                onChange={(event) => {
                                                    setOutletdetails({
                                                        ...Outletdetails, reservation: {
                                                            ...Outletdetails.reservation,
                                                            reservationServiceTimeFrom: event.target.value

                                                        }
                                                    })
                                                }
                                                }

                                            />
                                        </div>
                                        <div className="check2">
                                            <label htmlFor="AutocancelTime" id="maximuminoff">To</label>
                                            <input type="text" id="maximuminoffline"
                                                onChange={(event) => {
                                                    setOutletdetails({
                                                        ...Outletdetails, reservation: {
                                                            ...Outletdetails.reservation,
                                                            reservationServiceTimeTo: event.target.value

                                                        }
                                                    })
                                                }
                                                }
                                            />
                                        </div>

                                    </div>
                                    <label htmlFor="BusinessLegalName" className="reservelabel">
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
                                                <label>

                                                    {day}
                                                </label>
                                            </div>
                                        ))}

                                    </div>
                                    <label htmlFor="BusinessLegalName" className="reservelabel">
                                        Reservation Buffer Days
                                    </label>
                                    <div className="Reservation available days">
                                        <div className="check2">
                                            <label htmlFor="Lateshowtime" id="reservationdays" >Minimum no.of days before reservation should be placed</label>
                                            <input type="text" id="maximuminonline"
                                                onChange={(event) => {
                                                    setOutletdetails({
                                                        ...Outletdetails, reservation: {
                                                            ...Outletdetails.reservation,
                                                            bufferDays: event.target.value

                                                        }
                                                    })
                                                }
                                                }
                                            />
                                        </div>


                                    </div>




                                    {/* <label htmlFor="BusinessLegalName" className="reservelabel">
                                            Reservation Buffer Days
                                        </label>

                                        <div className="checkinform2">
                                            <div className="check2">
                                                <label htmlFor="Lateshowtime" id="maximuminon" >Minimum no.of days before reservation should be placed</label>
                                                <input type="text" id="maximuminonline" />
                                            </div>


                                        </div> */}
                                </div>
                            }
                        </div>

                    </div>
                </div>

                <br /><br /><br />
                <button onClick={() => {
                    dispatch(postDineinDataRequest(Outletdetails))
                }}>Post data</button>

            </div>
            <br />



        </div>
    );
};

export default Dinein;
