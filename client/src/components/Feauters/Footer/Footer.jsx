import React from "react";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
  return (
    <>
    <div className="footer-container">
    <div className="contact-us">
        <h3>Contact-Us</h3>
        <a href="https://www.facebook.com/elias.admaso">
          <FacebookIcon
            style={{
              color: "gray",
              fontSize: "25px",
            }}
          ></FacebookIcon>
        </a>
        <a href="https://github.com/eliasadmaso1">
          <GitHubIcon
            style={{
              color: "gray",
              fontSize: "25px",
            }}
          ></GitHubIcon>
        </a>
        <a href="https://www.linkedin.com/in/elias-admaso-152790206/">
          <LinkedInIcon
            style={{
              color: "gray",
              fontSize: "25px",
            }}
          ></LinkedInIcon>
        </a>
      </div>
      <div className="services">
          <h3>Services</h3>
          <h4>Orders</h4>
          <h4>User convenience</h4>
          <h4>Best Products</h4>
      </div>
      <div className="coming-soon">
          <h3>Coming soon...</h3>
          <h4>Nba Jerseys</h4>
          <h4>Air Jordan Collections</h4>
          <h4>Nike Track Suits</h4>
      </div>
    </div>
      
    </>
  );
}
