import React from "react";
import {Link} from 'react-router-dom'
import './kidsCss.css';

export default function Kids() {
    return (
        
        <div className="kidsDiv">
           
        <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/lu8wk8ficg72kj6jtosa/sportswear-older-jdi-t-shirt-mzgPnx.png" width="1000" style={{marginRight:"90px",position:"relative"}}/>
        <button className="btn1"><Link to="/KidsShoes">Shoes</Link></button>
        <button className="btn2"><Link to="/KidsShirts">Shirts</Link></button>
        </div>
    );
}
