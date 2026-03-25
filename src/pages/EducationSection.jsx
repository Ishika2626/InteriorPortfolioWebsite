import React, { useState } from "react";
import "../style/EducationSection.css";
import { motion, AnimatePresence } from "framer-motion";

function EducationSection() {
  const [activeTab, setActiveTab] = useState("experience");

  const educationData = [
    {
      degree: "Bachelor of Interior Design",
      department: "Department of Interior Design",
      university: "Veer Narmad South Gujarat University",
      year: "2020 - 2025"
    }
  ];

  const experienceData = [
    {
      company: "Obaku designs",
      role: "Jr. Interior Designer",
      location: "Surat, Gujarat",
      duration: "May 2025 - Present"
    },
    {
      company: "Ishwer Gehi Architects",
      role: "Internship",
      location: "Surat, Gujarat",
      duration: "June 2024 - Oct 2024"
    }
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  };

  return (
    <section className="education-modern-section section-padding" id="education" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
      <div className="container">
        <header className="section-header text-center mb-5">
          <motion.span 
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-label"
          >
            Chronicle
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="display-4 fw-bold font-heading mb-5"
          >
            Professional & Academic <span className="text-granite italic">Journey</span>
          </motion.h2>

          <div className="tab-switcher-wrapper">
            <div className="tab-switcher mx-auto">
              <button 
                className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
              <button 
                className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              {activeTab === "education" && <motion.div layoutId="tab-active" className="tab-indicator left" />}
              {activeTab === "experience" && <motion.div layoutId="tab-active" className="tab-indicator right" />}
            </div>
          </div>
        </header>

        <div className="tab-content-wrapper">
          <AnimatePresence mode="wait">
            {activeTab === "education" ? (
              <motion.div
                key="education"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="section-content"
              >
                {educationData.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="edu-card-premium"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <span className="edu-year-label">{edu.year}</span>
                    <h3 className="degree-premium">{edu.degree}</h3>
                    <div className="premium-divider mx-auto"></div>
                    <p className="dept-premium">{edu.department}</p>
                    <p className="univ-premium text-granite">{edu.university}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="experience"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="section-content timeline-container"
              >
                <div className="experience-timeline">
                  {experienceData.map((exp, index) => (
                    <motion.div 
                      key={index} 
                      className="timeline-item-premium"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="timeline-dot-premium"></div>
                      <div className="timeline-content-premium">
                        <span className="timeline-duration-premium">{exp.duration}</span>
                        <h4>{exp.company}</h4>
                        <h5 className="text-brown">{exp.role}</h5>
                        <p className="text-muted small mb-0">{exp.location}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
