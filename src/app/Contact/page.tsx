import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Khalisa Rent Car',
  description: 'Hubungi Khalisa Rent Car untuk informasi dan pemesanan sewa mobil.',
};

export default function ContactPage() {
  return (
    <section className="py-24 space-y-16">
      {/* Header */}
      <div className="text-center">
        <span className="w-fit text-sm font-medium border-b">Contact</span>
        <h1 className="text-3xl font-semibold lg:text-4xl">Contact Us</h1>
        <p className="text-muted-foreground">
          Please feel free to contact us for information or reservations
        </p>
      </div>

      {/* Content */}
      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          {[
            {
              icon: MapPin,
              title: 'Address',
              value: 'Jl. Contoh Alamat No. 123, Jakarta',
            },
            {
              icon: Phone,
              title: 'WhatsApp',
              value: '+62 8xxxxxxxxxx',
            },
            {
              icon: Mail,
              title: 'Email',
              value: 'info@khalisarentcar.com',
            },
            {
              icon: Clock,
              title: 'Business Hours',
              value: 'Monday – Sunday, 08.00 – 22.00',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-lg border p-4 hover:shadow-sm transition"
            >
              <item.icon className="w-5 h-5 mt-0.5 text-primary" />
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative rounded-xl border p-8 text-center flex flex-col justify-center space-y-5 bg-muted/30">
          <h3 className="text-xl font-semibold">Need a quick response?</h3>
          <p className="text-sm text-muted-foreground">
            Contact us directly via WhatsApp for fast assistance and booking.
          </p>

          <Button asChild size="lg" className="w-full">
            <a href="https://wa.me/628xxxxxxxxxx" target="_blank">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
