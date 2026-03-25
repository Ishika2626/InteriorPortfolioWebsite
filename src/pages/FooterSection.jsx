import React from "react";
import "../style/FooterSection.css";

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>DARSH<span className="text-granite">.</span></h2>
            <p className="footer-tagline">Architectural Elegance in Every Space</p>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <a href="tel:+919662277778">+91 96622 77778</a>
            <a href="mailto:darshjari09@gmail.com">darshjari09@gmail.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Darsh Jariwala. All Rights Reserved.
          </div>
          <div className="developed-by">
            Built by <a href="mailto:ishikaaa.jariwala@gmail.com" className="developer-name" style={{ textDecoration: 'underline' }}>Ishika Jariwala</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
