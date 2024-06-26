import React, { useState } from 'react'
import './style.scss'

const Time = ({selectedTime, setSelectedTime}) => {
    console.log("hello",selectedTime)
    console.log(typeof selectedTime);
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value)
    }

    return (
        <div className='time'>
            <input type='time' value={selectedTime.deliveryServiceTimeFrom} onChange={handleTimeChange} />
        </div>
    )
}

export default Time
