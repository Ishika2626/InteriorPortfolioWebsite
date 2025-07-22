// FooterSection.js
import React from "react";
import "../style/FooterSection.css";

function FooterSection() {
  return (
    <footer className="footer-section">
     <div className="footer-container">
  <p className="footer-name">&copy; {new Date().getFullYear()} Darsh Jariwala</p>

  <p className="footer-tagline">Transforming Spaces with Elegance & Simplicity</p>

  <div className="footer-contact">
    <p>Phone: <a href="tel:+919662277778">+91 96622 77778</a></p>
    <p>Email: <a href="mailto:darshjari09@gmail.com">darshjari09@gmail.com</a></p>
  </div>

 <p className="footer-developed">
  Developed by Ishika Jariwala. <a href="mailto:ishikaj2111@gmail.com">Need a website?</a>
</p>

</div>

    </footer>
  );
}

export default FooterSection;
