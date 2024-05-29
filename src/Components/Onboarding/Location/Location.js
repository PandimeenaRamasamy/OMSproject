import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../Location/Location.css";

const Location = forwardRef((props, ref) => {
  const [form, setForm] = useState({
    id:"1",
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
    <div className="main-div">
      <div className="sub-div">
        <div>
          <h5 className="heading">Location</h5>
        </div>
        <div className="form-div">
          <form>
            <div className="heading-div">
              <h1 className="heading2">Restaurant address details</h1>
              <h1 className="heading3">Mention restaurant address</h1>
            </div>
            <div className="input-div">
              <label className="label">Address Line 1</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                onChange={(e) => handleAddressChange(0, e.target.value)}
              />
            </div>
            {textboxes.slice(1).map((_, index) => (
              <div className="input-div2" key={index + 1}>
                <label className="label">Line {index + 2}</label>
                <input
                  type="text"
                  className="input"
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
            <div className="city-info-div">
              <div className="city-info-flex">
                <div className="city-info-col">
                  <label className="label">Pincode</label>
                  <input
                    type="text"
                    className="input2"
                    placeholder="600 084"
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                  />
                </div>
                <div className="city-info-col">
                  <label className="label">City</label>
                  <input
                    type="text"
                    className="input2"
                    placeholder="Chennai"
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                  />
                </div>
              </div>
              <div className="city-info-flex">
                <div className="city-info-col">
                  <label className="label">State</label>
                  <input
                    type="text"
                    className="input2"
                    placeholder="Tamil Nadu"
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                  />
                </div>
                <div className="city-info-col">
                  <label className="label">Country</label>
                  <input
                    type="text"
                    className="input2"
                    placeholder="India"
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Location;
