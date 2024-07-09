import React, { useState } from 'react'
import './ModalPickup.scss'
import ModelPickup from './ModalPickup.png'
import { LocationContext } from "../LocationProvider";
import { useContext } from 'react';


const Modal = ({}) => {

    const [showModal,setshowmodal]=useState(true)

    const {  
        
        togglebutton2,
        setToggleButton2,
      
       
        
    
      
      } = useContext(LocationContext);
    const handleCross=()=>{
        setToggleButton2(true)
      

    }

    const handleCrossYes=()=>{
        setToggleButton2(false)
        setshowmodal(false)

      

    }

    
  return (
    <>
    { showModal?
    <div className="main-componentPickup">
    <div className="simple-componentPickup">
        <button className='btncrossPickup' onClick={handleCross} >X</button>
        <img className='imgmodalPickup' src={ModelPickup}></img>
        <p>Are you sure you want to turn off pickup ?</p>
    <div className='btndivpendingPickup'>
        <button className='btnnopendingPickup 'onClick={handleCross}>No</button>
        <button className='btnyespendingPickup' onClick={handleCrossYes} >Yes</button>

        </div>
   
  </div>
  </div>
 
   :"" }
    </>
  )
}

export default Modal