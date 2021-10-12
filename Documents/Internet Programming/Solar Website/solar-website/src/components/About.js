import React from 'react';
import './Navbar.css';
import aboutpic from './about.PNG'

export default function About() {
    return (
        <>
            <div id='about'>
                <h1 id="about-head">About MySolar</h1>
                <div className='firstContent'>
                    <h2>OVERVIEW</h2>
                    <p>Brightening lives across the world, Tata Power Solar is India’s largest integrated solar company.
                        <br />
                        We are in the business of providing smiles to millions through our innovative range of solar products that makes life better.</p>
                    <img src={aboutpic} />

                </div>
                <div className='secondContent'>
                    <h2>What we do</h2>
                    <p>Luminous Power Technologies is a powerful and trustworthy brand with a wide range of innovative products in the power backup, home electrical and residential solar space that covers, inverters Batteries, Solar solutions to home electricals offerings such as Fans, Modular Switches and LED lighting.
                    <br/>
                        With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At Luminous, we passionately innovate to make life comfortable and efficient.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xKxrkht7CpY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>

        </>
    )
}
