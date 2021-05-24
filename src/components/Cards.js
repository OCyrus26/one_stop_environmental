import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./assets/img1.jpeg'
              text='For warm-season grasses, only fertilize once.'
              label='Lawn Care'
              path='/services'
            />
            <CardItem
              src='./assets/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Heated Pressure Washing'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./assets/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mulching'
              path='/services'
            />
            <CardItem
              src='./assets/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Plant Needs'
              path='/products'
            />
            <CardItem
              src='./assets/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
        <div> Contact Us </div>
      </div>
    </div>
  );
}

export default Cards;