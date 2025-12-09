import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function CtaSection() {
  return (
    <section className="relative flex items-center overflow-hidden lg:h-112">
      {/* Background */}
      <Image
        src={'/image/image-cta.png'}
        width={1440}
        height={0}
        alt="backgorund"
        className="w-full object-cover object-center"
      />

      {/*  */}
      <div className="absolute left-4 w-150 text-white text-center space-y-8 lg:left-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold lg:text-4xl">Siap untuk Perjalanan Berikutnya?</h1>
          <p className="font-medium">
            Pesan mobil Anda hari ini dan nikmati perjalanan yang lancar, serta terjamin
            keandalannya bersama Khalisarencar!
          </p>
        </div>
        <div className="flex items-center justify-center gap-8">
          <Link href={'/'}>
            <Button size={'lg'} className="w-40 border border-white">
              Pesan Sekarang
            </Button>
          </Link>

          <Link href={'/'}>
            <Button size={'lg'} className="w-40 border border-white">
              Lihat Armda
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute -right-75">
        <Image
          src={'/image/image-cta-car.png'}
          width={968}
          height={0}
          alt="car"
          className="object-cover"
        />
      </div>
    </section>
  );
}
