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
        {
          publicKey: "SJSBtLRPFL3Q3JfEC",
        }
      )
      .then(() => {
        setStatus("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        setStatus("Failed to send: " + (error.text || "Check console."));
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <header className="mb-5">
           <h2 className="contact-heading">Get In Touch</h2>
           <p className="contact-subtext">
             Let’s discuss your next project and create something extraordinary together.
           </p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <h4>Phone</h4>
              <p><a href="tel:+919662277778">+91 96622 77778</a></p>
            </div>
            <div className="contact-info-item">
              <h4>Email</h4>
              <p><a href="mailto:darshjari09@gmail.com">darshjari09@gmail.com</a></p>
            </div>
            <div className="contact-info-item">
              <h4>Location</h4>
              <p>Surat, Gujarat</p>
            </div>
          </div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" rows="4" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="send-button">Send Inquiry</button>
              {status && <p className="form-status mt-3 text-center">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
