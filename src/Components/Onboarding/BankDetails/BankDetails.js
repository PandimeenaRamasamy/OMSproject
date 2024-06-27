// import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
// import "./BankDetails.scss";
// import { useSelector } from "react-redux";
// import OnboardSuceess from '../../Onboarding/Steperform/Onboardsuccess'

// const BankDetails = forwardRef((props, ref) => {
//   const [bankform, setBankform] = useState({
//     accountNumber: "",
//     ifscCode: "",
//     AccountHolderName: "",
//   });

//   const [bankError, setBankError] = useState({
//     accountNumber: "",
//     ifscCode: "",
//     AccountHolderName: "",
//   });

//   const data = useSelector((state) => state.getlocationdata.data);

//   useEffect(() => {
//     console.log("Data from Redux:", data);
//     if (data && data[0] && data[0].location && data[0].location.attributes) {
//       try {
//         const attributes = JSON.parse(data[0].location.attributes);
//         console.log("Parsed Attributes:", attributes);
        
//         const bankDetails = attributes.BankDetails || {};
//         setBankform({
//           accountNumber: bankDetails.accountNumber || "",
//           ifscCode: bankDetails.ifscCode || "",
//           AccountHolderName: bankDetails.AccountHolderName || "",
//         });
//       } catch (error) {
//         console.error("Failed to parse attributes", error);
//       }
//     }
//   }, [data]);

//   const resetForm = () => {
//     setBankform({
//       accountNumber: "",
//       ifscCode: "",
//       AccountHolderName: "",
//     });
//     setBankError({
//       accountNumber: "",
//       ifscCode: "",
//       AccountHolderName: "",
//     });
//   };
//   const [successmgs, setsuccessmgs] = useState(false);
//   const onboarddata = useSelector((state) => state.postData.data);

//   const getFormData = () => {
//     return bankform;
//   };

//   useImperativeHandle(ref, () => ({
//     getFormData,
//     resetForm,
//     validate,
//   }));

//   const handleKeyPress = (event) => {
//     if (!/^\d$/.test(event.key)) {
//       event.preventDefault();
//     }
//   };
//   const handleCloseSuccessModal = () => {
//     setsuccessmgs(false);
//     resetForm();
//   };


//   const validate = () => {
//     let isValid = true;
//     const error = {};
//     if (!bankform.accountNumber) {
//       error.accountNumber = "Please Enter Account Number";
//       isValid = false;
//     }
//     if (!bankform.ifscCode) {
//       error.ifscCode = "Please Enter IFSC code";
//       isValid = false;
//     }
//     if (!bankform.AccountHolderName) {
//       error.AccountHolderName = "Please Enter Account Holder Name";
//       isValid = false;
//     }
//     setBankError(error);
//     return isValid;
//   };

//   const handleKeyname = (event) => {
//     if (/^\d$/.test(event.key)) {
//       event.preventDefault();
//     }
//   };
//   return (
//     <div>
//       <div className="Bank-Container">
//         <div className="Form_Bank">
//           <h1 className="Bank_Main_Heading">Bank Details</h1>
//           <div className="Bank_Account_Number">
//             <h1 className="Bank_First_Heading">Bank account number</h1>
//             <input
//               type="text"
//               value={bankform.accountNumber}
//               className="TypeI"
//               onKeyPress={handleKeyPress}
//               onChange={(e) =>
//                 setBankform({ ...bankform, accountNumber: e.target.value })
//               }
//               style={{ borderColor: bankError.accountNumber ? "red" : "#B3B3B3" }}
//             />
//             {bankError.accountNumber && (
//               <div className="error-message">{bankError.accountNumber}</div>
//             )}
//           </div>
//           <div className="Re_Account_Number">
//             <h1 className="Bank_Second_Heading">Re-enter account number</h1>
//             <input
//               type="text"
//               className="Type2"
//               onKeyPress={handleKeyPress}
//               // Add a similar onChange handler if you need to validate re-entered account number
//             />
//           </div>
//           <div className="Bank_Ifse_Code">
//             <h1 className="Bank_Third_Heading">Bank IFSC code</h1>
//             <input
//               type="text"
//               value={bankform.ifscCode}
//               className="Type3"
//               onChange={(e) =>
//                 setBankform({ ...bankform, ifscCode: e.target.value })
//               }
//               style={{ borderColor: bankError.ifscCode ? "red" : "#B3B3B3" }}
//             />
//             {bankError.ifscCode && (
//               <div className="error-message">{bankError.ifscCode}</div>
//             )}
//           </div>
//           <div className="Account_Holder_Name">
//             <h1 className="Bank_Fourth_Heading">Account holder name</h1>
//             <input
//               type="text"
//               value={bankform.AccountHolderName}
//               className="Type4"
//               onKeyPress={handleKeyname}
//               onChange={(e) =>
//                 setBankform({ ...bankform, AccountHolderName: e.target.value })
//               }
//               style={{ borderColor: bankError.AccountHolderName ? "red" : "#B3B3B3" }}
//             />
//             {bankError.AccountHolderName && (
//               <div className="error-message">{bankError.AccountHolderName}</div>
//             )}
            
