import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Feauters/NavBar/Navbar";
import "./kidsCss.css";

export default function Kids() {
  return (
    <div className="kids-div">
      <main>
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/af5ee460-f507-46c7-8219-146242eae7e4/nike-kids.jpg"

        />
        <button className="shoes-btn">
          <Link to="/KidsShoes">Shoes</Link>
        </button>
        <button className="shirts-btn">
          <Link to="/KidsShirts">Shirts</Link>
        </button>
      </main>
     
     
    
    </div>
  );
}
