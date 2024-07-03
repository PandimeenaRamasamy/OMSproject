// import React, { useState, useImperativeHandle } from "react";
// import "./Restaurant.scss";

// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { getLocationId } from "../../../redux/Actions/PostDataAction";

// const Restaurant = React.forwardRef((props, ref) => {
//   const dispatch = useDispatch();
//   const locationId = useSelector((state) => state.postData.data);

//   const LocationId = dispatch(getLocationId(locationId));
//   const Locid = LocationId.payload;
//   {props.data && props.data.map((location, index) => (
//     console.log("datarestaurent",location.location.
//       city
//       )) )}

//   const [form, setForm] = useState({
//     locationId: "c95fbe31-f8b3-45dd-83eb-16e9a00f3f04",
//     businessLegalName: "",
//     phone: "",
//     email: "",
//     website: "",
//     instagramLink: "",
//     facebookLink: "",
//     restaurantNumber: "",
//     whatsappNumber: "",
//   });
//   const [reserror, setResError] = useState({
//     businessLegalName: "",
//     phone: "",
//     email: "",
//    restaurantNumber: "",
//     whatsappNumber: "",
//   });
//   const resetForm = () => {
//     setForm({
//       businessLegalName: "",
//       phone: "",
//       email: "",

//       restaurantNumber: "",
//       whatsappNumber: "",
//     });
//     setResError({
//       businessLegalName: "",
//       phone: "",
//       email: "",
//       restaurantNumber: "",
//       whatsappNumber: "",
//     });
//   };

//   const [isChecked, setIsChecked] = useState(false);
//   const [emailError, setEmailError] = useState("");

//   useImperativeHandle(ref, () => ({
//     getFormData: () => form,
//     validate,
//     resetForm,
//     clearFormData: () => {
//       setForm({
//         locationId: Locid,
//         businessLegalName: "",
//         phone: "",
//         email: "",

//         restaurantNumber: "",
//         whatsappNumber: "",
//       });
//       setIsChecked(false);
//       setEmailError("");
//     },
//   }));

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//     if (!isChecked) {
//       setForm((prevForm) => ({
//         ...prevForm,
//         whatsappNumber: prevForm.restaurantNumber,
//       }));
//     } else {
//       setForm((prevForm) => ({
//         ...prevForm,
//         whatsappNumber: "",
//       }));
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };

//   const countryCodes = [
//     { name: "United States", dial_code: "+1" },
//     { name: "India", dial_code: "+91" },
//   ];
//   const [selectedCode, setSelectedCode] = useState(countryCodes[0].dial_code);
//   const handleCodeChange = (event) => {
//     setSelectedCode(event.target.value);
//   };
//   const validate = () => {
//     const errors = {};
//     let isValid = true;
//     if (!form.businessLegalName) {
//       errors.businessLegalName = "Please Enter The Name";
//       isValid = false;
//     } else if (/[^a-zA-Z\s]/.test(form.businessLegalName)) {
//       errors.businessLegalName = " Enter Name";
//       isValid = false;
//     }
//     if (!form.phone) {
//       errors.phone = " Enter type";
//       isValid = false;
//     }
//     if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)) {
//       errors.email = "Enter valid email";
//     }

//     if (!form.restaurantNumber) {
//       errors.restaurantNumber = " Enter Restaurant Number";
//       isValid = false;
//     }
//     if (!form.whatsappNumber) {
//       errors.whatsappNumber = " Enter Restaurant Whatsapp Number";
//       isValid = false;
//     }
//     setResError(errors);
//     return isValid;
//   };
//   const handleKeyPress = (event) => {
//     // Prevent non-numeric keys from being pressed
//     if (!/^\d$/.test(event.key)) {
//       event.preventDefault();
//     }
//   };

