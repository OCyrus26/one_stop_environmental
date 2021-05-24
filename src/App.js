import React from 'react';
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

function App() {
  return (
    <>
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
/* <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}

        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div> */

export default App;