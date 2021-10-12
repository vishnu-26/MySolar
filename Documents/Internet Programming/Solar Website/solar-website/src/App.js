import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import HomeMain from './components/HomeMain';
import Footer from './components/Footer';
import SolarCalc from './components/SolarCalc';
import Shop from './components/Shop';
import About from './components/About';
import AllState from './Context/MyContextFile'


function App() {

 

  return (

    <div className="App">

      <AllState>
      <Router>
        <Navbar/>
        <Switch>
        <Route path="/about">
           <About/>
         </Route>
        <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/calculator">
            <SolarCalc />
          </Route>
          <Route path="/">
            <HomeMain />
          </Route>
         
        </Switch>
        <Footer />





      </Router>
      </AllState>

    </div>
  );
}

export default App;
