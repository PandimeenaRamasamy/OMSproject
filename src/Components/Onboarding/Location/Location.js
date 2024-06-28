// // import React, { useState, forwardRef, useImperativeHandle } from "react";
// // import "../Location/Location.scss";

// // const Location = forwardRef((props, ref) => {
// //   const [form, setForm] = useState({

   
// //     address: "",
// //     pincode: "",
// //     city: "",
// //     state: "",
// //     country: ""
// //   });

// //   const[locationError,setLocationError]=useState({
// //     address: "",
// //     pincode: "",
// //     city: "",
// //     state: "",
// //     country: ""
// //   })
// //   let errors={};

// //   const [textboxes, setTextboxes] = useState([""]);

// //   const handleTextBoxes = (e) => {
// //     e.preventDefault();
// //     setTextboxes([...textboxes, ""]);
// //   };

// //   const getFormData = () => {
// //     return form;
// //   };

// //   useImperativeHandle(ref, () => ({
// //     getFormData,
// //     getValidate,
// //     resetForm,

// //   }));

// //   const handleAddressChange = (index, value) => {
// //     const newTextBoxes = [...textboxes];
// //     newTextBoxes[index] = value;
// //     setTextboxes(newTextBoxes);
// //     setForm({ ...form, address: newTextBoxes.join(", ") });
// //   };
  

// //   const getValidate=()=>{
// //     let isValid=true
    
   
  
// //     if(!form.address){
// //       isValid=false;
// //       errors.address="Please Enter Location"
// //     }
// //     if(!form.pincode ){
// //       isValid=false;
// //       errors.pincode="Please Enter Pincode"
// //     }
// //     if(!form.city){
// //       isValid=false;
// //       errors.city="Please Enter City"
// //     }
// //     if(!form.state){
// //       isValid=false;
// //       errors.state="Please Enter State"
// //     }
   
// //     if(!form.country){
// //       isValid=false;
// //       errors.country="Please Enter Country"
// //     }

// //     setLocationError(errors);
// //     return isValid

// //   }

// //   // console.log(locationError)

// //   const resetForm=()=>{
// //     setForm({
// //       address: "",
// //     pincode: "",
// //     city: "",
// //     state: "",
// //     country: ""

// //     })

// //     setLocationError({
// //       address: "",
// //     pincode: "",
// //     city: "",
// //     state: "",
// //     country: ""


// //     })

// //   }

// //   return (


// //     <div className="main-divloc">
// //     <div className="submain-divloc">
// //       <div className="heading-divloc">
// //         <h5>Location</h5>
// //       </div>
// //       <div className="form-divloc">
// //         <form>
// //         <div>
// //         <h5 className="headingloc1"> Restaurant address details</h5>
// //       </div>
// //       <div className="headingloc2">
// //         <h5 className="headingloc2"> Mention restaurant address</h5>
// //       </div>
        
          
           
// //             <div className="labelinput-divloc">

// //             <label htmlFor="BusinessLegalName" className="labelloc">
// //            Address Line
// //             </label>


// //             <input
// //                type="text"
// //                className="inputboxloc"
// //                placeholder="Name"
// //                value={props.data && props.data[0] ? props.data[0].location.addressLine1 : form.address}
// //                onChange={(e) => handleAddressChange(0, e.target.value)}
// //                style={{borderColor:locationError.address?"red":"#B3B3B3"  , marginBottom:"30px" }}
              
// //             />
// //               {locationError.address && <div className='error-message'>{locationError.address}</div>}

// //           </div>

       




        








// //           <div
// //             style={{ display: "flex", justifyContent: "space-evenly" }}
// //             className="personal-detailsloc"
// //           >


// //             <div style={{ display: "flex", flexDirection: "column" }}>
// //               <label htmlFor="email" className="labelloc">
// //                 Pincode
// //               </label>
// //               <input
// //                     type="text"
// //                     className="inputbox2loc"
// //                     placeholder="600 084"
// //                     onChange={(e) => setForm({ ...form, pincode: e.target.value })}
// //                     style={{borderColor:locationError.pincode?"red":"#B3B3B3" }}
// //                     value={props.data && props.data[0] ? props.data[0].location.pinCode : form.pincode}

                 

