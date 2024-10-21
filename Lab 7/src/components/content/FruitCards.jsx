import React from 'react'
import Fruits from '../../MOCK_DB.json'

const FruitCards = () => {
  const fruitsList = Fruits.map((fruit) => (
    <div className='col-md-3 mb-4'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={fruit.image} class='card-img-top image' alt='...' />
        <div className='card-body'>
          <h6>{fruit.name}</h6>
          <p className='card-text'>{fruit.price}</p>
        </div>
      </div>
    </div>
  ))
  return fruitsList
}

export default FruitCards
