import './womensCss.css'
import React from "react";
import {Link} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'


export default function Womens() {
    const mobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <>
        <div className="womens-div">
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_776,c_limit/04d9c277-f53c-4f95-be6c-622560224e60/women-s-shoes-clothing-accessories.jpg" width={mobile ? "650" : "1100"} style={{marginRight:"90px",position:"relative"}}/>
        <button className="btn1"><Link to="/WomensShoes">Shoes</Link></button>
        <button className="btn2"><Link to="/WomensShirts">Shirts</Link></button>
  
        </div>
        </>
    );
}
