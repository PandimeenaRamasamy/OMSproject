import React, { useState } from 'react'
import './style.scss'
import arrow from '../../Assests/Image/Vector.svg'
import remove from '../../Assests/Image/remove.svg'
 
const Pills = ({pillsText, setPillsText, modalText, setModalText}) => {
  const [showModal, setShowModal] = useState(false)

  const addPillsText = (item) => {
    setPillsText([...pillsText, item])
    const updatedPillsText = modalText.filter(pill => pill !== item)
    setModalText(updatedPillsText)
  }

  const removeItem = (item) => {
    setModalText([...modalText,item])    
    const updatedPillsText = pillsText.filter(pill => pill !== item)
    setPillsText(updatedPillsText)
  }

  return (
    <div className='pills'>
      <div className='pillsContainer'>
          <div className='pillsContent'>
            {pillsText.map((item, index) => 
              <div className='iPills'>
                {item} 
                <img className='removeImg' src={remove} onClick={() => removeItem(item)} />
              </div>
            )}
            {showModal && <div className='pillsModal'>
              {modalText.map((item, index) => 
                <div className='iPills' onClick={()=>{addPillsText(item)}}>
                  {item} 
                </div>
              )}
            </div>}
          </div>
          <div className='pillsArrow'>
            <img className={showModal ? 'arrowUp' : 'arrowDown'} src={arrow} onClick={() => setShowModal(!showModal)}/>
          </div>
      </div>
    </div>
  )
}

export default Pills
