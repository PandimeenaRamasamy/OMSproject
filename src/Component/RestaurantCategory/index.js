import React, { useState } from 'react'
import './style.scss'
import Pills from '../pills'

const RestaurantCategory = () => {
  const [cPillsText, setCPillsText] = useState([])
  const [aPillsText, setAPillsText] = useState([])
  const [pPillsText, setPPillsText] = useState([])

  const [cModalText, setCModalText] = useState(["Biriyani", "Dosa", "Vada", "Soup", "Paniyaram", "Naan", "Chappathi"])
  const [aModalText, setAModalText] = useState(["Free Wifi", "Suite Room", "Park", "GameRoom", "AC", "Butler", "Hall"])
  const [pModalText, setPModalText] = useState(["Two Wheeler", "Four Wheeler", "Heavy Vechicle"])
  return (
    <div className='restaurantCategory'>
      <div className='header'>
        <h4>Establishment Type</h4>
        <p>Select most relevant category of your restaurant type</p>
      </div>
      <div className='pillBox'>
        <p>Cuisines</p>
        <Pills pillsText={cPillsText} setPillsText={setCPillsText} modalText={cModalText} setModalText={setCModalText} />
      </div>
      <div className='pillBox'>
        <p>Amenities</p>
        <Pills pillsText={aPillsText} setPillsText={setAPillsText} modalText={aModalText} setModalText={setAModalText}/>
      </div>
      <div className='pillBox'>
        <p>Parking</p>
        <Pills pillsText={pPillsText} setPillsText={setPPillsText} modalText={pModalText} setModalText={setPModalText}/>
      </div>
      <div className='description'>
        <p>Safety Measures</p>
        <textarea placeholder='Description' />
      </div>
    </div>
  )
}

export default RestaurantCategory
