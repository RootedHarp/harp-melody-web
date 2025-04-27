
import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface GalleryItem {
  id: number;
  type: 'photo' | 'video' | 'audio';
  source: string;
  thumbnail?: string;
}

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const logoSource = '/img/9f60ef47-09f6-444f-8242-d656c7d2c338.png';
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'photo',
      source: '/img/2d82c718-6b82-456f-87dc-854ae1bbe5b0.png',
    },
    {
      id: 2,
      type: 'photo',
      source: '/img/51eb80b4-8203-4dd3-8422-558925feec65.png',
    },
    {
      id: 3,
      type: 'photo',
      source: '/img/3bf6be33-97e0-409d-bde3-c62221ac8955.png',
    },
    {
      id: 4,
      type: 'photo',
      source: '/img/1e2c05fa-e415-432a-a266-d71ea6c3720f.png',
    },
    {
      id: 5,
      type: 'photo',
      source: '/img/cdb38149-6867-4564-b5e6-c181d3069609.png',
    },
    {
      id: 6,
      type: 'photo',
      source: logoSource,
    },
    {
      id: 7,
      type: 'video',
      source: 'https://www.youtube.com/embed/Qfv-e6SMiy0',
      thumbnail: logoSource,
    },
    {
      id: 8,
      type: 'video',
      source: 'https://www.youtube.com/embed/g4NsWcG8E-E',
      thumbnail: logoSource,
    },
    {
      id: 9,
      type: 'video',
      source: 'https://www.youtube.com/embed/jfFr9RlJYbA',
      thumbnail: logoSource,
    },
    {
      id: 10,
      type: 'audio',
      source: 'https://soundcloud.com/user-796974546/harp-song',
      thumbnail: logoSource,
    },
  ];

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
              <Carousel 
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {photos.map((item) => (
                    <CarouselItem key={item.id} className="md:basis-1/1 lg:basis-1/1">
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
                          <DialogTitle className="sr-only">Harp Performance Image</DialogTitle>
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
            <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-lg">
              <img 
                src="/img/9ac2c2ff-0fc5-4371-898f-25058699beaf.png"
                alt="Rooted Harp Logo" 
                className="w-32 h-32 mb-8 opacity-50"
              />
              <h3 className="text-3xl font-serif text-harp-navy mb-4">Audio Coming Soon</h3>
              <p className="text-gray-600 text-center max-w-md">
                Audio recordings are currently being prepared and will be available soon. Please check back later!
              </p>
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
