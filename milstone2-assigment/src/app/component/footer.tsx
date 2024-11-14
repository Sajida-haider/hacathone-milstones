import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Connect with us:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" className="icon facebook" target="_blank" rel="noopener noreferrer">F</a>
          <a href="https://www.instagram.com" className="icon instagram" target="_blank" rel="noopener noreferrer">I</a>
          <a href="https://www.twitter.com" className="icon twitter" target="_blank" rel="noopener noreferrer">T</a>
          <a href="https://www.whatsapp.com" className="icon whatsapp" target="_blank" rel="noopener noreferrer">W</a>
        </div>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (234) 567-890</p>
      </div>
    </footer>
  );
};

export default Footer;




