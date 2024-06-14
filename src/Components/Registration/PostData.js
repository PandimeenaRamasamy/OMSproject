import React, { useState } from "react";
<<<<<<< Updated upstream
import { ImCross } from "react-icons/im";
import "./Registration.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postDataRequest } from "../../redux/Actions/PostDataAction";
import { getLocationId } from "../../redux/Actions/PostDataAction";
=======

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";
import { ImCross, ImFontSize } from "react-icons/im";
import "./Registration.css";
// import { productlist } from '../../redux/OMSactions';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postDataRequest } from "../../redux/Actions/PostDataAction";
import { getDataRequest } from "../../redux/Actions/PostDataAction";
>>>>>>> Stashed changes

const PostDataForm = () => {
  const dispatch = useDispatch();
<<<<<<< Updated upstream
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [imageclose, setimageclose] = useState(false);
  const countryCodes = [
    { name: "India", dial_code: "+91" },
    { name: "United States", dial_code: "+1" },
  ];
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].dial_code);
=======

>>>>>>> Stashed changes
  const [Registrationform, setRegistrationform] = useState({
    restaurantName: "",
    name: "",
    phone: "",
    email: "",
    designation: "",
    gstNumber: "",
    base64Image: "",
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

  const registrationpagerrors = {};

  const validationofregistrationform = () => {
    let isValid=true;
   
    if (!Registrationform.restaurantName) {
      isValid=false;
      registrationpagerrors.restaurantNameerror = "Enter Restaurent Name";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(Registrationform.email)) {
      console.log("email error")
      isValid=false;
      registrationpagerrors.emailerror = "Enter valid email";
    }
    if(!Registrationform.base64Image)
      {
        isValid=false;
        registrationpagerrors.base64Imageerror ="Upload logo";
      }

    if (!Registrationform.name) {
      isValid=false;
      registrationpagerrors.nameerror = "Enter your Name";
    } else if (/[^a-zA-Z\s]/.test(Registrationform.name)) {
      isValid=false;
      registrationpagerrors.nameerror =
        "Name must only contain letters and spaces";
    }

    setError(registrationpagerrors);
    return  isValid;
  };
 

  const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< Updated upstream
    validationofregistrationform();
    const checkvalid= validationofregistrationform();
    if(checkvalid)
      {
        dispatch(postDataRequest(Registrationform));
      }

    
=======
    const emailValidationError = validateEmail(Registrationform.email);
    const nameValidationError = validateName(Registrationform.name);
    dispatch(postDataRequest(Registrationform));
    if (emailValidationError) {
      setEmailError(emailValidationError);
      setNameError(nameValidationError);
    } else {
      setEmailError("");
      setNameError("");
      alert(JSON.stringify(Registrationform, null, 2));
    }
>>>>>>> Stashed changes
  };
  const closeModal = () => {
    setimageclose(true);
    setFile(null);
  };


  const ClearAll=()=>{
    setRegistrationform({
      restaurantName: "",
      name: "",
      phone: "",
      email: "",
      designation: "",
      gstNumber: "",
      base64Image: ""
    })
    closeModal()




    
  }

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
    }
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };
<<<<<<< Updated upstream
=======
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
  const [imageclose, setimageclose] = useState(false);
>>>>>>> Stashed changes

  const handleButtonClick = () => {
    document.getElementById("hidden-file-input").click();
    setimageclose(false);
  };

<<<<<<< Updated upstream
 
  const locationId = useSelector((state) => state.postData.data);
  console.log(locationId);
  dispatch(getLocationId(locationId));

  const handleCodeChange = (event) => {
    setSelectedCode(event.target.value);
  };
  const handleKeyPress = (event) => {
    // Prevent non-numeric keys from being pressed
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  };
=======
  const closeModal = () => {
    setimageclose(true);
    setFile(null);
  };
  const Getdata = () => {};
