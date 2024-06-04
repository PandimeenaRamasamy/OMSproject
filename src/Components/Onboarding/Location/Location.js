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

  const [textboxes, setTextboxes] = useState([""]);

  const handleTextBoxes = (e) => {
    e.preventDefault();
    setTextboxes([...textboxes, ""]);
  };

  const getFormData = () => {
    return form;
  };

  useImperativeHandle(ref, () => ({
    getFormData
  }));

  const handleAddressChange = (index, value) => {
    const newTextBoxes = [...textboxes];
    newTextBoxes[index] = value;
    setTextboxes(newTextBoxes);
    setForm({ ...form, address: newTextBoxes.join(", ") });
  };

  return (


    <div className="main-divloc">
    <div className="submain-divloc">
      <div className="heading-divloc">
        <h5>Location</h5>
      </div>
      <div className="form-divloc">
        <form>
        <div className="headingloc1">
        <h5> Restaurant address details</h5>
      </div>
      <div className="headingloc2">
        <h5> Mention restaurant address</h5>
      </div>
        
          
           
            <div className="labelinput-divloc">

            <label htmlFor="BusinessLegalName" className="labelloc">
           Address Line
            </label>


            <input
               type="text"
               className="inputboxloc"
               placeholder="Name"
               onChange={(e) => handleAddressChange(0, e.target.value)}
              
            />
          </div>

          {textboxes.slice(1).map((_, index) => (
              <div className="inputboxloc" key={index + 1}>
                <label className="labelloc">Line {index + 2}</label>
                <input
                  type="text"
                  className="inputboxloc"
                  placeholder="Name"
                  onChange={(e) => handleAddressChange(index + 1, e.target.value)}
                />
                {index + 1 === textboxes.length - 1 && (
                  <button className="btn" onClick={handleTextBoxes}>
                    + Add line
                  </button>
                )}
              </div>
            ))}






        








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
                  />
            
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
                  />
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
                    className="inputbox2loc"
                    placeholder="Tamil Nadu"
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                  />
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
                  />
            </div>
          </div>
          <button type="submit">Submit</button>
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
