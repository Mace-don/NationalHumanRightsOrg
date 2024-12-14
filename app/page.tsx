import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NewsletterForm } from '@/components/newsletter-form';
import { ImpactMetrics } from '@/components/impact-metrics';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <Image
          src="https://i.postimg.cc/Qxm98sLW/4008673.jpg"
          alt="People holding hands in unity"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Defending Human Rights, Preserving Human Dignity
          </h1>
          <p className="text-xl mb-8">
            We work tirelessly to protect and promote fundamental human rights for all people
          </p>
          <Link href="/file-complaint">
            <Button size="lg" className="diagonal-gradient hover:diagonal-gradient-hover">
              File a Complaint
            </Button>
          </Link>
        </div>
      </section>

      {/* Impact Metrics */}
      <ImpactMetrics />

      {/* Latest News */}
      {/*<section className="py-16 bg-gray-50">*/}
      {/*  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <h2 className="text-3xl font-bold mb-8 text-center">Latest Updates</h2>*/}
      {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
      {/*      {[1, 2, 3].map((i) => (*/}
      {/*        <Card key={i} className="overflow-hidden">*/}
      {/*          <Image*/}
      {/*            src={`https://images.unsplash.com/photo-159118986${i}430-ab87e120f312`}*/}
      {/*            alt="News image"*/}
      {/*            width={400}*/}
      {/*            height={250}*/}
      {/*            className="object-cover w-full h-48"*/}
      {/*          />*/}
      {/*          <div className="p-6">*/}
      {/*            <h3 className="font-bold text-xl mb-2">Latest Human Rights Victory</h3>*/}
      {/*            <p className="text-gray-600 mb-4">*/}
      {/*              A significant breakthrough in protecting civil liberties...*/}
      {/*            </p>*/}
      {/*            <Link href="/news/1">*/}
      {/*              <Button variant="outline">Read More</Button>*/}
      {/*            </Link>*/}
      {/*          </div>*/}
      {/*        </Card>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Newsletter Section */}
      <section className="diagonal-gradient text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="mb-8">
            Subscribe to our newsletter to receive updates on human rights issues and our work
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}