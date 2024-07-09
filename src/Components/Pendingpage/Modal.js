import React from 'react'
import './Modal.scss'
import Model1 from './Modal1.png'

const Modal = () => {
  return (
    <div className="main-component">
    <div className="simple-component">
        <img className='imgmodal' src={Model1}></img>
        <p>Are you sure you want to delete this Outlet ?</p>
    <div className='btndivpending'>
        <button className='btnnopending'>No</button>
        <button className='btnyespending'>Yes</button>

        </div>
   
  </div>
  </div>
  )
}

export default Modal