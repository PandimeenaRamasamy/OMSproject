import React, { useState } from 'react'
import './style.scss'
import DayAndTime from '../AddTime/AddTime'

const WorkingDay = () => {
  
  const [dayAndTimeComp, setDayAndTimeComp] = useState([<DayAndTime key={0} />])

  const addDayAndTime = () => {
    if(dayAndTimeComp.length < 3){
      setDayAndTimeComp([
        ...dayAndTimeComp,
        <DayAndTime key={dayAndTimeComp.length} />
      ])
    }
  }

  return (
    <div className='workingDay'>
      <div className='session'>
        <div className='sessionContainer'>
          <label>
            <input type="radio" id="breakfast" name='meal' value="breakfast" />
            <p className='sessionName'>BreakFast</p>
          </label>
        </div>
        <div className='sessionContainer'>
          <label>
            <input type="radio" id="lunch" name='meal' value="lunch" />
            <p className='sessionName'>Lunch</p>
          </label>
        </div>
        <div className='sessionContainer'>
          <label>
            <input type="radio" id="dinner" name='meal' value="dinner" />
            <p className='sessionName'>Dinner</p>
          </label>
        </div>
        <div className='sessionContainer'>
          <label>
            <input type="radio" id="cafe" name='meal' value="cafe" />
            <p className='sessionName'>Cafe</p>
          </label>
        </div>
        <div className='sessionContainer'>
          <label>
            <input type="radio" id="snacks" name='meal' value="snacks" />
            <p className='sessionName'>Snacks</p>
          </label>
        </div>
        <div className='sessionContainer'>
          <label>
            <input type="radio" id="happyHours" name='meal' value="happyHours" />
            <p className='sessionName'>Happy Hours</p>
          </label>
        </div>
      </div>

      <div className='addDayAndTime'>
        {dayAndTimeComp}
        <p onClick={addDayAndTime}>+ Add Time</p>
      </div>  
    </div>
  )
}

export default WorkingDay
