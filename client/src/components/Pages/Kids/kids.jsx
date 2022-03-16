import React from "react";
import {Link} from 'react-router-dom'
import './kidsCss.css';


export default function Kids() {

    return (
        
        <div className="kidsDiv">
           
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1016,c_limit/07e63e32-c0a8-44de-9a96-6d280de854f7/nike-kids.jpg" width= "1100" />
        <button className="btn1"><Link to="/KidsShoes">Shoes</Link></button>
        <button className="btn2"><Link to="/KidsShirts">Shirts</Link></button>
        </div>
    );
}
