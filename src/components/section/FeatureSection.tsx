import { Card, CardContent } from '@/components/ui/card';
import { FaCar, FaTag } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { LuHeadset } from 'react-icons/lu';

const features = [
  {
    icon: <FaCar className="w-12 h-12 p-2 text-blue-400 rounded-lg bg-blue-100 lg:w-14 lg:h-14" />,
    title: 'Well-Maintained Cars',
    desc: 'Every vehicle is routinely serviced for your comfort and safety.',
  },
  {
    icon: (
      <FaTag className="w-12 h-12 p-2 text-green-400 rounded-lg bg-green-100 lg:w-14 lg:h-14" />
    ),
    title: 'Transparent & Fair Pricing',
    desc: 'No hidden fees what you see is what you pay',
  },
  {
    icon: (
      <HiLightningBolt className="w-12 h-12 p-2 text-yellow-400 rounded-lg bg-yellow-100 lg:w-14 lg:h-14" />
    ),
    title: 'Easy & Fast Booking',
    desc: 'Book your car in minutes quick, simple, and reliable',
  },
  {
    icon: (
      <LuHeadset className="w-12 h-12 p-2 text-purple-400 rounded-lg bg-purple-100 lg:w-14 lg:h-14" />
    ),
    title: 'Customer Support',
    desc: 'Our team is ready to assist you anytime, anywhere',
  },
];

export default function FeatureSection() {
  return (
    <section className="p-4 space-y-8 lg:px-8">
      <div className="justify-items-center">
        <p className="w-fit text-sm font-medium border-b">WHY US</p>
        <h1 className="text-3xl font-semibold lg:text-4xl">Kenapa Khalisarentcar?</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item, i) => (
          <Card
            key={i}
            className="w-full h-48 rounded-2xl shadow-lg select-none transition-transform md:h-full hover:scale-105 hover:shadow-2xl"
          >
            <CardContent className="space-y-4">
              {item.icon}
              <div className="space-y-2">
                <p className="text-base font-semibold lg:text-xl">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
