import React, { useImperativeHandle,useEffect } from 'react'
import '../Kitchen/Kitchen.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getLocationId } from "../../../redux/Actions/PostDataAction";


const Kitchen = React.forwardRef((props,ref) => {
    const dispatch = useDispatch();
    const locationId = useSelector((state) => state.postData.data);  
    const LocationId = dispatch(getLocationId(locationId));
    const datafromapi = useSelector((state) => state.postData.data);
    const Locid = LocationId.payload;
    const [form,setForm]=useState({

        locationId: datafromapi && datafromapi[0] ?datafromapi[0].locationId:"",

        LastorderTime:"",
        KDSAlert:""
    })
    

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
        const data = useSelector((state) => state.getlocationdata.data);
        useEffect(() => {
            if (data && data[0] && data[0].location && data[0].location.attributes) {
              try {
                const attributes = JSON.parse(data[0].location.attributes);

                const kitchenDetails = attributes.KitchenDetails ;
                console.log(kitchenDetails)

                setForm({
                  LastorderTime: kitchenDetails.lastOrderTime || "",
                  KDSAlert: kitchenDetails.kdsAlert || "",
                
                });
              } catch (error) {
                console.error("Failed to parse attributes", error);
              }
            }
          }, [data]);
        
        
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
                    <input type="text"  placeholder='20'value={form.LastorderTime ? form.LastorderTime : ""}  style={{
                          borderColor: kitchenerror.LastorderTime ? "red" : "#B3B3B3",
                        }} className='input-div' maxLength = "2"  onChange={(e)=>setForm({...form,"LastorderTime":e.target.value})} /> <span className='span-kitchen'>mins</span> 
                    {kitchenerror.LastorderTime && <div className='error_Kitchen'>{kitchenerror.LastorderTime}</div>}
                </div>

                <h1 className='heading3-kitchen'>KDS Alert</h1>
                <p className='para-kitchen'>Alert alarm/sound to start preparing the item</p>

                <div className='input-div-kitchen'>
                <label className='label-kitchen' >Alert Time</label>
                    <input type="text" placeholder='20' value={form.KDSAlert ? form.KDSAlert : ""}  style={{
                        
                          borderColor: kitchenerror.KDSAlert ? "red" : "#B3B3B3",
                        }} className='input-div'  maxLength = "2" onChange={(e)=>setForm({...form,"KDSAlert":e.target.value})} />   <span className='span-kitchen'>mins</span>
                    {kitchenerror.KDSAlert && <div className='error_Kitchen'>{kitchenerror.KDSAlert}</div>}
                </div>

            </div>

        </div>
    </div>
  )
}
)

export default Kitchen