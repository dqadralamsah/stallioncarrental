'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import NavMenu from './NavMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 flex items-center justify-between h-16 px-4 py-4 z-50 transition-all duration-200 ease-in-out lg:px-8 ${
        scrolled ? 'bg-white/20 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Navbar Logo */}
      <div className="z-60">
        <Link href={'/'}>
          <Image
            src={'/image/logo/scarr-logo.png'}
            alt="Khalisarentcard Logo"
            width={160}
            height={0}
            className="w-24 lg:w-40"
          />
        </Link>
      </div>

      {/* Navbar Menu */}
      <NavMenu isOpen={isOpen} />

      {/* Humburger Menu */}
      <div className="flex z-60 lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* CTA Button */}
      <div className="hidden lg:block">
        <Link href={'/'} target="">
          <Button className="text-base font-medium">
            Book Now <FaWhatsapp className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </nav>
  );
}
