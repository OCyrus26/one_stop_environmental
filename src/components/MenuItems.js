import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


export const MenuItems = [
    {
        title: 'Lawn Care',
        path: '#lawn',
        cName: 'dropdown-link'
        
    },
    {
        title: 'Heated Pressure Washing',
        path: '#washing',
        cName: 'dropdown-link'
    },
    {
        title: 'Mulch Needs',
        path: '/services',
        cName: 'dropdown-link'
    },
    {
        title: 'Plant Needs',
        path: '/services',
        cName: 'dropdown-link'
    }
   
]
function MenuItem(){
return(

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./assets/meetTheteam.jpeg'
              text='Name⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              label='Title'
            />
          
          </ul>
        </div>
      </div>
)}