//           </div>
//          <br /><br />
         
//           {successmgs && onboarddata&& validate && (
//             <div className="alcoholModalOverlaysuccess">
//               <OnboardSuceess onCloseRequest={handleCloseSuccessModal} />
//             </div>
//           )}
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// });

// export default BankDetails;


import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import "./BankDetails.scss";
import { useSelector } from "react-redux";
import OnboardSuceess from '../../Onboarding/Steperform/Onboardsuccess';

const BankDetails = forwardRef((props, ref) => {
  const [bankform, setBankform] = useState({
    accountNumber: "",
    ifscCode: "",
    AccountHolderName: "",
    reAccountNumber: ""
  });

  const [bankError, setBankError] = useState({
    accountNumber: "",
    ifscCode: "",
    AccountHolderName: "",
    reAccountNumber: ""
  });

  const data = useSelector((state) => state.getlocationdata.data);

  useEffect(() => {
    console.log("Data from Redux:", data);
    if (data && data[0] && data[0].location && data[0].location.attributes) {
      try {
        const attributes = JSON.parse(data[0].location.attributes);
        console.log("Parsed Attributes:", attributes);
        
        const bankDetails = attributes.BankDetails || {};
        setBankform({
          accountNumber: bankDetails.accountNumber || "",
          ifscCode: bankDetails.ifscCode || "",
          AccountHolderName: bankDetails.AccountHolderName || "",
          reAccountNumber: bankDetails.accountNumber || ""
        });
      } catch (error) {
        console.error("Failed to parse attributes", error);
      }
    }
  }, [data]);

  const resetForm = () => {
    setBankform({
      accountNumber: "",
      ifscCode: "",
      AccountHolderName: "",
      reAccountNumber: ""
    });
    setBankError({
      accountNumber: "",
      ifscCode: "",
      AccountHolderName: "",
      reAccountNumber: ""
    });
  };

  const [successmgs, setsuccessmgs] = useState(false);
  const onboarddata = useSelector((state) => state.postData.data);

  const getFormData = () => {
    return bankform;
  };

  useImperativeHandle(ref, () => ({
    getFormData,
    resetForm,
    validate,
  }));

  const handleKeyPress = (event) => {
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleCloseSuccessModal = () => {
    setsuccessmgs(false);
    resetForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankform({ ...bankform, [name]: value });
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  const validateField = (name, value) => {
    const error = {};
    switch (name) {
      case 'accountNumber':
        if (!value) {
          error.accountNumber = "Please Enter Account Number";
        } else if (value !== bankform.reAccountNumber && bankform.reAccountNumber !== "") {
          error.reAccountNumber = "Account Number does not match";
        } else {
          error.accountNumber = "";
          error.reAccountNumber = "";
        }
        break;
      case 'reAccountNumber':
        if (!value) {
          error.reAccountNumber = "Please Re-enter Account Number";
        } else if (value !== bankform.accountNumber) {
          error.reAccountNumber = "Account Number does not match";
        } else {
          error.reAccountNumber = "";
          error.accountNumber = "";
        }
        break;
      case 'ifscCode':
        if (!value) {
          error.ifscCode = "Please Enter IFSC code";
        } else {
          error.ifscCode = "";
        }
        break;
      case 'AccountHolderName':
        if (!value) {
          error.AccountHolderName = "Please Enter Account Holder Name";
        } else {
          error.AccountHolderName = "";
        }
        break;
      default:
        break;
    }
    setBankError((prevErrors) => ({ ...prevErrors, ...error }));
  };

  const validate = () => {
    let isValid = true;
    const error = {};
    if (!bankform.accountNumber) {
      error.accountNumber = "Please Enter Account Number";
      isValid = false;
    }
    if (!bankform.reAccountNumber) {
      error.reAccountNumber = "Please Re-enter Account Number";
      isValid = false;
    } else if (bankform.reAccountNumber !== bankform.accountNumber) {
      error.reAccountNumber = "Account Number does not match";
      isValid = false;
    }
    if (!bankform.ifscCode) {
      error.ifscCode = "Please Enter IFSC code";
      isValid = false;
    }
    if (!bankform.AccountHolderName) {
      error.AccountHolderName = "Please Enter Account Holder Name";
      isValid = false;
    }
    setBankError(error);
    return isValid;
  };

  const handleKeyname = (event) => {
    if (/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className="Bank-Container">
        <div className="Form_Bank">
          <h1 className="Bank_Main_Heading">Bank Details</h1>
          <div className="Bank_Account_Number">
            <h1 className="Bank_First_Heading">Bank account number</h1>
            <input
              type="text"
              value={bankform.accountNumber}
              name="accountNumber"
              className="TypeI"
              onKeyPress={handleKeyPress}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ borderColor: bankError.accountNumber ? "red" : "#B3B3B3" }}
            />
            {bankError.accountNumber && (
              <div className="error-message">{bankError.accountNumber}</div>
            )}
          </div>
          <div className="Re_Account_Number">
            <h1 className="Bank_Second_Heading">Re-enter account number</h1>
            <input
              type="text"
              value={bankform.reAccountNumber}
              name="reAccountNumber"
              className="Type2"
              onKeyPress={handleKeyPress}
              onBlur={handleBlur}
              onChange={handleChange}
              onPaste={handlePaste}
              
               autoComplete="off"
              style={{ borderColor: bankError.reAccountNumber ? "red" : "#B3B3B3" }}
            />
            {bankError.reAccountNumber && (
              <div className="error-message">{bankError.reAccountNumber}</div>
            )}
          </div>
          <div className="Bank_Ifse_Code">
            <h1 className="Bank_Third_Heading">Bank IFSC code</h1>
            <input
              type="text"
              value={bankform.ifscCode}
              name="ifscCode"
              className="Type3"
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ borderColor: bankError.ifscCode ? "red" : "#B3B3B3" }}
            />
            {bankError.ifscCode && (
              <div className="error-message">{bankError.ifscCode}</div>
            )}
          </div>
          <div className="Account_Holder_Name">
            <h1 className="Bank_Fourth_Heading">Account holder name</h1>
            <input
              type="text"
              value={bankform.AccountHolderName}
              name="AccountHolderName"
              className="Type4"
              onKeyPress={handleKeyname}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ borderColor: bankError.AccountHolderName ? "red" : "#B3B3B3" }}
            />
            {bankError.AccountHolderName && (
              <div className="error-message">{bankError.AccountHolderName}</div>
            )}
          </div>
          <br /><br />
          {successmgs && onboarddata && validate && (
            <div className="alcoholModalOverlaysuccess">
              <OnboardSuceess onCloseRequest={handleCloseSuccessModal} />
            </div>
          )}
          <br />
        </div>
      </div>
    </div>
  );
});

export default BankDetails;

