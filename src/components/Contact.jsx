import React, { useRef } from 'react';
import emailjs from "@emailjs/browser"
import { motion } from 'framer-motion';
import '../styles/contact.scss';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1znvtsn', 'template_dh6zlul', form.current, 'jeBUPwxXQuRpO7raF')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );

    // Reset form fields after submission
    e.target.reset();
  };

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      className="contact-form"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="form-group" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <label>Name</label>
        <input type="text" name="user_name" required />
      </motion.div>
      <motion.div className="form-group" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <label>Email</label>
        <input type="email" name="user_email" required />
      </motion.div>
      <motion.div className="form-group" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <label>Message</label>
        <textarea name="message" required></textarea>
      </motion.div>
      <motion.button
        type="submit"
        className="button-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Send
      </motion.button>
    </motion.form>
  );
};

export default Contact;




