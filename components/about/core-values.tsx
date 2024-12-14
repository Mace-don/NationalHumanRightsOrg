import { Shield, Heart, Scale, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const values = [
  {
    icon: Shield,
    title: 'Protection',
    description: 'Safeguarding fundamental human rights and dignity for all individuals.',
  },
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Approaching every case with empathy and understanding.',
  },
  {
    icon: Scale,
    title: 'Justice',
    description: 'Ensuring fair and equal treatment under the law.',
  },
  {
    icon: Users,
    title: 'Unity',
    description: 'Building strong communities through collective action.',
  },
];

export function CoreValues() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6">
              <value.icon className="h-12 w-12 text-[#B8860B] mb-4" />
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}