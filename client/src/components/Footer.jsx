import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Aikinyi Estate</h3>
            <p className="text-gray-400">
            Aikinyi Estate is the best place to find your next perfect place to live.
            <br/>We have a wide range of properties for you to choose from.
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
    
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="text-gray-400">Email: info@example.com</li>
              <li className="text-gray-400">Phone: (123) 456-7890</li>
              <li className="text-gray-400">Address: 123 Main St, City, Country</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram fa-2x"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin fa-2x"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">&copy; 2024 ismailgrapix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
