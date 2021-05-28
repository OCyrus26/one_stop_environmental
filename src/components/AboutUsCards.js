import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function AboutUsCards() {
  return (
    <div className='cards'>
      
      <h1>About Us</h1>
      <br/>
      <p>Put a few sentences here</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./assets/img-3.jpg'
              text='Name⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              label='Title'
            />
            <CardItem
              src='./assets/img-4.jpg'
              text='Name⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              label='Title'
            />
            <CardItem
              src='./assets/img-8.jpg'
              text='Name⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              label='Title'
            />
          </ul>
        </div>
      </div>
    
      <h1>Certifications</h1>
      <p>Insert external links to organizations</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./assets/img-3.jpg'
              text='⠀⠀⠀⠀⠀⠀⠀Name⠀⠀⠀⠀⠀⠀⠀'
              label='We have to put something in this blue box too'
            />
            <CardItem
              src='./assets/img-4.jpg'
              text='⠀⠀⠀⠀⠀⠀⠀Name⠀⠀⠀⠀⠀⠀⠀'
              label='We have to put something in this blue box too'
            />
            <CardItem
              src='./assets/img-8.jpg'
              text='⠀⠀⠀⠀⠀⠀⠀Name⠀⠀⠀⠀⠀⠀⠀'
              label='We have to put something in this blue box too'
            />
          </ul>
        </div>
      </div>

      <h1>Trade Memberships</h1>
      <p>Insert external links to organizations</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./assets/img-3.jpg'
              text='⠀⠀⠀⠀⠀⠀⠀Name⠀⠀⠀⠀⠀⠀⠀'
              label='We have to put something in this blue box too'
            />
            <CardItem
              src='./assets/img-4.jpg'
              text='⠀⠀⠀⠀⠀⠀⠀Name⠀⠀⠀⠀⠀⠀⠀'
              label='We have to put something in this blue box too'
            />
            <CardItem
              src='./assets/img-8.jpg'
              text='⠀⠀⠀⠀⠀⠀⠀Name⠀⠀⠀⠀⠀⠀⠀'
              label='We have to put something in this blue box too'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='./assets/img-1.jpg'
              text='⠀⠀⠀⠀⠀⠀⠀Name⠀⠀⠀⠀⠀⠀⠀'
              label='We have to put something in this blue box too'
            />
            <CardItem
              src='./assets/img-7.jpg'
              text='⠀⠀⠀⠀⠀⠀⠀Name⠀⠀⠀⠀⠀⠀⠀'
              label='We have to put something in this blue box too'
            />
            <CardItem
              src='./assets/img-2.jpg'
              text='⠀⠀⠀⠀⠀⠀⠀Name⠀⠀⠀⠀⠀⠀⠀'
              label='We have to put something in this blue box too'
            />
          </ul>
        </div>
      </div>


    </div>
  );
}

export default AboutUsCards;