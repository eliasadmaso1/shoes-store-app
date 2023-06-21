import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
    return (
    <div className="Men-Screen-Navbar">
    <span className="title">Accessories</span>
    <div className="links">
    <Link to="/Sales" className="link">
      Bags
    </Link>
    <Link to="/Shoes" className="link">
      Balls
    </Link>
    <Link to="/Clothing" className="link">
      Hats
    </Link>
    <Link to="/Trainning" className="link">
      Socks
    </Link>
    </div>
    
    </div>
    )
}

export default Navbar
