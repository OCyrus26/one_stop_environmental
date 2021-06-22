import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      
      <h1>What We Offer</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           <CardItem
              src='./assets/homepage3.jpg'
              text='For warm-season grasses, only fertilize once.'
              label='Lawn Care'
              path='/services'
            />
            <CardItem
              src='./assets/homepage2.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Heated Pressure Washing'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./assets/homepage5.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mulching'
              path='/services'
            />
            <CardItem
              src='./assets/homepage6.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Plant Needs'
              path='/services'
            />
            <CardItem
              src='./assets/homepage7.jpg'
              text='Coming Soon...'
              label='Snow Removal'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;