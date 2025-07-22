import React from "react";
import "../style/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Elegant Interior Designs</h1>
        <p>Crafted for comfort, tailored to your lifestyle.</p>
        <a href="#portfolio" className="btn btn-warning">
          View Portfolio
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
