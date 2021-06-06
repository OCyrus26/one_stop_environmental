import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import { Modal } from '../Modal';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Modal/>
    </>
  );
}

export default Home;