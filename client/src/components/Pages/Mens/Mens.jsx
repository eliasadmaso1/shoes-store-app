import React from "react";
import {Link} from 'react-router-dom'
import './mensCss.css';
import { useMediaQuery } from 'react-responsive'


export default function Mens() {

    const mobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="mensDiv">
          
           <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_776,c_limit/8cb4dc08-c6d2-44b3-89b5-863fa78b60dd/men-s-shoes-clothing-accessories.jpg" width={mobile? "900" : "1100"} style={{marginRight:"90px",position:"relative"}}/>
           <button className="btn1"><Link to="/MenShoes">Shoes</Link></button>
        <button className="btn2"><Link to="/MenShirts">Shirts</Link></button>
        </div>
    );
}
