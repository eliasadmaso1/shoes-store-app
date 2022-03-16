import React from 'react';
import './footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import {Link } from 'react-router-dom';

export default function Footer(){
    return(<><div className="footerDiv">

        <a href="https://www.facebook.com/elias.admaso"><FacebookIcon style={{color:"gray",fontSize:"40px",padding:"5px",marginRight:"5px"}}></FacebookIcon></a>
        <a href="https://github.com/eliasadmaso1"><GitHubIcon style={{color:"gray",fontSize:"40px",padding:"5px",marginRight:"5px"}}></GitHubIcon></a>
        <a href="https://www.linkedin.com/in/elias-admaso-152790206/"><LinkedInIcon style={{color:"gray",fontSize:"40px",padding:"5px",marginRight:"5px"}}></LinkedInIcon></a>
    </div>
    </>)
}