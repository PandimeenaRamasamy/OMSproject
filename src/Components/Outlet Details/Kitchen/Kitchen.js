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
        locationId: Locid,
        LastorderTime:"",
        KDSAlert:""


    })
    console.log(form)


    const getFormData=()=>{
        return form;


    }
    useImperativeHandle(ref,()=>({
        getFormData,


    }))
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
                    <input type="text" className='input-div' maxLength = "2"  onChange={(e)=>setForm({...form,"LastorderTime":e.target.value})} /> <span className='span-kitchen'>mins</span>
                </div>

                <h1 className='heading3-kitchen'>KDS Alert</h1>
                <p className='para-kitchen'>Alert alarm/sound to start preparing the item</p>

                <div className='input-div-kitchen'>
                <label className='label-kitchen' >Alert Time</label>
                    <input type="text" className='input-div'  maxLength = "2" onChange={(e)=>setForm({...form,"KDSAlert":e.target.value})} />  <span className='span-kitchen'>mins</span>

                </div>

            </div>

        </div>
    </div>
  )
}
)

export default Kitchen