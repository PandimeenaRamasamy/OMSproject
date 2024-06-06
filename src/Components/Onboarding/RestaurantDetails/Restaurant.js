import React, { useState, useImperativeHandle } from "react";
import "./Restaurant.scss";
import "react-phone-input-2/lib/style.css";
import validator from "validator";

const Restaurant = React.forwardRef((props, ref) => {
  const [form, setForm] = useState({
    id: "58de0876-28b1-468d-bde3-b370e62e6847",
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
        id: "58de0876-28b1-468d-bde3-b370e62e6847",
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

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!validator.isEmail(email)) {
      return "Invalid email address";
    } else {
      return "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValidationError = validateEmail(form.email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
    } else {
      setEmailError("");
      // handle form submission
    }
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
                <input
                  type="text"
                  name="restaurantNumber"
                  className="inputboxres"
                  placeholder="Enter Mobile Number"
                  value={form.restaurantNumber}
                  onChange={handleChange}
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
              <input
                type="text"
                name="whatsappNumber"
                className="inputboxres"
                placeholder="Enter WhatsApp Number"
                value={form.whatsappNumber}
                onChange={handleChange}
                disabled={isChecked}
              />
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
                    setEmailError(validateEmail(e.target.value));
                  }}
                />
                {emailError && (
                  <div style={{ color: "red" }}>{emailError}</div>
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
          </form>
        </div>
      </div>
    </div>
  );
});

export default Restaurant;
