import React from 'react';
import './SubHeader.css';
import jordan from '../../../images/logos/jordan.png'


function SubHeader() {
    return (
        <div className="header-div">
            <div className="image-div"> 
            <img src={jordan}/>

            </div>

        </div>
    )
}

export default SubHeader
