import React, { useState, useImperativeHandle } from "react";
import "./Restaurant.scss";


const Restaurant = React.forwardRef((props, ref) => {
  const [form, setForm] = useState({
    locationId: "e76292f3-99cf-4bbc-baa6-61d6742a8b85",
    businessLegalName: "",
    phone: "",
    email: "",
    website: "",
    instagramLink: "",
    facebookLink: "",
    restaurantNumber: "",
    whatsappNumber: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [emailError, setEmailError] = useState("");

  useImperativeHandle(ref, () => ({
    getFormData: () => form,
    clearFormData: () => {
      setForm({
        locationId: "3208d1e6-7407-4ac5-9d74-83d542b71226",
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
    setIsChecked(!isChecked);
    if (!isChecked) {
      setForm((prevForm) => ({
        ...prevForm,
        whatsappNumber: prevForm.restaurantNumber,
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        whatsappNumber: "",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const countryCodes = [
    { name: "United States", dial_code: "+1" },
    { name: "India", dial_code: "+91" },
  ];
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].dial_code);
  const handleCodeChange = (event) => {
    setSelectedCode(event.target.value);
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
                onChange={handleChange}
              />
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
                    name="phoneType"
                    className="radiores"
                    checked={form.phone === "Mobile"}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  Mobile
                </label>
                <label className="radio-labelres">
                  <input
                    type="radio"
                    value="Landline"
                    name="phoneType"
                    className="radiores"
                    checked={form.phone === "Landline"}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  Landline
                </label>
              </div>
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
                  type="text"
                  name="restaurantNumber"
                  className="inputboxres2"
                  placeholder="Enter Mobile Number"
                  value={form.restaurantNumber}
                  onChange={(e) => {
                    setForm({ ...form, restaurantNumber: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="labelinput-divres">
              <label
                htmlFor="whatsappNumber"
                className="labelres"
                style={{ marginBottom: "15px" }}
              >
                WhatsApp Number
              </label>
              <label className="radio-labelres">
                <input
                  type="checkbox"
                  className="radiores"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                Same as restaurant mobile no.
              </label>


              <div>
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
                  type="text"
                  name="whatsappNumber"
                  className="inputboxres2"
                  placeholder="Enter WhatsApp Number"
                  value={form.whatsappNumber}
                  onChange={handleChange}
                  disabled={isChecked}
                />
              </div>
            </div>


            <div
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className="personal-detailsres"
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
                  placeholder="xyz@gmail.com"
                  value={form.email}
                  onChange={(e) => {
                    handleChange(e);
                   
                  }}
                />
                {emailError && <div style={{ color: "red" }}>{emailError}</div>}
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
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className="personal-detailsres"
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="instagramLink" className="labelres">
                  Instagram Link
                </label>
                <input
                  type="url"
                  name="instagramLink"
                  className="inputbox2res"
                  placeholder="Chandra.uiux"
                  value={form.instagramLink}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="facebookLink" className="labelres">
                  Facebook Link
                </label>
                <input
                  type="url"
                  name="facebookLink"
                  className="inputbox2res"
                  placeholder="chandra.com"
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
