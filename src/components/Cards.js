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
              src='./assets/heated.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Heated Pressure Washing'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./assets/mulching.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mulching'
              path='/services'
            />
            <CardItem
              src='./assets/welcomeplantneeds.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Plant Needs'
              path='/products'
            />
            <CardItem
              src='./assets/download.jpg'
              text='Coming Soon...'
              label='Snow Removal'
              path='/sign-up'
            />
          </ul>
        </div>
        <h1> Contact Us </h1>
        <div> hi my name is </div>
      </div>
    </div>
  );
}

export default Cards;