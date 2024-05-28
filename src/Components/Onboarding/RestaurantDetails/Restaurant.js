import React, { useState } from "react";
import "./Restaurant.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";

const RestaurantDetails = () => {
  const [form, setForm] = useState({
    BusinessLegalName: "",
    phoneType: "",
    email: "",
    website: "",
    InstagramLink: "",
    FacebookLink: "",
  });

  const [emailError, setEmailError] = useState("");

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
      alert(JSON.stringify(form, null, 2));
    }
  };

  const [restaurantNumber, setRestaurantNumber] = useState("");
  const [restaurantNumber2, setRestaurantNumber2] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setWhatsappNumber(restaurantNumber);
    } else {
      setWhatsappNumber("");
    }
  };

  const handleWhatsappNumberChange = (value) => {
    setWhatsappNumber(value);
  };

  return (
    <>



    <div className="main-div2">
      <div className="submain-div2">
        <div className="heading-div2">
          <h5 >Restaurant Details</h5>
        </div>

        <div className="form-div2">
          <form onSubmit={handleSubmit}>
            <div className="labelinput-div">
              <label htmlFor="BusinessLegalName" className="label">
                Business Legal Name
              </label>
              <input
                type="text"
                className="inputbox"
                placeholder="Name"
                value={form.BusinessLegalName}
                onChange={(e) =>
                  setForm({ ...form, BusinessLegalName: e.target.value })
                }
              />
            </div>

            <div className="labelinput-div">
              <label htmlFor="phoneType" className="label">
                Restaurant contact number
              </label>
              <div>
                <label className="radio-label">
                  <input
                    type="radio"
                    value="Mobile"
                    name="phoneType"
                    className="radio"
                    checked={form.phoneType === "Mobile"}
                    onChange={(e) =>
                      setForm({ ...form, phoneType: e.target.value })
                    }
                  />
                  Mobile
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    value="Landline"
                    name="phoneType"
                    className="radio"
                    checked={form.phoneType === "Landline"}
                    onChange={(e) =>
                      setForm({ ...form, phoneType: e.target.value })
                    }
                  />
                  Landline
                </label>
              </div>
              <div style={{ marginTop: "20px" }}>
                <PhoneInput
                  inputStyle={{ color: "green" }}
                  country={"us"}
                  value={restaurantNumber}
                  onChange={(value) => setRestaurantNumber(value)}
                  placeholder="75744 3444"
                  countryCodeEditable={false}
                  onlyCountries={["in", "us"]}
                />
              </div>
            </div>

            <div className="labelinput-div">
              <label
                htmlFor="whatsappNumber"
                className="label"
                style={{ marginBottom: "15px" }}
              >
                What's App Number
              </label>
              <label className="radio-label">
                <input
                  type="checkbox"
                  className="radio"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                Same as restaurant mobile no.
              </label>
              {isChecked ? (
                <input
                  type="text"
                  className="inputbox"
                  value={whatsappNumber}
                  onChange={(e) => handleWhatsappNumberChange(e.target.value)}
                  placeholder="Enter Whatsapp Number"
                />
              ) : (
                <PhoneInput
                  inputStyle={{ color: "green" }}
                  country={"us"}
                  value={restaurantNumber2}
                  onChange={(value) => setRestaurantNumber2(value)}
                  placeholder="75744 3444"
                  countryCodeEditable={false}
                  onlyCountries={["in", "us"]}
                />
              )}
            </div>

            <div
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className="personal-details"
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  className={`inputbox2 ${emailError ? "inputbox-error" : ""}`}
                  placeholder="xyz@gmail.com"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setEmailError(validateEmail(e.target.value)); 
                  }}
                />
                {emailError && <div style={{ color: "red" }}>{emailError}</div>}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="personal-details"
              >
                <label htmlFor="website" className="label">
                  Website Link
                </label>
                <input
                  type="url"
                  className="inputbox2"
                  placeholder="Magilhub.com"
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                />
              </div>
            </div>

            <div
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className="personal-details"
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="InstagramLink" className="label">
                  Instagram Link
                </label>
                <input
                  type="url"
                  className="inputbox2"
                  placeholder="Chandra.uiux"
                  value={form.InstagramLink}
                  onChange={(e) =>
                    setForm({ ...form, InstagramLink: e.target.value })
                  }
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="FacebookLink" className="label">
                  Facebook Link
                </label>
                <input
                  type="url"
                  className="inputbox2"
                  placeholder="chandra.com"
                  value={form.FacebookLink}
                  onChange={(e) =>
                    setForm({ ...form, FacebookLink: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default RestaurantDetails;
