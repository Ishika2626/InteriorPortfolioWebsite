import React from "react";
import { motion } from "framer-motion";
import "../style/PortfolioSection.css";

import pro1 from "../image/int1.jpeg";
import pro2 from "../image/int4.jpeg";
import pro3 from "../image/int3.jpeg";
import pro4 from "../image/int2.jpeg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

function PortfolioSection() {
  const portfolioItems = [
    {
      img: pro1,
      title: "Modern Living Room",
      desc: "Sophisticated minimalism meets functional elegance."
    },
    {
      img: pro2,
      title: "Elegant Workspace",
      desc: "A focused environment designed for clarity and productivity."
    },
    {
      img: pro3,
      title: "Luxury Bedroom",
      desc: "Timeless comfort curated with refined material selections."
    },
    {
      img: pro4,
      title: "Modular Kitchen",
      desc: "High-performance design tailored for modern culinary lifestyles."
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="portfolio-heading">Featured Portfolio</h2>
        <div className="portfolio-grid row g-4">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              className="col-lg-6 mb-4"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
            >
              <div className="portfolio-card">
                <div className="portfolio-img-wrapper">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="portfolio-content">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
