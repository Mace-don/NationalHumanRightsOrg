import Image from 'next/image';
import { Card } from '@/components/ui/card';

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Leading human rights advocate with 15+ years of experience.',
  },
  {
    name: 'Michael Chen',
    role: 'Legal Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    bio: 'International law expert specializing in human rights cases.',
  },
  {
    name: 'Dr. Amara Patel',
    role: 'Research Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    bio: 'Leading research initiatives in human rights policy.',
  },
];

export function TeamSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#B8860B] mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}