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
  Developed by Ishika Jariwala.{" "}
 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ishikaj2111@gmail.com&su=Website%20Inquiry&body=Hi%20Ishika%2C%0AI%20am%20interested%20in%20creating%20a%20website."
  target="_blank"
  rel="noopener noreferrer"
>
  Need a website?
</a>

</p>


</div>

    </footer>
  );
}

export default FooterSection;
