import React from 'react';


export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Feel free to reach out with any questions or feedback.</p>
      
      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        
        {/* Contact Information */}
        <div className="contact-info">
          <p><strong>Email:</strong> info@example.com</p>
          <p><strong>Phone:</strong> +1 (234) 567-890</p>
          <p><strong>Address:</strong> 123 Main St, City, Country</p>
        </div>
      </div>
    </section>
  );
}

  
