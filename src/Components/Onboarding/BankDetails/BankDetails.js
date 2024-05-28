import React from 'react'
import "./BankDetails.css"
const BankDetails = () => {
  return (
    <div>
      <div className='Bank-Container'>
    <div className='Form_Bank'>
     <h1 className='Bank_Main_Heading'>Bank Details</h1>
     <div className='Bank_Account_Number'>
      <h1 className='Bank_First_Heading'>Bank account number</h1>
      <input type='text' className='TypeI'></input>
     </div>
     <div className='Re_Account_Number'>
      <h1 className='Bank_Second_Heading'>Re-enter account number</h1>
      <input type='text' className='Type2'></input>
     </div>
     <div className='Bank_Ifse_Code'>
      <h1 className='Bank_Third_Heading'>Bank IFSE code</h1>
      <input type='text' className='Type3'></input>
     </div>
     <div className='Account_Holder_Name'>
      <h1 className='Bank_Fourth_Heading'>Account holder name</h1>
      <input type='text' className='Type4'></input>
     </div>
     <div >
     <button className='Account_Button'>Verify Account Details</button>
     </div>
     <div >
     <h1 className='Terms'>We will credit a amount in your account to validate your bank account details</h1>
     </div>
    </div>
    </div>
    </div>
  )
}

export default BankDetails