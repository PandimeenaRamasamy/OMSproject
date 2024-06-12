
  import React, { useState } from 'react';
  import '../Restaurant Image/RestaurantImage.scss'
  import addImg from '../Restaurant Image/AddImg.jpg'

  
  const UploadImg = ({ images, setImages, inputRefs }) => {

    
    const [dragIndex, setDragIndex] = useState(null)
    const [dragOverIndex, setDragOverIndex] = useState(null)
  
    const handleChange = (index, event) => {
      const newImages = [...images]
      const file = event.target.files[0]
      const availableIndex = newImages.findIndex(img => img === null)
      if (availableIndex !== -1) {
        newImages[availableIndex] = file
      } else if (index !== -1 && index < newImages.length) {
        newImages[index] = file
      }
      setImages(newImages)
    }
  
    const isImageFile = (file) => {
      return file.type.startsWith('image/')
    }
  
    const isBase64 = (str) => {
      try {
        return btoa(atob(str)) == str
      } catch (err) {
        return false
      }
    }
  
    const handleClick = (index) => {
      const nullIndex = images.findIndex(img => img === null)
      if (nullIndex !== -1 && index === nullIndex) {
        inputRefs[0].current.click()
      }
    }
  
    const removeImage = (index) => {
      const newImages = [...images]
      newImages[index] = null
      setImages([...newImages])
    }
  
    const handleDragStart = (index) => {
      setDragIndex(index)
    }
  
    const handleDragOver = (index) => {
      setDragOverIndex(index)
    }
  
    const handleDrop = (event) => {
      event.preventDefault()
      const files = event.dataTransfer.files
      const droppedFile = files[0]
      if (droppedFile && isImageFile(droppedFile)) {
        const newImages = [...images]
        if (dragIndex !== null && dragOverIndex !== null) {
          const draggedImage = newImages[dragIndex]
          newImages.splice(dragIndex, 1)
          newImages.splice(dragOverIndex, 0, draggedImage)
        } else {
          const availableIndex = newImages.findIndex(img => img === null)
          if (availableIndex !== -1) {
            newImages[availableIndex] = droppedFile
          }
        }
        setImages(newImages)
      }
      setDragIndex(null)
      setDragOverIndex(null)
    }
  
    const base64ToBlob = (base64) => {
      const byteCharacters = atob(base64)
      const byteNumbers = new Array(byteCharacters.length)
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], {type: 'image/jpeg'})
    }

    return (
  <div className='uploadImg'>
    <h1 className='headingrestrauntimage2'>Restaurant images</h1>
   
  <div className='uploadImg uploadImgContainer'>
   
   
  
   
  <div className='uploadImg uploadheadings'>
  <p>Drag & Drop to upload or <div className='uploadImg uploadLink' onClick={() => handleClick(images.findIndex(img => img === null))}>Browse</div></p>
  </div>
  <div className='uploadImg imageBox' onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
  <div className="uploadImg uploadedImages">
              {images && images.map((image, index) => (
  <div key={index} className="uploadImg uploadedImage" draggable onDragStart={() => handleDragStart(index)} onDragOver={() => handleDragOver(index)}>
                  {image && (
  <>
                      {isBase64(image) ? (
  <img  src={URL.createObjectURL(base64ToBlob(image))} alt='image' className='imgOrg' />
                      ) : image instanceof File ? (
  <img src={URL.createObjectURL(image)} alt='image' className='imgOrg' />
                      ) : (
  <img src={image} alt='image' className='imgOrg' />
                      )}
  <p className="uploadImg removeImgBtn" onClick={() => removeImage(index)} style={{color:"white"}}>x</p>
  </>
                  )}
  </div>
              ))}
  </div>
  <div className='uploadImg addImageBtn' style={{ display: images.some(img => img === null) ? 'block' : 'none' }} onClick={() => handleClick(images.findIndex(img => img === null))}>
  <img src={addImg} alt=''  className='imgOrg'/>
              {inputRefs.map((ref, index) => (
  <input
                  key={index}
                  type='file'
                  ref={ref}
                  onChange={(event) => handleChange(index, event)}
                  style={{ display: 'none' }}
                  accept=".png, .jpeg, .jpg"
                />
              ))}
  </div>
  </div>
  </div>
  </div>
    )
  }
  
  export default UploadImg
  