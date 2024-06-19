import React, { useImperativeHandle } from 'react'
import '../Kitchen/Kitchen.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getLocationId } from "../../../redux/Actions/PostDataAction";


const Kitchen = React.forwardRef((props,ref) => {
    const dispatch = useDispatch();

    const locationId = useSelector((state) => state.postData.data);  
    const LocationId = dispatch(getLocationId(locationId));
    const Locid = LocationId.payload;
    const [form,setForm]=useState({

        locationId:Locid,

        locationId: "6f0d05ab-3c6d-4812-b29a-22822cabdeea",

        LastorderTime:"",
        KDSAlert:""
    })
    console.log(form)

     const[kitchenerror,setKitchenError]=useState({
        LastorderTime:"",
        KDSAlert:""
     })
    const getFormData=()=>{
        return form;


    }
    useImperativeHandle(ref,()=>({
        getFormData,
        validate

     
    }))
    const validate=()=>{
        let isValid=true;

        let errors={}
        if(!form.LastorderTime)
            {
          errors.LastorderTime="Please Enter The Details"
          isValid=false;
        }
        if(!form.KDSAlert)
            {
          errors.KDSAlert="Please Enter The Details"
          isValid=false;
        }
            setKitchenError(errors);
            return isValid;
        }
  return (
    <div className='main-kitchen-div'>
        <div className='submain-kitchen-div'>
            <div>
                <h1 className='heading-kitchen'>Kitchen Details</h1>
            </div>
            <div className='form-kitchen-div'>
                <h1 className='heading2-kitchen'>Last order Time</h1>
                <p className='para-kitchen'>Allow customer to place last order before the shop closes</p>
                <div className='input-div-kitchen'>
                    <label className='label-kitchen' >Time</label>
                    <input type="text"  placeholder='20' style={{
                          borderColor: kitchenerror.LastorderTime ? "red" : "#B3B3B3",
                        }} className='input-div' maxLength = "2"  onChange={(e)=>setForm({...form,"LastorderTime":e.target.value})} /> <span className='span-kitchen'>mins</span>
                    {kitchenerror.LastorderTime && <div className='error_Kitchen'>{kitchenerror.LastorderTime}</div>}
                </div>

                <h1 className='heading3-kitchen'>KDS Alert</h1>
                <p className='para-kitchen'>Alert alarm/sound to start preparing the item</p>

                <div className='input-div-kitchen'>
                <label className='label-kitchen' >Alert Time</label>
                    <input type="text" placeholder='20' style={{
                        
                          borderColor: kitchenerror.KDSAlert ? "red" : "#B3B3B3",
                        }} className='input-div'  maxLength = "2" onChange={(e)=>setForm({...form,"KDSAlert":e.target.value})} />  <span className='span-kitchen'>mins</span>
                    {kitchenerror.KDSAlert && <div className='error_Kitchen'>{kitchenerror.KDSAlert}</div>}
                </div>

            </div>

        </div>
    </div>
  )
}
)

export default Kitchen