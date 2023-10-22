import "./women.css";
import React from "react";
import {Link} from 'react-router-dom';

export default function Women() {
  return (
    <>
        <div className="Women">
        <div className="Men-Screen-Navbar">
    <span className="title">Women</span>
    <div className="links">
    <Link to="/Sales" className="link">
      Sale
    </Link>
    <Link to="/WomensShoes" className="link">
      Shoes
    </Link>
    <Link to="/WomenShirts" className="link">
      Clothing
    </Link>
    <Link to="/Trainning" className="link">
      Trainning
    </Link>
    </div>
    
    </div>
      <div className="background">
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/65d2a8db-e804-4c23-82af-4271a43cba11/women-s-shoes-clothing-accessories.jpg" />
        </div>
      </div>
    </>
  );
}
