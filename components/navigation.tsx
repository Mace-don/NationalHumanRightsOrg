'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
    <nav className="diagonal-gradient text-white">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                  src="https://i.postimg.cc/KzmX07Rw/logo.jpg"
                  width={100}
                  height={100}
                  alt="NHRO"
              />
              <div className="pl-5 mt-2 mb-2">
                <span className="font-bold sm:text-xl md:text-2xl lg:text-3xl block font-serif">RASHTRIYA MANAV ADHIKAR SANGATHAN</span>
                <span className="sm:text-xs md:text-sm lg:text-base xl:text-lg block">Registered by Govt. of INDIA</span>
                <span className="sm:text-xs md:text-sm lg:text-base xl:text-lg">Niti Aayog, UNIQUE ID: UP/2024/0455222</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="diagonal-gradient-hover px-3 py-2 rounded-md text-xl font-medium transition-colors"
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
              className="diagonal-gradient-hover text-white"
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
                  className="block diagonal-gradient-hover px-3 py-2 rounded-md text-base font-medium"
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