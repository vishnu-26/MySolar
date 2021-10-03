import React from 'react'
import mainlogo from './logo3.PNG';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './bgsolar.jpg';
import './Navbar.css'
import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
       

        <div>
            <ul id="up">
                <Link className="navbar-brand text-warning" to="/"><img src={mainlogo} alt="MySolar"/><br /></Link>
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                                <Link className="nav-link dropdown" to='#'>Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link dropdown" to="#">About Us</Link>
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
                        <i className="fa fa-2x fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                </div>
            </nav>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic4} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* Write here */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic5} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* write here */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic6} className="d-flex w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                          {/* write here */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        


    )
}