// //                   />
// //                      {locationError.pincode && <div className='error-message'>{locationError.pincode}  </div>}
            
// //             </div>




// //             <div
// //               style={{ display: "flex", flexDirection: "column" }}
// //               className="personal-detailsloc">
            
// //               <label htmlFor="website" className="labelloc">
// //                 City
// //               </label>
// //               <input
// //                     type="text"
// //                     className="inputbox2loc"
// //                     placeholder="Chennai"
// //                     onChange={(e) => setForm({ ...form, city: e.target.value })}
// //                     style={{borderColor:locationError.city?"red":"#B3B3B3" }}
// //                     value={props.data && props.data[0] ? props.data[0].location.city : form.city}
// //                   />
// //                       {locationError.city && <div className='error-message'>{locationError.city}</div>}
// //             </div>
// //           </div>

// //           <div
// //             style={{ display: "flex", justifyContent: "space-evenly" }}
// //             className="personal-detailsloc"
// //           >
// //             <div style={{ display: "flex", flexDirection: "column" }}>
// //               <label htmlFor="InstagramLink" className="labelloc">
// //                 State
// //               </label>
// //               <input
// //                     type="text"
// //                     className={"inputbox2loc"}
// //                     placeholder="Tamil Nadu"
// //                     onChange={(e) => setForm({ ...form, state: e.target.value })}
// //                     style={{borderColor:locationError.state?"red":"#B3B3B3" }}
// //                     value={props.data && props.data[0] ? props.data[0].location.state : form.state}
// //                   />
// //                    {locationError.state && <div className='error-message'>{locationError.state}</div>}
// //             </div>
// //             <div style={{ display: "flex", flexDirection: "column" }}>
// //               <label htmlFor="FacebookLink" className="labelloc">
// //                 Country
// //               </label>
// //               <input
// //                     type="text"
// //                     className="inputbox2loc"
// //                     placeholder="India"
// //                     onChange={(e) => setForm({ ...form, country: e.target.value })}
// //                     style={{borderColor:locationError.country?"red":"#B3B3B3" }}
// //                     value={props.data && props.data[0] ? props.data[0].location.country : form.country}
// //                   />
// //                    {locationError.country && <div className='error-message'>{locationError.country}</div>}
// //             </div>
// //           </div>
// //           <br />
// //           {/* <button type="submit">Submit</button> */}
// //         </form>
// //       </div>
// //     </div>
// //   </div>
  
      
        
       
// //         // <div className="form-divloc">
// //         // <h5 className="headingloc">Location</h5>
// //         //   <form>
// //         //     <div className="heading-divloc">
// //         //       <h1 className="heading2loc">Restaurant address details</h1>
// //         //       <h1 className="heading3loc">Mention restaurant address</h1>
// //         //     </div>
// //         //     <div className="input-divloc">
// //         //       <label className="labelloc">Address Line 1</label>
// //         //       <input
// //         //         type="text"
// //         //         className="inputloc"
// //         //         placeholder="Name"
// //         //         onChange={(e) => handleAddressChange(0, e.target.value)}
// //         //       />
// //         //     </div>
// //         //     {textboxes.slice(1).map((_, index) => (
// //         //       <div className="input-div2loc" key={index + 1}>
// //         //         <label className="labelloc">Line {index + 2}</label>
// //         //         <input
// //         //           type="text"
// //         //           className="inputloc"
// //         //           placeholder="Name"
// //         //           onChange={(e) => handleAddressChange(index + 1, e.target.value)}
// //         //         />
// //         //         {index + 1 === textboxes.length - 1 && (
// //         //           <button className="btn" onClick={handleTextBoxes}>
// //         //             + Add line
// //         //           </button>
// //         //         )}
// //         //       </div>
// //         //     ))}
// //         //     <div className="city-info-divloc">
// //         //       <div className="city-info-flexloc">
// //         //         <div className="city-info-colloc">
// //         //           <label className="labelloc">Pincode</label>
// //         //           <input
// //         //             type="text"
// //         //             className="input2loc"
// //         //             placeholder="600 084"
// //         //             onChange={(e) => setForm({ ...form, pincode: e.target.value })}
// //         //           />
// //         //         </div>
// //         //         <div className="city-info-colloc">
// //         //           <label className="labelloc">City</label>
// //         //           <input
// //         //             type="text"
// //         //             className="input2loc"
// //         //             placeholder="Chennai"
// //         //             onChange={(e) => setForm({ ...form, city: e.target.value })}
// //         //           />
// //         //         </div>
// //         //       </div>
// //         //       <div className="city-info-flexloc">
// //         //         <div className="city-info-colloc">
// //         //           <label className="label">State</label>
// //         //           <input
// //         //             type="text"
// //         //             className="input2loc"
// //         //             placeholder="Tamil Nadu"
// //         //             onChange={(e) => setForm({ ...form, state: e.target.value })}
// //         //           />
// //         //         </div>
// //         //         <div className="city-info-colloc">
// //         //           <label className="label">Country</label>
// //         //           <input
// //         //             type="text"
// //         //             className="input2loc"
// //         //             placeholder="India"
// //         //             onChange={(e) => setForm({ ...form, country: e.target.value })}
// //         //           />
// //         //         </div>
// //         //       </div>
// //         //     </div>
// //         //   </form>
// //         // </div>
        
       
   
 
// //   );
// // });

