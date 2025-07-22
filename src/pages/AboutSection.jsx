import React from "react";
import "../style/AboutSection.css";
import profileImg from "../image/darsh.jpg";
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
  className="profile-img"
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
  Hello! I’m <strong>Darsh Jariwala</strong>, a passionate interior designer based in Gujarat with a Bachelor's degree in Interior Design from Veer Narmad South Gujarat University.
  <br /><br />
  I specialize in creating functional, modern, and aesthetically pleasing spaces—whether residential, commercial, or retail.
  With a strong focus on detail, balance, and usability, I bring a fresh and client-focused approach to every project.
  <br /><br />
  My goal is to design spaces that not only look beautiful but feel purposeful and personal to those who use them.
</p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
