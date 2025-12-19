import Link from 'next/link';
import { faqs } from '@/data/policies/faqs';
import FaqsAccordion from '@/components/pages/faqs/FaqsAccordion';

export const metadata = {
  title: 'FAQs | Khalisa Rent Car',
  description: 'Pertanyaan yang sering diajukan seputar layanan sewa mobil Khalisa Rent Car.',
};

export default function FaqsPage() {
  return (
    <div className="py-24 space-y-16">
      {/* Header */}
      <div className="text-center">
        <span className="w-fit text-sm font-medium border-b">FAQs</span>
        <h1 className="text-3xl font-semibold lg:text-4xl">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Answers to common questions about our services.</p>
      </div>

      {/* Accordion */}
      <FaqsAccordion items={faqs} />

      {/* CTA */}
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">Do you have any other questions?</p>
        <Link
          href="https://wa.me/628xxxxxxxxxx"
          target="_blank"
          className="text-sm font-medium text-primary hover:underline"
        >
          Contact us on WhatsApp
        </Link>
      </div>
    </div>
  );
}