>>>>>>> Stashed changes

  return (
    <>
      <div className="main-divreg">
        <div className="submain-divreg">
          <div className="headingreg">
            <h5>Registration</h5>
          </div>
          <div className="form-divreg">
<<<<<<< Updated upstream
            <div className="labelinput-divreg">
              <label htmlFor="" className="labelreg">
                Restaurant name
              </label>
              <input
                type="text"
                className="inputbox"
                style={{
                  borderColor: error.restaurantNameerror ? "red" : "#B3B3B3",
                }}
                placeholder="Name"
                value={Registrationform.restaurantName}
                onChange={(e) =>
                  setRegistrationform({
                    ...Registrationform,
                    restaurantName: e.target.value,
                  })
                }
              />
              {error.restaurantNameerror && (
                <div className="invaliddata">{error.restaurantNameerror} </div>
              )}
            </div>
            <div className="labelinput-divreg">
              <label htmlFor="" className="labelreg">
                Contact person name
              </label>
              <input
                type="text"
                className="inputbox"
                style={{ borderColor: error.nameerror ? "red" : "#B3B3B3" }}
                placeholder="Name"
                value={Registrationform.name}
                onChange={(e) => {
                  setRegistrationform({
                    ...Registrationform,
                    name: e.target.value,
                  });
                }}
              />
              {error.nameerror && (
                <div className="invaliddata">{error.nameerror} </div>
              )}
            </div>
            <div className="labelinput-divreg">
              <label htmlFor="" className="labelreg">
                contact person number
              </label>
              <div style={{ marginTop: "20px" }}>
                <select
                  id="country-code"
                  value={selectedCode}
                  className="phonenumbercode"
                  onChange={handleCodeChange}
                >
                  {countryCodes.map((country) => (
                    <option key={country.dial_code} value={country.dial_code}>
                      {country.dial_code}
                    </option>
                  ))}
=======
            <form onSubmit={handleSubmit}>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  Restaurant name
                </label>
                <input
                  type="text"
                  className="inputbox"
                  placeholder="Name"
                  value={Registrationform.restaurantName}
                  onChange={(e) =>
                    setRegistrationform({
                      ...Registrationform,
                      restaurantName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  Contact person name
                </label>
                <input
                  type="text"
                  className={`inputbox ${nameError ? "inputbox-error" : ""}`}
                  placeholder="Name"
                  value={Registrationform.name}
                  onChange={(e) => {
                    setRegistrationform({
                      ...Registrationform,
                      name: e.target.value,
                    });
                    // setNameError(validateName(e.target.value));
                  }}
                />
                {/* {nameError && <div style={{ color: "red" }}>{nameError}</div>} */}
              </div>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  contact person number
                </label>
                <div style={{ marginTop: "20px" }}>
                  <PhoneInput
                    inputStyle={{ color: "green" }}
                    country={restaurantNumber}
                    onChange={(value) => {
                      setRestaurantNumber(value);
                      setRegistrationform({
                        ...Registrationform,
                        phone: value,
                      });
                    }}
                    placeholder="757443444"
                    countryCodeEditable={false}
                    onlyCountries={["in", "us"]}
                  />
                </div>
              </div>
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  Contact Person Email ID
                </label>
                <input
                  type="email"
                  className={`inputbox ${emailError ? "inputbox-error" : ""}`}
                  placeholder="xyz@gmail.com"
                  value={Registrationform.email}
                  onChange={(e) => {
                    setRegistrationform({
                      ...Registrationform,
                      email: e.target.value,
                    });
                    // setEmailError(validateEmail(e.target.value));
                  }}
                />
                {/* {emailError && <div style={{ color: "red" }}>{emailError}</div>} */}
              </div>
              <div className="labelinput-divreg">
                <label for="cars" className="labelreg">
                  Designation
                </label>
                <select
                  name="desig"
                  id="desig"
                  className="inputbox"
                  value={Registrationform.designation}
                  onChange={(e) =>
                    setRegistrationform({
                      ...Registrationform,
                      designation: e.target.value,
                    })
                  }
                >
                  <option value="Owner">Owner</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
>>>>>>> Stashed changes
                </select>
                <input
                  id="phone-number"
                  type="text"
                  className="phonenumberinput"
                  value={Registrationform.phone}
                  maxLength={10}
                  onKeyPress={handleKeyPress}
                  onChange={(event) => {
                    setRegistrationform({
                      ...Registrationform,
                      phone: event.target.value,
                    });
                  }}
                  required
                />
                <div></div>
              </div>
<<<<<<< Updated upstream
            </div>
            <div className="labelinput-divreg">
              <label htmlFor="" className="labelreg">
                Contact Person Email ID
              </label>
              <input
                type="email"
                className="inputbox"
                placeholder="xyz@gmail.com"
                value={Registrationform.email}
                style={{
                  borderColor: error.emailerror ? "red" : "#B3B3B3",
                }}
                onChange={(e) => {
                  setRegistrationform({
                    ...Registrationform,
                    email: e.target.value,
                  });
                }}
              />
              {error.emailerror && (
                <div className="invaliddata">{error.emailerror} </div>
              )}
            </div>
            <div className="labelinput-divreg">
              <label for="cars" className="labelreg">
                Designation
              </label>
              <select
                name="desig"
                id="desig"
                className="inputbox"
                value={Registrationform.designation}
                onChange={(e) =>
                  setRegistrationform({
                    ...Registrationform,
                    designation: e.target.value,
                  })
                }
              >
                <option value="Owner">Owner</option>
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="labelinput-divreg">
              <label htmlFor="" className="labelreg">
                GST NUMBER
              </label>
              <input
                type="text"
                className="inputbox"
                placeholder=""
                value={Registrationform.gstNumber}
                onChange={(e) =>
                  setRegistrationform({
                    ...Registrationform,
                    gstNumber: e.target.value,
                  })
                }
              />
            </div>
            <div className="labelinput-divreg ">
              <label htmlFor="" className="labelreg">
                Restaurant logo
              </label>
              <div className="logo">
                <input
                  type="file"
                  id="hidden-file-input"
                  onChange={handleFileChange}
                  placeholder=""
                  style={{ display: "none" }}
                />
                <span>Drag & Drop to upload or </span>
                <button
                  type="button"
                  className="custom-file-button custom-file-input"
                  onClick={handleButtonClick}
                >
                  Browse
                </button>

                <div className="preview">
                  {file && (
                    <div>
                      {imageclose ? (
                        <p
                          style={{
                            marginLeft: "-5%",
                            color: "#67833E",
                            fontSize: "12px",
                          }}
                        >
                          No selected
                        </p>
                      ) : (
                        <>
                          <button onClick={closeModal} className="imcrosssty">
                            <ImCross
                              style={{ fontSize: "10px", color: "white" }}
                            />
                          </button>
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="imgpreview"
                          />
                          <p>Preview</p>
                        </>
                      )}
                    </div>
                  )}
=======
              <div className="labelinput-divreg">
                <label htmlFor="" className="labelreg">
                  GST NUMBER
                </label>
                <input
                  type="text"
                  className="inputbox"
                  placeholder=""
                  value={Registrationform.gstNumber}
                  onChange={(e) =>
                    setRegistrationform({
                      ...Registrationform,
                      gstNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="labelinput-divreg ">
                <label htmlFor="" className="labelreg">
                  Restaurant logo
                </label>
                <div className="logo">
                  <input
                    type="file"
                    id="hidden-file-input"
                    onChange={handleFileChange}
                    placeholder=""
                    style={{ display: "none" }}
                  />
                  <span>Drag & Drop to upload or </span>
                  <button
                    type="button"
                    className="custom-file-button custom-file-input"
                    onClick={handleButtonClick}
                  >
                    Browse
                  </button>
                  {/* <span className="custom-file-name">{file}</span> */}
                  <div className="preview">
                    {file && (
                      <div>
                        {imageclose ? (
                          <p
                            style={{
                              marginLeft: "-5%",
                              color: "#67833E",
                              fontSize: "12px",
                            }}
                          >
                            No selected
                          </p>
                        ) : (
                          <>
                            <button onClick={closeModal} className="imcrosssty">
                              <ImCross
                                style={{ fontSize: "10px", color: "white" }}
                              />
                            </button>
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="imgpreview"
                            />
                            <p>Preview</p>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                  {!file && <p className="fornoimage">No image was selected</p>}
>>>>>>> Stashed changes
                </div>
                {!file && <p className="fornoimage">No image was selected</p>}
                {error.base64Imageerror && (
                <div className="invaliddata fornoimage">{error.base64Imageerror} </div>
              )}
              </div>
<<<<<<< Updated upstream
             
            </div>
            <div className="footnav">
              <button className="footnavbtn1" onClick={handleSubmit}>
                Save & Next
              </button>
              <button className="footnavbtn2" onClick={ClearAll}>Clear All</button>
            </div>
          </div>
        </div>
      </div>
=======
              <div className="footnav">
                <button className="footnavbtn1" type="submit">
                  Save & Next
                </button>
                <button className="footnavbtn2">Clear All</button>
              </div>
              <button
                onClick={() => {
                  dispatch(getDataRequest());
                }}
              >
                Get data
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <button onClick={(e) => {
                e.preventDefault();
                dispatch(productlist());
            }}>Product cart</button> */}
>>>>>>> Stashed changes
    </>
  );
};
export default PostDataForm;
