import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Feauters/NavBar/Navbar";
import "./kidsCss.css";

export default function Kids() {
  return (
    <div className="kids-div">
    <div className="buttons">
     <button className="btn">
       <Link to="/KidssShoes" style={{color:"white"}}>Shoes</Link>
     </button>
     <button className="btn">
       <Link to="/KidssShirts" style={{color:"white"}}>Shirts</Link>
     </button>
     </div>
   <div className="background">
     <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_521,c_limit/414db494-7ebc-4d53-bbff-58d50b380a24/nike-just-do-it.png" />
     </div>
    

 
 </div>
  );
}
