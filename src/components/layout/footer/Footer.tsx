import Link from 'next/link';
import Image from 'next/image';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { LuMapPin } from 'react-icons/lu';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className="p-4 bg-blue-950 space-y-4 lg:px-8">
      {/* Footer Main */}
      <div className="flex flex-wrap items-start gap-4 text-white lg:gap-16">
        {/* Information */}
        <div className="w-full lg:max-w-100 xl:max-w-125 space-y-4">
          {/* Logo */}
          <div>
            <Image src={'/image/logo/logo.png'} width={150} height={0} alt="logo" />
            <p>PT. Stallion Car Rental</p>
          </div>

          {/* contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Hubungi Kami</h3>
            <div className="text-sm space-y-2">
              <div className="flex items-center gap-4">
                <FiPhone className="w-5 h-5" />
                <p>021-1124653</p>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlineEmail className="w-5 h-5" />
                <p>stellioncarrental@gmail.com</p>
              </div>
              <div className="flex items-start gap-4">
                <CiLocationOn className="w-5 h-5" />
                <p>Komp. Ururaya No. 08 009/018 Kel. Anggaraya, Kec. Burgaraya Kab. Managascar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="flex-1 w-full">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col text-sm space-y-4">
            <Link href={'/pages/About'}>About Us</Link>
            <Link href={'/pages/Cars'}>Cars</Link>
            <Link href={'/pages/Articles'}>Articles</Link>
          </div>
        </div>

        {/* Support */}
        <div className="flex-1 w-full">
          <h3 className="font-semibold mb-4">Support</h3>
          <div className="flex flex-col text-sm space-y-4">
            <Link href={'/pages/Contact'}>Contact Us</Link>
            <Link href={'/pages/FAQ'}>FAQs</Link>
          </div>
        </div>

        {/* Follow */}
        <div className="flex-1 items-start justify-center w-full text-center">
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full bg-bluescr-accent">
              <FaInstagram className="w-7 h-7" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full bg-bluescr-accent">
              <FaTiktok className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full bg-bluescr-accent">
              <AiOutlineYoutube className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="flex items-senter justify-between text-white">
        <p className="text-sm">© {new Date().getFullYear()} SCARR.</p>
        <div className="flex items-center justify-center gap-4 text-sm">
          <Link href={'/'}>Terms & Conditions</Link>
          <Link href={'/'}>Privacy Police</Link>
        </div>
      </div>
    </div>
  );
}
