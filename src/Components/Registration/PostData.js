import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import "./Registration.scss";
import { useDispatch, useSelector } from "react-redux";
import { postDataRequest, getLocationId, getDataRequest, getLocationRequest } from "../../redux/Actions/PostDataAction";
import { useLocation } from 'react-router-dom';
import Success from './Success';
import Outlet from "../Outletnavbar/Outlet";

const PostDataForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const data2 = useSelector((state) => state.registration.data);
  console.log("data2",data2);


  const data = useSelector((state) => state.getlocationdata.data);

  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [successmgs, setsuccessmgs] = useState(false);
  const [imageclose, setimageclose] = useState(false);
  const countryCodes = [
    { name: "India", dial_code: "+91" },
    { name: "United States", dial_code: "+1" },
  ];

  const [selectedCode, setSelectedCode] = useState(countryCodes[0].dial_code);
  const [Registrationform, setRegistrationform] = useState({
    locationId: null,
    restaurantName: "",
    name: "",
    phone: "",
    email: "",
    designation: "",
    gstNumber: "",
    base64Image: null,
  });

  const [error, setError] = useState({
    restaurantNameerror: "",
    nameerror: "",
    phoneerror: "",
    emailerror: "",
    designationerror: "",
    gstNumbererror: "",
    base64Imageerror: "",
  });

  useEffect(() => {
    if (data && data[0] && data[0].location) {
      const location = data[0].location;
      const attributes = JSON.parse(location.attributes || "{}");

      setRegistrationform({
        locationId: location.id || null,
        restaurantName: location.restaurantName || "",
        name: location.name || "",
        phone:location.phone || "",
        email: location.email || "",
        designation: location.designation || "",
        gstNumber: attributes.gstNumber || "",
        base64Image: null,
      });

      setImagePreview(null);
    }
  }, [data]);

  const registrationpagerrors = {};

  const validationofregistrationform = () => {
    let isValid = true;

    // if (!Registrationform.restaurantName) {
    //   isValid = false;
    //   registrationpagerrors.restaurantNameerror = "Enter Restaurant Name";
    // }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(Registrationform.email)) {
      isValid = false;
      registrationpagerrors.emailerror = "Please enter a valid email address.";
    }

    // if (!Registrationform.base64Image) {
    //   isValid = false;
    //   registrationpagerrors.base64Imageerror = "Upload logo";
    // }

    if (!Registrationform.name) {
      isValid = false;
      registrationpagerrors.nameerror = "Enter your Name";
    } else if (/[^a-zA-Z\s]/.test(Registrationform.name)) {
      isValid = false;
      registrationpagerrors.nameerror = "Name must only contain letters and spaces";
    }


    if (!Registrationform.phone) {
      isValid = false;
      registrationpagerrors.phoneerror = "Enter phone number";
    } 
    setError(registrationpagerrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validationofregistrationform();
    if (isValid) {
      dispatch(postDataRequest(Registrationform));
      setsuccessmgs(true);
    }
  };

  const closeModal = () => {
    setimageclose(true);
    setFile(null);
  };

  const ClearAll = () => {
    setRegistrationform({
      restaurantName: "",
      name: "",
      phone: "",
      email: "",
      designation: "",
      gstNumber: "",
      base64Image: "",
    });
    closeModal();
  };

  const handleCloseSuccessModal = () => {
    setsuccessmgs(false);
    ClearAll();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    if (selectedFile) {
      setFile(selectedFile);
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        setRegistrationform({ ...Registrationform, base64Image: base64String });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("hidden-file-input").click();
    setimageclose(false);
  };

  const handleCodeChange = (event) => {
    setSelectedCode(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  };
  const handleKeyname = (event) => {
    if (/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  };


  const validateName = () => {
    const namePattern = /^[a-zA-Z\s]+$/; // Pattern for only letters and spaces
    if (Registrationform.name .trim() === '') {
      setError({  ...error,nameerror :'Enter your Name'});
    } else if (!namePattern.test(Registrationform.name )) {
      setError({  ...error, nameerror:'Name can only contain letters and spaces.'});
    } else {
      setError('');
    }
  };
  const validatePhone = () => {
    const phonePattern = /^\d{10}$/; // Adjust the regex pattern based on your requirements
    if (Registrationform.phone  === '') {
      setError({  ...error,phoneerror :'Enter phone number'});}
    else if (!phonePattern.test(Registrationform.phone)) {
      setError({...error,phoneerror:'Please enter a valid phone number'});
    } else {
      setError('');
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    // Adjust the regex pattern based on your requirements
    if (Registrationform.email === '') {
      setError({  ...error,emailerror :'Enter valid email '});}
    else if (!emailPattern.test(Registrationform.email)) {
      setError({ ...error , emailerror: 'Please enter a valid email address.'});
    }
     else {
      setError('');
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-divreg">
      <div className="submain-divreg">
        <div className="headingreg">
          <h5>Registration</h5>
        </div>
        <div className="form-divreg">
          <div className="labelinput-divreg">
            <label className="labelreg">Restaurant Name</label>
            <input
              type="text"
              className="inputbox"
              style={{ borderColor: error.restaurantNameerror ? "red" : "#B3B3B3" }}
              placeholder="Name"
              value={Registrationform.restaurantName}
              onChange={(e) => {setRegistrationform({ ...Registrationform, restaurantName: e.target.value })
            }}
            />
            {error.restaurantNameerror && <div className="invaliddata">{error.restaurantNameerror}</div>}
          </div>
          <div className="labelinput-divreg">
            <label className="labelreg">Contact Person Name</label>
            <input
              type="text"
              className="inputbox"
              onKeyPress={handleKeyname}
              style={{ borderColor: error.nameerror ? "red" : "#B3B3B3" }}
              placeholder="Name"
              value={Registrationform.name}
              onBlur={validateName}
              onChange={(e) => setRegistrationform({ ...Registrationform, name: e.target.value })}
            />
            {error.nameerror && <div className="invaliddata">{error.nameerror}</div>}
           
          </div>
          
          <div className="labelinput-divreg">
            <label className="labelreg">Contact Person Number</label>
            <div className="numberfield" >
              <select
                id="country-code"
                value={selectedCode}
                className="phonenumbercode"
                onChange={handleCodeChange}
              >
                {countryCodes.map((country) => (
                  <option className="dropoption" key={country.dial_code} value={country.dial_code}>
                    {country.dial_code}
                  </option>
                ))}
              </select>
              <input
                id="phone-number"
                type="text"
                className="phonenumberinput"
                value={Registrationform.phone}
                onBlur={validatePhone}
                maxLength={10}
                minLength={10}
                onKeyPress={handleKeyPress}
                onChange={(event) => setRegistrationform({ ...Registrationform, phone: event.target.value })}
                required
              />
             
            </div>
            {error.phoneerror && <div className="invaliddata">{error.phoneerror}</div>}
          </div>
          <div className="labelinput-divreg">
            <label className="labelreg">Contact Person Email ID</label>
            <input
              type="email"
              className="inputbox"
              placeholder="xyz@gmail.com"
              onBlur={validateEmail}
              value={Registrationform.email}
              style={{ borderColor: error.emailerror ? "red" : "#B3B3B3" }}
              onChange={(e) => setRegistrationform({ ...Registrationform, email: e.target.value })}
            />
            {error.emailerror && <div className="invaliddata">{error.emailerror}</div>}
          </div>
          <div className="labelinput-divreg">
            <label className="labelreg">Designation</label>
            <select
              name="desig"
              id="desig"
              className="inputbox"
            
              value={Registrationform.designation}
              onChange={(e) => setRegistrationform({ ...Registrationform, designation: e.target.value })}
            >
               <option value="" selected></option>
              <option value="Owner" className="options">Owner</option>
              <option value="Manager" className="options">Manager</option>
              <option value="Admin" className="options">Admin</option>
            </select>
          </div>
          <div className="labelinput-divreg">
            <label className="labelreg">GST Number</label>
            <input
              type="text"
              className="inputbox"
              placeholder=""
               onPaste={handlePaste}
               autoComplete="off"
              maxLength={15}
              onKeyPress={handleKeyPress}
              value={Registrationform.gstNumber}
              onChange={(e) => setRegistrationform({ ...Registrationform, gstNumber: e.target.value })}
            />
          </div>
          <div className="labelinput-divreg">
            <label className="labelreg">Restaurant Logo</label>
            <div className="logo">
              <input
                type="file"
                id="hidden-file-input"
                onChange={handleFileChange}
                placeholder=""
                style={{ display: "none" }}
              />
              <span>Drag & Drop to upload or </span>
              <button type="button" className="custom-file-button custom-file-input" onClick={handleButtonClick}>
                Browse
              </button>
              <div className="preview">
                {file && (
                  <div>
                    {imageclose ? (
                      <p style={{ marginLeft: "-5%", color: "#67833E", fontSize: "12px" }}>
                        No selected
                      </p>
                    ) : (
                      <>
                        <button onClick={closeModal} className="imcrossstyres">
                          <ImCross style={{ fontSize: "7px", color: "white" }} />
                        </button>
                        <img src={imagePreview} alt="Preview" className="imgpreview" />
                        <p>Preview</p>
                      </>
                    )}
                  </div>
                )}
              </div>
              {!file && <p className="fornoimage">No image was selected</p>}
              {/* {error.base64Imageerror && <div className="invaliddata fornoimage">{error.base64Imageerror}</div>} */}
            </div>
          </div>
          <div className="footnav">
            <button className="footnavbtn1" onClick={(event) => handleSubmit(event)}>
              Save & Next
            </button>
            <button className="footnavbtn2" onClick={ClearAll}>
              Clear All
            </button>
          </div>
          {successmgs && data2 && validationofregistrationform && (
            <div className="alcoholModalOverlaysuccess">
              <Success onCloseRequest={handleCloseSuccessModal} pathname="Registraion" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDataForm;
