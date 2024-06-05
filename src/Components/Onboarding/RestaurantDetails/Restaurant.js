import React, { useState,useImperativeHandle} from "react";
import "./Restaurant.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";

const Restaurant=React.forwardRef((props, ref) => {
  const [form, setForm] = useState({
    id:"58de0876-28b1-468d-bde3-b370e62e6847",
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
    getFormData: () => {
      return form;
    },
    clearFormData: () => {
      setForm({
        id:"58de0876-28b1-468d-bde3-b370e62e6847",
        businessLegalName: "",
        phone: "",
        email: "",
        website: "",
        InstagramLink: "",
        FacebookLink: "",
        restaurantNumber: "",
        whatsappNumber: "",
      });
      setIsChecked(false);
    }
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
      setForm({ ...form, whatsappNumber: form.restaurantNumber });
    } else {
      setForm({ ...form, whatsappNumber: "" });
    }
  };
  console.log(form)

  return (
    <>
    
      <div className="main-divres">
        <div className="submain-divres">
          <div className="heading-divres">
            <h5>Restaurant Details</h5>
          </div>
          <div className="form-divres">
            <form onSubmit={handleSubmit}>
              <div className="labelinput-divres">
                <label htmlFor="BusinessLegalName" className="labelres">
                  Business Legal Name
                </label>
                <input
                  type="text"
                  className="inputboxres"
                  placeholder="Name"
                  value={form.businessLegalName}
                  onChange={(e) =>
                    setForm({ ...form, businessLegalName: e.target.value })
                  }
                />
              </div>

              <div className="labelinput-divres">
                <label htmlFor="phoneType" className="labelres">
                  Restaurant contact number
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
                  <PhoneInput
                    inputStyle={{ color: "green" }}
                    country={"us"}
                    value={form.restaurantNumber}
                    onChange={(value) =>
                      setForm({ ...form, restaurantNumber: value })
                    }
                    placeholder="75744 3444"
                    countryCodeEditable={false}
                    onlyCountries={["in", "us"]}
                  />
                </div>
              </div>

              <div className="labelinput-divres">
                <label
                  htmlFor="whatsappNumber"
                  className="labelres"
                  style={{ marginBottom: "15px" }}
                >
                  What's App Number
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
                {isChecked ? (
                  <input
                    type="text"
                    className="inputboxres"
                    value={form.whatsappNumber}
                    onChange={(e) =>
                      setForm({ ...form, whatsappNumber: e.target.value })
                    }
                    placeholder="Enter Whatsapp Number"
                  />
                ) : (
                  <PhoneInput
                    inputStyle={{ color: "green" }}
                    country={"us"}
                    value={form.whatsappNumber}
                    onChange={(value) =>
                      setForm({ ...form, whatsappNumber: value })
                    }
                    placeholder="75744 3444"
                    countryCodeEditable={false}
                    onlyCountries={["in", "us"]}
                  />
                )}
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
                    className={`inputbox2res ${
                      emailError ? "inputbox-error" : ""
                    }`}
                    placeholder="xyz@gmail.com"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
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
                    className="inputbox2res"
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
                className="personal-detailsres"
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="InstagramLink" className="labelres">
                    Instagram Link
                  </label>
                  <input
                    type="url"
                    className="inputbox2res"
                    placeholder="Chandra.uiux"
                    value={form.instagramLink}
                    onChange={(e) =>
                      setForm({ ...form, instagramLink: e.target.value })
                    }
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="FacebookLink" className="labelres">
                    Facebook Link
                  </label>
                  <input
                    type="url"
                    className="inputbox2res"
                    placeholder="chandra.com"
                    value={form.facebookLink}
                    onChange={(e) =>
                      setForm({ ...form, facebookLink: e.target.value })
                    }
                  />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
});

export default Restaurant;
