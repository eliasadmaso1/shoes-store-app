import React from "react";
import "./men.css";
import { Link } from "react-router-dom";

export default function Men() {
  return (
    <div className="Men">
       <div className="Men-Screen-Navbar">
    <span className="title">Men</span>
    <div className="links">
    <Link to="/Sales" className="link">
      Sale
    </Link>
    <Link to="/MenShoes" className="link">
      Shoes
    </Link>
    <Link to="/MenShirts" className="link">
      Clothing
    </Link>
    <Link to="/Trainning" className="link">
      Trainning
    </Link>
    </div>
    
    </div>
      <div className="background">
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/5646a073-ab3d-4a91-aa13-be41ac334a22/men-s-shoes-clothing-accessories.jpg" />
        </div>
    </div>
  );
}
