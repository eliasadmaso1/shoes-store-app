import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Footer from "../../Feauters/Footer/Footer";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const refreshInputs = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x0t079f",
        "template_hd5sd1b",
        e.target,
        "user_SOzAQnowdiifBWI9s7QPh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    showResult(true);
  };
  return (
    <>
      <div className="contact-div">
        <div className="my-details">
          <div className="detail">
            <HomeIcon className="icon" />
            <p>Rehovot , Israel</p>
          </div>
          <div className="detail">
            <PhoneIcon className="icon" />
            <p>050-8993688</p>
          </div>
          <div className="detail">
            <EmailIcon className="icon" />
            <p>Eliasadmaso1@gmail.com</p>
          </div>
        </div>
    
          <form className="contact-form" onSubmit={sendEmail}>
            <h1>Contact Us</h1>
            <input
              placeholder="Full Name"
              name="fullName"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            <input
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              className="message-input"
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button onClick={refreshInputs}>send</button>
            {result ? <div>Your Details Send Successfuly</div> : null}
          </form>
       
      </div>

      <Footer />
    </>
  );
}

export default Contact;
