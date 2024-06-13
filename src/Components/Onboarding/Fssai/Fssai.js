import React, { useState, useImperativeHandle, forwardRef } from "react";
import "./Fssai.scss";
import { ImCross } from "react-icons/im";
import addphoto from "../../../assets/images/Addphotos.png";


const Fssai = forwardRef((props, ref) => {
  const [fssaiform, setfssaiform] = useState({
    isEnabled: "",
    registerNumber: "",
    expirationDate: "",
    documents: "",
  });

  const [selectedButton, setSelectedButton] = useState(true);
  const [imagePreview, setImagePreview] = useState(addphoto);
  const [file, setFile] = useState(null);
  const [imageclose, setImageclose] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setfssaiform({ ...fssaiform, isEnabled: selectedButton });
  };

  const handleButtonClickyes = (e) => {
    setSelectedButton(true);
    e.preventDefault();
    setfssaiform({ ...fssaiform, isEnabled: "enabled" });
  };
  const handleButtonClickno = (e) => {
    setSelectedButton(false);
    e.preventDefault();
    setfssaiform({ ...fssaiform, isEnabled: "disabled" });
  };

  const handleButton = () => {
    document.getElementById("hidden-file-input").click();
    setImageclose(false);
  };

  const closeModal = () => {
    setImageclose(true);
    setFile(null);
    setImagePreview(addphoto);
  };
  const getFormData = () => {
    return fssaiform;
  };

  useImperativeHandle(ref, () => ({
    getFormData,
    resetForm,
  }));

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        setfssaiform({ ...fssaiform, documents: base64String });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const resetForm=()=>{
    setfssaiform({
      isEnabled: "",
      registerNumber: "",
      expirationDate: "",
      documents: "",

    })
    setFile(null)

  }

  return (
    <>
      <div className="main-divfss">
        <div className="submain-divfss">
          <div className="heading-divfss">
            <h5>Fssai</h5>
          </div>
          <div className="form-divfss">
            <form onSubmit={handleSubmit}>
              <div className="labelinput-divfss">
                <label htmlFor="BusinessLegalName" className="labelfss">
                  Do you Have a valid FSSAI Registration/License?
                </label>

                <div>
                  <button
                    type="button"
                    onClick={handleButtonClickyes}
                    style={{
                      backgroundColor: selectedButton ? "#0D79DC" : "#979797",
                      color: "white",
                      margin: "10px",
                      border: "none",
                      borderRadius: "20px",
                      outline: "none",
                      cursor: "pointer",
                      width: "80px",
                      height: "30px",
                    }}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={handleButtonClickno}
                    style={{
                      backgroundColor: !selectedButton ? "#0D79DC" : "#979797",
                      color: "white",
                      margin: "10px",
                      border: "none",
                      borderRadius: "20px",
                      outline: "none",
                      cursor: "pointer",
                      width: "80px",
                      height: "30px",
                    }}
                  >
                    No
                  </button>
                </div>
              </div>

              {selectedButton && (
                <>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                    className="personal-detailsfss"
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <label htmlFor="email" className="labelfss">
                        FSSAI Expiration Date
                      </label>
                      <input
                        type="date"
                        className="inputbox2fss"
                        placeholder="DD/MM/YY"
                        value={fssaiform.expirationDate}
                        onChange={(e) => {
                          setfssaiform({
                            ...fssaiform,
                            expirationDate: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      className="personal-detailsfss"
                    >
                      <label htmlFor="website" className="labelfss">
                        FSSAI Register Number
                      </label>
                      <input
                        type="text"
                        className="inputbox2fss"
                        placeholder="44335456567686"
                        value={fssaiform.registerNumber}
                        onChange={(e) =>
                          setfssaiform({
                            ...fssaiform,
                            registerNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="labelinput-divfss">
                    <label htmlFor="" className="labelfss">
                      Upload FSSAI document
                    </label>
                    <div className="logo">
                      <input
                        type="file"
                        id="hidden-file-input"
                        onChange={handleImage}
                        style={{ display: "none" }}
                      />
                      <span>Drag & Drop to upload or </span>
                      <button
                        type="button"
                        className="custom-file-button custom-file-input"
                        onClick={handleButton}
                      >
                        Browse
                      </button>
                      <div className="preview">
                        {file && (
                          <div>
                            {!imageclose ? (
                              <>
                                <button
                                  onClick={closeModal}
                                  className="imcrosssty"
                                >
                                  <ImCross
                                    style={{ fontSize: "10px", color: "white" }}
                                  />
                                </button>
                                <img
                                  src={imagePreview}
                                  alt="Preview"
                                  className="imgpreview"
                                />
                                <p>Preview</p>
                              </>
                            ) : (
                              <p
                                style={{
                                  marginLeft: "-5%",
                                  color: "#67833E",
                                  fontSize: "12px",
                                }}
                              >
                                No image selected
                              </p>
                            )}
                          </div>
                        )}
                        {!file && (
                          <img src={addphoto} className="fornoimg" alt="" />
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}

              
            </form>
          </div>
        </div>
      </div>
    </>
  );
});

export default Fssai;
