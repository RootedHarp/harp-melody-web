
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
              src="/lovable-uploads/2d82c718-6b82-456f-87dc-854ae1bbe5b0.png" 
              alt="Christine Welden with harp" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-2/3 vine-border pl-6">
            <h3 className="font-serif text-2xl text-harp-navy mb-4">Christine Welden</h3>
            <p className="text-gray-600 mb-4">
              My journey with the harp began at the age of ten when I was captivated by its ethereal sound at a local concert. 
              What started as childhood fascination blossomed into a lifelong passion that has taken me from conservatory training 
              to performance stages across the country.
            </p>
            <p className="text-gray-600 mb-4">
              As a Christian harpist, I find deep inspiration in John 15, which speaks of abiding in Christ as branches to the vine. 
              This scripture guides both my personal faith and my approach to music, reminding me that beautiful music flows from 
              remaining connected to the source of all creativity.
            </p>
            <p className="text-gray-600">
              Today, I divide my time between performing at events, teaching students of all ages, and creating custom 
              arrangements that bring the beauty of the harp to a wide range of musical genres. My mission is to share 
              the divine gift of music with as many people as possible, whether through the joy of a live 
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
                src="/lovable-uploads/51eb80b4-8203-4dd3-8422-558925feec65.png" 
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
                src="/lovable-uploads/cdb38149-6867-4564-b5e6-c181d3069609.png" 
                alt="Formal performance setting" 
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
