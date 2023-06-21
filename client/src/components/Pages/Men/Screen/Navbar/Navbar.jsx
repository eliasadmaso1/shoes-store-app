import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
    return (
    <div className="Men-Screen-Navbar">
    <span className="title">Men</span>
    <div className="links">
    <Link to="/Sales" className="link">
      Sale
    </Link>
    <Link to="/Shoes" className="link">
      Shoes
    </Link>
    <Link to="/Clothing" className="link">
      Clothing
    </Link>
    <Link to="/Trainning" className="link">
      Trainning
    </Link>
    </div>
    
    </div>
    )
}

export default Navbar
