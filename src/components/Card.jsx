import React from 'react'

export const Card = ({ card }) => {
  const { title, description, image } = card
  return (
    <div className='col-12 col-sm-6 col-md-3' >
      <div className='card'>
        <img src={image} className='card-img-top' alt={title} />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
        </div>
      </div>
    </div>
  )
}
