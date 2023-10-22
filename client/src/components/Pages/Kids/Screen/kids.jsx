import React from "react";
import "./kids.css";
import { Link } from "react-router-dom";

export default function Kids() {
  return (
    <div className="Kids">
       <div className="Men-Screen-Navbar">
    <span className="title">Kids</span>
    <div className="links">
    <Link to="/Sales" className="link">
      Sale
    </Link>
    <Link to="/KidsShoes" className="link">
      Shoes
    </Link>
    <Link to="/KidsShirts" className="link">
      Clothing
    </Link>
    <Link to="/Trainning" className="link">
      Trainning
    </Link>
    </div>
    
    </div>
   <div className="background">
     <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/2cf49941-5051-4bfb-8907-435146cdb265/nike-kids.png" />
     </div>
  </div>
  );
}
