
import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Define our gallery item type
interface GalleryItem {
  id: number;
  type: 'photo' | 'video' | 'audio';
  title: string;
  description: string;
  source: string;
  thumbnail?: string;
}

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Sample gallery items
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'photo',
      title: 'Wedding Ceremony Performance',
      description: 'Providing elegant music for a garden wedding ceremony',
      source: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      type: 'photo',
      title: 'Recital at Lincoln Center',
      description: 'Annual solo recital featuring works by Debussy and Salzedo',
      source: 'https://images.unsplash.com/photo-1566884758665-7d651a334cbe?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 3,
      type: 'photo',
      title: 'Chamber Music Festival',
      description: 'Performing with the Windborne Trio at the Summer Chamber Music Festival',
      source: 'https://images.unsplash.com/photo-1558584673-2875fd48ca77?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      type: 'photo',
      title: 'Master Class',
      description: 'Leading an advanced technique master class for conservatory students',
      source: 'https://images.unsplash.com/photo-1629288333408-1b744a3a652a?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 5,
      type: 'photo',
      title: 'Corporate Event',
      description: 'Providing background music for an elegant corporate reception',
      source: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 6,
      type: 'photo',
      title: 'Holiday Concert',
      description: 'Annual holiday concert featuring seasonal favorites',
      source: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=2069&auto=format&fit=crop',
    },
    {
      id: 7,
      type: 'video',
      title: 'Claire de Lune Performance',
      description: 'Solo performance of Debussy\'s Claire de Lune at the Spring Recital Series',
      source: 'https://www.youtube.com/embed/CvFH_6DNRCY',
      thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 8,
      type: 'video',
      title: 'Celtic Melody Collection',
      description: 'A medley of traditional Celtic pieces on lever harp',
      source: 'https://www.youtube.com/embed/JGCJZAKv-YA',
      thumbnail: 'https://images.unsplash.com/photo-1551918760-84e6e574c5a2?q=80&w=2087&auto=format&fit=crop',
    },
    {
      id: 9,
      type: 'audio',
      title: 'Original Composition: "Reflections"',
      description: 'An original piece composed for solo harp, inspired by nature',
      source: 'https://soundcloud.com/user-796974546/harp-song',
      thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop',
    },
  ];

  // Filter items by type
  const photos = galleryItems.filter(item => item.type === 'photo');
  const videos = galleryItems.filter(item => item.type === 'video');
  const audio = galleryItems.filter(item => item.type === 'audio');

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Browse photos, videos, and recordings of performances and events">
          Gallery
        </SectionHeading>
        
        <Tabs defaultValue="photos" className="mb-16">
          <TabsList className="mx-auto flex justify-center mb-8">
            <TabsTrigger value="photos" className="text-sm px-6">Photos</TabsTrigger>
            <TabsTrigger value="videos" className="text-sm px-6">Videos</TabsTrigger>
            <TabsTrigger value="audio" className="text-sm px-6">Audio</TabsTrigger>
          </TabsList>
          
          <TabsContent value="photos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:shadow-lg"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="relative h-64">
                        <img 
                          src={item.source} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-serif text-lg text-harp-navy mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden">
                    <img 
                      src={item.source} 
                      alt={item.title} 
                      className="w-full h-auto"
                    />
                    <div className="p-6">
                      <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src={item.source} 
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-96 border-0"
                    ></iframe>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-serif text-lg text-harp-navy mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="audio">
            <div className="grid grid-cols-1 gap-6">
              {audio.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-lg shadow-md bg-white p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full md:w-48 h-48 object-cover rounded-md shadow-sm"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-harp-navy mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <iframe 
                        width="100%" 
                        height="120" 
                        scrolling="no" 
                        frameBorder="no" 
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/336859040&color=%23d4af37&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl text-harp-navy mb-4">Interested in Booking a Performance?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Whether you need elegant music for a special event or are interested in lessons, I'd love to discuss how we can work together.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-harp-gold text-white font-medium rounded-md hover:bg-amber-600 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