// // export default Location;

// import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
// import "../Location/Location.scss";
// import { useSelector } from "react-redux";

// const Location = forwardRef((props, ref) => {
//   const [form, setForm] = useState({


//     address: "",
//     pinCode: "",
//     city: "",
//     state: "",
//     country: ""
//   });
//   const data = useSelector((state) => state.getlocationdata.data);
//   const [locationError, setLocationError] = useState({
//     address: "",
//     pinCode: "",
//     city: "",
//     state: "",
//     country: ""
//   });

//   let errors = {};

//   const [textboxes, setTextboxes] = useState([""]);

//   useEffect(() => {
//     if (data && data[0]) {
//       setForm({
//         address: data[0].location.addressLine1 || "",
//         pinCode: data[0].location.pinCode || "",
//         city: data[0].location.city || "",
//         state: data[0].location.state || "",
//         country: data[0].location.country || ""
//       });
//     }
//   }, [data]);

//   const handleTextBoxes = (e) => {
//     e.preventDefault();
//     setTextboxes([...textboxes, ""]);
//   };

//   const getFormData = () => {
//     return form;
//   };

//   useImperativeHandle(ref, () => ({
//     getFormData,
//     getValidate,
//     resetForm,
//   }));

//   const handleAddressChange = (index, value) => {
//     const newTextBoxes = [...textboxes];
//     newTextBoxes[index] = value;
//     setTextboxes(newTextBoxes);
//     setForm({ ...form, address: newTextBoxes.join(", ") });
//   };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const getValidate = () => {
//     let isValid = true;

//     if (!form.address) {
//       isValid = false;
//       errors.address = "Please Enter Location";

//   const getValidate=()=>{
//     let isValid=true

//     if(!form.address){
//       isValid=false;
//       errors.address="Please Enter Location"

//     }
//     if (!form.pinCode) {
//       isValid = false;
//       errors.pinCode = "Please Enter Pincode";
//     }
//     if (!form.city) {
//       isValid = false;
//       errors.city = "Please Enter City";
//     }
//     if (!form.state) {
//       isValid = false;
//       errors.state = "Please Enter State";
//     }

//     if (!form.country) {
//       isValid = false;
//       errors.country = "Please Enter Country";


//     if(!form.country){
//       isValid=false;
//       errors.country="Please Enter Country"