//   return (
//     <div className="main-divres">
//       <div className="submain-divres">
//         <div className="heading-divres">
//           <h5>Restaurant Details</h5>
//         </div>
//         <div className="form-divres">
//           <form onSubmit={handleSubmit}>
//             <div className="labelinput-divres">
//               <label htmlFor="businessLegalName" className="labelres">
//                 Business Legal Name
//               </label>
//               <input
//                 type="text"
//                 name="businessLegalName"
//                 className="inputboxres"
//                 placeholder="Name"
//                 value={props.data && props.data[0] ? props.data[0].location.restaurantName : form.businessLegalName}
//                 onChange={handleChange}
//                 style={{
//                   borderColor: reserror.businessLegalName ? "red" : "#B3B3B3",
//                 }}
//               />
//               {reserror.businessLegalName && (
//                 <div className="error">{reserror.businessLegalName}</div>
//               )}
//             </div>

//             <div className="labelinput-divres">
//               <label htmlFor="phoneType" className="labelres">
//                 Restaurant Contact Number
//               </label>
//               <div>
//                 <label className="radio-labelres">
//                   <input
//                     type="radio"
//                     value="Mobile"
//                     name="phoneType"
//                     className="radiores"
//                     checked={form.phone === "Mobile"}
//                     onChange={(e) =>
//                       setForm({ ...form, phone: e.target.value })
//                     }
//                   />
//                   Mobile
//                 </label>
//                 <label className="radio-labelres">
//                   <input
//                     type="radio"
//                     value="Landline"
//                     name="phoneType"
//                     className="radiores"
//                     checked={form.phone === "Landline"}
//                     onChange={(e) =>
//                       setForm({ ...form, phone: e.target.value })
//                     }
//                   />
//                   Landline
//                 </label>
//                 {reserror.phone && (
//                   <div className="error">{reserror.phone}</div>
//                 )}
//               </div>
//               <div style={{ marginTop: "20px" }}>
//                 <select
//                   id="country-code"
//                   value={selectedCode}
//                   className="phonenumbercode"
//                   onChange={handleCodeChange}
//                 >
//                   {countryCodes.map((country) => (
//                     <option key={country.dial_code} value={country.dial_code}>
//                       {country.dial_code}
//                     </option>
//                   ))}
//                 </select>
//                 <input
//                   type="text"
//                   onKeyPress={handleKeyPress}
//                   name="restaurantNumber"
//                   className="inputboxres2"
//                   placeholder="Enter Mobile Number"
//                   value={props.data && props.data[0] ? props.data[0].location.phone : form.phone}
//                   onChange={(e) => {
//                     setForm({ ...form, restaurantNumber: e.target.value });
//                   }}
//                   style={{
//                     borderColor: reserror.restaurantNumber ? "red" : "#B3B3B3",
//                   }}
//                 />
//               </div>
//               {reserror.restaurantNumber && (
//                 <div className="error">{reserror.restaurantNumber}</div>
//               )}
//             </div>

//             <div className="labelinput-divres">
//               <label
//                 htmlFor="whatsappNumber"
//                 className="labelres"
//                 style={{ marginBottom: "15px" }}
//               >
//                 WhatsApp Number
//               </label>
//               <label className="radio-labelres">
//                 <input
//                   type="checkbox"
//                   className="radiores"
//                   checked={isChecked}
//                   onChange={handleCheckboxChange}
//                 />
//                 Same as restaurant mobile no.
//               </label>

//               <div>
//                 <select
//                   id="country-code"
//                   value={selectedCode}
//                   className="phonenumbercode"
//                   onChange={handleCodeChange}
//                 >
//                   {countryCodes.map((country) => (
//                     <option key={country.dial_code} value={country.dial_code}>
//                       {country.dial_code}
//                     </option>
//                   ))}
//                 </select>

