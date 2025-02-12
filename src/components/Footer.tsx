import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { FaTiktok, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Beaker className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-montserrat font-bold">Aricia Labs</span>
            </div>
            <p className="text-gray-400">
              Turning Vision into Reality with Innovative Solutions Powered by Cutting-Edge Technology and Expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a href="mailto:info@aricialabs.com" className="text-gray-400 hover:text-white transition-colors">
                  aricialabs@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <a href="tel:+9779844400856" className="text-gray-400 hover:text-white transition-colors">
                  +977 9844400856
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-400">Hetauda-8, Kamane, Nepal</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    <a href="https://www.linkedin.com/company/106207598/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
      <Linkedin className="h-6 w-6" />
    </a>
    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
      <Twitter className="h-6 w-6" />
    </a>
    <a href="https://www.facebook.com/profile.php?id=61569922735461&sk=about" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
      <Facebook className="h-6 w-6" />
    </a>
    <a href="https://www.instagram.com/aricia_labs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
      <FaInstagram className="h-6 w-6" />
    </a>
    <a href="https://www.tiktok.com/@aricia_labs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
      <FaTiktok className="h-6 w-6" />
    </a>
    <a href="https://discord.gg/qjKvr65r" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
      <FaDiscord className="h-6 w-6" />
    </a>
  </div>
</div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aricia Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
