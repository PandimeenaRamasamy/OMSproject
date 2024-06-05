import React from 'react'
import './style.scss'
import AddTime from '../AddTime/AddTime'

const AddDayAndTime = () => {
  return (
    <div className='addDayAndTime'>
      <AddTime />
      <div className='checkboxWrapper'>
        <div className='checkBoxContainer'>
          <label>
            <input className='checkbox' type='checkbox'/>
            <p className='cPname'>AllDay</p>
          </label>
        </div>
        
        <div className='checkBoxContainer'>
          <label>
            <input className='checkbox' type='checkbox'/>
            <p className='cPname'>Monday</p>
          </label>
        </div>

        <div className='checkBoxContainer'>
          <label>
            <input className='checkbox' type='checkbox'/>
            <p className='cPname'>Tuesday</p>
          </label>
        </div>

        <div className='checkBoxContainer'>
          <label>
            <input className='checkbox' type='checkbox'/>
            <p className='cPname'>Wednesday</p>
          </label>
        </div>

        <div className='checkBoxContainer'>
          <label>
            <input className='checkbox' type='checkbox'/>
            <p className='cPname'>Thursday</p>
          </label>
        </div>

        <div className='checkBoxContainer'>
          <label>
            <input className='checkbox' type='checkbox'/>
            <p className='cPname'>Friday</p>
          </label>
        </div>

        <div className='checkBoxContainer'>
          <label>
            <input className='checkbox' type='checkbox'/>
            <p className='cPname'>Saturday</p>
          </label>
        </div>

        <div className='checkBoxContainer'>
          <label>
            <input className='checkbox' type='checkbox'/>
            <p className='cPname'>Sunday</p>
          </label>
        </div>

      </div>
    </div>
  )
}

export default AddDayAndTime
