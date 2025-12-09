import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function AboutSection() {
  return (
    <section className="px-4 flex flex-col gap-8 lg:flex-row lg:justify-between lg:px-8 lg:gap-16 ">
      {/* Left Image */}

      <div className="flex items-center justify-center rounded-2xl lg:w-1/2">
        <Image
          src={'/image/image-about-us.png'}
          width={600}
          height={0}
          alt="about-us"
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="space-y-4 lg:w-1/2">
        <div>
          <p className="w-fit text-sm font-medium border-b-2">ABOUT US</p>
          <h1 className="text-4xl font-semibold">Stallion Car Rental</h1>
        </div>
        <p className="text-justify">
          Founded with a passion for comfort and reliability, SCARR (Stallion Car Rental) provides a
          seamless car rental experience designed for every traveler's needs. Whether you're on a
          business trip, family vacation, or simply exploring the city, we ensure every ride is
          safe, stylish, and worry free.
        </p>
        <p className="text-justify">
          With a growing fleet of well maintained vehicles and a commitment to transparent pricing,
          SCARR stands for trust, quality, and convenience. Our mission is simple to make every
          journey with us more than just a ride, but a smooth and memorable experience.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-3xl font-bold">5+</h1>
            <p className="text-base text-gray-500 lg:text-lg">Years of Experience</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">10+</h1>
            <p className="text-base text-gray-500 lg:text-lg">Active Vehicles</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">50+</h1>
            <p className="text-base text-gray-500 lg:text-lg">Corporate Partners</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">10k+</h1>
            <p className="text-base text-gray-500 lg:text-lg">Happy Customers</p>
          </div>
        </div>
        <Link href={'/'}>
          <Button className="h-10">SEE DETAILS</Button>
        </Link>
      </div>
    </section>
  );
}
