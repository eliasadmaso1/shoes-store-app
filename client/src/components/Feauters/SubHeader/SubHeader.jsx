import React from 'react';
import './SubHeader.css';
import jordan from '../../../images/logos/jordan.png'


function SubHeader() {
    return (
        <div className="headerDiv">
         <img src={jordan} width="30px" style={{marginTop:'62px',marginLeft:"22px"}}/>

        </div>
    )
}

export default SubHeader
