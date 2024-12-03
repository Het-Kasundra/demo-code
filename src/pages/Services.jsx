import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/services.css';

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: 'Website Development',
      description: 'We create professional and responsive websites tailored to your specific business needs, ensuring a seamless user experience.',
      icon: '🌐',
    },
    {
      title: 'Website Management',
      description: 'Our team provides reliable website maintenance and management, ensuring optimal performance and uptime.',
      icon: '⚙️',
    },
    {
      title: 'Custom Web Applications',
      description: 'Build scalable and feature-rich web applications designed to streamline your operations and improve user engagement.',
      icon: '💻',
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Launch a successful online store with our e-commerce development services, including payment gateway integration and product management.',
      icon: '🛒',
    },
    {
      title: 'UI/UX Design',
      description: 'Enhance your digital presence with modern, intuitive, and user-friendly designs crafted by our expert designers.',
      icon: '🎨',
    },
    {
      title: 'Technical Support & Troubleshooting',
      description: 'Get 24/7 technical support for your IT systems to resolve issues quickly and minimize downtime.',
      icon: '🔧',
    },
  ];

  return (
    <div className="services">
      <h1 className="services-heading" data-aos="fade-up">Our Services</h1>
      <p className="services-intro" data-aos="fade-up">
        At Kasundra and Satasiya Group LLP, we provide comprehensive IT solutions to help businesses succeed. Explore our core services below:
      </p>
      <div className="services-list">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`} // Adds delay for staggered animations
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
