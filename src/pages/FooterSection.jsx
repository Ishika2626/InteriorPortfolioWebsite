import React from "react";
import "../style/FooterSection.css";

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>DARSH</h2>
            <p className="footer-tagline">Transforming Interiors into Timeless Spaces</p>
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
