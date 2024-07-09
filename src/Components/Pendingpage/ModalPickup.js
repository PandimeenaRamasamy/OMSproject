import React from 'react'
import './ModalPickup.scss'
import ModelPickup from './ModalPickup.png'


const Modal = ({setshowmodal,showmodal}) => {
    const handleCross=()=>{
        setshowmodal(false)

    }
  return (
    <div className="main-componentPickup">
    <div className="simple-componentPickup">
        <button className='btncrossPickup' onClick={handleCross} >X</button>
        <img className='imgmodalPickup' src={ModelPickup}></img>
        <p>Are you sure you want to turn off pickup ?</p>
    <div className='btndivpendingPickup'>
        <button className='btnnopendingPickup ' onClick={handleCross}>No</button>
        <button className='btnyespendingPickup'>Yes</button>

        </div>
   
  </div>
  </div>
  )
}

export default Modal