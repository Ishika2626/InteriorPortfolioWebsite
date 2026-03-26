import React from "react";
import "../style/HeroSection.css";
import { motion } from "framer-motion";

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="hero-modern" id="home">
      <div className="hero-bg-text">INTERIOR</div>

      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <motion.div
          className="hero-text-wrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-top-label" variants={textVariants}>
            Surat, Gujarat
          </motion.span>
          <motion.h1 className="hero-main-title" variants={textVariants}>
            Designing <br />
            <span className="italic-serif text-granite">Sophistication.</span>
          </motion.h1>
          <motion.p className="hero-subline mx-auto" variants={textVariants}>
            Crafting modern and timeless environments that reflect your individuality and lifestyle.
          </motion.p>
          <motion.div className="hero-cta-group" variants={textVariants}>
            <a href="#portfolio" className="modern-btn">
              Explore Work
              <span className="btn-line"></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
