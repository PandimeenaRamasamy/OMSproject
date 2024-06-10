import React,{useState,useImperativeHandle} from 'react'
import "./BankDetails.scss"
const BankDetails = React.forwardRef((props,ref) => {
  const[bankform,setBankform]=useState({
 accountNumber:"",

 ifscCode:"",
  AccountHolderName:""
  })
  const getFormData = () => {
    return bankform;
  };

  useImperativeHandle(ref, () => ({
    getFormData
  }));
 
  return (
    <div>
      <div className='Bank-Container'>
    <div className='Form_Bank'>
     <h1 className='Bank_Main_Heading'>Bank Details</h1>
     <div className='Bank_Account_Number'>
      <h1 className='Bank_First_Heading'>Bank account number</h1>
      <input type='text' className='TypeI' onChange={(e)=>setBankform({...bankform,accountNumber:e.target.value})}></input>
     </div>
     <div className='Re_Account_Number'>
      <h1 className='Bank_Second_Heading'>Re-enter account number</h1>
      <input type='text' className='Type2' ></input>
     </div>
     <div className='Bank_Ifse_Code'>
      <h1 className='Bank_Third_Heading'>Bank IFSE code</h1>
      <input type='text' className='Type3' onChange={(e)=>setBankform({...bankform,ifscCode:e.target.value})}></input>
     </div>
     <div className='Account_Holder_Name'>
      <h1 className='Bank_Fourth_Heading'>Account holder name</h1>
      <input type='text' className='Type4' onChange={(e)=>setBankform({...bankform,AccountHolderName:e.target.value})}></input>
     </div>
     <div >
     <button className='Account_Button '>Verify Account Details</button>
     </div>
     <div >
     <h1 className='Terms'>We will credit a amount in your account to validate your bank account details</h1>
     </div>
     <br />
    </div>
    
    </div>
   
    </div>
  )
});

export default BankDetails