//     }

//     setLocationError(errors);
//     return isValid;
//   };

//   const resetForm = () => {
//     setForm({
//       address: "",
//       pinCode: "",
//       city: "",
//       state: "",
//       country: ""
//     });

//     setLocationError({
//       address: "",
//       pinCode: "",
//       city: "",
//       state: "",
//       country: ""
//     });
//   };



//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     let error = "";

//     })


//     if (!value.trim()) {
//       error = `Please Enter ${name.charAt(0).toUpperCase() + name.slice(1)}`;
//     } else if (name === "pinCode" && !/^\d{6}$/.test(value)) {
//       error = "Please Enter a valid 6-digit Pincode";
//     }

//     setLocationError((prevErrors) => ({
//       ...prevErrors,
//       [name]: error,
//     }));
//   };
//   return (

//     <div className="main-divloc">
//       <div className="submain-divloc">
//         <div className="heading-divloc">
//           <h5>Location</h5>
//         </div>
//         <div className="form-divloc">
//           <form>
//             <div>
//               <h5 className="headingloc1">Restaurant address details</h5>
//             </div>
//             <div className="headingloc2">
//               <h5 className="headingloc2">Mention restaurant address</h5>
//             </div>
//             <div className="labelinput-divloc">
//               <label htmlFor="BusinessLegalName" className="labelloc">Address Line</label>
//               <input
//                 type="text"
//                 className="inputboxloc"
//                 placeholder="Name"
//                 onBlur={handleBlur}
//                 value={form.address}
//                 onChange={(e) => handleAddressChange(0, e.target.value)}
//                 style={{ borderColor: locationError.address ? "red" : "#B3B3B3", marginBottom: "30px" }}
//               />
//               {locationError.address && <div className='error-message'>{locationError.address}</div>}
//             </div>

//             <div style={{ display: "flex", justifyContent: "space-evenly" }} className="personal-detailsloc">
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <label htmlFor="pincode" className="labelloc">Pincode</label>
//                 <input
//                   type="text"
//                   className="inputbox2loc"
//                   placeholder="600084"
//                   name="pinCode"
//                   onBlur={handleBlur}
                  
//                   maxLength={6}
//                   onChange={handleChange}
//                   style={{ borderColor: locationError.pinCode ? "red" : "#B3B3B3" }}
//                   value={form.pinCode}
//                 />
//                 {locationError.pinCode && <div className='error-message'>{locationError.pincode}</div>}
//               </div>

//               <div style={{ display: "flex", flexDirection: "column" }} className="personal-detailsloc">
//                 <label htmlFor="city" className="labelloc">City</label>
//                 <input
//                   type="text"
//                   className="inputbox2loc"
//                   placeholder="Chennai"
//                   name="city"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   style={{ borderColor: locationError.city ? "red" : "#B3B3B3" }}
//                   value={form.city}
//                 />
//                 {locationError.city && <div className='error-message'>{locationError.city}</div>}
//               </div>


//     <div className="main-divloc">
//     <div className="submain-divloc">
//       <div className="heading-divloc">
//         <h5>Location</h5>
//       </div>
//       <div className="form-divloc">
//         <form>
//         <div>
//         <h5 className="headingloc1"> Restaurant address details</h5>
//       </div>
//       <div className="headingloc2">
//         <h5 className="headingloc2"> Mention restaurant address</h5>
//       </div>

//             <div className="labelinput-divloc">

//             <label htmlFor="BusinessLegalName" className="labelloc">
//            Address Line
//             </label>

//             <input
//                type="text"
//                className="inputboxloc"
//                placeholder="Name"
//                value={props.data && props.data[0] ? props.data[0].location.addressLine1 : form.address}
//                onChange={(e) => handleAddressChange(0, e.target.value)}
//                style={{borderColor:locationError.address?"red":"#B3B3B3"  , marginBottom:"30px" }}

//             />
//               {locationError.address && <div className='error-message'>{locationError.address}</div>}

