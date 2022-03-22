import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Feauters/NavBar/Navbar";
import "./mensCss.css";

export default function Mens() {
  return (
    <div className="men-div">
      <main>
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/e45fa8bd-6922-4b27-846b-6af3f2270962/men-s-shoes-clothing-accessories.jpg" />
        <button className="shoes-btn">
          <Link to="/MenShoes">Shoes</Link>
        </button>
        <button className="shirts-btn">
          <Link to="/MenShirts">Shirts</Link>
        </button>
      </main>
    </div>
  );
}
