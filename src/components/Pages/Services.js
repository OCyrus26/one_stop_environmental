import React, { Fragment } from 'react';
import '../../App.css';
import './Services.css'

import '../Cards.css';
import CardItem from '../CardItem';

function Services() {

  return(
  <>
    <div class='lawn' id='lawn'
    smooth={true}
    >
      <h1>Lawn Care <br/><br/> </h1> 
      <h2>Description 
        <br/>
        <br/>
      </h2>

      <li>Service 1</li>
      <li>Service 2</li>
      <li>Service 3</li>




      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           <CardItem
              src='./assets/img1.jpeg'
              text='Caption⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'
              label='Lawn Care'
            />
            </ul>
        </div>
        </div>









    </div>

    <div class = 'washing' id='washing'>
      <h1>Heated Pressure Washing <br/><br/> </h1>
      <h2>Description 
        <br/>
        <br/>
      </h2>
    </div>

    <div class = 'mulch'>
      <h1>Mulch Needs <br/><br/> </h1>
      <h2>Description 
        <br/>
        <br/>
      </h2>
    </div>

    <div class = 'plant'>
      <h1>Plant Needs <br/><br/> </h1>
      <h2>Description 
        <br/>
        <br/>
      </h2>

      <li>Service 1</li>
      <li>Service 2</li>
      <li>Service 3</li>
    </div>

</>

  )
}


export default Services;