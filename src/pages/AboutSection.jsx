import React from "react";
import "../style/AboutSection.css";
import profileImg from "../image/fur1.jpg";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="about-heading text-center">About Me</h2>
        <div className="about-content row align-items-center">
          <motion.div
            className="col-md-5 text-center mb-4 mb-md-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={profileImg} alt="Darsh Jariwala" className="img-fluid rounded profile-img" />
          </motion.div>

          <motion.div
            className="col-md-7"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="about-description">
              Hello! I’m <strong>Darsh Jariwala</strong>, a passionate interior designer based in Gujarat.
              I hold a Bachelor's degree in Interior Design from Veer Narmad South Gujarat University.
              <br /><br />
              I focus on turning creative ideas into functional, elegant, and personal spaces—whether
              it's a home, office, or showroom. With an eye for detail and a love for modern design,
              I combine aesthetics and functionality to bring interiors to life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
