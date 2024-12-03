import React, { useState } from 'react';
import axios from 'axios';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/email/sendEmail', formData);
      if (response.data.success) {
        setFormStatus('Your message has been sent successfully!');
      } else {
        setFormStatus('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('Error sending your message. Please try again later.');
    }

    // Clear the form
    setFormData({
      name: '',
      email: '',
      contactNo: '',
      subject: '',
      message: ''
    });

    // Clear the status message after 5 seconds
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below.</p>
      
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <h3>Phone:</h3>
          <p>+91 7861053302</p>
          <h3>Email:</h3>
          <p>hetkasundra1@gmail.com</p>
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="contactNo"
              placeholder="Your Contact No."
              value={formData.contactNo}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>

          {/* Form Submission Status */}
          {formStatus && <div className="form-status">{formStatus}</div>}
        </div>
      </div>
    </div>
  );
}

export default Contact;