//                 <input
//                   type="text"
//                   name="whatsappNumber"
//                   onKeyPress={handleKeyPress}
//                   className="inputboxres2"
//                   placeholder="Enter WhatsApp Number"
//                   value={form.whatsappNumber}
//                   onChange={handleChange}
//                   disabled={isChecked}
//                   style={{
//                     borderColor: reserror.whatsappNumber ? "red" : "#B3B3B3",
//                   }}
//                 />
//               </div>
//               {reserror.whatsappNumber && (
//                 <div className="error">{reserror.whatsappNumber}</div>
//               )}
//             </div>

//             <div
//               style={{ display: "flex", justifyContent: "space-evenly" }}
//               className="personal-detailsres"
//             >
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <label htmlFor="email" className="labelres">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   className={`inputbox2res ${
//                     emailError ? "inputbox-error" : ""
//                   }`}
//                   placeholder="xyz@gmail.com"
//                   value={props.data && props.data[0] ? props.data[0].location.email : form.email}
//                   onChange={(e) => {
//                     handleChange(e);
//                   }}
//                   style={{ borderColor: reserror.email ? "red" : "#B3B3B3" }}
//                 />
//                 {reserror.email && (
//                   <div className="error">{reserror.email}</div>
//                 )}
//               </div>
//               <div
//                 style={{ display: "flex", flexDirection: "column" }}
//                 className="personal-detailsres"
//               >
//                 <label htmlFor="website" className="labelres">
//                   Website Link
//                 </label>
//                 <input
//                   type="url"
//                   name="website"
//                   className="inputbox2res"
//                   placeholder="Magilhub.com"
//                   value={form.website}
//                   onChange={handleChange}

//                 />

//               </div>
//             </div>

//             <div
//               style={{ display: "flex", justifyContent: "space-evenly" }}
//               className="personal-detailsres"
//             >
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <label htmlFor="instagramLink" className="labelres">
//                   Instagram Link
//                 </label>
//                 <input
//                   type="url"
//                   name="instagramLink"
//                   className="inputbox2res"
//                   placeholder="Chandra.uiux"
//                   value={form.instagramLink}
//                   onChange={handleChange}

//                 />

//               </div>
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <label htmlFor="facebookLink" className="labelres">
//                   Facebook Link
//                 </label>
//                 <input
//                   type="url"
//                   name="facebookLink"
//                   className="inputbox2res"
//                   placeholder="chandra.com"
//                   value={form.facebookLink}
//                   onChange={handleChange}

//                 />
//                              </div>
//             </div>
//             <br />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Restaurant;
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataRequest, getLocationId } from "../../../redux/Actions/PostDataAction";
import "./Restaurant.scss";

