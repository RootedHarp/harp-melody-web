
import { Mail, Phone, MapPin, Globe, Clock, CalendarDays } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Reach out to discuss performances, lessons, or arrangements">
          Contact Me
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl text-harp-navy mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              I'd love to hear from you! Whether you're interested in booking a performance, inquiring about lessons, 
              or discussing a custom arrangement, please fill out the form or contact me directly using the information below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-harp-gold mt-1 mr-3" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-600">contact@harpelegance.com</p>
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
              
              <div className="flex items-start">
                <Globe className="h-5 w-5 text-harp-gold mt-1 mr-3" />
                <div>
                  <h4 className="font-medium mb-1">Social Media</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-600 hover:text-harp-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@christinewelden" className="text-gray-600 hover:text-harp-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-harp-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-harp-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ContactForm />
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
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-medium mb-2">Teaching Studio Hours</h4>
              <p className="text-gray-600">
                <span className="font-medium">Monday - Thursday:</span> 2:00 PM - 8:00 PM<br />
                <span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM<br />
                <span className="font-medium">Sunday & Friday:</span> Reserved for performances
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden h-80">
          {/* Updated the map embed to Tulsa, Oklahoma */}
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
