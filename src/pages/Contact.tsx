
import { Mail, Phone, MapPin, Globe, Clock, CalendarDays } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Reach out to discuss performances, lessons, or arrangements">
          Contact Me
        </SectionHeading>
        
        <div className="bg-white p-8 rounded-lg shadow-sm mb-16 max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl text-harp-navy mb-6">Get in Touch</h3>
          <p className="text-gray-600 mb-8">
            I'd love to hear from you! Whether you're interested in booking a performance, inquiring about lessons, 
            or discussing a custom arrangement, please contact me directly using the information below.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-harp-gold mt-1 mr-3" />
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-gray-600">RootedHarpist@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-harp-gold mt-1 mr-3" />
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <p className="text-gray-600">918-928-9315</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-harp-gold mt-1 mr-3" />
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-gray-600">Tulsa, Oklahoma</p>
                <p className="text-gray-600 text-sm mt-1">Available for performances throughout Oklahoma and teaching both in-person and online</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <CalendarDays className="h-6 w-6 text-harp-gold mt-1 mr-3" />
              <h3 className="font-serif text-xl text-harp-navy">Booking Information</h3>
            </div>
            <p className="text-gray-600 mb-4">
              When inquiring about a performance, please include the following details to help me provide you with the most accurate information:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Date, time, and location of your event</li>
              <li>• Type of event (wedding, corporate, private party, etc.)</li>
              <li>• Approximate duration of music needed</li>
              <li>• Any specific music preferences or special requests</li>
              <li>• Whether the event is indoors or outdoors</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <Clock className="h-6 w-6 text-harp-gold mt-1 mr-3" />
              <h3 className="font-serif text-xl text-harp-navy">Response Time</h3>
            </div>
            <p className="text-gray-600">
              I strive to respond to all inquiries within 24-48 hours. For urgent matters, please indicate this in your message or contact me directly by phone.
            </p>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206771.8886038468!2d-96.0692724478827!3d36.13914948661224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b8ddd12e8f%3A0xe76910c81bd96af7!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1712697252900!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
