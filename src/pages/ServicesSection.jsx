import React from "react";
import { motion } from "framer-motion";
import {
  FiCamera,
  FiGrid,
  FiLayout,
  FiBox,
  FiZap,
  FiDroplet,
} from "react-icons/fi";
import "../style/ServicesSection.css";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function ServicesSection() {
  const services = [
    {
      title: "3D Interior Designing",
      desc: "High-quality renders and walkthroughs for realistic project previews.",
      icon: <FiCamera />,
    },
    {
      title: "Space Planning",
      desc: "Optimizing layouts to maximize space utility with elegant design.",
      icon: <FiGrid />,
    },
    {
      title: "Furniture Layout",
      desc: "Precise furniture placements that match comfort and flow.",
      icon: <FiLayout />,
    },
    {
      title: "Modular Kitchen Design",
      desc: "Stylish, functional kitchen layouts tailored to your space.",
      icon: <FiBox />,
    },
    {
      title: "Lighting Design",
      desc: "Smart lighting placement to enhance ambiance and utility.",
      icon: <FiZap />,
    },
    {
      title: "Color & Material Consultancy",
      desc: "Expert guidance on material selection and color harmony.",
      icon: <FiDroplet />,
    },
  ];

  return (
    <section className="section-wrapper" id="services">
      <div className="container text-center">
        <h2 className="section-heading">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card shadow"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="service-icon">{service.icon}</div>
              <h5>{service.title}</h5>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
