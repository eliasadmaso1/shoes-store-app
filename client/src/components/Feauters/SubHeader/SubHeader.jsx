import React from 'react';
import './SubHeader.css';
import jordan from '../../../images/logos/jordan.png';
import { Link } from "react-router-dom";


function SubHeader() {
    return (
        <div className="header-div">
            <div className="image-div"> 
            <img src={jordan}/>
            </div>
            <div className="menu1">
        <Link to="/" className="link">
          Home
        </Link>

        <Link to="/Mens" className="link1">
          Men
        </Link>
        <Link to="/Womens" className="link1">
          Women
        </Link>
        <Link to="/Kids" className="link1">
          Kids
        </Link>
        <Link to="/Accessories" className="link1">
          Accessories
        </Link>
        <Link to="/Jerseys" className="link1">
          Jerseys
        </Link>
        <Link to="/Contact" className="link">
          Contact
        </Link>

        <Link to="/About" className="link">
          About
        </Link>
      </div>

        </div>
    )
}

export default SubHeader
