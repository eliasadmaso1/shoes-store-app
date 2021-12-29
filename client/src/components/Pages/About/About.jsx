import React from 'react';
import './About.css';

const About = ()=>{
    return(
    <div className="about-container">
        <div className="about-1">
        <img src="https://s3.amazonaws.com/nikeinc/assets/82841/About-Nike-Community-Made-to-Play_original.jpg?1540229055" width="500px" style={{marginLeft:"75px",boxShadow:"5px 10px black"}}/>
        <div className="sub-about">
        <h2 style={{fontFamily:"Gill Sans, sans-serif"}}>SOCIAL AND COMMUNITY IMPACT</h2>
            <h3>THE WORLD IS OUR COMMUNITY</h3>
            <h5>We believe in the power of sport to move the world</h5>
        </div>
        </div>

        <div className="about-2">
            <img src="https://s3.amazonaws.com/nikeinc/assets/82532/Nike-Eliud-About-Innovation_original.jpg?1538691590" width="500px" style={{marginLeft:"75px",boxShadow:"5px 10px black"}}/>
            <div className="sub-about">
            <h2 style={{fontFamily:"Gill Sans, sans-serif"}}>SOCIAL AND COMMUNITY IMPACT</h2>
            <h3>THE WORLD IS OUR COMMUNITY</h3>
            <h5>We believe in the power of sport to move the world</h5>
        </div>

        </div>

        <div className="about-3">
        <img src="https://s3.amazonaws.com/nikeinc/assets/82826/About-Nike-Team_original.jpg?1540227734" width="500px" style={{marginLeft:"75px",boxShadow:"5px 10px black"}}/>
        <div className="sub-about">
        <h2 style={{fontFamily:"Gill Sans, sans-serif"}}>SOCIAL AND COMMUNITY IMPACT</h2>
            <h3>THE WORLD IS OUR COMMUNITY</h3>
            <h5>We believe in the power of sport to move the world</h5>
        </div>
        </div>


    </div>)
}

export default About
