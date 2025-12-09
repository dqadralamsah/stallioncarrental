'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Car } from '@/types/cars';
import { formatTransmission } from '@/utils/formatter';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TbManualGearboxFilled } from 'react-icons/tb';
import { PiSeatFill } from 'react-icons/pi';
import { MdLuggage } from 'react-icons/md';

type CarCardProps = {
  data: Car;
};

export default function CarCard({ data }: CarCardProps) {
  const { name, transmission, engineType, passenger, luggage, price } = data;

  return (
    <>
      <Card className="w-fit p-0 gap-2 overflow-hidden group">
        <Image
          src={'/image/cars/Innova-Zenix.png'}
          width={400}
          height={0}
          alt="Toyota-New-Kijang-Innova-Zenix"
          className="bg-blue-50 transition-all duration-300 group-hover:scale-105"
        />
        <CardContent className="px-3 text-sm text-gray-400 space-y-2">
          {/* Name */}
          <p className="text-xl text-black font-semibold">{name}</p>

          {/* Transmition & Fuel */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <TbManualGearboxFilled className="w-6 h-6" />
              <p>{formatTransmission(transmission)}</p>
            </div>

            {['electric', 'hybrid'].includes(engineType) && (
              <div className="px-2 py-0.5 text-blue-400 border border-blue-400 rounded">
                <p>ELECTRIFIED</p>
              </div>
            )}
          </div>

          {/* Nanti di isi data Seat & Luggage */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <PiSeatFill className="w-6 h-6" />
              <p>{passenger}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdLuggage className="w-6 h-6" />
              <p>{luggage}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-400">Start From</p>
            <p className="text-lg font-semibold">
              Rp. {price.daily.toLocaleString('id-ID')}{' '}
              <span className="text-sm text-gray-400 font-medium">/ Day</span>
            </p>
          </div>
          <Link href={'/'}>
            <Button className="h-11 text-lg font-semibold">Book Now</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
