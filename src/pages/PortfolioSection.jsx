import React from "react";
import { motion } from "framer-motion";
import "../style/PortfolioSection.css";

import pro1 from "../image/pro1.jpg";
import pro2 from "../image/pro2.jpg";
import pro3 from "../image/pro3.jpg";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

function PortfolioSection() {
  const portfolioItems = [
    {
      img: pro1,
      title: "Modern Living Room",
      desc: "Stylish and functional living space design with minimal elements."
    },
    {
      img: pro2,
      title: "Elegant Workspace",
      desc: "Clean, sleek home office interior that balances productivity and style."
    },
    {
      img: pro3,
      title: "Luxury Bedroom",
      desc: "Warm, cozy, and luxurious bedroom setup with custom lighting."
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container text-center">
        <h2 className="portfolio-heading mb-4">Portfolio</h2>
        <div className="row g-4">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              className="col-md-4"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.2)" }}
                className="portfolio-card shadow-sm rounded"
              >
                <img src={item.img} alt={item.title} className="img-fluid rounded-top" />
                <div className="portfolio-content p-3">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
