


import React, { useState } from 'react';

import "react-phone-input-2/lib/style.css";
import validator from "validator";
import { ImCross, ImFontSize } from "react-icons/im";
import './Registration.scss'
// import { productlist } from '../../redux/OMSactions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { postDataRequest } from '../../redux/Actions/PostDataAction';
import {postDataSuccess} from '../../redux/Actions/PostDataAction';
import {getLocationId} from '../../redux/Actions/PostDataAction'

import { getDataRequest } from '../../redux/Actions/PostDataAction';

const PostDataForm = () => {
  const [restaurantNumber, setRestaurantNumber] = useState("");
  const [restaurantNumber2, setRestaurantNumber2] = useState("");
  console.log(restaurantNumber2);

  const dispatch = useDispatch();


  const [Registrationform, setRegistrationform] = useState({
    restaurantName: "",
    name: "",
    phone: "",
    email: "",
    designation: "",
    gstNumber: "",
    base64Image: ""
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const { loading, data, error } = useSelector((state) => state.postData);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!validator.isEmail(email)) {
      return "Invalid email address";
    } else {
      return "";
    }
  };
  const validateName = (name) => {
    if (!name) {
      return "Name is required";
    } else if (!validator.isAlpha(name)) {
      return "Invalid name";
    } else {
      return "";
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  
    dispatch(postDataRequest(Registrationform));
   
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    if (selectedFile) {
      setFile(selectedFile);
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setRegistrationform({ ...Registrationform, base64Image: base64String });
        setImagePreview(reader.result);
      };
    }
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(postDataRequest(form));
  // };

  //   const handleImage = (e) => {
  //     const selectedFile = e.target.files[0];
  //     if (selectedFile) {
  //       setFile(selectedFile);
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setImagePreview(reader.result);
  //       };
  //       reader.readAsDataURL(selectedFile);
  //     }
  //   };
  const [imageclose, setimageclose] = useState(false)


console.log(data);

  const handleButtonClick = () => {
    document.getElementById('hidden-file-input').click();
    setimageclose(false)

  };

  const closeModal = () => {
    setimageclose(true)
    setFile(null)
  }
  const Getdata = () => {

  }

  const locationId=useSelector((state)=>state.postData.data)
  console.log(locationId)
  dispatch(getLocationId(locationId));


const countryCodes=[
  { "name": "United States", "dial_code": "+1" },
  { "name": "India", "dial_code": "+91" },
 
  // Add more countries as needed
]

  const [selectedCode, setSelectedCode] = useState(countryCodes[0].dial_code);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCodeChange = (event) => {
        setSelectedCode(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
       


    };

 

  return (
    <>
      <div className="main-divreg">
        <div className="submain-divreg">
          <div className="headingreg">
            <h5>Registration</h5>
          </div>
          <div className="form-divreg">
           
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  Restaurant name
                </label>
                <input type="text" className="inputbox" placeholder="Name"
                  value={Registrationform.restaurantName}
                  onChange={(e) =>
                    setRegistrationform({ ...Registrationform, restaurantName: e.target.value })
                  }
                />
              </div>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  Contact person name
                </label>
                <input type="text" className={`inputbox ${nameError ? "inputbox-error" : ""}`} placeholder="Name"
                  value={Registrationform.name}
                  onChange={(e) => {
                    setRegistrationform({ ...Registrationform, name: e.target.value })
                    // setNameError(validateName(e.target.value));
                  }
                  }
                />
                {/* {nameError && <div style={{ color: "red" }}>{nameError}</div>} */}
              </div>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  contact person number
                </label>
                <div style={{ marginTop: "20px" }}>
                <select id="country-code" value={selectedCode} className="phonenumbercode" onChange={handleCodeChange}>
                    {countryCodes.map((country) => (
                        <option key={country.dial_code} value={country.dial_code}>
                            {country.dial_code}
                        </option>
                    ))}
                    
                </select>
                <input
                    id="phone-number"
                    type="text"
                    className="phonenumberinput"
                    value={Registrationform.phone}
                    onChange={(event)=>
                      
                      {
                       
                        setRegistrationform({ ...Registrationform, phone: event.target.value })
                      }
                    }
                    required
                />
                <div>
               
               
            </div>
          
                </div>
              </div>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  Contact Person Email ID
                </label>
                <input type="email" className={`inputbox ${emailError ? "inputbox-error" : ""}`} placeholder="xyz@gmail.com"
                  value={Registrationform.email}
                  onChange={(e) => {
                    setRegistrationform({ ...Registrationform, email: e.target.value })
                    // setEmailError(validateEmail(e.target.value));
                  }
                  } />
                {/* {emailError && <div style={{ color: "red" }}>{emailError}</div>} */}
              </div>
              <div className="labelinput-divreg">
                <label for="cars" className="labelreg">Designation</label>
                <select name="desig" id="desig" className="inputbox" value={Registrationform.designation}
                  onChange={(e) =>
                    setRegistrationform({ ...Registrationform, designation: e.target.value })
                  }>
                  <option value="Owner">Owner</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  GST NUMBER
                </label>
                <input type="text" className="inputbox" placeholder="" value={Registrationform.gstNumber}
                  onChange={(e) =>
                    setRegistrationform({ ...Registrationform, gstNumber: e.target.value })
                  } />
              </div>
              <div className="labelinput-divreg ">
                <label htmlFor="" className="labelreg">
                  Restaurant logo
                </label>
                <div className="logo">
                  <input type="file" id="hidden-file-input" onChange={handleFileChange} placeholder="" style={{ display: 'none' }} />
                  <span>Drag & Drop to upload or </span>
                  <button type="button" className="custom-file-button custom-file-input" onClick={handleButtonClick}>Browse</button>
                  {/* <span className="custom-file-name">{file}</span> */}
                  <div className='preview'>
                    {file &&
                      <div>
                        {
                          imageclose ? <p style={{ marginLeft: '-5%', color: '#67833E', fontSize: '12px' }}>No  selected</p> :
                            <>
                              <button onClick={closeModal} className='imcrosssty'><ImCross style={{ fontSize: '10px', color: 'white' }} /></button>
                              <img src={imagePreview} alt="Preview" className="imgpreview" />
                              <p>Preview</p></>
                        }
                      </div>
                    }

                  </div>
                  {!file && <p className='fornoimage'>No image was selected</p>
                  }
                </div>
              </div>
              <div className='footnav'>
                <button className='footnavbtn1' onClick={handleSubmit}>Save & Next</button>
                <button className='footnavbtn2'>Clear All</button>
              </div>
             
          
          </div>
        </div>


      </div>
    

    </>

  )
}
export default PostDataForm

