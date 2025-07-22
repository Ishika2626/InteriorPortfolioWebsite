import React, { useRef, useState } from "react";
import "../style/ContactSection.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_evh3vt9",
        "template_icon28n",
        form.current,
        "SJSBtLRPFL3Q3JfEC"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        setStatus("Something went wrong. Try again later.");
        console.error(error.text);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.h2
          className="contact-heading text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <p className="contact-subtext text-center">
          I’d love to hear from you! Whether you have a project in mind or just want to say hi.
        </p>

        <div className="contact-info text-center mb-4">
          <p><strong>Phone:</strong> <a href="tel:+919662277778">+91 96622 77778</a></p>
          <p><strong>Email:</strong> <a href="mailto:darshjari09@gmail.com">darshjari09@gmail.com</a></p>
        </div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="contact_number" placeholder="Your Contact Number" required />
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="send-button">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
