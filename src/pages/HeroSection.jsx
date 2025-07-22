import React from "react";
import "../style/HeroSection.css";
import leftImage from "../image/fur1.jpg";  // Replace with actual path
import rightImage from "../image/fur2.jpg"; // Replace with actual path
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-layout">
        
        {/* Left Image */}
        <motion.div
          className="hero-image left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img src={leftImage} alt="Left view" className="rounded-image" />
        </motion.div>

       {/* Center Content */}
<motion.div
  className="hero-content"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: false }}
>
  
  <h1 className="hero-title">
    Elevate Your Everyday <br />
    <span>Living Experience</span>
  </h1>

  <p className="hero-subtitle">
    We create luxurious and functional spaces that reflect your personality. 
    Let’s transform your house into a dream home with timeless designs and modern aesthetics.
  </p>

  <a href="#portfolio" className="hero-btn">
    View Portfolio
  </a>
</motion.div>


        {/* Right Image */}
        <motion.div
          className="hero-image right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <img src={rightImage} alt="Right view" className="rounded-image" />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
