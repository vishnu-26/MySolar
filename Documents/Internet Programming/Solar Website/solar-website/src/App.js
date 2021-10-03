import React from 'react'
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





function App() {

  // const [showCalc, setShowCalc] = useState(false);



  return (

    <div className="App">
      

      <Router>
      <Navbar />
        <Switch>
          <Route path="/calculator">
            <SolarCalc />
          </Route>
          <Route path="/">
            <HomeMain/>
          </Route>
          
        </Switch>
        <Footer />

        



      </Router>
      
    </div>
  );
}

export default App;