//           </div>

//           <div
//             style={{ display: "flex", justifyContent: "space-evenly" }}
//             className="personal-detailsloc"
//           >

//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <label htmlFor="email" className="labelloc">
//                 Pincode
//               </label>
//               <input
//                     type="text"
//                     className="inputbox2loc"
//                     placeholder="600 084"
//                     onChange={(e) => setForm({ ...form, pincode: e.target.value })}
//                     style={{borderColor:locationError.pincode?"red":"#B3B3B3" }}
//                     value={props.data && props.data[0] ? props.data[0].location.pinCode : form.pincode}

//                   />
//                      {locationError.pincode && <div className='error-message'>{locationError.pincode}  </div>}

//             </div>

//             <div
//               style={{ display: "flex", flexDirection: "column" }}
//               className="personal-detailsloc">

//               <label htmlFor="website" className="labelloc">
//                 City
//               </label>
//               <input
//                     type="text"
//                     className="inputbox2loc"
//                     placeholder="Chennai"
//                     onChange={(e) => setForm({ ...form, city: e.target.value })}
//                     style={{borderColor:locationError.city?"red":"#B3B3B3" }}
//                     value={props.data && props.data[0] ? props.data[0].location.city : form.city}
//                   />
//                       {locationError.city && <div className='error-message'>{locationError.city}</div>}

//             </div>

//             <div style={{ display: "flex", justifyContent: "space-evenly" }} className="personal-detailsloc">
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <label htmlFor="state" className="labelloc">State</label>
//                 <input
//                   type="text"
//                   className="inputbox2loc"
//                   placeholder="Tamil Nadu"
//                   name="state"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   style={{ borderColor: locationError.state ? "red" : "#B3B3B3" }}
//                   value={form.state}
//                 />
//                 {locationError.state && <div className='error-message'>{locationError.state}</div>}
//               </div>
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <label htmlFor="country" className="labelloc">Country</label>
//                 <input
//                   type="text"
//                   className="inputbox2loc"
//                   placeholder="India"
//                   name="country"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   style={{ borderColor: locationError.country ? "red" : "#B3B3B3" }}
//                   value={form.country}
//                 />
//                 {locationError.country && <div className='error-message'>{locationError.country}</div>}
//               </div>
//             </div>
//             <br />
//           </form>
//         </div>
//       </div>
//     </div>

//   </div>

//         // <div className="form-divloc">
//         // <h5 className="headingloc">Location</h5>
//         //   <form>
//         //     <div className="heading-divloc">
//         //       <h1 className="heading2loc">Restaurant address details</h1>
//         //       <h1 className="heading3loc">Mention restaurant address</h1>
//         //     </div>
//         //     <div className="input-divloc">
//         //       <label className="labelloc">Address Line 1</label>
//         //       <input
//         //         type="text"
//         //         className="inputloc"
//         //         placeholder="Name"
//         //         onChange={(e) => handleAddressChange(0, e.target.value)}
//         //       />
//         //     </div>
//         //     {textboxes.slice(1).map((_, index) => (
//         //       <div className="input-div2loc" key={index + 1}>
//         //         <label className="labelloc">Line {index + 2}</label>
//         //         <input
//         //           type="text"
//         //           className="inputloc"
//         //           placeholder="Name"
//         //           onChange={(e) => handleAddressChange(index + 1, e.target.value)}
//         //         />
//         //         {index + 1 === textboxes.length - 1 && (
//         //           <button className="btn" onClick={handleTextBoxes}>
//         //             + Add line
//         //           </button>
//         //         )}
//         //       </div>
//         //     ))}
//         //     <div className="city-info-divloc">
//         //       <div className="city-info-flexloc">
//         //         <div className="city-info-colloc">
//         //           <label className="labelloc">Pincode</label>
//         //           <input
//         //             type="text"
//         //             className="input2loc"
//         //             placeholder="600 084"
//         //             onChange={(e) => setForm({ ...form, pincode: e.target.value })}
//         //           />
//         //         </div>
//         //         <div className="city-info-colloc">
//         //           <label className="labelloc">City</label>
//         //           <input
//         //             type="text"
//         //             className="input2loc"
//         //             placeholder="Chennai"
//         //             onChange={(e) => setForm({ ...form, city: e.target.value })}
//         //           />
//         //         </div>
//         //       </div>
//         //       <div className="city-info-flexloc">
//         //         <div className="city-info-colloc">
//         //           <label className="label">State</label>
//         //           <input
//         //             type="text"
//         //             className="input2loc"
//         //             placeholder="Tamil Nadu"
//         //             onChange={(e) => setForm({ ...form, state: e.target.value })}
//         //           />
//         //         </div>
//         //         <div className="city-info-colloc">
//         //           <label className="label">Country</label>
//         //           <input
//         //             type="text"
//         //             className="input2loc"
//         //             placeholder="India"
//         //             onChange={(e) => setForm({ ...form, country: e.target.value })}
//         //           />
//         //         </div>
//         //       </div>
//         //     </div>
//         //   </form>
//         // </div>


