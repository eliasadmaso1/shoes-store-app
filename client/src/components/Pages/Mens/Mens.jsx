import React from "react";
import {Link} from 'react-router-dom'
import './mensCss.css';


export default function Mens() {


    return (
        <div className="mensDiv">
          
           <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/e45fa8bd-6922-4b27-846b-6af3f2270962/men-s-shoes-clothing-accessories.jpg" width="1100" style={{marginRight:"90px",position:"relative"}}/>
           <button className="btn1"><Link to="/MenShoes">Shoes</Link></button>
        <button className="btn2"><Link to="/MenShirts">Shirts</Link></button>
        </div>
    );
}
