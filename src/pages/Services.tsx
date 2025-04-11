import { CalendarDays, BookOpen, FileMusic, Users, Clock, CreditCard } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Card from '@/components/Card';
import Button from '@/components/Button';
const Services = () => {
  return <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Professional harp services for every occasion">
          Services
        </SectionHeading>
        
        {/* Performance Services */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="font-serif text-2xl text-harp-navy mb-4">Performance Services</h3>
              <p className="text-gray-600 mb-6">
                Live harp music adds an unforgettable elegance to any event. From intimate gatherings to grand celebrations,
                I offer customized musical experiences tailored to your specific needs and preferences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CalendarDays className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Weddings (ceremonies, cocktail hours, receptions)</span>
                </li>
                <li className="flex items-start">
                  <CalendarDays className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Corporate events and receptions</span>
                </li>
                <li className="flex items-start">
                  <CalendarDays className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Private parties and celebrations</span>
                </li>
                <li className="flex items-start">
                  <CalendarDays className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Memorial services and religious ceremonies</span>
                </li>
                <li className="flex items-start">
                  <CalendarDays className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Holiday parties and seasonal events</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button to="/contact" variant="primary">
                  Book a Performance
                </Button>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1448422221562-104930d4993e?q=80&w=2070&auto=format&fit=crop" alt="Harp performance" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
            <h4 className="font-serif text-xl text-harp-navy mb-4">Additional Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <h5 className="font-medium flex items-center mb-2">
                  <Clock className="h-5 w-5 text-harp-gold mr-2" />
                  Booking Timeline
                </h5>
                <p className="text-gray-600">
                  For best availability, book 3-6 months in advance for weddings, 2-3 months for other events. 
                  Last-minute bookings accommodated when possible.
                </p>
              </div>
              
              <div className="flex flex-col">
                <h5 className="font-medium flex items-center mb-2">
                  <CreditCard className="h-5 w-5 text-harp-gold mr-2" />
                  Pricing
                </h5>
                <p className="text-gray-600">
                  Performance fees vary based on duration, location, and specific requirements. 
                  Contact for a personalized quote based on your event details.
                </p>
              </div>
              
              <div className="flex flex-col">
                <h5 className="font-medium flex items-center mb-2">
                  <Users className="h-5 w-5 text-harp-gold mr-2" />
                  Ensemble Options
                </h5>
                <p className="text-gray-600">Solo harp is most popular, but duo options with other instruments can also be arranged.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Teaching Services */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1598978554684-49c47ae19198?q=80&w=2070&auto=format&fit=crop" alt="Harp lesson" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-2xl text-harp-navy mb-4">Instruction Services</h3>
              <p className="text-gray-600 mb-6">
                Personalized harp lessons designed to nurture technical skill, musical expression, and a lifelong love 
                of this beautiful instrument. As an Adjunct Faculty in Harp at Tulsa Community College, I bring professional 
                expertise to every lesson. Classes are available online or in the student's home, providing
                flexible options to suit your schedule and learning style.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Private lessons for students of all ages and skill levels</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Specialized instruction for pedal or lever harp</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Repertoire development across classical, folk, religious, and contemporary styles</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Technique workshops and masterclasses</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Performance preparation and audition coaching</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button to="/contact" variant="primary">
                  Inquire About Lessons
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="font-serif text-xl text-harp-navy mb-4">Student Focus</h4>
            <p className="text-gray-600 mb-4">
              While I welcome students of all ages, I particularly enjoy working with teenagers and adults. My teaching approach 
              is adaptable to various learning styles, and I take special care to match repertoire with each student's interests 
              and goals. Whether you're fulfilling a lifelong dream to play the harp or continuing your musical development, 
              I'm committed to making your learning experience enjoyable and rewarding.
            </p>
            <p className="text-gray-600">
              As someone who has experienced and overcome learning challenges, I'm especially adept at finding creative solutions 
              for students with unique needs or circumstances. Every student is different, and I tailor my teaching methods accordingly.
            </p>
          </div>
        </div>
        
        {/* Arrangement Services */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="font-serif text-2xl text-harp-navy mb-4">Arrangement Services</h3>
              <p className="text-gray-600 mb-6">
                Custom arrangements tailored to your technical abilities and musical preferences. Whether you need 
                music for performance, teaching, or personal enjoyment, I can create harp arrangements that bring 
                your favorite pieces to life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FileMusic className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Popular songs adapted for harp</span>
                </li>
                <li className="flex items-start">
                  <FileMusic className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Classical pieces arranged for your skill level</span>
                </li>
                <li className="flex items-start">
                  <FileMusic className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Folk and traditional music adaptations</span>
                </li>
                <li className="flex items-start">
                  <FileMusic className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Original compositions for special occasions</span>
                </li>
                <li className="flex items-start">
                  <FileMusic className="h-5 w-5 text-harp-gold mt-0.5 mr-2" />
                  <span>Ensemble arrangements featuring harp</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button to="/contact" variant="primary">
                  Request an Arrangement
                </Button>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop" alt="Sheet music with harp" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
            <h4 className="font-serif text-xl text-harp-navy mb-4">How the Process Works</h4>
            <ol className="space-y-4">
              <li className="flex">
                <span className="bg-harp-gold text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <div>
                  <p className="font-medium">Consultation</p>
                  <p className="text-gray-600">We'll discuss your needs, the piece you want arranged, and your skill level or performance context.</p>
                </div>
              </li>
              <li className="flex">
                <span className="bg-harp-gold text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <div>
                  <p className="font-medium">Proposal</p>
                  <p className="text-gray-600">You'll receive a quote based on the complexity of the arrangement and timeframe required.</p>
                </div>
              </li>
              <li className="flex">
                <span className="bg-harp-gold text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <div>
                  <p className="font-medium">Creation</p>
                  <p className="text-gray-600">I'll craft your arrangement, with the option for revisions to ensure it meets your needs.</p>
                </div>
              </li>
              <li className="flex">
                <span className="bg-harp-gold text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <div>
                  <p className="font-medium">Delivery</p>
                  <p className="text-gray-600">You'll receive a professional PDF score and, if requested, a reference recording of the arrangement.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>;
};
export default Services;
