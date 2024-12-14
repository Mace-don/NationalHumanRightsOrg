import { PageHeader } from '@/components/ui/page-header';
import { ComplaintForm } from '@/components/complaint/complaint-form';
import { ComplaintGuidelines } from '@/components/complaint/complaint-guidelines';

export const metadata = {
  title: 'File a Complaint - National Human Rights Organization',
  description: 'Submit a human rights violation complaint. We are here to help and support you.',
};

export default function FileComplaintPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="File a Complaint"
        description="Report a human rights violation. Your voice matters."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <ComplaintForm />
          </div>
          <div className="md:col-span-1">
            <ComplaintGuidelines />
          </div>
        </div>
      </div>
    </div>
  );
}