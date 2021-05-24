import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';
import Footer from './components/Footer';

/* import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"; */
/*
function Map(){
  return <GoogleMap defaultZoom={10} defaultCenter={{lat: 40.8859, lng: 74.0435}}
  /> 
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
*/


import styled from 'styled-components';
import { Modal } from './components/Modal';
import { GlobalStyle } from './globalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;


function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <>
     <Container>
        <Button onClick={openModal}>REQUEST A FREE QUOTE </Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer/>
      </Router>
      
      
    </>
  );
}


export default App;