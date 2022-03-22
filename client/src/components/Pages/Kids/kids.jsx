import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Feauters/NavBar/Navbar";
import "./kidsCss.css";

export default function Kids() {
  return (
    <div className="kids-div">
      <main>
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/f96ad2c0-6a05-422b-945e-73054832720b/nike-kids.jpg"

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
