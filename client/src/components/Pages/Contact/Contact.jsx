import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Footer from '../../Feauters/Footer/Footer'
import "./Contact.css";

function Contact() {
  return (
    <>
    <div className="contactDiv">
      <div className="material-icons">
        <HomeIcon
          style={{
            fontSize: "40px",
            marginBottom: "10px",
            marginTop: "10px",
            color: "white",
          }}
        />
        <p>Rehovot , Israel</p>
        <PhoneIcon
          style={{
            fontSize: "40px",
            marginBottom: "10px",
            marginTop: "10px",
            color: "white",
          }}
        />
        <p>050-8993688</p>
        <EmailIcon
          style={{
            fontSize: "40px",
            marginBottom: "10px",
            marginTop: "10px",
            color: "white",
          }}
        />
        <p>Eliasadmaso1@gmail.com</p>
        <form className="contact-form">
        <input placeholder="Full Name"/>
        <br></br>
        <input placeholder="Email"/>
        <br></br>
        <input className="message-input" placeholder="Message"/>
        <br></br>
        <button>send</button>
        </form>
      </div>
       
    
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
