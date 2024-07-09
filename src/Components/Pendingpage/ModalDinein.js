import React from 'react'
import './ModalDineIn.css'
import Modal2 from "./ModalDinein.png"
import { useContext } from 'react';
import { LocationContext } from '../LocationProvider';
import { useState } from 'react';

 
 
 
const Modal = () => {
  const [showModal,setshowmodal]=useState(true)

    const {  
        
        togglebutton1,
        setToggleButton1,
      
       
        
    
      
      } = useContext(LocationContext);
    const handleCross=()=>{
        setToggleButton1(true)
      

    }

    const handleCrossYes=()=>{
        setToggleButton1(false)
        setshowmodal(false)

      

    }

    
  return (
    <>
    { showModal?
    <div className="main-componentDinein">
    <div className="simple-componentDinein">
        <button className='btncrossDinein' onClick={handleCross} >X</button>
        <img className='imgmodalDinein' src={Modal2}></img>
        <p>Are you sure you want to turn off Dine In ?</p>
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
 
