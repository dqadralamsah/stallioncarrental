'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const menuLinks = [
  { href: '/', label: 'Home' },
  { href: '/About', label: 'About Us' },
  { href: '/Cars', label: 'Cars' },
  { href: '/Articles', label: 'Articles' },
  { href: '/Contact', label: 'Contact Us' },
  { href: '/Faqs', label: 'FAQs' },
];

export default function NavMenu({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();

  return (
    <div className="">
      {/* Dekstop Menu Links */}
      <div className="hidden items-center justify-center gap-6 lg:flex">
        {menuLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-center font-medium hover:text-bluescr-accent ${
                isActive ? 'text-bluescr-accent' : 'text-black'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`absolute top-0 inset-x-0 flex flex-col items-center gap-6 bg-white overflow-hidden transition-[height] duration-700 ease-in-out lg:hidden ${
          isOpen ? 'h-screen' : 'h-0'
        }`}
      >
        <div className="flex flex-col items-center pt-24 gap-6">
          {menuLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-center font-medium hover:text-bluescr-accent ${
                  isActive ? 'text-bluescr-accent' : 'text-black'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div>
          <Link href={'/'} target="">
            <Button className="text-base font-medium">
              Book Now <FaWhatsapp className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
