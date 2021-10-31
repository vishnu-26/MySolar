import React,{useEffect,useContext} from 'react'
import {Link } from 'react-router-dom';
import '../App.js'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import './homeMain.css';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './bgsolar.jpg';
import cardpic1 from './cardpic1.PNG';
import cardpic2 from './cardpic2.PNG';
import cardpic3 from './cardpic3.PNG';
import cardpic4 from './cardpic4.PNG';
import topinfo from './top-info.png';
import solarwork from './solarworking.jpeg';
import solarmoney from './solarmoney.PNG';
// import inverter from './inverter_setup.jpeg';
import sp1 from './sp1.jpeg';
import sp2 from './sp2.jpeg';
import sp3 from './sp3.jpeg';
import sp4 from './sp4.jpeg';
import sp5 from './sp5.jpeg';
import sp6 from './sp6.jpg';
import sp7 from './sp7.jpg';
import sp8 from './sp8.jpg';
import sp9 from './sp9.jpg';
import sun from './sun.PNG';


const options = {
    items: 5,
    autoplay: true,
    autoplayTimeout: 2000,
    slideTransition: 'linear',
    loop: true
};

const events = {
    onDragged: function (event) {
        // console.log("hello 1");
    },
    onChanged: function (event) {
        // console.log("hello 1");
    }
};



export default function HomeMain(props) {


    const HandleClick = () =>{
        console.log("i am clicked");
        
    
    }
    useEffect(() => {
        props.setProgress(30);
        props.setProgress(100);
        props.setProgress(0);
        
    }, [])
  
    
    




    return (
        <>
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
                        Turn up the brightness,turn up the Solar Power.
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic5} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        Use the Sun, because it is FREE!
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic6} className="d-flex w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        Solar Energy: A Bright Alternative.
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
        
        <Link to="/calculator"><button id="calc" onClick = {HandleClick} > Solar Calculator</button></Link>
            <div className="info">
                <div className="first-info">
                    <p id="top-info">India is on the cusp of a solar revolution and we at MySolar have been right at the forefront, leading the move towards sustainable energy solutions. Investing in rooftop solutions leads to great savings, while protecting the environment. MySolar offers solar rooftop for home. Save and Earn from your idle rooftop space.</p>
                    <img src={topinfo} />
                </div>
                <div className="second-info">
                    <h4>HOW DOES <b>ROOFTOP SOLAR WORK?</b></h4>
                    <p id="ques1">Rooftop solar panels rely on the ability of the solar cells to harness the energy of the sun and convert it to electricity. It is a small, square-shaped semiconductor that is made from conductive materials such as silicon. When sunlight strikes the solar cells, it induces chemical reactions that release the electrons, thus generating electric current.</p>
                    <img src={solarwork} />
                    <div className="inner-info">

                        <span id="ques2"><h4>HOW ROOFTOP SOLAR <b>CAN MAKE YOU MONEY?</b></h4>
                            With solar on your roof, your power bills will be massively reduced because you will need less electricity from the grid. The cost of electricity from the grid is expected to rise in the coming years, so your cost savings should also rise! And with a linear power warranty of 27 years, you can expect long-term cost savings from avoiding the cost of expensive electricity from the grid.
                        </span>

                        <img src={solarmoney} />
                    </div>
                </div>
            </div>
            <h2 className='h2-homeMain'>Why MySolar?</h2>
            <h3 className='h3-homeMain'>Going solar with MySolar has some great perks</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4 m-auto">
                <div className="col" >
                    <div className="card shadow" id="card1">
                        <img src={cardpic1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Premium Hardware</h5>
                            <p className="card-text">MySolar provides multiple system options. Choose your final design and price.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow" id="card2">
                        <img src={cardpic2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Easy Finance</h5>
                            <p className="card-text">Avail low-cost EMI loans in three simple <br /> steps</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow" id="card3">
                        <img src={cardpic3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Hassle Free Installation</h5>
                            <p className="card-text">Single point of contact during design, on-site work, and net-metering.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow" id="card4">
                        <img src={cardpic4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Monitoring</h5>
                            <p className="card-text">Track your savings and impact in real-time from our monitoring app.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='h2-homeMain'>Live Systems</h2>
                <h3 className='h3-homeMain'>MySolar Live Systems all over India.</h3>
                <OwlCarousel options={options} events={events} >
                    <div className="stories shadow" id="story1">
                        <h4>Bank Manager</h4>
                        <img className="sun" src={sun} />
                        <p>Mumbai,Maharashtra</p>
                        <img className="storypics" src={sp1} />
                        <span>Bank enjoying  under Green Energy.</span>
                        <button>Read Story</button>
                    </div>
                    <div className="stories shadow" id="story2">
                        <h4> Organic Farmer</h4>
                        <img className="sun" className="sun" src={sun} />
                        <p>Nashik,Maharashtra</p>
                        <span>Bank enjoying  under Green Energy.</span>
                        <img className="storypics" src={sp2} />
                        <button>Read Story</button> 
                    </div>
                    <div className="stories shadow" id="story3">
                        <h4>Engineer</h4>
                        <img className="sun" src={sun} />
                        <p>Banglore,Karnataka</p>
                        <span>Bank enjoying  under Green Energy.</span>                       
                        <img className="storypics" src={sp3} />
                        <button>Read Story</button>
                    </div>
                    <div className="stories shadow" id="story4">
                        <h4>Telecom</h4>
                        <img className="sun" src={sun} />
                        <p>Pune,Maharashtra</p>
                        <span>Bank enjoying  under Green Energy.</span>
                        <img className="storypics" src={sp4} />
                        <button>Read Story</button>
                    </div>
                    <div className="stories shadow" id="story5">
                        <h4>Insurance Executive</h4>
                        <img className="sun" src={sun} />
                        <p>Nagpur,Maharashtra</p>
                        <img className="storypics" src={sp5} />
                        <span>Bank enjoying  under Green Energy.</span>
                        <button>Read Story</button>
                    </div>
                    <div className="stories shadow" id="story6">
                        <h4>IT Enterpreneur</h4>
                        <img className="sun" src={sun} />
                        <p>Patna,Bihar</p>
                        <img className="storypics" src={sp6} />
                        <span>Bank enjoying  under Green Energy.</span>
                        <button>Read Story</button>
                    </div>
                    <div className="stories shadow" id="story7">
                        <h4>Shopping Mall</h4>
                        <img className="sun" src={sun} />
                        <p>Mumbai,Maharashtra</p>
                        <img className="storypics" src={sp7} />
                        <span>Bank enjoying  under Green Energy.</span>
                        <button>Read Story</button>
                    </div>
                    <div className="stories shadow" id="story8">
                        <h4>Stock Broker </h4>
                        <img className="sun" src={sun} />
                        <p>Mumbai,Maharashtra</p>
                        <img className="storypics" src={sp8} />
                        <span>Bank enjoying  under Green Energy.</span>
                        <button>Read Story</button>
                    </div>
                    <div className="stories shadow" id="story9">
                        <h4>Real Estate</h4>
                        <img className="sun" src={sun} />
                        <p>Kolhapur,Maharashtra</p>
                        <img className="storypics" src={sp9} />
                        <span>Bank enjoying  under Green Energy.</span>
                        <button>Read Story</button>
                    </div>
                </OwlCarousel>
            </div>

           
        </>
    )
}
