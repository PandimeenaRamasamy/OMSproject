import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import "./Registration.scss";
import { useDispatch, useSelector } from "react-redux";
import { postDataRequest, getLocationId, getDataRequest, getLocationRequest } from "../../redux/Actions/PostDataAction";
import { useLocation } from 'react-router-dom';
import Success from './Success'
import Outlet from "../Outletnavbar/Outlet";

const PostDataForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  // const datafromapi = useSelector((state) => state.postData.data);

  // useEffect(() => {
  //   if (data) {
  //     data.forEach((location, index) => {
  //       console.log("datas", location.location.id);
  //     });
  //   }
  // }, []);

 

  // console.log("registrationapi", data[0].location.id);


  ;


  const data = useSelector((state) => state.getlocationdata.data);

  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [successmgs,setsuccessmgs]=useState(false)
  const [imageclose, setimageclose] = useState(false);
  const countryCodes = [
    { name: "India", dial_code: "+91" },
    { name: "United States", dial_code: "+1" },
  ];

  // if (datafromapi.length > 0) {
  //   console.log(datafromapi[0].locationId);
  // }

  // console.log("data from api", datafromapi);

  const [selectedCode, setSelectedCode] = useState(countryCodes[0].dial_code);
  const [Registrationform, setRegistrationform] = useState({
    locationId:null,
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

  useEffect(() => {
    if (data) {
      console.log("Props data available:", data); // Debugging line

      if (data.attributes) {
        try {
          const attributes = JSON.parse(data.attributes);
          console.log("Parsed attributes:", attributes); // Debugging line
          const bankDetails = attributes.gstNumber || {};
          console.log("Extracted bank details:", bankDetails); // Debugging line
          setRegistrationform({
            gstNumber: bankDetails || "",
          
          });
        } catch (error) {
          console.error("Failed to parse attributes", error);
        }
      } else {
        console.error("Attributes field is undefined");
      }
    } else {
      console.error("Props data is undefined");
    }

    if (data && data[0]) {
      setRegistrationform({
        locationId:data[0].location.id||null,
        restaurantName: data[0].location.restaurantName || "",
        name: data[0].location.name || "",
        phone: data[0].location.phone || "",
        email: data[0].location.email || "",
        designation: data[0].location.designation || "",
        
      });
    }
    setImagePreview(null)


  }, [data])

  const registrationpagerrors = {};
  
  const validationofregistrationform = () => {
  
    let isValid = true;
    if (!Registrationform.restaurantName) {
      isValid = false;
      registrationpagerrors.restaurantNameerror = "Enter Restaurant Name";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(Registrationform.email)) {
      console.log("email error");
      isValid = false;
      registrationpagerrors.emailerror = "Enter valid email";
    }
    if (!Registrationform.base64Image) {
      isValid = false;
      registrationpagerrors.base64Imageerror = "Upload logo";
    }

    if (!Registrationform.name) {
      isValid = false;
      registrationpagerrors.nameerror = "Enter your Name";
    } else if (/[^a-zA-Z\s]/.test(Registrationform.name)) {
      isValid = false;
      registrationpagerrors.nameerror = "Name must only contain letters and spaces";
    }

    setError(registrationpagerrors);
    return isValid;
  };

  const restaurantNameapi = useSelector((state) => state.registration.restaurantData.restaurantName);
  const dataitem = restaurantNameapi;

  const handleSubmit = (event) => {
    event.preventDefault();
    // window.location.reload();
    console.log(restaurantNameapi);
    validationofregistrationform();
    const checkvalid = validationofregistrationform();
    if (checkvalid) {
      dispatch(postDataRequest(Registrationform));
      setsuccessmgs(true);
    }

   


  };

  const closeModal = () => {
    setimageclose(true);
    setFile(null);
  };

  const [clearingdata,setclearingdata]=useState(false);

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

  const handleCloseAlcoholModal = () => {
    setsuccessmgs(false);
    ClearAll();
  };
  

  // const handleDeclineAlcohol = () => {
  //   setSelectedAlcoholOption("Doesn't Serve Alcohol");
  //   setIsAlcoholModalOpen(false);
  // };

  // const handleAgreeAlcohol = () => {
  //   setSelectedAlcoholOption("Serve Alcohol");
  //   setIsAlcoholModalOpen(false);
  // };

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

  const handleButtonClick = () => {
    document.getElementById("hidden-file-input").click();
    setimageclose(false);
  };

  const handleCodeChange = (event) => {
    setSelectedCode(event.target.value);
  };

  const handleKeyPress = (event) => {
    // Prevent non-numeric keys from being pressed
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
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
              <input
                type="text"
                className="inputbox"
                style={{
                  borderColor: error.restaurantNameerror ? "red" : "#B3B3B3",
                }}
                placeholder="Name"
                value={ Registrationform.restaurantName}
                onChange={(e) =>
                  setRegistrationform({
                    ...Registrationform,
                    restaurantName: e.target.value,
                  })
                }
              />
              {error.restaurantNameerror && (
                <div className="invaliddata">{error.restaurantNameerror}</div>
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
                value={ Registrationform.name}
                onChange={(e) => {
                  setRegistrationform({
                    ...Registrationform,
                    name: e.target.value,
                  });
                }}
              />
              {error.nameerror && (
                <div className="invaliddata">{error.nameerror}</div>
              )}
            </div>
            <div className="labelinput-divreg">
              <label htmlFor="" className="labelreg">
                Contact person number
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
                <div className="invaliddata">{error.emailerror}</div>
              )}
            </div>
            <div className="labelinput-divreg">
              <label htmlFor="cars" className="labelreg">
                Designation
              </label>
              <select
                name="desig"
                id="desig"
                className="inputbox"
                value={ Registrationform.designation}
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
                value={ Registrationform.gstNumber}
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
            </div>
            {!file && <p className="fornoimage">No image was selected</p>}
            {error.base64Imageerror && (
            <div className="invaliddata fornoimage">{error.base64Imageerror} </div>
          )}
          </div>
          {/* <button className="footnavbtn1" onClick={() => dispatch(getLocationRequest())
}>GET Location</button>  */}
        </div>
        <div className="footnav">
          <button className="footnavbtn1" onClick={(event)=>{

            handleSubmit(event)
            dispatch(getDataRequest())
            
            
            }}>
            Save & Next
          </button>
          <button className="footnavbtn2" onClick={ClearAll}>Clear All</button>
        </div>
        {successmgs &&  validationofregistrationform &&(
        <div className="alcoholModalOverlaysuccess">
          <Success
            onCloseRequest={handleCloseAlcoholModal}
            
            
          />
        </div>
      )}





      </div>
    
    </div>
               
  </div>

        
  



      
    </>
  );
};
export default PostDataForm;
