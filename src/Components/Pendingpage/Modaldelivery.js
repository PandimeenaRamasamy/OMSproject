import React from 'react'
import './ModalDelivery.scss'
import Modal2 from "./Delivery.png"
import { useContext } from 'react';
import { LocationContext } from '../LocationProvider';
import { useState } from 'react';

 
 
 
const Modal = () => {
  const [showModal,setshowmodal]=useState(true)

    const {  
        
        togglebutton3,
        setToggleButton3,
      
       
        
    
      
      } = useContext(LocationContext);
    const handleCross=()=>{
        setToggleButton3(true)
      

    }

    const handleCrossYes=()=>{
        setToggleButton3(false)
        setshowmodal(false)

      

    }

    
  return (
    <>
    { showModal?
    <div className="main-componentDinein">
    <div className="simple-componentDinein">
        <button className='btncrossDinein' onClick={handleCross} >X</button>
        <img className='imgmodalDinein' src={Modal2}></img>
        <p>Are you sure you want to turn off Delivery ?</p>
    <div className='btndivpendingDinein'>
        <button className='btnnopendingDinein 'onClick={handleCross}>No</button>
        <button className='btnyespendingDinein' onClick={handleCrossYes} >Yes</button>

        </div>
   
  </div>
  </div>
 
   :"" }
    </>
  )
}

export default Modal
 
