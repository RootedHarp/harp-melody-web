
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

  // Updated gallery items with personal photos
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'photo',
      title: 'Outdoor Performance',
      description: 'Performing at an outdoor venue with my concert grand harp',
      source: '/lovable-uploads/2d82c718-6b82-456f-87dc-854ae1bbe5b0.png',
    },
    {
      id: 2,
      type: 'photo',
      title: 'Holiday Performance',
      description: 'Christmas concert featuring seasonal favorites',
      source: '/lovable-uploads/40802da6-41fa-40e4-a204-5cd6147e90ab.png',
    },
    {
      id: 3,
      type: 'photo',
      title: 'Formal Recital',
      description: 'Formal performance in a concert hall setting',
      source: '/lovable-uploads/cdb38149-6867-4564-b5e6-c181d3069609.png',
    },
    {
      id: 4,
      type: 'photo',
      title: 'Window Light Portrait',
      description: 'Performing in a natural light setting',
      source: '/lovable-uploads/8c2062b9-018d-4129-be61-7389fcae3dcd.png',
    },
    {
      id: 5,
      type: 'photo',
      title: 'Classic Black Formal',
      description: 'Formal evening performance attire',
      source: '/lovable-uploads/51eb80b4-8203-4dd3-8422-558925feec65.png',
    },
    {
      id: 6,
      type: 'photo',
      title: 'Concert Formal',
      description: 'Red formal gown for a special concert performance',
      source: '/lovable-uploads/9ac2c2ff-0fc5-4371-898f-25058699beaf.png',
    },
    {
      id: 7,
      type: 'video',
      title: 'Arioso by J.S. Bach',
      description: 'Beautiful arrangement of this classic piece on pedal harp',
      source: 'https://www.youtube.com/embed/Qfv-e6SMiy0',
      thumbnail: '/lovable-uploads/40802da6-41fa-40e4-a204-5cd6147e90ab.png',
    },
    {
      id: 8,
      type: 'video',
      title: 'The Swan by Saint-Saëns',
      description: 'A graceful rendition of this beloved classical piece',
      source: 'https://www.youtube.com/embed/g4NsWcG8E-E',
      thumbnail: '/lovable-uploads/cdb38149-6867-4564-b5e6-c181d3069609.png',
    },
    {
      id: 9,
      type: 'video',
      title: 'Be Thou My Vision',
      description: 'Traditional Celtic hymn arranged for harp',
      source: 'https://www.youtube.com/embed/jfFr9RlJYbA',
      thumbnail: '/lovable-uploads/8c2062b9-018d-4129-be61-7389fcae3dcd.png',
    },
    {
      id: 10,
      type: 'audio',
      title: 'Original Composition: "Reflections"',
      description: 'An original piece composed for solo harp, inspired by nature',
      source: 'https://soundcloud.com/user-796974546/harp-song',
      thumbnail: '/lovable-uploads/2d82c718-6b82-456f-87dc-854ae1bbe5b0.png',
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
