import React, { useState } from 'react'
import './style.scss'

const Time = ({selectedTime, setSelectedTime}) => {
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value)
    }

    return (
        <div className='time'>
            <input type='time' value={selectedTime} onChange={handleTimeChange} />
        </div>
    )
}

export default Time