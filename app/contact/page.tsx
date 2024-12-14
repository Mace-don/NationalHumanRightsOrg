import { ContactForm } from '@/components/contact/contact-form';
import { LocationMap } from '@/components/contact/location-map';
import { ContactInfo } from '@/components/contact/contact-info';
import { PageHeader } from '@/components/ui/page-header';

export const metadata = {
  title: 'Contact Us - National Human Rights Organization',
  description: 'Get in touch with our team for support or inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact Us"
        description="We're here to help. Reach out to us through any of these channels."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <div>
            <ContactInfo />
            <LocationMap />
          </div>
        </div>
      </div>
    </div>
  );
}