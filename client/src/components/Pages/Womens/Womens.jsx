import "./womensCss.css";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Feauters/NavBar/Navbar";

export default function Womens() {
  return (
    <>
      <div className="women-div">
        <main>
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/860b579e-cbf4-4588-9107-86eafdd16014/women-s-shoes-clothing-accessories.jpg"
           
          />
          <button className="shoes-btn">
            <Link to="/WomensShoes">Shoes</Link>
          </button>
          <button className="shirts-btn">
            <Link to="/WomensShirts">Shirts</Link>
          </button>
        </main>
        <main>
      <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/835db7ee-6784-42de-b4ad-00c7e944073a/dri-fit-one-graphic-training-tank-Ppf5dm.png"/> 

      </main>
      </div>
    </>
  );
}