//   );
// });

// export default Location;



import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";


import "../Location/Location.scss";
import { useSelector } from "react-redux";

const Location = forwardRef((props, ref) => {
  const [form, setForm] = useState({
   addressLine1: "",
   addressLine2: "",
    pinCode: "",
    city: "",
    state: "",
    country: "",
  });
  const data = useSelector((state) => state.getlocationdata.data);
  const [locationError, setLocationError] = useState({
    addressLine1: "",
    addressLine2: "",
    pinCode: "",
    city: "",
    state: "",
    country: "",
  });

  let errors = {};

  const [textboxes, setTextboxes] = useState([""]);

  useEffect(() => {
    if (data && data[0]) {
      setForm({
        addressLine1: data[0].location.addressLine1 || "",
        addressLine2: data[0].location.addressLine2 || "",

        pinCode: data[0].location.pinCode || "",
        city: data[0].location.city || "",
        state: data[0].location.state || "",
        country: data[0].location.country || "",
      });
    }
  }, [data]);
  console.log(data)

  const handleTextBoxes = (e) => {
    e.preventDefault();
    setTextboxes([...textboxes, ""]);
  };

  const getFormData = () => {
    return form;
  };

  useImperativeHandle(ref, () => ({
    getFormData,
    getValidate,
    resetForm,
  }));



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (!value.trim()) {
      error = `Please Enter ${name.charAt(0).toUpperCase() + name.slice(1)}`;
    } else if (name === "pinCode" && !/^\d{6}$/.test(value)) {
      error = "Please Enter a valid 6-digit Pincode";
    }

    setLocationError((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const getValidate = () => {
    let isValid = true;

    if (!form. addressLine1) {
      isValid = false;
      errors. addressLine1 = "Please Enter Address";
    }
    if (!form. addressLine2) {
      isValid = false;
      errors. addressLine2 = "Please Enter Address";
    }
    if (!form.pinCode) {
      isValid = false;
      errors.pinCode = "Please Enter Pincode";
    } else if (!/^\d{6}$/.test(form.pinCode)) {
      isValid = false;
      errors.pinCode = "Please Enter a valid 6-digit Pincode";
    }
    if (!form.city) {
      isValid = false;
      errors.city = "Please Enter City";
    }
    if (!form.state) {
      isValid = false;
      errors.state = "Please Enter State";
    }
    if (!form.country) {
      isValid = false;
      errors.country = "Please Enter Country";
    }

    setLocationError(errors);
    return isValid;
  };

  const resetForm = () => {
    setForm({
      addressLine1: "",
      addressLine2: "",

      pinCode: "",
      city: "",
      state: "",
      country: "",
    });

    setLocationError({
      addressLine1: "",
      addressLine2: "",
      pinCode: "",
      city: "",
      state: "",
      country: "",
    });
  };


  console.log(form)

  return (
    <div className="main-divloc">
      <div className="submain-divloc">
        <div className="heading-divloc">
          <h5>Location</h5>
        </div>
        <div className="form-divloc">
          <form>
            <div>
              <h5 className="headingloc1">Restaurant address details</h5>
            </div>
            <div className="headingloc2">
              <h5 className="headingloc2">Mention restaurant address</h5>
            </div>
            <div className="labelinput-divloc">
              <label htmlFor="BusinessLegalName" className="labelloc">
                Address Line
              </label>
              <input
                type="text"
                className="inputboxloc"
                placeholder="Name"
                name="address"
               value={form.addressLine1}
                onChange={(e) => setForm({...form , addressLine1 :e.target.value})}

                onBlur={handleBlur}
                style={{ borderColor: locationError.address ? "red" : "#B3B3B3", marginBottom: "30px" }}

               
              />
                {locationError.address && (
                <div className="error-message1" style={{marginTop:"-20px"}}>{locationError.address}</div>
              )}
{textboxes.map((textbox, index) => {
  return (
    <>
    <div className="labelinput-divloc1" key={index}>
      <label htmlFor={`BusinessLegalName${index}`} className="labelloc1" >Line {index+1}</label>
      <input
        type="text"
        className="inputboxloc"
        placeholder="Name"
        value={form.addressLine2}
        onChange={(e) => setForm({...form , addressLine2 :e.target.value})}

        
       
      />
    
      
    </div>
    <div style={{marginLeft:'260px',marginTop:'40px'}}>
    {textboxes.length < 2 && (
        <button className="btn" onClick={handleTextBoxes} style={{marginLeft:'-18px'}}>+ Add Line </button>
      )}
    </div>
    
    </>
    
  );
})} 
            </div>

            <div
              style={{ display: "flex", justifyContent: "space-evenly", marginTop:"-40px" }}
              className="personal-detailsloc"
            >
              <div style={{ display: "flex", flexDirection: "column" }}>

               

                <label htmlFor="pincode" className="labelloc">
                  Pincode
                </label>

                <input
                  type="text"
                  className="inputbox2loc"
                  placeholder="600084"
                  name="pinCode"
                  maxLength={6}
                  onChange={handleChange}

                  onBlur={handleBlur}
                  style={{ borderColor: locationError.pinCode ? "red" : "#B3B3B3" }}
                  value={form.pinCode}
                />
                
                {locationError.pinCode && (
                  <div className="error-message">{locationError.pincode}</div>
                )}

              </div>

              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="personal-detailsloc"
              >
                <label htmlFor="city" className="labelloc">
                  City
                </label>
                <input
                  type="text"
                  className="inputbox2loc"
                  placeholder="Chennai"
                  name="city"
                  onChange={handleChange}

                  onBlur={handleBlur}
                  style={{ borderColor: locationError.city ? "red" : "#B3B3B3" }}  
                  value={form.city}
                />
                {locationError.city && (
                  <div className="error-message">{locationError.city}</div>
                )}
              </div>
            </div>

            <div
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className="personal-detailsloc"
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="state" className="labelloc">
                  State
                </label>
                <input
                  type="text"
                  className="inputbox2loc"
                  placeholder="Tamil Nadu"
                  name="state"
                  onChange={handleChange}

                  onBlur={handleBlur}
                  style={{ borderColor: locationError.state ? "red" : "#B3B3B3" }}

                 

                  value={form.state}
                />
                {locationError.state && (
                  <div className="error-message">{locationError.state}</div>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="country" className="labelloc">
                  Country
                </label>
                <input
                  type="text"
                  className="inputbox2loc"
                  placeholder="India"
                  name="country"
                  onChange={handleChange}

                  onBlur={handleBlur}
                  style={{ borderColor: locationError.country ? "red" : "#B3B3B3" }}

                 

                  value={form.country}
                />
                {locationError.country && (
                  <div className="error-message">{locationError.country}</div>
                )}
              </div>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
});

export default Location;




