
import { Mail, Phone, MapPin, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-harp-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and brief intro */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-harp-gold" />
              <span className="font-serif text-xl">Harp Elegance</span>
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left">
              Bringing the elegant sounds of the harp to performances, education, and custom arrangements.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-lg mb-4 border-b border-harp-gold pb-2">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-gray-300 hover:text-harp-gold transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-gray-300 hover:text-harp-gold transition-colors">About</Link>
              <Link to="/services" className="text-sm text-gray-300 hover:text-harp-gold transition-colors">Services</Link>
              <Link to="/gallery" className="text-sm text-gray-300 hover:text-harp-gold transition-colors">Gallery</Link>
              <Link to="/contact" className="text-sm text-gray-300 hover:text-harp-gold transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-lg mb-4 border-b border-harp-gold pb-2">Contact Info</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-harp-gold" />
                <span className="text-sm">contact@harpelegance.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-harp-gold" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-harp-gold" />
                <span className="text-sm">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} Harp Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
