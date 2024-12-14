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
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 font-bold mb-4">
                  The main objective of the National Human Rights Organization is to fulfill the concept of making India prosperous and strong. The vision of a corruption-free advanced society, to provide rights to the economically weak, backward and minority women and men who are suffering in the society, to provide justice to the victimized women and children of any class and to provide constitutional assistance.
              </p>
              <p className="text-gray-600 font-bold">
                  To motivate the youth by providing proper guidance and organizing employment oriented workshops. At present, ensuring the needs of the common man in terms of education, medical health, security is the basic need and ensuring his availability of utility. To emphasize on the need to implement uniform education across India by curbing corruption and wide inequality in the field of education. To implement the principle of Uniform Civil Code for building a strong and prosperous India and to do it on priority basis. To convey the thoughts of the Honorable Prime Minister, who has the vision of Ek Bharat, Shreshtha Bharat, Sabka Saath, Sabka Vikas, to the people.

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
      {/*<Partners />*/}
    </div>
  );
}