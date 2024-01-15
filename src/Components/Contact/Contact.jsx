import React from "react";
import "./style.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
function Contact() {
  return (
    <>
 
    <div className="Contact-container"  id="contact">
      
      <div className="mobile-contact">
   
        <div className="Contact-form">
          <div className="form-container">
            <div className="form-header-container">
              <div className="form-header-title">
                Get in <span>Touch</span>
              </div>
              <div className="hello" >
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </div>
            </div>
            <div >
                <form action="" className="form-input-container">
                <input type="text"  className="form-input star" placeholder="Name*" required/>
                <input type="text"  className="form-input" placeholder="Email"/>
                <input type="text"  className="form-input star" placeholder="Phone Number*" required/>
                <select name="select-dropdown" id="select-dropdown" className="form-input">
                    <option value="0" className="option">How did you find us?</option>
                    <option value="1" className="option">Twitter</option>
                </select>
                <textarea style={{height:"70px",resize:"none"}} className="form-input" placeholder="Question*"/>
                <input type="submit" value="Submit"/>
                </form>
            </div>
         
        </div>
      </div>
      </div>
     
    </div>
    </>
  );
}

export default Contact;
