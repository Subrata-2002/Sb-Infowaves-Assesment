import React from 'react'
import "./MrktCard.css"

const MrktCard = ({ item }) => {
  console.log("Marketing items are" + item.price);

  return (
    <div>

    <div className='mrktCard'>

      <img src={item.imgUrl} alt="" className='mrktImg' />

      <div className='dtls'>

        <span className='mrktdesc'>{item.title}</span>
        <span className='mrkttitle'>Starting at ${item.price}</span>
      </div>

    </div>
    </div>
  )
}

export default MrktCard
