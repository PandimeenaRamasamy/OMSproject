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
    const data2 = useSelector((state) => state.registration.data);
    const [form,setForm]=useState({

      locationId:data2 && data2||"",

        lastOrderTime:"",
        kdsAlert:""
    })
    

     const[kitchenerror,setKitchenError]=useState({
       lastOrderTime:"",
        kdsAlert:""
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
        if(!form.lastOrderTime)
            {
          errors.lastOrderTime="Please Enter The Details"
          isValid=false;
        }
        if(!form.kdsAlert)
            {
          errors.kdsAlert="Please Enter The Details"
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
                  locationId:data2 && data2||data[0].location.id,
                  lastOrderTime: kitchenDetails.lastOrderTime || "",
                  kdsAlert: kitchenDetails.kdsAlert || "",
                
                });
              } catch (error) {
                console.error("Failed to parse attributes", error);
              }
            }
          }, [data]);
          console.log(form)
        
        
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
                    <input type="text"  placeholder='20'value={form.lastOrderTime ? form.lastOrderTime : ""}  style={{
                          borderColor: kitchenerror.lastOrderTime ? "red" : "#B3B3B3",
                        }} className='input-div' maxLength = "2"  onChange={(e)=>setForm({...form,"lastOrderTime":e.target.value})} /> <span className='span-kitchen'>mins</span> 
                    {kitchenerror.lastOrderTime && <div className='error_Kitchen'>{kitchenerror.lastOrderTime}</div>}
                </div>

                <h1 className='heading3-kitchen'>KDS Alert</h1>
                <p className='para-kitchen'>Alert alarm/sound to start preparing the item</p>

                <div className='input-div-kitchen'>
                <label className='label-kitchen' >Alert Time</label>
                    <input type="text" placeholder='20' value={form.kdsAlert ? form.kdsAlert : ""}  style={{
                        
                          borderColor: kitchenerror.kdsAlert ? "red" : "#B3B3B3",
                        }} className='input-div'  maxLength = "2" onChange={(e)=>setForm({...form,"kdsAlert":e.target.value})} />   <span className='span-kitchen'>mins</span>
                    {kitchenerror.kdsAlert && <div className='error_Kitchen'>{kitchenerror.kdsAlert}</div>}
                </div>

            </div>

        </div>
    </div>
  )
}
)

export default Kitchen