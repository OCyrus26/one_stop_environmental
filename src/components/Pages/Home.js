import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import './Home.css'

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <div className = 'contact__container'>
        

         <a href = '/sign-up'>    
          <div className = 'contact__link'> 
            <h1>Contact Us Now </h1>
          </div>
          </a> 
       

      </div>

    </>
  );
}

export default Home;  