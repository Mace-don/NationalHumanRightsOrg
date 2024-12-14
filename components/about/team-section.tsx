import Image from 'next/image';
import { Card } from '@/components/ui/card';

const team = [
  {
    name: 'Mohd. Usman',
    role: 'Chairman',
    image: 'https://i.postimg.cc/prtNf108/IMG-0886-1-1.png',
    bio: 'Leading human rights advocate with 15+ years of experience.',
  },
];

export function TeamSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div>
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="object-cover mx-auto"
                  fill
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