import React from "react";
import "../App.css";

const Contact = () => (
  <div id="contact" className="section">
    <h2 className="section-title">Contact Me</h2>
    <p className="section-text">
      I'm always open to discussing new projects, collaborations, or creative opportunities. Whether you're interested in building a website, collaborating on a fashion concept, or launching a new brand — let's connect!
      <br /><br />
      You can reach me directly by filling out the form below. I typically respond within 24 hours. Looking forward to hearing from you!
    </p>
    <p className="section-text">Email: ponmwasamuel2020@gmail.com</p>
    <p className="section-text">Phone: +2348028395662</p>
    <form className="contact-form" action="https://formspree.io/f/yourformid" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
      <button type="submit" className="btn">Send Message</button>
    </form>
  </div>
);

export default Contact;