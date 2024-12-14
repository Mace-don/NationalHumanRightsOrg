'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/file-complaint', label: 'File a Complaint' },
  ];

  return (
    <nav className="bg-[#B8860B] text-white">
      <div className="max-w-8xl mx-auto px-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/*<Scale className="h-8 w-8" />*/}
              <Image
                  src="https://i.postimg.cc/KzmX07Rw/logo.jpg"
                  width={70}
                  height={70}
                  alt="NHRO"
              />
              <span className="font-bold text-2xl">NHRO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:bg-[#8B6508] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-white hover:bg-[#8B6508]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block hover:bg-[#8B6508] px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}