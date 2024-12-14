import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '1-800-RIGHTS',
    link: 'tel:1-800-RIGHTS',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@nhro.org',
    link: 'mailto:info@nhro.org',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Monday - Friday: 9AM - 5PM',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Human Rights Ave, Washington, DC 20001',
  },
];

export function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      <div className="space-y-6">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="flex items-start space-x-3">
            <detail.icon className="h-6 w-6 text-[#B8860B] mt-1" />
            <div>
              <h3 className="font-semibold">{detail.label}</h3>
              {detail.link ? (
                <a href={detail.link} className="text-gray-600 hover:text-[#B8860B]">
                  {detail.value}
                </a>
              ) : (
                <p className="text-gray-600">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}