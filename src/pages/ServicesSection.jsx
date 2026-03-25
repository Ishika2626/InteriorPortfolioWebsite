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
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
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
      <div className="container">
        <h2 className="section-heading text-center">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
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
