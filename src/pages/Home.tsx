
import { Music, BookOpen, FileMusic } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-harp-navy mb-6 animate-fade-in">
            Elegant Harp <span className="text-harp-gold">Performance</span> & <span className="text-harp-gold">Instruction</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Bringing the timeless beauty of harp music to your special occasions, 
            offering expert instruction, and creating custom arrangements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button to="/contact" variant="primary" size="lg">
              Book a Consultation
            </Button>
            <Button to="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Discover the range of musical services available to meet your needs">
            Services Offered
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              title="Performances" 
              icon={<Music size={36} />}
              className="animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <p>Professional harp music for weddings, corporate events, private parties, and other special occasions.</p>
              <Link to="/services" className="text-harp-gold font-medium inline-block mt-4 hover:underline">
                Learn more
              </Link>
            </Card>
            
            <Card 
              title="Instruction" 
              icon={<BookOpen size={36} />}
              className="animate-fade-in" 
              style={{ animationDelay: "0.2s" }}
            >
              <p>Private harp lessons for students of all ages and skill levels, from beginners to advanced performers.</p>
              <Link to="/services" className="text-harp-gold font-medium inline-block mt-4 hover:underline">
                Learn more
              </Link>
            </Card>
            
            <Card 
              title="Arrangements" 
              icon={<FileMusic size={36} />}
              className="animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              <p>Custom music arrangements for harp, tailored to your preferences and technical requirements.</p>
              <Link to="/services" className="text-harp-gold font-medium inline-block mt-4 hover:underline">
                Learn more
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 featured-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1619496308320-4c28a4ca0772?q=80&w=2069&auto=format&fit=crop" 
                alt="Harpist performing" 
                className="rounded-lg shadow-lg w-full h-auto object-cover" 
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl text-harp-navy mb-4">Experience the Magic of Live Harp Music</h2>
              <p className="text-gray-600 mb-6">
                The harp creates an atmosphere of elegance and tranquility that transforms any event into a 
                memorable experience. With a repertoire spanning classical, contemporary, folk, and popular music, 
                I can tailor performances to perfectly complement your occasion.
              </p>
              <Button to="/gallery" variant="primary">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="What clients and students have to say">
            Testimonials
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="italic text-gray-600 mb-4">
                "The beautiful harp music created the perfect ambiance for our wedding ceremony. 
                Our guests were captivated, and we couldn't have asked for a more elegant soundtrack to our special day."
              </p>
              <p className="font-medium">— Sarah & Michael, Wedding Clients</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="italic text-gray-600 mb-4">
                "As someone who always wanted to learn the harp but never had the opportunity until adulthood, 
                I'm amazed at how quickly I've progressed under such patient and skilled instruction."
              </p>
              <p className="font-medium">— James R., Adult Student</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button to="/contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
