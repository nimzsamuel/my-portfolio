import React from "react";
import "../App.css";
import ProfilePic from '../images/WhatsApp Image 2025-08-07 at 1.01.48 PM.jpeg'

const About = () => (
  <div id="about" className="section">
    <h2 className="section-title">About Nimyel Ponmwa Samuel</h2>
    <img
      src={ProfilePic}
      alt="My profile"
      className="profile-image"
    />
    <p className="section-text">
      I am a passionate and creative individual with a strong background in frontend development, fashion design, and entrepreneurship.
      As a frontend developer, I enjoy bringing ideas to life through clean and responsive web interfaces using technologies like React, HTML, CSS, and JavaScript.
      In addition to coding, I express my artistic side through fashion design, creating styles that blend elegance and innovation.
      As an entrepreneur, I love building brands and turning ideas into impactful projects that solve real-world problems.
    </p>
  </div>
);

export default About;
