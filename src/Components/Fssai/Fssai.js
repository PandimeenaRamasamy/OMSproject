import React, { useState, useImperativeHandle, forwardRef } from "react";
import "./Fssai.css";
import validator from "validator";
import { ImCross } from "react-icons/im";
import addphoto from '../Fssai/images/Addphotos.png';

const Fssai = forwardRef((props, ref) => {
  const [fssaiform, setfssaiform] = useState({
    Licensehadbtn: "",
    fssaidate: "",
    fssatregister: "",
    base64Image: ""
  });

  const getFormData = () => {
    return fssaiform;
  };

  useImperativeHandle(ref, () => ({
    getFormData
  }));

  const [selectedButton, setSelectedButton] = useState('yes');
  const [imagePreview, setImagePreview] = useState(addphoto);
  const [file, setFile] = useState(null);
  const [imageclose, setImageclose] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setfssaiform({ ...fssaiform, Licensehadbtn: selectedButton });
    // Additional form validation and submission logic can be added here
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleButton = () => {
    document.getElementById('hidden-file-input').click();
    setImageclose(false);
  };

  const closeModal = () => {
    setImageclose(true);
    setFile(null);
    setImagePreview(addphoto);
  };

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setfssaiform({ ...fssaiform, base64Image: base64String });
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
              <div style={{ marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => handleButtonClick('yes')}
                  style={{
                    backgroundColor: selectedButton === 'yes' ? '#0D79DC' : '#979797',
                    color: 'white',
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
                  type="button"
                  onClick={() => handleButtonClick('no')}
                  style={{
                    backgroundColor: selectedButton === 'no' ? '#0D79DC' : '#979797',
                    color: 'white',
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
              <div style={{ display: "flex", justifyContent: "space-evenly" }} className="personal-details">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="date" className="label">
                    FSSAI Expiration Date
                  </label>
                  <input
                    type="date"
                    className="inputbox2"
                    placeholder="DD/MM/YYYY"
                    value={fssaiform.fssaidate}
                    onChange={(e) => setfssaiform({ ...fssaiform, fssaidate: e.target.value })}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }} className="personal-details">
                  <label htmlFor="website" className="label">
                    FSSAI Register Number
                  </label>
                  <input
                    type="text"
                    className="inputbox2"
                    placeholder="44335456567686"
                    value={fssaiform.fssatregister}
                    onChange={(e) => setfssaiform({ ...fssaiform, fssatregister: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="labelinput-div">
              <label htmlFor="" className="label">
                Restaurant logo
              </label>
              <div className="logo">
                <input type="file" id="hidden-file-input" onChange={handleImage} style={{ display: 'none' }} />
                <span>Drag & Drop to upload or </span>
                <button type="button" className="custom-file-button custom-file-input" onClick={handleButton}>
                  Browse
                </button>
                <div className="preview">
                  {file && (
                    <div>
                      {!imageclose ? (
                        <>
                          <button onClick={closeModal} className="imcrosssty">
                            <ImCross style={{ fontSize: '10px', color: 'white' }} />
                          </button>
                          <img src={imagePreview} alt="Preview" className="imgpreview" />
                          <p>Preview</p>
                        </>
                      ) : (
                        <p style={{ marginLeft: '-5%', color: '#67833E', fontSize: '12px' }}>No image selected</p>
                      )}
                    </div>
                  )}
                  {!file && <img src={addphoto} className="fornoimg" alt="" />}
                </div>
              </div>
            </div>

            {/* <button type="submit">Submit</button> */}
          </form>
        </div>
      </div>
    </div>
  );
});

export default Fssai;
