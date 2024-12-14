'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Users, Scale, Award, Heart } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    label: 'People Helped',
    value: 500,
    suffix: '+',
  },
  {
    icon: Scale,
    label: 'Cases Won',
    value: 100,
    suffix: '+',
  },
  {
    icon: Award,
    label: 'Years of Service',
    value: 10,
    suffix: '',
  },
  {
    icon: Heart,
    label: 'Partner Organizations',
    value: 10,
    suffix: '+',
  },
];

export function ImpactMetrics() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 text-center">
              <metric.icon className="h-12 w-12 mx-auto mb-4 text-[#B8860B]" />
              <h3 className="text-4xl font-bold mb-2">
                {animated ? metric.value : 0}{metric.suffix}
              </h3>
              <p className="text-gray-600">{metric.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}