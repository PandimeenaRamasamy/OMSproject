import React, { useState } from "react";
import "./RestaurantImage.css";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { useDropzone } from "react-dropzone";
import AddPhoto from "./Addphotos.png";

const DropzoneContainer = styled.div`
  position: absolute;
  top: 150px;
  border: 1px dashed #979797;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
  width: 600px;
  height: 320px;
`;

const UploadButton = styled.button`
  border: none;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const ImageItem = styled.img`
  width: 150x;
  height: 70px;
  margin: 5px;
  display: flex;
  justify-content: start;
  gap:5px;
`;

const CrossIcon = styled(ImCross)`
  position: absolute;
  right:0px;
 
top:-15px;
  background: red;
  cursor: pointer;
  color: white;
  padding: 2px;
  border-radius: 50%;
`;

const RestaurantImage2 = ({imgArray}) => {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        
        setImages((prevImages) => {
          const updatedImages = [...prevImages, reader.result];
          imgArray(updatedImages);  // Call imgArray with the updated images
          return updatedImages;
        });
      };
      reader.readAsDataURL(file);
    });
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
    onDrop,
    multiple: true,
    noClick: true,

    noKeyboard: true,
  });

  const removeItem = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((image, index) => index !== indexToRemove)
    );
  };


  return (
    <div className="main-div2">
      <div className="imageheadingdiv2">
        <h1 className="imageheading">Restaurant Images</h1>
      </div>
      <div className="paraimageheading">
        <div>
          <h1 className="parafont">
            {" "}
            Please upload at least one facade shot (picture of the restaurant)
          </h1>
        </div>
        <div className="parafont2">
          <p>Please upload restaurant images</p>
        </div>
      </div>
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <p>
          Drag & Drop to upload or{" "}
          <span style={{ color: "black", textDecoration: "underline" }}>
            Browse
          </span>
        </p>

        <ImageGrid>
          {images && images.map((image, index) => (
            <div key={index} style={{ position: "relative" }}>
              <ImageItem src={image} alt={`Uploaded ${index + 1}`} />
              <CrossIcon onClick={()=>removeItem(index)} />
              
            </div>
          ))}
          {images.length>=1?<UploadButton onClick={open}>
          <img src={AddPhoto} alt="" />
        </UploadButton>:""}
          
        </ImageGrid>
        {images.length===0?<UploadButton onClick={open}>
          <img src={AddPhoto} alt="" />
        </UploadButton>:""
        }
        

       
      </DropzoneContainer>
    </div>
  );
};

export default RestaurantImage2;
