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
            Rooted <span className="text-harp-gold">Harp</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            "I am the vine; you are the branches. If you remain in me and I in you, 
            you will bear much fruit..." — John 15:5
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
              <p>Professional harp music for weddings, corporate events, private parties, church services, and other special occasions.</p>
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
                src="/lovable-uploads/9ac2c2ff-0fc5-4371-898f-25058699beaf.png" 
                alt="Christine Welden with harp" 
                className="rounded-lg shadow-lg w-full h-auto object-cover" 
              />
            </div>
            <div className="md:w-1/2 vine-border pl-6">
              <h2 className="font-serif text-3xl text-harp-navy mb-4">Experience the Divine through Harp Music</h2>
              <p className="text-gray-600 mb-6">
                The harp creates an atmosphere of elegance and tranquility that transforms any event into a 
                memorable experience. With a repertoire spanning sacred, classical, contemporary, folk, and popular music, 
                I can tailor performances to perfectly complement your occasion.
              </p>
              <Button to="/gallery" variant="primary">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Share your thoughts about your experience">
            Share Your Experience
          </SectionHeading>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
            <p className="text-gray-600 mb-6">
              Have you worked with me for a performance, taken lessons, or used one of my arrangements? 
              I'd love to hear about your experience! Your feedback helps me improve my services 
              and helps others learn more about what I offer.
            </p>
            <Button to="/contact" variant="primary">
              Share Your Feedback
            </Button>
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
