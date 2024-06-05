import React, { useState } from 'react'
import './style.scss'
import Time from '../Time'

const AddTime = ({timeSlot, setTimeSlot}) => {

  const { openingTime, closingTime } = timeSlot
  
  return (
    <div className='AddTime'>
      <div className='time'>
        <div className='timeContainer'>
            <div className='nameBox'>Opening Time</div>
            <div className='timeBox'><Time selectedTime={openingTime} setSelectedTime={(time) => setTimeSlot({ ...timeSlot, openingTime: time })} /></div>
        </div>
        <div className='timeContainer'>
            <div className='nameBox'>Closing Time</div>
            <div className='timeBox'><Time selectedTime={closingTime} setSelectedTime={(time) => setTimeSlot({ ...timeSlot, closingTime: time })} /></div>
        </div>
      </div>
    </div>
  )
}

export default AddTime
