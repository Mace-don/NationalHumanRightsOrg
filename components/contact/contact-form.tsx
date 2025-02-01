'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const form = event.currentTarget; // Ensure correct form reference
      const formData = new FormData(form);
      const response = await fetch("https://formkeep.com/f/2d5c361cf687", {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      else {toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      }
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input name="name" id="name" required className="mt-1" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input type="email" name="email" id="email" required className="mt-1" />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <Input name="subject" id="subject" required className="mt-1" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <Textarea
              name="message"
              id="message"
              required
              className="mt-1"
              rows={6}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
  );
}
