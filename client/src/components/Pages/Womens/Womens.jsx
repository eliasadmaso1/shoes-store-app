import './womensCss.css'
import React from "react";
import {Link} from 'react-router-dom';


export default function Womens() {

    return (
        <>
        <div className="womens-div">
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/860b579e-cbf4-4588-9107-86eafdd16014/women-s-shoes-clothing-accessories.jpg" width="1100" style={{marginRight:"90px",position:"relative"}}/>
        <button className="btn1"><Link to="/WomensShoes">Shoes</Link></button>
        <button className="btn2"><Link to="/WomensShirts">Shirts</Link></button>
  
        </div>
        </>
    );
}
