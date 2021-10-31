import React from 'react'
import mainlogo from './logo3.PNG';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {myContext} from '../Context/MyContextFile.js';


export default function Navbar() {

    const tp = useContext(myContext);
    
   


    return (

        
        <div>
            <ul id="up">
                <Link className="navbar-brand text-warning" to="/"><img src={mainlogo} alt="MySolar" /><br /></Link>
                <li className="fb">
                    <i className="fa fa-2x fa-facebook-f"></i>
                </li>
                <li className="insta">
                    <i className="fa fa-2x fa-instagram"></i>
                </li>
                <li className="twitter">
                    <i className="fa fa-2x fa-twitter"></i>
                </li>
                <li className="linkedIn">
                    <i className="fa fa-2x fa-linkedin"></i>
                </li>
            </ul>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <Link className="nav-link dropdown" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link dropdown" to='/shop'>Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link dropdown" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link dropdown" to="#">User Stories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link dropdown" to="#">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link dropdown" to="#">Training</Link>
                            </li>


                        </ul>
                       <Link id='cartSymbol' to='/Cart'><i className="fa fa-2x fa-shopping-cart"  aria-hidden="true"> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"/>
                       
                           {tp.cartNum}
                            
                            
                            </i></Link>
                    </div>
                </div>
            </nav>

        </div>




    )
}
