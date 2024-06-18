import React,{useState,useImperativeHandle} from 'react'
import "./BankDetails.scss"
const BankDetails = React.forwardRef((props,ref) => {
  const[bankform,setBankform]=useState({
 accountNumber:"",
 ifscCode:"",
 AccountHolderName:""
  })
  const[bankError,setBankError]=useState({
    accountNumber:"",
    ifscCode:"",
    AccountHolderName:""   
  })

 
  const resetForm=()=>{
     setBankform(
      {
 accountNumber:"",
 ifscCode:"",
AccountHolderName:""
      }
     ) 
     setBankError({
      accountNumber:"",
 ifscCode:"",
AccountHolderName:""
     }) 
  }
  const getFormData = () => {
    return bankform;
  };

  useImperativeHandle(ref, () => ({
    getFormData,
    resetForm,
    validate
  }));
  const handleKeyPress = (event) => {
    // Prevent non-numeric keys from being pressed
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  };

 const validate=()=>{
  let isValid=true;
  const error={};
  if(!bankform.accountNumber)
    {
      error.accountNumber="Please Enter Account Number";
      isValid=false;

    }
    if(!bankform.ifscCode)
      {
        error.ifscCode="Please Enter ifsce code";
        isValid=false;
  
      }
      if(!bankform.AccountHolderName)
        {
          error.AccountHolderName="Please Enter Account Holder Name";
          isValid=false;
    
        }
    setBankError(error);
    return isValid
 }
  return (
    <div>
      <div className='Bank-Container'>
    <div className='Form_Bank'>
     <h1 className='Bank_Main_Heading'>Bank Details</h1>
     <div className='Bank_Account_Number'>
      <h1 className='Bank_First_Heading'>Bank account number</h1>
      <input type='text' value={bankform.accountNumber} className='TypeI'  onKeyPress={handleKeyPress} onChange={(e)=>setBankform({...bankform,accountNumber:e.target.value})}style={{borderColor: bankError.accountNumber ? "red" : "#B3B3B3"}}></input>
      {bankError.accountNumber && <div className='error-message'>{bankError.accountNumber}</div>}
     </div>
     <div className='Re_Account_Number'>
      <h1 className='Bank_Second_Heading'>Re-enter account number</h1>
      <input type='text'  className='Type2'  onKeyPress={handleKeyPress}  ></input>
      
     </div>
     <div className='Bank_Ifse_Code'>
      <h1 className='Bank_Third_Heading'>Bank IFSE code</h1>
      <input type='text' value={bankform.ifscCode} className='Type3' onChange={(e)=>setBankform({...bankform,ifscCode:e.target.value})}style={{borderColor: bankError.ifscCode ? "red" : "#B3B3B3"}}></input>
      {bankError.ifscCode && <div className='error-message'>{bankError.ifscCode}</div>}
     </div>
     <div className='aAccount_Holder_Name'>
      <h1 className='Bank_Fourth_Heading'>Account holder name</h1>
      <input type='text' value={bankform.AccountHolderName} className='Type4' onChange={(e)=>setBankform({...bankform,AccountHolderName:e.target.value})}style={{borderColor: bankError.AccountHolderName ? "red" : "#B3B3B3"}}></input>
      {bankError.AccountHolderName && <div className='error-message'>{bankError.AccountHolderName}</div>}
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