
import './Modal.scss'
import Model1 from './Modal1.png'
import React, { useContext } from 'react'
import { LocationContext } from "../LocationProvider";

const Modal = ({setshowmodal,showmodal}) => {
  const {  
    deleteoutlet,setdeleteoutlet
  
  } = useContext(LocationContext);
    const handleCross=()=>{
        setshowmodal(false)

    }

    


  return (
    <div className="main-component">
    <div className="simple-component">
        <button className='btncross' onClick={handleCross} >X</button>
        <img className='imgmodal' src={Model1}></img>
        <p>Are you sure you want to delete this Outlet ?</p>
    <div className='btndivpending'>
        <button className='btnnopending ' onClick={handleCross}>No</button>
        <button className='btnyespending'  onClick={()=>{
          setdeleteoutlet(true)
        }}>Yes</button>

        </div>


   
  </div>
  </div>


  )
}

export default Modal