
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will get back to you soon!',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-gray-300 focus:border-harp-gold focus:ring-harp-gold"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-gray-300 focus:border-harp-gold focus:ring-harp-gold"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border-gray-300 focus:border-harp-gold focus:ring-harp-gold"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border-gray-300 focus:border-harp-gold focus:ring-harp-gold"
        />
      </div>
      
      <Button type="submit" className="bg-harp-gold hover:bg-amber-600 text-white py-2 px-6">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
