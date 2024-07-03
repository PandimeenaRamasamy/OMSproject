import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import "./Fssai.scss";
import { ImCross } from "react-icons/im";
import addphoto from "../../../assets/images/Addphotos.png";
import { useSelector } from "react-redux";

const Fssai = forwardRef((props, ref) => {
  const [fssaiform, setfssaiform] = useState({
    isEnabled: "",
    registerNumber: "",
    expirationDate: "",
    documents: "",
  });

  const [fssaierrors, setFssaiErrors] = useState({
    registerNumber: "",
    expirationDate: "",
    documents: "",
  });

  const data = useSelector((state) => state.getlocationdata.data);

  useEffect(() => {
    if (data && data[0] && data[0].location && data[0].location.attributes) {
      try {
        const attributes = JSON.parse(data[0].location.attributes);
        const fssaiDetails = attributes.FSSAIDetails || {};
        setfssaiform({
          isEnabled: fssaiDetails.isEnabled || "",
          registerNumber: fssaiDetails.registerNumber || "",
          expirationDate: fssaiDetails.expirationDate || "",
          documents: fssaiDetails.documents || "",
        });
        setSelectedButton(fssaiDetails.isEnabled === "yes");
      } catch (error) {
        console.error("Failed to parse attributes", error);
      }
    }
  }, [data]);

  useEffect(() => {
    if (fssaiform.documents) {
      setImagePreview(`data:image/png;base64,${fssaiform.documents}`);
      setFile(true);
      setImageclose(false);
    } else {
      setImagePreview(addphoto);
      setFile(null);
      setImageclose(true);
    }
  }, [fssaiform.documents]);

  const [selectedButton, setSelectedButton] = useState(true);
  const [imagePreview, setImagePreview] = useState(addphoto);
  const [file, setFile] = useState(null);
  const [imageclose, setImageclose] = useState(false);

  const validate = () => {
    let isValid = true;
    const errors = {};
    if (!fssaiform.registerNumber && selectedButton) {
      errors.registerNumber = "Please Enter The Register Number";
      isValid = false;
    }
    if (!fssaiform.expirationDate &&  selectedButton) {
      errors.expirationDate = "Please Enter The Date";
      isValid = false;
    }
    if (!fssaiform.documents && selectedButton)  {
      errors.documents = "Please Enter The Image";
      isValid = false;
    }
    setFssaiErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setfssaiform({ ...fssaiform, isEnabled: selectedButton ? "yes" : "no" });
  };

  const handleButtonClickyes = (e) => {
    setSelectedButton(true);
    e.preventDefault();
    setfssaiform({ ...fssaiform, isEnabled: "yes" });
  };

  const handleButtonClickno = (e) => {
    setSelectedButton(false);
    e.preventDefault();
    setfssaiform({ ...fssaiform, isEnabled: "no" });
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
    validate,
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

  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem("Fssai"));
    if (savedData) {
      setfssaiform(savedData);
   
    }
    // Clear sessionStorage on page refresh
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("registrationform");
      sessionStorage.removeItem("Restaurantdata");
      sessionStorage.removeItem("Location");
      sessionStorage.removeItem("Fssai");
      sessionStorage.removeItem("Bankdetails");
      sessionStorage.removeItem("Basicdetail");
      sessionStorage.removeItem("Resimage");
      sessionStorage.removeItem("Dinein");
      sessionStorage.removeItem("Pickup");
      sessionStorage.removeItem("Delivery");
      sessionStorage.removeItem("Kitchen");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return() => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);



  const resetForm = () => {
    setfssaiform({
      isEnabled: "",
      registerNumber: "",
      expirationDate: "",
      documents: "",
    });
    setFile(null);
    setFssaiErrors({
      registerNumber: "",
      expirationDate: "",
      documents: "",
    });
  };


  return (
    <div className="main-divfss">
      <div className="submain-divfss">
        <div className="heading-divfss">
          <h5>Fssai</h5>
        </div>
        <div className="form-divfss"  style={{marginBottom:selectedButton?'':'400px'}}>
          <form onSubmit={handleSubmit}>
            <div className="labelinput-divfss">
              <label htmlFor="BusinessLegalName" className="labelfss">
                Do you Have a valid FSSAI Registration/License?
              </label>
              <div className="switchButtonStylesFSSAi">
                <button
                  type="button"
                  onClick={handleButtonClickyes}
                  className={`${selectedButton?"bluefssai":"hellofssai"}`}
                  style={{marginTop:""}}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={handleButtonClickno}
                 
                  className={`${!selectedButton?"bluefssai":"hellofssai"}`}
                >
                  No
                </button>
              </div>
            </div>
            {selectedButton && (
              <>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                  
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
                      style={{
                        borderColor: fssaierrors.expirationDate ? "red" : "#B3B3B3",
                      }}
                    />
                    {fssaierrors.expirationDate && (
                      <div className="error_FSSAI">{fssaierrors.expirationDate}</div>
                    )}
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
                      style={{
                        borderColor: fssaierrors.registerNumber ? "red" : "#B3B3B3",
                      }}
                    />
                    {fssaierrors.registerNumber && (
                      <div className="error_FSSAI">{fssaierrors.registerNumber}</div>
                    )}
                  </div>
                </div>
                <div className="labelinput-divfss">
                  <label className="labelfss">Upload FSSAI document</label>
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
                      {file ? (
                        !imageclose ? (
                          <>
                            <button onClick={closeModal} className="imcrosssty">
                              <ImCross style={{ fontSize: "7px", color: "white" }} />
                            </button>
                            <img src={imagePreview} alt="Preview" className="imgpreview" />
                            <p>Preview</p>
                          </>
                        ) : (
                          <p style={{ marginLeft: "-5%", color: "#67833E", fontSize: "12px" }}>
                            No image selected
                          </p>
                        )
                      ) : (
                        <img src={addphoto} className="fornoimg" alt="" />
                      )}
                    </div>
                    {fssaierrors.documents && (
                      <div className="error_FSSAI">{fssaierrors.documents}</div>
                    )}
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
});

export default Fssai;