const Restaurant = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const locationId = useSelector((state) => state.postData.data);
  const LocationId = dispatch(getLocationId(locationId));
  const Locid = LocationId.payload;

  const datafromapi = useSelector((state) => state.postData.data);
  // console.log("LOcation id from",datafromapi[0].locationId);
  useEffect(() => {
    if (locationId) {
      dispatch(getLocationId(locationId));
    }
  }, [dispatch, locationId]);
  const data = useSelector((state) => state.getlocationdata.data);
  const data2 = useSelector((state) => state.registration.data);
  console.log(data2);


  useEffect(() => {
    dispatch(getDataRequest());
  }, []);

  let initialFormState = {
    locationId: (data2 && data2) || "",
    businessLegalName: "",
    phone: "",
    email: "",
    website: "",
    instagramLink: "",
    facebookLink: "",
    restaurantNumber: "",
    whatsappNumber: "",
  };

  const [form, setForm] = useState(initialFormState);
  const [reserror, setResError] = useState({
    businessLegalName: "",
    phone: "",
    email: "",
    restaurantNumber: "",
    whatsappNumber: "",
  });
  const resetForm = () => {
    setForm({
      businessLegalName: "",
      phone: "",
      email: "",
      restaurantNumber: "",
      whatsappNumber: "",
    });
    setResError({
      businessLegalName: "",
      phone: "",
      email: "",
      restaurantNumber: "",
      whatsappNumber: "",
    });
  };

  const [isChecked, setIsChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const countryCodes = [
    { name: "United States", dial_code: "+1" },
    { name: "India", dial_code: "+91" },
  ];

  const [selectedCode, setSelectedCode] = useState(countryCodes[0].dial_code);

  const loactiondata = useSelector((state) => state.locationiddata.locationId);

  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem("Restaurantdata"));
   

    if (savedData) {
      setForm({
        locationId: (data2 && data2) || "",
        businessLegalName: savedData.businessLegalName|| "",
        phone: savedData.phone || "",
        email: savedData.email || "",
        website: savedData.websiteLink || "",
        instagramLink: savedData.instagramLink || "",
        facebookLink: savedData.FaceBookLink || "",
        restaurantNumber: savedData.RestaurantNumber || "",
        // whatsappNumber: data[0].location.whatsappNumber || "",

      });
    }
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("registrationform");
      sessionStorage.removeItem("Restaurantdata");
      sessionStorage.removeItem("Location");
      sessionStorage.removeItem("Fssai");
      sessionStorage.removeItem("Bankdetails");
      sessionStorage.removeItem("Basicdetail");
      sessionStorage.removeItem("Resimage");
      sessionStorage.removeItem("Dinein");
      sessionStorage.removeItem("Pickup");
      sessionStorage.removeItem("Delivery");
      sessionStorage.removeItem("Kitchen");

    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (data && data[0]) {
      console.log(
        "id",
        datafromapi && datafromapi[0] ? datafromapi[0].locationId : ""
      );
      const location = data[0].location;
      const attributes = JSON.parse(location.attributes || "{}");

      setForm({
        locationId: (loactiondata && loactiondata) || null,
        businessLegalName: attributes.BusinessLegalName || "",
        phone: data[0].location.phone || "",
        email: data[0].location.email || "",
        website: attributes.websiteLink || "",
        instagramLink: attributes.instagramLink || "",
        facebookLink: attributes.FaceBookLink || "",
        restaurantNumber: attributes.RestaurantNumber || "",
        whatsappNumber: data[0].location.whatsappNumber || "",
      });
    }
  }, [data]);

  useImperativeHandle(ref, () => ({
    getFormData: () => form,
    validate,
    resetForm,
    clearFormData: () => {
      setForm({
        locationId: "",
        businessLegalName: "",
        phone: "",
        email: "",
        website: "",
        instagramLink: "",
        facebookLink: "",
        restaurantNumber: "",
        whatsappNumber: "",
      });
      setIsChecked(false);
      setEmailError("");
    },
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCheckboxChange = () => {
    if (form.phone !== "") {
      setIsChecked(!isChecked);
      if (!isChecked) {
        setForm((prevForm) => ({
          ...prevForm,
          whatsappNumber: prevForm.phone,
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          whatsappNumber: "",
        }));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCodeChange = (event) => {
    setSelectedCode(event.target.value);
  };

  const validate = () => {
    const errors = {};
    let isValid = true;
    // if (!form.businessLegalName) {
    //   errors.businessLegalName = "Please Enter The Name";
    //   isValid = false;
    // } else if (/[^a-zA-Z\s]/.test(form.businessLegalName)) {
    //   errors.businessLegalName = " Enter Name";
    //   isValid = false;
    // }
    if (!form.phone) {
      errors.phone = " Enter type";
      isValid = false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)) {
      errors.email = "Enter valid email";
    }
    // if (!form.restaurantNumber) {
    //   errors.restaurantNumber = " Enter Restaurant Number";
    //   isValid = false;
    // }

    if (numbertype == "Mobile") {
      if (!form.whatsappNumber) {
        errors.whatsappNumber = " Enter Restaurant Whatsapp Number";
        isValid = false;
      }
    }

    setResError(errors);
    return isValid;
  };

  const handleKeyPress = (event) => {
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  };

  const validateName = () => {
    const namePattern = /^[a-zA-Z\s]+$/; // Pattern for only letters and spaces
    if (form.businessLegalName.trim() === "") {
      setResError({ ...reserror, businessLegalName: "Enter your Name" });
    } else if (!namePattern.test(form.businessLegalName)) {
      setResError({
        ...reserror,
        businessLegalName: "Name can only contain letters and spaces.",
      });
    } else {
      setResError("");
    }
  };
  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Adjust the regex pattern based on your requirements
    if (form.email === "") {
      setResError({ ...reserror, email: "Enter valid email " });
    } else if (!emailPattern.test(form.email)) {
      setResError({
        ...reserror,
        email: "Please enter a valid email address.",
      });
    } else {
      setResError("");
    }
  };
  const validatePhone = () => {
    const phonePattern = /^\d{10}$/;
    if (form.phone === "") {
      setResError({ ...reserror, phone: "Enter phone number" });
    } else if (!phonePattern.test(form.phone)) {
      setResError({ ...reserror, phone: "Please enter a valid phone number" });
    } else {
      setResError("");
    }
  };
  const validatewhatsapp = () => {
    const phonePattern = /^\d{10}$/;

    // Adjust the regex pattern based on your requirements
    if (numbertype !== "Landline") {
      if (form.whatsappNumber === "") {
        setResError({ ...reserror, whatsappNumber: "Enter whatsapp number" });
      } else if (!phonePattern.test(form.whatsappNumber)) {
        setResError({
          ...reserror,
          whatsappNumber: "Please enter a valid whatsapp number",
        });
      } else {
        setResError("");
      }
    }
  };

  const [numbertype, setnumbertype] = useState("Mobile");

  const typechange = (phonretype) => {
    setnumbertype(phonretype);
  };

  return (
    <div className="main-divres">
      <div className="submain-divres">
        <div className="heading-divres">
          <h5>Restaurant Details</h5>
        </div>
        <div className="form-divres">
          <form onSubmit={handleSubmit}>
            <div className="labelinput-divres">
              <label htmlFor="businessLegalName" className="labelres">
                Business Legal Name
              </label>
              <input
                type="text"
                name="businessLegalName"
                className="inputboxres"
                placeholder="Name"
                value={form.businessLegalName}
                onBlur={validateName}
                onChange={handleChange}
                style={{
                  borderColor: reserror.businessLegalName ? "red" : "#B3B3B3",
                }}
              />
              {reserror.businessLegalName && (
                <div className="error_Res">{reserror.businessLegalName}</div>
              )}
            </div>

            <div className="labelinput-divres">
              <label htmlFor="phoneType" className="labelres">
                Restaurant Contact Number
              </label>
              <div>
                <label className="radio-labelres">
                  <input
                    type="radio"
                    value="Mobile"
                    className="radiores"
                    checked={numbertype === "Mobile"}
                    onChange={() => typechange("Mobile")}
                  />
                  Mobile
                </label>
                <label className="radio-labelres">
                  <input
                    type="radio"
                    value="Landline"
                    className="radiores radiores2 "
                    checked={numbertype === "Landline"}
                    onChange={() => typechange("Landline")}
                  />
                  Landline
                </label>
              </div>
              {numbertype === "Mobile" && (
                <>
                  <div style={{ marginTop: "10px" }} className="numberfield">
                    <select
                      id="country-code"
                      value={selectedCode}
                      className="phonenumbercode"
                      onChange={handleCodeChange}
                    >
                      {countryCodes.map((country) => (
                        <option
                          key={country.dial_code}
                          value={country.dial_code}
                        >
                          {country.dial_code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      maxLength={10}
                      onKeyPress={handleKeyPress}
                      name="phone"
                      className="phonenumberinput"
                      onBlur={validatePhone}
                      placeholder="47656 65655"
                      value={form.phone}
                      onChange={handleChange}
                      style={{
                        borderColor: reserror.restaurantNumber
                          ? "red"
                          : "#B3B3B3",
                      }}
                    />
                  </div>
                  <div>
                    {reserror.phone && (
                      <div className="error_Res">{reserror.phone}</div>
                    )}
                  </div>
                </>
              )}

              {numbertype === "Landline" && (
                <>
                  {" "}
                  <div style={{ marginTop: "10px" }} className="numberfield">
                    {/* <select
                  id="country-code"
                  value="STD"
                  className="phonenumbercode"
                  onChange={handleCodeChange}
                >STD
                  {countryCodes.map((country) => (
                    <option key={country.dial_code} value={country.dial_code}>
                      {country.dial_code}
                    </option>
                  ))}
                </select> */}
                    <span className="phonenumbercode">STD</span>
                    <input
                      type="text"
                      maxLength={10}
                      onKeyPress={handleKeyPress}
                      name="phone"
                      className="phonenumberinput"
                      onBlur={validatePhone}
                      placeholder="Enter STD Number"
                      value={form.phone}
                      onChange={handleChange}
                      style={{
                        borderColor: reserror.restaurantNumber
                          ? "red"
                          : "#B3B3B3",
                      }}
                    />
                  </div>
                  <div>
                    {reserror.phone && (
                      <div className="error_Res">{reserror.phone}</div>
                    )}
                  </div>
                </>
              )}
            </div>

            {numbertype === "Mobile" && (
              <>
                <div className="labelinput-divres">
                  <label
                    htmlFor="whatsappNumber"
                    className="labelres"
                    style={{ marginBottom: "5px" }}
                  >
                    WhatsApp Number
                  </label>
                  <label
                    className="radio-labelres"
                    style={{ marginTop: "-5px", marginBottom: "15px" }}
                  >
                    <input
                      type="checkbox"
                      className="radiores"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Same as restaurant mobile no.
                  </label>
                  <div className="numberfield">
                    <select
                      id="country-code"
                      value={selectedCode}
                      className="phonenumbercode"
                      onChange={handleCodeChange}
                    >
                      {countryCodes.map((country) => (
                        <option
                          key={country.dial_code}
                          value={country.dial_code}
                        >
                          {country.dial_code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="whatsappNumber"
                      onKeyPress={handleKeyPress}
                      className="phonenumberinput"
                      placeholder="47656 65655"
                      value={form.whatsappNumber}
                      onBlur={validatewhatsapp}
                      onChange={handleChange}
                      disabled={isChecked}
                      style={{
                        borderColor: reserror.whatsappNumber
                          ? "red"
                          : "#B3B3B3",
                      }}
                    />
                  </div>
                  {reserror.whatsappNumber && (
                    <div className="error_Res">{reserror.whatsappNumber}</div>
                  )}
                </div>
              </>
            )}

            <div
              className="inputdivreg"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="email" className="labelres">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className={`inputbox2res ${
                    emailError ? "inputbox-error" : ""
                  }`}
                  placeholder="maghil@gmail.com"
                  value={form.email}
                  onBlur={validateEmail}
                  onChange={handleChange}
                  style={{ borderColor: reserror.email ? "red" : "#B3B3B3" }}
                />
                {reserror.email && (
                  <div className="error_Res">{reserror.email}</div>
                )}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="personal-detailsres"
              >
                <label htmlFor="website" className="labelres">
                  Website Link
                </label>
                <input
                  type="url"
                  name="website"
                  className="inputbox2res"
                  placeholder="Magilhub.com"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div
              className="inputdivreg"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="instagramLink" className="labelres">
                  Instagram Link
                </label>
                <input
                  type="url"
                  name="instagramLink"
                  className="inputbox2res"
                  placeholder="instagram.maghil"
                  value={form.instagramLink}
                  onChange={handleChange}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="personal-detailsres"
              >
                <label htmlFor="facebookLink" className="labelres">
                  Facebook Link
                </label>
                <input
                  type="url"
                  name="facebookLink"
                  className="inputbox2res"
                  placeholder="facebook.com"
                  value={form.facebookLink}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
});

export default Restaurant;
