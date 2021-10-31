import React,{useState,useContext} from 'react'
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
import LoadingBar from 'react-top-loading-bar'
import Cart from './components/Cart';
import { myContext } from './Context/MyContextFile';
import CheckoutPage from './components/CheckoutPage';


function App() {

  
  const [progress, setProgress] = useState(0);
 


  return (

    <div className="App">

      <AllState>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Switch>
        <Route path="/checkout">
           <CheckoutPage progress={progress} setProgress={setProgress} />
         </Route>
        <Route path="/Cart">
           <Cart progress={progress} setProgress={setProgress} />
         </Route>
        <Route path="/about">
           <About progress={progress} setProgress={setProgress}/>
         </Route>
        <Route path="/shop">
            <Shop progress={progress} setProgress={setProgress}/>
          </Route>
          <Route path="/calculator">
            <SolarCalc  progress={progress} setProgress={setProgress}/>
          </Route>
          <Route path="/">
            <HomeMain  progress={progress} setProgress={setProgress}/>
          </Route>
         
        </Switch>
        <Footer />

      </Router>
      </AllState>

    </div>
  );
}

export default App;
