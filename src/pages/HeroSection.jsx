import React from "react";
import "../style/HeroSection.css";
import leftImage from "../image/fur1.jpg";    // replace with your image path
import rightImage from "../image/fur2.jpg";  // replace with your image path

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-layout">
        
        {/* Left Image */}
        <div className="hero-image">
          <img src={leftImage} alt="Interior Left" className="rounded-image" />
        </div>

        {/* Center Text */}
        <div className="hero-content">
          <h1 className="hero-title">
            Design That <span>Feels Like Home</span>
          </h1>
          <p className="hero-subtitle">
            Elegant interiors curated to match your lifestyle and soul.
          </p>
          <a href="#portfolio" className="hero-btn">
            View Portfolio
          </a>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src={rightImage} alt="Interior Right" className="rounded-image" />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
