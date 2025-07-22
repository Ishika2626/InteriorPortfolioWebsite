import React from "react";
import { motion } from "framer-motion";
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
    { title: "3D Interior Designing", desc: "High-quality renders and walkthroughs for realistic project previews." },
    { title: "Space Planning", desc: "Optimizing layouts to maximize space utility with elegant design." },
    { title: "Furniture Layout", desc: "Precise furniture placements that match comfort and flow." },
    { title: "Modular Kitchen Design", desc: "Stylish, functional kitchen layouts tailored to your space." },
    { title: "Lighting Design", desc: "Smart lighting placement to enhance ambiance and utility." },
    { title: "Color & Material Consultancy", desc: "Expert guidance on material selection and color harmony." },
  ];

  return (
    <section className="section-wrapper" id="services">
      <div className="container text-center">
        <h2 className="section-heading">Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="col-md-4"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="service-card shadow">
                <h5>{service.title}</h5>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
