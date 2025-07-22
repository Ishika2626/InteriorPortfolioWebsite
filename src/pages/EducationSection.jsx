import { motion } from "framer-motion";
import '../style/EducationSection.css';

function EducationSection() {
  return (
    <section className="education-modern-section" id="education">
      <div className="container text-center">
        <h2 className="edu-heading mb-4">Education</h2>

        <motion.div
          className="edu-card mx-auto shadow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.5  }}
        >
          <h5 className="degree">Bachelor of Interior Design</h5>
          <p className="department">Department of Interior Design</p>
          <p className="university">Veer Narmad South Gujarat University</p>
          <span className="year">Graduated: 2025</span>
        </motion.div>
      </div>
    </section>
  );
}

export default EducationSection;
