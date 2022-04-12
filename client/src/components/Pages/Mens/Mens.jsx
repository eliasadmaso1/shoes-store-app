import React from "react";
import { Link } from "react-router-dom";
import "./mensCss.css";

export default function Mens() {
  return (
    <div className="men-div">
       <div className="buttons">
        <button className="btn">
          <Link to="/MenShoes" style={{color:"white"}}>Shoes</Link>
        </button>
        <button className="btn">
          <Link to="/MenShirts" style={{color:"white"}}>Shirts</Link>
        </button>
        </div>
      <div className="background">
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_521,c_limit/0bafb728-2ae2-416f-bb18-5935801c8071/nike-just-do-it.png" />
        </div>
       
   
    
    </div>
  );
}
