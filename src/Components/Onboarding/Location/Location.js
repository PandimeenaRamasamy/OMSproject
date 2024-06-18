import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../Location/Location.scss";

const Location = forwardRef((props, ref) => {
  const [form, setForm] = useState({

   
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: ""
  });

  const[locationError,setLocationError]=useState({
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: ""
  })
  let errors={};

  const [textboxes, setTextboxes] = useState([""]);

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

  const handleAddressChange = (index, value) => {
    const newTextBoxes = [...textboxes];
    newTextBoxes[index] = value;
    setTextboxes(newTextBoxes);
    setForm({ ...form, address: newTextBoxes.join(", ") });
  };
  

  const getValidate=()=>{
    let isValid=true
    
   
  
    if(!form.address){
      isValid=false;
      errors.address="Please Enter Location"
    }
    if(!form.pincode ){
      isValid=false;
      errors.pincode="Please Enter Pincode"
    }
    if(!form.city){
      isValid=false;
      errors.city="Please Enter City"
    }
    if(!form.state){
      isValid=false;
      errors.state="Please Enter State"
    }
   
    if(!form.country){
      isValid=false;
      errors.country="Please Enter Country"
    }

    setLocationError(errors);
    return isValid

  }

  // console.log(locationError)

  const resetForm=()=>{
    setForm({
      address: "",
    pincode: "",
    city: "",
    state: "",
    country: ""

    })

    setLocationError({
      address: "",
    pincode: "",
    city: "",
    state: "",
    country: ""


    })

  }

  return (


    <div className="main-divloc">
    <div className="submain-divloc">
      <div className="heading-divloc">
        <h5>Location</h5>
      </div>
      <div className="form-divloc">
        <form>
        <div>
        <h5 className="headingloc1"> Restaurant address details</h5>
      </div>
      <div className="headingloc2">
        <h5 className="headingloc2"> Mention restaurant address</h5>
      </div>
        
          
           
            <div className="labelinput-divloc">

            <label htmlFor="BusinessLegalName" className="labelloc">
           Address Line
            </label>


            <input
               type="text"
               className="inputboxloc"
               placeholder="Name"
               value={form.address}
               onChange={(e) => handleAddressChange(0, e.target.value)}
               style={{borderColor:locationError.address?"red":"#B3B3B3"  , marginBottom:"30px" }}
              
            />
              {locationError.address && <div className='error-message'>{locationError.address}</div>}

          </div>

       {textboxes.map(()=>{
        return(
        <input type="text" className="inputboxloc"/>
        
        )
       })}





        








          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            className="personal-detailsloc"
          >


            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="email" className="labelloc">
                Pincode
              </label>
              <input
                    type="text"
                    className="inputbox2loc"
                    placeholder="600 084"
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    style={{borderColor:locationError.pincode?"red":"#B3B3B3" }}
                    value={form.pincode}

                 

                  />
                     {locationError.pincode && <div className='error-message'>{locationError.pincode}  </div>}
            
            </div>




            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="personal-detailsloc">
            
              <label htmlFor="website" className="labelloc">
                City
              </label>
              <input
                    type="text"
                    className="inputbox2loc"
                    placeholder="Chennai"
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    style={{borderColor:locationError.city?"red":"#B3B3B3" }}
                    value={form.city}
                  />
                      {locationError.city && <div className='error-message'>{locationError.city}</div>}
            </div>
          </div>

          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            className="personal-detailsloc"
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="InstagramLink" className="labelloc">
                State
              </label>
              <input
                    type="text"
                    className={"inputbox2loc"}
                    placeholder="Tamil Nadu"
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    style={{borderColor:locationError.state?"red":"#B3B3B3" }}
                    value={form.state}
                  />
                   {locationError.state && <div className='error-message'>{locationError.state}</div>}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="FacebookLink" className="labelloc">
                Country
              </label>
              <input
                    type="text"
                    className="inputbox2loc"
                    placeholder="India"
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    style={{borderColor:locationError.country?"red":"#B3B3B3" }}
                    value={form.country}
                  />
                   {locationError.country && <div className='error-message'>{locationError.country}</div>}
            </div>
          </div>
          <br />
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </div>
  </div>
  
      
        
       
        // <div className="form-divloc">
        // <h5 className="headingloc">Location</h5>
        //   <form>
        //     <div className="heading-divloc">
        //       <h1 className="heading2loc">Restaurant address details</h1>
        //       <h1 className="heading3loc">Mention restaurant address</h1>
        //     </div>
        //     <div className="input-divloc">
        //       <label className="labelloc">Address Line 1</label>
        //       <input
        //         type="text"
        //         className="inputloc"
        //         placeholder="Name"
        //         onChange={(e) => handleAddressChange(0, e.target.value)}
        //       />
        //     </div>
        //     {textboxes.slice(1).map((_, index) => (
        //       <div className="input-div2loc" key={index + 1}>
        //         <label className="labelloc">Line {index + 2}</label>
        //         <input
        //           type="text"
        //           className="inputloc"
        //           placeholder="Name"
        //           onChange={(e) => handleAddressChange(index + 1, e.target.value)}
        //         />
        //         {index + 1 === textboxes.length - 1 && (
        //           <button className="btn" onClick={handleTextBoxes}>
        //             + Add line
        //           </button>
        //         )}
        //       </div>
        //     ))}
        //     <div className="city-info-divloc">
        //       <div className="city-info-flexloc">
        //         <div className="city-info-colloc">
        //           <label className="labelloc">Pincode</label>
        //           <input
        //             type="text"
        //             className="input2loc"
        //             placeholder="600 084"
        //             onChange={(e) => setForm({ ...form, pincode: e.target.value })}
        //           />
        //         </div>
        //         <div className="city-info-colloc">
        //           <label className="labelloc">City</label>
        //           <input
        //             type="text"
        //             className="input2loc"
        //             placeholder="Chennai"
        //             onChange={(e) => setForm({ ...form, city: e.target.value })}
        //           />
        //         </div>
        //       </div>
        //       <div className="city-info-flexloc">
        //         <div className="city-info-colloc">
        //           <label className="label">State</label>
        //           <input
        //             type="text"
        //             className="input2loc"
        //             placeholder="Tamil Nadu"
        //             onChange={(e) => setForm({ ...form, state: e.target.value })}
        //           />
        //         </div>
        //         <div className="city-info-colloc">
        //           <label className="label">Country</label>
        //           <input
        //             type="text"
        //             className="input2loc"
        //             placeholder="India"
        //             onChange={(e) => setForm({ ...form, country: e.target.value })}
        //           />
        //         </div>
        //       </div>
        //     </div>
        //   </form>
        // </div>
        
       
   
 
  );
});

export default Location;
