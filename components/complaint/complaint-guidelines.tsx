import { Card } from '@/components/ui/card';
import { AlertTriangle, Clock, Shield, HelpCircle } from 'lucide-react';

const guidelines = [
  {
    icon: AlertTriangle,
    title: 'Report Promptly',
    description: 'File your complaint as soon as possible after the incident.',
  },
  {
    icon: Shield,
    title: 'Confidentiality',
    description: 'Your information will be handled with strict confidentiality.',
  },
  {
    icon: Clock,
    title: 'Processing Time',
    description: 'Complaints are typically processed within 5-7 business days.',
  },
  {
    icon: HelpCircle,
    title: 'Need Help?',
    description: 'Call our 24/7 helpline at 1-800-HELP-NOW for assistance.',
  },
];

export function ComplaintGuidelines() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Guidelines</h2>
        <div className="space-y-6">
          {guidelines.map((guideline) => (
            <div key={guideline.title} className="flex gap-3">
              <guideline.icon className="h-6 w-6 text-[#B8860B] flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">{guideline.title}</h3>
                <p className="text-sm text-gray-600">{guideline.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-[#B8860B] text-white">
        <h2 className="text-xl font-bold mb-4">Emergency Situations</h2>
        <p className="mb-4">
          If you&apos;re in immediate danger or witnessing a serious human rights violation:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Contact local law enforcement</li>
          <li>Call our emergency hotline: 1-800-HELP-NOW</li>
          <li>Document everything if safe to do so</li>
        </ul>
      </Card>
    </div>
  );
}