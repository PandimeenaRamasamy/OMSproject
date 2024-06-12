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
      <input type='number' className='TypeI' onChange={(e)=>setBankform({...bankform,accountNumber:e.target.value})}></input>
      {bankError.accountNumber && <h1 className='error-message'>{bankError.accountNumber}</h1>}
     </div>
     <div className='Re_Account_Number'>
      <h1 className='Bank_Second_Heading'>Re-enter account number</h1>
      <input type='number' className='Type2' onChange={(e)=>setBankform({...bankform,reaccountNumber:e.target.value})} ></input>
      {bankError.reaccountNumber && <h1 className='error-message'>{bankError.reaccountNumber}</h1>}
     </div>
     <div className='Bank_Ifse_Code'>
      <h1 className='Bank_Third_Heading'>Bank IFSE code</h1>
      <input type='text' className='Type3' onChange={(e)=>setBankform({...bankform,ifscCode:e.target.value})}></input>
      {bankError.ifscCode && <h1 className='error-message'>{bankError.ifscCode}</h1>}
     </div>
     <div className='Account_Holder_Name'>
      <h1 className='Bank_Fourth_Heading'>Account holder name</h1>
      <input type='text' className='Type4' onChange={(e)=>setBankform({...bankform,AccountHolderName:e.target.value})}></input>
      {bankError.AccountHolderName && <h1 className='error-message'>{bankError.AccountHolderName}</h1>}
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