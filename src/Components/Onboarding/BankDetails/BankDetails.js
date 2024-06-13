import React,{useState,useImperativeHandle} from 'react'
import "./BankDetails.scss"
const BankDetails = React.forwardRef((props,ref) => {
  const[bankform,setBankform]=useState({
 accountNumber:"",
 reaccountNumber:"",
 ifscCode:"",
AccountHolderName:""
  })
  const[bankError,setBankError]=useState({
    accountNumber:"",
    reaccountNumber:"",
    ifscCode:"",
    AccountHolderName:""   
  })
  let errors={};
  const getValidate=()=>{
    let isValid=true;
    
    if(!bankform.accountNumber)
    {
      isValid=false;
      errors.accountNumber="Please Enter Account Number"
    }
    if(!bankform.reaccountNumber)
      {
        isValid=false;
        errors.reaccountNumber="Please ReEnter Account Number"
      }
    else if(bankform.accountNumber!=bankform.reaccountNumber)
      {
        isValid=false;
        errors.reaccountNumber="Please Enter Same Account Number"
      }
    if(!bankform.ifscCode)
      {
        isValid=false;
        errors.ifscCode="Please Enter IFSc Code"
      }
      if(!bankform.AccountHolderName)
        {
          isValid=false;
          errors.AccountHolderName="Please Enter Account Holder Name Code"
        }
        else if(/[^a-zA-Z\s]/.test(bankform.AccountHolderName)) {
             isValid=false;
          errors.AccountHolderName="Please Enter Name"
        }
    setBankError(errors)
    return isValid;

  }
  const getFormData = () => {
    return bankform;
  };

  useImperativeHandle(ref, () => ({
    getFormData,
    getValidate
  }));
 
  return (
    <div>
      <div className='Bank-Container'>
    <div className='Form_Bank'>
     <h1 className='Bank_Main_Heading'>Bank Details</h1>
     <div className='Bank_Account_Number'>
      <h1 className='Bank_First_Heading'>Bank account number</h1>
      <input type='number' className='TypeI' onChange={(e)=>setBankform({...bankform,accountNumber:e.target.value})}style={{borderColor: bankError.accountNumber ? "red" : "#B3B3B3"}}></input>
      {bankError.accountNumber && <div className='error-message'>{bankError.accountNumber}</div>}
     </div>
     <div className='Re_Account_Number'>
      <h1 className='Bank_Second_Heading'>Re-enter account number</h1>
      <input type='number' className='Type2' onChange={(e)=>setBankform({...bankform,reaccountNumber:e.target.value})} style={{borderColor: bankError.reaccountNumber ? "red" : "#B3B3B3"}} ></input>
      {bankError.reaccountNumber && <div className='error-message'>{bankError.reaccountNumber}</div>}
     </div>
     <div className='Bank_Ifse_Code'>
      <h1 className='Bank_Third_Heading'>Bank IFSE code</h1>
      <input type='text' className='Type3' onChange={(e)=>setBankform({...bankform,ifscCode:e.target.value})}style={{borderColor: bankError.ifscCode ? "red" : "#B3B3B3"}}></input>
      {bankError.ifscCode && <div className='error-message'>{bankError.ifscCode}</div>}
     </div>
     <div className='Account_Holder_Name'>
      <h1 className='Bank_Fourth_Heading'>Account holder name</h1>
      <input type='text' className='Type4' onChange={(e)=>setBankform({...bankform,AccountHolderName:e.target.value})}style={{borderColor: bankError.AccountHolderName ? "red" : "#B3B3B3"}}></input>
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