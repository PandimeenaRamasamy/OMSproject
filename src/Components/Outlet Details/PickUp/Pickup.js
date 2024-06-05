import React, { useState } from 'react';
import "./Pickup.css";

const Pickup = () => {
    const[form,setForm]=useState({
        serviceTimeFrom:"",
        serviceTimeTo:"",
        Payment:[],
        scheduleDuration:"",
        packagingCharge:"",
        ETA:""

    })
    const handleSubmit=()=>{
        console.log(form)
    }
    const handlecheckedchange=(e)=>{
         const value=e.target.value;
         const ischecked=e.target.checked;
         if(ischecked)
            {
                setForm({...form,Payment:[...form.Payment,value]})
            }        
    }
    const [isEnabled, setIsEnabled] = useState(false);

    const handleEnable = () => {
        setIsEnabled(true);
    };

    const handleDisable = () => {
        setIsEnabled(false);
    };
   

    return (
        <div className='Pickup_container'>
            
            <div className='Pickup_form'>
                <div><h5 className='Pickup_heading1'>Pick Up Details</h5></div>
                <div><h5 className='Pickup_heading2'>Pick Up</h5></div>
                <div><h5 className='Pickup_heading3'>Please Mention The Pick Up Service</h5></div>
                <div className='Pick_Upbtn'>
                    <button className={`Enable_btn ${isEnabled ? 'blue' : ''}`} onClick={handleEnable}>Enable</button>
                    <button className={`Disable_btn ${!isEnabled ? 'blue' : ''}`} onClick={handleDisable}>Disable</button>
                    {isEnabled && (
                        <>
                        <div><h5 className='Pickup_heading4'>Pick up service time</h5></div>
                        <div className='checkbox_class'>
                        <input type="checkbox" className='checkbox1'></input>
                        <h5 className='Pickup_heading5'>Same as Restaurant Working Time</h5>    
                        </div>
                        <div className='from_to'>
                        <h5 className='Pickup_heading6'>From</h5>
                        <h5 className='Pickup_heading6'>To</h5>
                        </div>
                        <div className='from_to_input'>
                        <input type="text" className='textbox1' placeholder='11:00 AM' onChange={(e)=>setForm({...form,"serviceTimeFrom":e.target.value})} ></input>
                        <input type="text" className='textbox2' placeholder='8:00 PM' onChange={(e)=>setForm({...form,"serviceTimeTo":e.target.value})}></input>
                        </div>
                        <h5 className='Pickup_heading7'>Pick up Payment</h5> 
                        <h5 className='Pickup_heading3'>Please mention the payment methods</h5>
                        <div>
                        <input type='checkbox' className='Payment_checkbox' value="Cards" onChange={handlecheckedchange}></input><label className='label'>Cards</label>
                        <input type='checkbox' className='Payment_checkbox' value="Pay at store" onChange={handlecheckedchange} ></input><label className='label'>Pay at store</label>
                        <input type='checkbox' className='Payment_checkbox' value="Apple Pay" onChange={handlecheckedchange}></input><label className='label'>Apple Pay</label>
                        <input type='checkbox' className='Payment_checkbox' value="Google Pay" onChange={handlecheckedchange}></input><label className='label'>Google Pay</label>
                        </div>
                        <h5 className='Pickup_heading7'>Schedule Pick Up</h5> 
                        <h5 className='Pickup_heading3'>Customer can place pick-up order for future/next session</h5>
                        <div>
                            <input type="radio" name="YesorNo" className='radio1' ></input><label className='label'>Yes</label>
                            <input type="radio" name="YesorNo" className='radio2'></input><label className='label'>No</label>
                        </div>
                        <h5 className='Pickup_heading7'>Scheduled Pick up time Duration </h5> 
                        <h5 className='Pickup_heading3'>Please mention the scheduled pick up time duration</h5>
                        <div>
                            <input type="number" placeholder='EOD' className='updown' onChange={(e)=>setForm({...form,"scheduleDuration":e.target.value})}></input>
                        </div>
                        <h5 className='Pickup_heading7'>Packaging Charge </h5> 
                       <input type="text" className='Pack_type' placeholder='$' onChange={(e)=>setForm({...form,"packagingCharge":e.target.value})}></input>
                       <h5 className='Pickup_heading7'>Pick up ETA </h5> 
                        <h5 className='Pickup_heading3'>Please mention the Estimated time of arrival for Pick up</h5>
                        <input type="text" className='ETA_type' placeholder='30 mins' onChange={(e)=>setForm({...form,"ETA":e.target.value})}></input>
                        </>
                    )
                    }
                </div>
               
            </div>
        </div>
    );
};

export default Pickup;
