
import SectionHeading from '@/components/SectionHeading';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Learn more about my background and musical journey">
          About Me
        </SectionHeading>
        
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1621368286550-f54551f39b91?q=80&w=1974&auto=format&fit=crop" 
              alt="Harpist portrait" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-2/3">
            <h3 className="font-serif text-2xl text-harp-navy mb-4">My Story</h3>
            <p className="text-gray-600 mb-4">
              My journey with the harp began at the age of ten when I was captivated by its ethereal sound at a local concert. 
              What started as childhood fascination blossomed into a lifelong passion that has taken me from conservatory training 
              to performance stages across the country.
            </p>
            <p className="text-gray-600 mb-4">
              After graduating with honors from the prestigious Eastman School of Music with a degree in Harp Performance, 
              I pursued advanced studies in Paris, where I was exposed to both classical and contemporary harp techniques. 
              This diverse training has informed my approach to both performance and teaching.
            </p>
            <p className="text-gray-600">
              Today, I divide my time between performing at events, teaching students of all ages, and creating custom 
              arrangements that bring the beauty of the harp to a wide range of musical genres. My mission is to share 
              the magic of this ancient instrument with as many people as possible, whether through the joy of a live 
              performance or the satisfaction of helping a student master a challenging piece.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <SectionHeading>Musical Background</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-sm p-6">
              <h4 className="font-serif text-xl text-harp-navy mb-3">Education</h4>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Eastman School of Music</p>
                  <p className="text-gray-600">Bachelor of Music, Harp Performance</p>
                </li>
                <li>
                  <p className="font-medium">Conservatoire National Supérieur de Musique de Paris</p>
                  <p className="text-gray-600">Advanced Studies in Harp Performance</p>
                </li>
                <li>
                  <p className="font-medium">Tanglewood Music Center</p>
                  <p className="text-gray-600">Fellowship Program in Chamber Music</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-sm p-6">
              <h4 className="font-serif text-xl text-harp-navy mb-3">Performance Experience</h4>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Orchestral</p>
                  <p className="text-gray-600">Principal Harpist, Metropolitan Chamber Orchestra (2018-Present)</p>
                </li>
                <li>
                  <p className="font-medium">Chamber Music</p>
                  <p className="text-gray-600">Founding member of Windborne Trio (flute, cello, harp)</p>
                </li>
                <li>
                  <p className="font-medium">Solo Recitals</p>
                  <p className="text-gray-600">Regular performances at Lincoln Center, Merkin Hall, and international harp festivals</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <SectionHeading>Instruments</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1593713888259-d58563a73c3d?q=80&w=2072&auto=format&fit=crop" 
                alt="Concert grand harp" 
                className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
              />
              <h4 className="font-serif text-xl text-harp-navy mb-2">Concert Grand Harp</h4>
              <p className="text-gray-600">
                Lyon & Healy Style 23 Gold with extended soundboard. This magnificent instrument produces a warm, 
                robust sound perfect for recitals, orchestral work, and larger venues.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1593713887232-947193699876?q=80&w=2070&auto=format&fit=crop" 
                alt="Lever harp" 
                className="rounded-lg shadow-md w-full h-auto object-cover mb-4"
              />
              <h4 className="font-serif text-xl text-harp-navy mb-2">Celtic Lever Harp</h4>
              <p className="text-gray-600">
                Dusty Strings FH36S, 36 strings. This versatile lever harp is ideal for Celtic music, folk traditions, 
                intimate gatherings, and outdoor events where a pedal harp might be impractical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
