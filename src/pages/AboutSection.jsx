import React from "react";
import "../style/AboutSection.css";
import profileImg from "../image/Darsh2.jpeg";
import { motion } from "framer-motion";

function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 order-2 order-lg-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants}
              className="about-image-wrapper premium-frame mx-auto"
              style={{ maxWidth: '350px' }}
            >
              <img
                src={profileImg}
                alt="Darsh Jariwala"
                className="about-profile-img"
              />
              <div className="graduation-tag">VNSGU Graduated</div>
              <div className="frame-border"></div>
            </motion.div>
          </div>
          <div className="col-lg-7 order-1 order-lg-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="about-text-content"
            >
              <motion.span className="section-label" variants={itemVariants}>Interior Designer</motion.span>
              <motion.h2 className="about-heading" variants={itemVariants}>
                About <span className="text-granite italic">Me.</span>
              </motion.h2>
              <motion.div className=" premium-divider" variants={itemVariants}></motion.div>
              <motion.div className="about-para-group" variants={itemVariants}>
                <p className="about-para mb-4 text-justify">
                  Hello! I’m <strong>Darsh Jariwala</strong>, an interior designer based in Gujarat, with a Bachelor’s degree in Interior Design from Veer Narmad South Gujarat University.
                </p>
                <p className="about-para mb-4 text-justify">
                  I specialize in crafting sophisticated, modern, and timeless spaces across residential, commercial, and retail environments. My design approach blends aesthetics with functionality, focusing on refined details, harmonious balance, and curated material selections.
                </p>
                <p className="about-para mb-4 text-justify">
                  I believe that great design goes beyond visual appeal—it creates an experience. Every space I design is thoughtfully tailored to reflect the client’s lifestyle, aspirations, and individuality, resulting in environments that feel both elegant and purposeful.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
