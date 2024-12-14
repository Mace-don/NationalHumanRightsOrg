import Image from 'next/image';
import { TeamSection } from '@/components/about/team-section';
import { CoreValues } from '@/components/about/core-values';
import { Partners } from '@/components/about/partners';
import { PageHeader } from '@/components/ui/page-header';

export const metadata = {
  title: 'About Us - National Human Rights Organization',
  description: 'Learn about our mission, team, and commitment to human rights.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About Us"
        description="Committed to defending human rights and dignity for all"
      />

      {/* History Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1998, the National Human Rights Organization has been at the forefront 
                of human rights advocacy for over two decades. Our journey began with a small 
                group of dedicated activists and has grown into a nationwide movement.
              </p>
              <p className="text-gray-600">
                Today, we continue to fight for justice, equality, and human dignity across all 
                communities, addressing both longstanding and emerging human rights challenges.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
                alt="Historical image of human rights activism"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <CoreValues />
      <TeamSection />
      <Partners />
    </div>
  );
}