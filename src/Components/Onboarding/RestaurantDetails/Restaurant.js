import React, { useState,useImperativeHandle} from "react";
import "./Restaurant.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";

const Restaurant=React.forwardRef((props, ref) => {
  const [form, setForm] = useState({
    businessLegalName: "",
    phone: "",
    email: "",
    website: "",
    InstagramLink: "",
    FacebookLink: "",
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
      <div className="main-div2">
        <div className="submain-div2">
          <div className="heading-div2">
            <h5>Restaurant Details</h5>
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
                    setForm({ ...form, businessLegalName: e.target.value })
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
                      checked={form.phone === "Mobile"}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
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
                className="personal-details"
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`inputbox2 ${
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
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
});

export default Restaurant;
