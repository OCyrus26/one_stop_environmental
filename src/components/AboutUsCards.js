import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import './SidePanel.css'
import SidePanel from './SidePanel';

function AboutUsCards() {
  return (
    <div className='cards'>
      <h1>About Us </h1> 
      <br/>
      <h3>
        Golden Wolf Landscape and Design specializes in the wide-ranging landscape design and installation of all your outdoor projects all over Hunterdon, Somerset, Warren, and Morris Counties. We have been servicing these areas for two years now, and we take pride in providing high-quality services to our clients. Our team has extensive experience in lawn maintenance and landscape designing, and we are equipped with the latest technology to provide you with exquisite landscape design.
We understand the significance of delivering a design plan that is both geared to what customer wants and fit their budget as well. Our crew is trained to focus on the customers’ needs and wants first and then design their landscape accordingly. Your preferences are our utmost priority.
Founder and owner Marcus Celiano takes his job with immense pride. Developing relationships with clients, training staff members, and building a company to serve the local community is what Marcus focuses on day in and day out. 
       </h3>

      <br/>
      <br/>
      <h1>OUR MISSION</h1>
      <h3>Our team of knowledge, experiences, and entrusted professionals is prepared to tackle any job that comes our way. Ranging from design to maintence, Golden Wolf Landscape & Design is the right choice for all of your landscaping needs. We do each job right the first time with high quality materials, exceeding industry standards practices, and making you, our client, our upmost priority. Our portfolio of completed projects is pictorial proof of our excellence and high-quality work. See what a difference the Golden Wolf way will make on your property!
      </h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./assets/mt1.png'
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

      <h1>Meet the  Team</h1>
      <p>Obulus Designs</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./assets/mt1.png'
              text='Jerm on the right Jeff of the right'
              label='Jeff and Jerm'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCards;