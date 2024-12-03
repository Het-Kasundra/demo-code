import React, { useEffect } from "react";
import { FaHeadset, FaCogs, FaLightbulb } from 'react-icons/fa'; // Import the icons
import { FaRegCommentDots, FaRegCalendarCheck, FaPlayCircle, FaClipboardCheck } from 'react-icons/fa';
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations
import "../styles/home.css"; // Import the custom Home page CSS (adjust the path if necessary)
import about from '../assets/about.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <div className="home">
      {/* Adding the AOS CSS link dynamically using React Helmet */}
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 data-aos="fade-up">Welcome to Our Website</h1>
          <p data-aos="fade-up" data-aos-delay="300">
            We provide exceptional IT services to help your business thrive in the digital world.
          </p>
          <ul className="hero-details" data-aos="fade-up" data-aos-delay="500">
            <li>Innovative IT solutions tailored to your needs</li>
            <li>24/7 expert support for seamless operations</li>
            <li>Cutting-edge technologies to stay ahead of the curve</li>
          </ul>
          <a href="#services" className="cta-button" data-aos="fade-up" data-aos-delay="700">
            Get Started
          </a>
        </div>
      </section>


      {/* About Us Section */}
      <section className="about-us" id="about-us">
        <div className="about-us-content" data-aos="fade-up">
          <div className="about-us-text">
            <h2>About Us</h2>
            <p>
              We are a team of passionate professionals dedicated to providing top-notch IT services. Our
              expertise ranges from web development to IT consulting, with a focus on delivering tailored solutions for every client.
            </p>
          </div>
          <img
            src={about}
            alt="About Us"
            className="about-us-image"
            data-aos="fade-up"
            data-aos-delay="400"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section className="why-choose-us" id="why-choose-us">
        <h2 data-aos="fade-up">Why Choose Us?</h2>
        <div className="reasons" data-aos="fade-up" data-aos-delay="500">
          <div className="reason" data-aos="flip-left">
            <FaHeadset className="icon" /> {/* Fast Support Icon */}
            <h3>Fast Support</h3>
            <p>Our team provides prompt and reliable support to ensure your business runs smoothly.</p>
          </div>
          <div className="reason" data-aos="flip-left" data-aos-delay="200">
            <FaCogs className="icon" /> {/* Quality Service Icon */}
            <h3>Quality Service</h3>
            <p>We offer high-quality services tailored to your needs, ensuring top-notch performance.</p>
          </div>
          <div className="reason" data-aos="flip-left" data-aos-delay="400">
            <FaLightbulb className="icon" /> {/* Innovative Solutions Icon */}
            <h3>Innovative Solutions</h3>
            <p>We stay ahead of the curve with cutting-edge technologies and creative problem-solving techniques.</p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="process" id="process">
        <h2 data-aos="fade-up">Our Process</h2>
        <div className="process-steps">
          <div className="step" data-aos="fade-up" data-aos-delay="200">
            <FaRegCommentDots className="process-icon" /> {/* Consultation Icon */}
            <h3>Consultation</h3>
            <p>We begin by understanding your needs and objectives to tailor the best solution.</p>
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="400">
            <FaRegCalendarCheck className="process-icon" /> {/* Planning Icon */}
            <h3>Planning</h3>
            <p>Next, we create a strategic plan and roadmap for the project to ensure smooth execution.</p>
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="600">
            <FaPlayCircle className="process-icon" /> {/* Execution Icon */}
            <h3>Execution</h3>
            <p>We implement the plan and start building the solution, ensuring everything is aligned with your vision.</p>
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="800">
            <FaClipboardCheck className="process-icon" /> {/* Delivery Icon */}
            <h3>Delivery</h3>
            <p>After thorough testing and refinement, we deliver a final product that meets your expectations.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
  <h2 data-aos="fade-up">Company Profile</h2>
  <div className="testimonial-cards">
    <div className="testimonial-card" data-aos="fade-up" data-aos-delay="300">
      <img src="https://via.placeholder.com/100" alt="Client 1" />
      <h4>Het Kasundra</h4>
      <p>Executive Director</p>
      <p>Het is the Executive Director of Kasundra and Satasiya Group LLP. With a strong background in IT consulting, Het leads the company's strategic vision and business development.</p>
    </div>
    <div className="testimonial-card" data-aos="fade-up" data-aos-delay="500">
      <img src="https://via.placeholder.com/100" alt="Client 2" />
      <h4>Jeet Satasiya</h4>
      <p>Executive Director</p>
      <p>Jeet is the Executive Director of Kasundra and Satasiya Group LLP. With expertise in project management and client relations, Jeet ensures that all projects are executed flawlessly and meet client expectations.</p>
    </div>
  </div>
</section>


      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <h2 data-aos="fade-up">Our Portfolio</h2>
        <div className="portfolio-cards">
          <div className="portfolio-card" data-aos="fade-up" data-aos-delay="300">
            <img src="https://via.placeholder.com/600x400" alt="Project 1" />
            <h3>Project One</h3>
            <p>A custom website designed for a retail business to boost online sales.</p>
          </div>
          <div className="portfolio-card" data-aos="fade-up" data-aos-delay="500">
            <img src="https://via.placeholder.com/600x400" alt="Project 2" />
            <h3>Project Two</h3>
            <p>A website development project focused on user engagement and performance.</p>
          </div>
          <div className="portfolio-card" data-aos="fade-up" data-aos-delay="700">
            <img src="https://via.placeholder.com/600x400" alt="Project 3" />
            <h3>Project Three</h3>
            <p>A comprehensive website to improve brand visibility.</p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Home;
