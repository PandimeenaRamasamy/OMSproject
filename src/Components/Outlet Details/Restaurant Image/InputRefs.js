import React, { useEffect, useRef, useState } from 'react';
import RestrauntImage from './RestrauntImage';
import RestrauntImage2 from './RestrauntImage2';

const ParentComponent = () => {
  const [form, setForm] = useState({
    images: [],
    image: ""
  });

  const [images, setImages] = useState(Array(4).fill(null));
  const [images2, setImages2] = useState(Array(1).fill(null)); 

  useEffect(() => {
    if (images2.every(image => image !== null)) {
      assignImage(images2);
    }
    if (images.every(image => image !== null)) {
      assignMultipleImage(images);
    }
  }, [images, images2]); 

  const assignImage = (images) => {
    if (images.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prevForm => ({
          ...prevForm,
          image: reader.result
        }));
      };
      reader.readAsDataURL(images[0]);
    }
  };

  const assignMultipleImage = (images) => {
    const base64Images = [];
    images.forEach(image => { 
      if (image) { 
        const reader = new FileReader();
        reader.onloadend = () => {
          base64Images.push(reader.result);
          
          setForm(prevForm => ({
            ...prevForm,
            images: base64Images
          }));
        };
        reader.readAsDataURL(image); 
      }
    });
  };

  console.log(form);
  

  return (
    <>
    <div className='RestaurantImagemain'>
    <h1 className='RestaurantImageHeading'>Restaurant Image</h1>
    <h1 className='RestaurantImageHeading'>Profile Image</h1>
    <p  className='RestaurantImagePara'>Please upload profile image</p>
 
     
     <RestrauntImage inputRefs={[useRef(null)]} images={images} setImages={setImages} />
  
   
     <RestrauntImage2 inputRefs={[useRef(null)]} images={images2} setImages={setImages2} />
     </div>
   </>

   
    
  );
};

export default ParentComponent;