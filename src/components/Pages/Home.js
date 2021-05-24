import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { Modal } from '../Modal';

function Home() {
  return (
    <>
      <HeroSection />
      <Modal />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;