import React from "react";
import LocationMap from "./LocationMap";
function Contact() {
  return(
    <div className="contact" id="contact">
      <h3 className="contact-title">Contact Me</h3>
      <div className="contact-body">
        <form action="" method="">
          <ul className="contact-elements">
            <li>
              <label>Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                required
              />
            </li>
            <li>
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                required
              />
            </li>
            <li>
              <label>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </li>
            <li>
              <input
                type="submit"
                value="Submit"
              />
            </li>
          </ul>
        </form>
        <LocationMap className="location-map" />
      </div>
    </div>
  );

}

export default Contact;