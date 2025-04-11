
import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Define our gallery item type
interface GalleryItem {
  id: number;
  type: 'photo' | 'video' | 'audio';
  source: string;
  thumbnail?: string;
}

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Updated gallery items with just source URLs
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'photo',
      source: '/lovable-uploads/2d82c718-6b82-456f-87dc-854ae1bbe5b0.png',
    },
    {
      id: 2,
      type: 'photo',
      source: '/lovable-uploads/40802da6-41fa-40e4-a204-5cd6147e90ab.png',
    },
    {
      id: 3,
      type: 'photo',
      source: '/lovable-uploads/cdb38149-6867-4564-b5e6-c181d3069609.png',
    },
    {
      id: 4,
      type: 'photo',
      source: '/lovable-uploads/8c2062b9-018d-4129-be61-7389fcae3dcd.png',
    },
    {
      id: 5,
      type: 'photo',
      source: '/lovable-uploads/51eb80b4-8203-4dd3-8422-558925feec65.png',
    },
    {
      id: 6,
      type: 'photo',
      source: '/lovable-uploads/9ac2c2ff-0fc5-4371-898f-25058699beaf.png',
    },
    {
      id: 7,
      type: 'video',
      source: 'https://www.youtube.com/embed/Qfv-e6SMiy0',
      thumbnail: '/lovable-uploads/40802da6-41fa-40e4-a204-5cd6147e90ab.png',
    },
    {
      id: 8,
      type: 'video',
      source: 'https://www.youtube.com/embed/g4NsWcG8E-E',
      thumbnail: '/lovable-uploads/cdb38149-6867-4564-b5e6-c181d3069609.png',
    },
    {
      id: 9,
      type: 'video',
      source: 'https://www.youtube.com/embed/jfFr9RlJYbA',
      thumbnail: '/lovable-uploads/8c2062b9-018d-4129-be61-7389fcae3dcd.png',
    },
    {
      id: 10,
      type: 'audio',
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
            <div className="mx-auto max-w-5xl">
              <Carousel className="w-full">
                <CarouselContent>
                  {photos.map((item) => (
                    <CarouselItem key={item.id}>
                      <Dialog>
                        <DialogTrigger asChild>
                          <div 
                            className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:shadow-lg"
                            onClick={() => setSelectedItem(item)}
                          >
                            <div className="relative h-96">
                              <img 
                                src={item.source} 
                                alt="Harp performance" 
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden">
                          <img 
                            src={item.source} 
                            alt="Harp performance" 
                            className="w-full h-auto"
                          />
                        </DialogContent>
                      </Dialog>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="static translate-y-0 mr-2" />
                  <CarouselNext className="static translate-y-0 ml-2" />
                </div>
              </Carousel>
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src={item.source} 
                      title="Harp performance video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-96 border-0"
                    ></iframe>
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
                      alt="Harp audio thumbnail" 
                      className="w-full md:w-48 h-48 object-cover rounded-md shadow-sm"
                    />
                    <div className="flex-1">
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
