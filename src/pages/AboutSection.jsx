import React from "react";
import "../style/AboutSection.css";
import profileImg from "../image/darsh1.jpg";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container text-center">
        <h2 className="about-heading">About Me</h2>
        <div className="about-card">
          
          {/* 👈 Image from Left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={profileImg}
              alt="Darsh Jariwala"
              className="img-fluid profile-img"
            />
          </motion.div>

          {/* 👉 Text from Right */}
          <motion.div
            className="about-description"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>
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
