import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white py-6">
      <div className="container mx-auto text-center">
        <p>Connect with us:</p>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
            Twitter
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            YouTube
          </a>
        </div>
        
        {/* Contact Info */}
        <div className="mt-4">
          <p>Email: info@example.com</p>
          <p>Phone: +1 (234) 567-890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
