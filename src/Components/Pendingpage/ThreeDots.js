import React, { useState } from 'react'
import "./ThreeDots.scss";
import morevertical from "../../assets/images/more-vertical.jpg"
import { LuCopyPlus } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";



const ThreeDots = () => {
    const[threedots,setThreeDots]=useState(false)
  return (
    <>
    {threedots?(
    <div className='ThreeDots-container'>
        <LuCopyPlus className='copy' />
    <FaRegEdit className='copy'/>
    
    <ImBin className='copy' />
    </div>
):""}
    <button onClick={()=>setThreeDots(!threedots)} className='dots'><img src={morevertical}></img></button>
    </>

  )
}

export default ThreeDots