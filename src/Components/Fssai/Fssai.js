import React, { useState } from "react";
import "./Fssai.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";
import { ImCross, ImFontSize } from "react-icons/im";
import addphoto from '../Fssai/images/Addphotos.png'

const Fssai = () => {
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

    const [selectedButton, setSelectedButton] = useState('yes');

    // Function to handle button click
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    const[imageclose,setimageclose]=useState(false)

  const handleButton = () => {
    document.getElementById('hidden-file-input').click();
  
    setimageclose(false)
    
  };

  const closeModal=()=>
    {
    
      setimageclose(true)
      setFile(null)
    }
    const [imagePreview, setImagePreview] = useState({addphoto});
    const [file, setFile] = useState(null);  
    const handleImage = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      }
    };
    return (
        <div className="main-divfssai">
            <div className="submain-divfssai">
                <div className="headingfssai">
                    <h5>Fssai</h5>
                </div>

                <div className="form-divfssai">
                    <form onSubmit={handleSubmit}>
                        <div className="labelinput-div">
                            <label htmlFor="BusinessLegalName" className="label">
                                Do you Have a valid FSSAI Registration/License?
                            </label>
                            <div style={{marginTop:'10px'}}>

                                <button
                                    onClick={() => handleButtonClick('yes')}
                                    style={{
                                        backgroundColor: selectedButton === 'yes' ? '#0D79DC' : '#979797',
                                        color: selectedButton === 'yes' ? 'white' : 'white',
                                        margin: '10px',
                                        border: 'none',
                                        borderRadius: '20px',
                                        outline: 'none',
                                        cursor: 'pointer',
                                        width: '80px',
                                        height: '30px',
                                    }}
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => handleButtonClick('no')}
                                    style={{
                                        backgroundColor: selectedButton === 'no' ? '#0D79DC' : '#979797',
                                        color: selectedButton === 'no' ? 'white' : 'white',
                                        margin: '10px',
                                        border: 'none',
                                        borderRadius: '20px',
                                        outline: 'none',
                                        cursor: 'pointer',
                                        width: '80px',
                                        height: '30px',
                                    }}
                                >
                                    No
                                </button>
                            </div>

                        </div>
                        <div className="labelinput-div">
                            <div
                                style={{ display: "flex", justifyContent: "space-evenly" }}
                                className="personal-details">                            
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label htmlFor="email" className="label">
                                        FSSAI Expiration Date
                                    </label>
                                    <input
                                        type="date"
                                        className={`inputbox2 ${emailError ? "inputbox-error" : ""}`}
                                        placeholder="DD/MM/YYYY"
                                        value={form.email}
                                        onChange={(e) => {
                                            setForm({ ...form, email: e.target.value });
                                            setEmailError(validateEmail(e.target.value));
                                        }}/>
                                    {emailError && <div style={{ color: "red" }}>{emailError}</div>}
                                </div>
                                <div
                                    style={{ display: "flex", flexDirection: "column" }}
                                    className="personal-details">
                                    <label htmlFor="website" className="label">
                                        FSSAI Register Number
                                    </label>
                                    <input
                                        type="url"
                                        className="inputbox2"
                                        placeholder="44335456567686"
                                        value={form.website}
                                        onChange={(e) =>
                                            setForm({ ...form, website: e.target.value })
                                        }/>                                    
                                </div>
                            </div>
                        </div>
                        <div className="labelinput-div ">
                <label htmlFor="" className="label">
                  Restaurant logo
                </label>
                <div className="logo">
                  <input type="file" id="hidden-file-input" onChange={handleImage} placeholder="" style={{ display: 'none' }} />
                  <span>Drag & Drop to upload or </span>

                  <button type="button" className="custom-file-button custom-file-input" onClick={handleButton}>Browse</button>
                  {/* <span className="custom-file-name">{file}</span> */}
                  <div className='preview'>
                    {file && 
                    <div>
                    {
                      imageclose ? <p style={{marginLeft:'-5%',color:'#67833E',fontSize: '12px'}}>No image selected</p>:
                      <>
                   <button onClick={closeModal} className='imcrosssty'><ImCross style={{ fontSize: '10px', color: 'white' }} /></button>
                      <img src={imagePreview} alt="Preview" className="imgpreview" />
                      <p>Preview</p></>
                    }                       
                    </div>
                    }                  
                  </div>
                  {!file &&    <img src={addphoto}  className='fornoimg' alt="" /> }                 
                </div>
              </div>        </form>
                </div>
            </div>
        </div>
    );
};

export default Fssai;
