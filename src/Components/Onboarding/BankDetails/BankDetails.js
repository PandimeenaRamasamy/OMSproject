import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import "./BankDetails.scss";
import { useSelector } from "react-redux";
import OnboardSuceess from '../../Onboarding/Steperform/Onboardsuccess'

const BankDetails = forwardRef((props, ref) => {
  const [bankform, setBankform] = useState({
    accountNumber: "",
    ifscCode: "",
    AccountHolderName: "",
  });

  const [bankError, setBankError] = useState({
    accountNumber: "",
    ifscCode: "",
    AccountHolderName: "",
  });

  const data = useSelector((state) => state.getlocationdata.data);

  useEffect(() => {
    if (data && data[0] && data[0].location && data[0].location.attributes) {
      try {
        const attributes = JSON.parse(data[0].location.attributes);
        const bankDetails = attributes.BankDetails || {};
        setBankform({
          accountNumber: bankDetails.accountNumber || "",
          ifscCode: bankDetails.ifscCode || "",
          AccountHolderName: bankDetails.AccountHolderName || "",
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
    });
    setBankError({
      accountNumber: "",
      ifscCode: "",
      AccountHolderName: "",
    });
  };
  const [successmgs, setsuccessmgs] = useState(false);

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


  const validate = () => {
    let isValid = true;
    const error = {};
    if (!bankform.accountNumber) {
      error.accountNumber = "Please Enter Account Number";
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
              className="TypeI"
              onKeyPress={handleKeyPress}
              onChange={(e) =>
                setBankform({ ...bankform, accountNumber: e.target.value })
              }
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
              className="Type2"
              onKeyPress={handleKeyPress}
              // Add a similar onChange handler if you need to validate re-entered account number
            />
          </div>
          <div className="Bank_Ifse_Code">
            <h1 className="Bank_Third_Heading">Bank IFSC code</h1>
            <input
              type="text"
              value={bankform.ifscCode}
              className="Type3"
              onChange={(e) =>
                setBankform({ ...bankform, ifscCode: e.target.value })
              }
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
              className="Type4"
              onChange={(e) =>
                setBankform({ ...bankform, AccountHolderName: e.target.value })
              }
              style={{ borderColor: bankError.AccountHolderName ? "red" : "#B3B3B3" }}
            />
            {bankError.AccountHolderName && (
              <div className="error-message">{bankError.AccountHolderName}</div>
            )}
          </div>
          <div>
            <button className="Account_Button" onClick={validate}>
              Verify Account Details
            </button>
          </div>
          <div>
            <h1 className="Terms">
              We will credit a small amount in your account to validate your bank account details.
            </h1>
          </div>
          {successmgs && validate && (
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
