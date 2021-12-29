import React from 'react';
import './footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer(){
    return(<><div className="footerDiv">
       
        <a href=""><FacebookIcon style={{color:"gray",fontSize:"25px",padding:"5px",marginRight:"5px"}}></FacebookIcon></a>
        <a href=""><GitHubIcon style={{color:"gray",fontSize:"25px",padding:"5px",marginRight:"5px"}}></GitHubIcon></a>
        <a href=""><LinkedInIcon style={{color:"gray",fontSize:"25px",padding:"5px",marginRight:"5px"}}></LinkedInIcon></a>
        <a href=""><InstagramIcon style={{color:"gray",fontSize:"25px",padding:"5px",marginRight:"10px"}}></InstagramIcon></a>
    </div>
    </>)
}