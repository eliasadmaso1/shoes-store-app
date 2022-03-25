import React from "react";
import { Link } from "react-router-dom";
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
      <main>
      <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e4196ef2-5b39-4973-b4f0-280ee7e90123/dri-fit-sport-clash-training-t-shirt-HwcP6k.png"/> 

      </main>
    </div>
  );
}
