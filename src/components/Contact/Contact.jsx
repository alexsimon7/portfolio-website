import React, { useState } from 'react';
import LocationMap from './LocationMap';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const encode = (data) => Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');
  const onSubmitHandler = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact-form',
        name,
        email,
        message,
      }),
    })
      .then(() => window.alert('Message sent!'))
      .catch((error) => window.alert(error));
  };
  return (
    <div className="contact" id="contact">
      <h3 className="section-title">Contact Me</h3>
      <div className="contact-body">
        <form onSubmit={onSubmitHandler} data-netlify="true" name="contact-form">
          <div className="form-element">
            <label className="input-label">Name:</label>
            <input
              type="text"
              id="name"
              name="sender-name"
              placeholder="Enter Your Nagme"
              required
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-element">
            <label className="input-label">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Your Message"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
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
