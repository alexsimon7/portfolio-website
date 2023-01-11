import React from "react";
import LocationMap from "./LocationMap";
function Contact() {
  return(
    <div className="contact" id="contact">
      <h3 className="section-title">Contact Me</h3>
      <div className="contact-body">
        <form action="" method="">
          <div className="form-element">
            <label className="input-label">Name:</label>
            <input
              type="text"
              id="name"
              name="sender-name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="form-element">
            <label className="input-label">Email:</label>
            <input
              type="email"
              id="email"
              name="sender-email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="form-element">
            <label className="input-label">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <div className="form-submit">
            <input
              type="submit"
              value="Submit"
            />
          </div>
        </form>
        <LocationMap className="location-map" />
      </div>
    </div>
  );

}

export default Contact;