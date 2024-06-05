import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import AddPhoto from './Addphotos.png'
import { ImCross } from "react-icons/im";
import './RestaurantImage.css'
import RestaurantImage2 from './RestaurantImage2';


const DropzoneContainer = styled.div`
  position: absolute;
 
  border: 1px dashed #979797;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
  width: 600px;
  height: 209px;

`;

const UploadButton = styled.button`
margin-top: 20px;
border:none;


`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
 
`;

const ImageItem = styled.img`
  width: 160px;
  height: 100px;
  margin: 5px;
  display: flex;
  justify-content: center;
  position:absolute;
  margin-top:40px;
  left:200px;
`;

const CrossIcon = styled(ImCross)`
  position: absolute;
  top: 60px;
  right: 225px;
  background: red;
  
  cursor: pointer;
  color:white;
  padding:2px;
  border-radius:50%;

`;

const RestaurantImage = () => {
  
  
  const [image, setImage] = useState(null);
  const[form,setForm]=useState({
    profileImage:"",
    RestaurantImage:['']

  })


  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      const profileImage=reader.result.split(',')[1];
      setForm({...form,"profileImage":profileImage})
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*',
    onDrop,
    multiple: false,
    noClick: true,
   
    noKeyboard: true 
  });

  const removeImage=()=>{
   setImage(null)

  }
  const imgArray=(formData)=>{
    
      setForm(prevForm => ({ ...prevForm, "RestaurantImage": formData }));
    

  }
  console.log(form)

  return (
    <div className='main-image-div'>
      <div className='imageheadingdiv' >
        <h1 className='imageheading'>Restaurant Image</h1>
      </div>


      <div className='paraimageheading'>
        <div>
          <h1 className='parafont'>Profile Image</h1></div>

          <div className='parafont2'>
          <p   className='parafont2'>Please upload profile image</p>
          </div>
       
    
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag & Drop to upload or <span style={{ color: 'black', textDecoration: 'underline' }}>Browse</span></p>
        {image?
          <ImageGrid>
            <ImageItem src={image} alt="Uploaded"   />
            <CrossIcon onClick={removeImage} />
          </ImageGrid >
          
      :  <UploadButton onClick={open}><img src={AddPhoto} alt="" /></UploadButton>}
     
        
      </DropzoneContainer>
      </div>
      <RestaurantImage2 imgArray={imgArray}/>
    </div>
    
  );
};

export default RestaurantImage;
