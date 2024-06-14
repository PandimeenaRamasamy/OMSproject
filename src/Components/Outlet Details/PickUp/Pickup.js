import React, { useState,useImperativeHandle, useRef} from 'react';
import "./Pickup.scss";

const Pickup = React.forwardRef((props,ref) => {
    
    const[form,setForm]=useState({
        serviceTimeFrom:"",
        serviceTimeTo:"",
        Payment:[],
        scheduleDuration:"",
        packagingCharge:"",
        ETA:""

    })
   
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
    const getFormData = () => {
        return form;
      };
    
      useImperativeHandle(ref, () => ({
        getFormData,

      }));
   

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
                        <div style={{display:'flex', justifyContent:"space-around"}}>
                        <input type='checkbox' style={{width:"20px"}} value="Cards" onChange={handlecheckedchange}></input><label style={{fontSize:"16px" , marginTop:"20px",marginLeft:"10px" }}>Cards</label>
                        <input type='checkbox'  style={{width:"20px"}}  value="Pay at store" onChange={handlecheckedchange} ></input><label  style={{fontSize:"16px" , marginTop:"20px",marginLeft:"10px"}}>Pay at store</label>
                        <input type='checkbox'  style={{width:"20px"}}  value="Apple Pay" onChange={handlecheckedchange}></input><label style={{fontSize:"16px" , marginTop:"20px",marginLeft:"10px"}}>Apple Pay</label>
                        <input type='checkbox' style={{width:"20px"}}  value="Google Pay" onChange={handlecheckedchange}></input><label  style={{fontSize:"16px" , marginTop:"20px",marginLeft:"10px"}}>Google Pay</label>
                        </div>
                        <h5 className='Pickup_heading7'>Schedule Pick Up</h5> 
                        <h5 className='Pickup_heading3'>Customer can place pick-up order for future/next session</h5>
                        <div style={{ }}>
                            <input type="radio" name="YesorNo" style={{width:"20px",transform:"translateY(20px)"}} ></input><label className='' style={{fontSize:"16px" , marginTop:"20px",margin:"30px" }}>Yes</label>
                            <input type="radio" name="YesorNo" style={{width:"20px",transform:"translateY(20px)"}}></input><label className='' style={{fontSize:"16px" , marginTop:"20px",margin:"30px" }}>No</label>
                        
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
});

export default Pickup;
