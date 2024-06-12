import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import "./Registration.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postDataRequest } from "../../redux/Actions/PostDataAction";
import { getLocationId } from "../../redux/Actions/PostDataAction";

const PostDataForm = () => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [imageclose, setimageclose] = useState(false);
  const countryCodes = [
    { name: "India", dial_code: "+91" },
    { name: "United States", dial_code: "+1" },
  ];
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].dial_code);
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

  const validationofregistrationform = () => {
    validaterestaurantname();
    // validatename();
    
   


    
   
  };
const validaterestaurantname=()=>{
  
  if (Registrationform.restaurantName === "") {
    console.log("resgisration error")
    setError({ restaurantNameerror: "Enter Restaurant Name" });
  }
  else{
    setError({restaurantNameerror:""})

  }
  validatename();

}

const validatename=()=>{
 
  if (Registrationform.name === "") {
    setError({ nameerror: "Enter your name" });
  }
  else if(/[^a-zA-Z\s]/.test(Registrationform.name)) {
    setError({ nameerror: "Name must only contain letters and spaces" });
  } 
  else{
    setError({nameerror:""})

  }

}


  const handleSubmit = (event) => {
    event.preventDefault();
    validationofregistrationform();

    dispatch(postDataRequest(Registrationform));
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
    }
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("hidden-file-input").click();
    setimageclose(false);
  };

  const closeModal = () => {
    setimageclose(true);
    setFile(null);
  };

  const locationId = useSelector((state) => state.postData.data);
  console.log(locationId);
  dispatch(getLocationId(locationId));

  const handleCodeChange = (event) => {
    setSelectedCode(event.target.value);
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
                style={{ borderColor: error.restaurantNameerror ? "red" : "#B3B3B3" }}
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
                </select>
                <input
                  id="phone-number"
                  type="text"
                  className="phonenumberinput"
                  value={Registrationform.phone}
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
                onChange={(e) => {
                  setRegistrationform({
                    ...Registrationform,
                    email: e.target.value,
                  });
                }}
              />
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
                </div>
                {!file && <p className="fornoimage">No image was selected</p>}
              </div>
            </div>
            <div className="footnav">
              <button className="footnavbtn1" onClick={handleSubmit}>
                Save & Next
              </button>
              <button className="footnavbtn2">Clear All</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDataForm;
