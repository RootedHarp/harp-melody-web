
import SectionHeading from '@/components/SectionHeading';
const About = () => {
  return <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Learn more about my background and musical journey">
          About Me
        </SectionHeading>
        
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/3">
            <img src="/lovable-uploads/51eb80b4-8203-4dd3-8422-558925feec65.png" alt="Christine Welden with harp" className="rounded-lg shadow-md w-full h-auto object-cover" />
          </div>
          
          <div className="md:w-2/3 vine-border pl-6">
            <h3 className="font-serif text-2xl text-harp-navy mb-4">Christine Welden</h3>
            <p className="text-gray-600 mb-4">
              When I was five years old I first heard a harp played at church, and I fell in love! I begged my parents for a harp - for years. 
              After much consultation they decided piano might be a better instrument to start with so at age seven I started piano lessons. 
              While I enjoyed piano, I never lost my desire to play the harp and finally at age 11 I started harp lessons.
            </p>
            <p className="text-gray-600 mb-4">
              I continued to play piano, and taught myself accordion for the fun of it, but harp was always my main focus. 
              I played in many recitals, competed in local and state competitions, and played in a few ensembles from age 11 to about 18. 
              I never got tired of playing the harp, and during my high school years decided to pursue harp as my profession. 
              So, I continued my harp instruction at Oral Roberts University and graduated with my Bachelors in Music Performance in 2014. 
              I then completed my Masters degree in Music Education from Boston University in 2017.
            </p>
            <p className="text-gray-600">
              As a Christian harpist, I find deep inspiration in John 15, which speaks of abiding in Christ as branches to the vine. 
              This scripture guides both my personal faith and my approach to music, reminding me that beautiful music flows from 
              remaining connected to the source of all creativity.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <SectionHeading>My Teaching Philosophy</SectionHeading>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-10">
            <p className="text-gray-600 mb-4">
              While at ORU pursuing my degree, I began tutoring and teaching both music theory and harp. My love for teaching has only grown since then. 
              My joy is to see my student succeed in their desires for the harp. No two students are exactly the same and my desire is to teach in a way 
              that fits the individuality of each student. Keeping the musical preferences of my student in mind, I strive to choose repertoire that will 
              be enjoyable and also expand her or his musical horizons.
            </p>
            
            <p className="text-gray-600 mb-4">
              Backing up a little, I was born with a birth defect that affected the nerve between my eyes and my brain, basically, it didn't mature like it should. 
              The fancy name for this is Optic Nerve Hypoplasia, and it is non-curable according to medical professionals. My parents were told that by early 
              adolescence I would go completely blind. I'm not sure what you believe about the supernatural, but I and my parents believe in miracles. 
              When I was seven I experienced a healing - not complete, but there was a definite change for the better. I was no longer color blind as I had been before, 
              and now more than 25 years later I am not totally blind! I do still have a visual impairment, but it has not held me back too much. 
              I am still believing for a complete healing, but I am continuing to move forward with God's plan for me in the meantime.
            </p>
            
            <p className="text-gray-600">
              I have told you about my vision not so you feel sorry for me, please don't! Instead, I want you to know my journey. 
              Having a visual impairment has made learning music a challenge sometimes, and I and my teachers have had to be creative. 
              Now, I enjoy the challenge of teaching in unusual situations, so if my student encounters a challenge - either temporary or 
              seemingly permanent - we will work together to find creative solutions.
            </p>
          </div>
          
          <p className="text-gray-600 italic text-center">
            "In the world outside of music (if one exists!), I work in Higher Education Administration, enjoy teaching at church, 
            being with family, and anything to do with horses. I don't have too much time for hobbies, so that's about it."
          </p>
        </div>
        
        <div>
          <SectionHeading>Musical Background</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-sm p-6">
              <h4 className="font-serif text-xl text-harp-navy mb-3">Education</h4>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Oral Roberts University</p>
                  <p className="text-gray-600">Bachelor of Music, Performance</p>
                </li>
                <li>
                  <p className="font-medium">Boston University</p>
                  <p className="text-gray-600">Master of Music in Music Education</p>
                </li>
                <li>
                  <p className="font-medium">Current Position</p>
                  <p className="text-gray-600">Adjunct Faculty in Harp at Tulsa Community College</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-sm p-6">
              <h4 className="font-serif text-xl text-harp-navy mb-3">Performance Experience</h4>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Solo Performances</p>
                  <p className="text-gray-600">Over 15 years of experience with weddings, memorials, banquets, and other special events</p>
                </li>
                <li>
                  <p className="font-medium">Orchestral</p>
                  <p className="text-gray-600">Guest Harpist, Tulsa Community College Community Orchestra</p>
                </li>
                <li>
                  <p className="font-medium">Competitive</p>
                  <p className="text-gray-600">Participation in local and state competitions throughout formative years</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default About;
