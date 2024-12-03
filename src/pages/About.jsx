import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/about.css';

// Importing icons
import { FaCode, FaShieldAlt, FaUsers } from 'react-icons/fa';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1-second animation
  }, []);

  return (
    <div className="about">
      {/* Header Section */}
      <div className="about-header" data-aos="fade-down">
        <h1>About Us</h1>
        <p>
          At Kasundra and Satasiya Group LLP, we specialize in providing comprehensive IT consulting services to empower businesses with cutting-edge technology solutions.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <div className="mission" data-aos="fade-right">
          <div className="icon">
            <FaCode />
          </div>
          <h2>Our Mission</h2>
          <p>
            To deliver innovative IT solutions that transform businesses and help them achieve their goals efficiently. 
            We are committed to creating meaningful digital experiences through the combination of strategy, technology, and creativity.
          </p>
        </div>
        <div className="vision" data-aos="fade-left">
          <div className="icon">
            <FaShieldAlt />
          </div>
          <h2>Our Vision</h2>
          <p>
            To be the trusted partner for businesses worldwide, leading the way in IT consulting and digital transformation. 
            We envision a future where technology bridges gaps, simplifies lives, and fosters growth for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" data-aos="fade-up">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service" data-aos="zoom-in">
            <h3>Website Development</h3>
            <p>
              Custom websites designed to meet your unique business needs and objectives, ensuring scalability, speed, and responsiveness.
            </p>
          </div>
          <div className="service" data-aos="zoom-in">
            <h3>Website Management</h3>
            <p>
              End-to-end website management solutions for seamless performance, regular updates, and top-tier security.
            </p>
          </div>
          <div className="service" data-aos="zoom-in">
            <h3>IT Consulting</h3>
            <p>
              Expert guidance to align technology strategies with your business goals, ensuring long-term success and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2 data-aos="fade-up">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member" data-aos="flip-left">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <p>"Het is the Executive Director of Kasundra and Satasiya Group LLP. With a strong background in IT consulting, Het leads the company's strategic vision and business development."</p>
            <h3>Het Kasundra</h3>
            <p>Executive Director</p>
          </div>
          <div className="team-member" data-aos="flip-left">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <p>"Jeet is the Executive Director of Kasundra and Satasiya Group LLP. With expertise in project management and client relations, Jeet ensures that all projects are executed flawlessly and meet client expectations."</p>
            <h3>Jeet Satasiya</h3>
            <p>Executive Director</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" data-aos="fade-up">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-list">
          <div className="testimonial" data-aos="fade-right">
            <p>
              "Kasundra and Satasiya Group LLP transformed our online presence with a beautifully designed website. Their expertise is unmatched!"
            </p>
            <h4>- Priya Sharma, CEO of Techify Solutions</h4>
          </div>
          <div className="testimonial" data-aos="fade-left">
            <p>
              "Their IT consulting services helped us streamline our operations and improve efficiency. Highly recommended!"
            </p>
            <h4>- Rohit Patel, Managing Director of Innovate Corp</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="call-to-action" data-aos="zoom-in">
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact us today and let us help you achieve your digital transformation goals!</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
}

export default About;
