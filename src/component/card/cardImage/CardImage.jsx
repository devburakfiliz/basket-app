import React from 'react'
import "./cardImage.css"
function CardImage({image}) {
  return (
    <div className='card-image'>
      <img src={image} alt="" />
    </div>
  )
}

export default CardImage