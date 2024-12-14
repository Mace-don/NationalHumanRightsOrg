import Image from 'next/image';
import { Card } from '@/components/ui/card';

const partners = [
  'United Nations Human Rights Council',
  'Amnesty International',
  'Human Rights Watch',
  'ACLU',
  'International Justice Mission',
];

export function Partners() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <Card key={partner} className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#B8860B]">{partner}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}