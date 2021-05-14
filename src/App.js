import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';
import LawnCare from './components/Pages/LawnCare';
import PressureWashing from './components/Pages/PressureWashing';
import MulchNeeds from './components/Pages/MulchNeeds';
import PlantNeeds from './components/Pages/PlantNeeds';

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
          <Route path='/lawn-care' component={LawnCare} />
          <Route path='/heated-pressure-washing' component={PressureWashing} />
          <Route path='/mulch-needs' component={MulchNeeds} />
          <Route path='/plant-needs' component={PlantNeeds} />
        </Switch>
      </Router>
    </>
  );
}

export default App;