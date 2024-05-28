import React from "react";
import "../Location/Location.css";
import { useState } from "react";

const Location = () => {
  
  const[form,setForm]=useState({
    address:"",
    pincode:"",
    city:"",
    state:"",
    country:""
  })
  console.log(form)
  const[textboxes,setTextboxes]=useState([''])

  const handleTextBoxes=(e)=>{
    e.preventDefault(); 
    setTextboxes([...textboxes,''])





  }
  return (
    <div className="main-div">
      <div className="sub-div">
        <div>
          <h5 className="heading">Location</h5>
        </div>
        <div className="form-div">
          <form action="">
            <div className="heading-div">
              <h1 className="heading2">Restaurant address details</h1>
              <h1 className="heading3">Mention restaurant address </h1>
            </div>
            <div className="input-div">
              <label className="label">Address Line 1</label>
              <input type="text" className="input" placeholder="Name"  onChange={(e) => {
                  const newTextBoxes = [...textboxes];
                  newTextBoxes[0] = e.target.value;
                  setTextboxes(newTextBoxes);
                  setForm({ ...form, address: newTextBoxes.join(", ") });
                }} />
            </div>
            {textboxes.map((textBox,index)=>{

              return(
                <div className="input-div2" key={index}>
                <label className="label">Line {index+2}</label>
                <input type="text" className="input" placeholder="Name" onChange={(e) => {
                    const newTextBoxes = [...textboxes];
                    newTextBoxes[index+1] = e.target.value;
                    setTextboxes(newTextBoxes);
                    setForm({ ...form, address: newTextBoxes.join(", ") });
                  }}/>
                {index === textboxes.length - 1 && (
                  <button className="btn" onClick={handleTextBoxes}>
                    + Add line
                  </button>
                )}
              </div>


              )
            })}
           
            <div className="city-info-div">
              <div className="city-info-flex">
                <div className="city-info-col">
                  <label className="label">Pincode</label>
                  <input type="text" className="input2" placeholder="600 084" onChange={(e)=>setForm({...form,"pincode":e.target.value})} />
                </div>
                <div className="city-info-col">
                  <label className="label">City</label>
                  <input type="text" className="input2" placeholder="Chennai" onChange={(e)=>setForm({...form,"city":e.target.value})}/>
                </div>
              </div>
      
        
              <div className="city-info-flex">
                <div className="city-info-col">
                  <label className="label">State</label>
                  <input type="text" className="input2" placeholder="Tamil Nadu" onChange={(e)=>setForm({...form,"state":e.target.value})} />
                </div>
                <div className="city-info-col">
                  <label className="label">Country</label>
                  <input type="text" className="input2" placeholder="India" onChange={(e)=>setForm({...form,"country":e.target.value})} />
                </div>
              </div>
              </div>
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default Location;
