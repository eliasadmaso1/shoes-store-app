import "./womensCss.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Womens() {
  return (
    <>
        <div className="women-div">
       <div className="buttons">
        <button className="btn">
          <Link to="/WomensShoes" style={{color:"white"}}>Shoes</Link>
        </button>
        <button className="btn">
          <Link to="/WomensShirts" style={{color:"white"}}>Shirts</Link>
        </button>
        </div>
      <div className="background">
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_521,c_limit/2c8754ce-6287-4e77-a198-1ad483fba257/nike-just-do-it.png" />
        </div>
       
   
    
    </div>
    </>
  );
}
