import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="diagonal-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9456111343</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>nhro.chairman@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-200" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/nhr.organisation/" className="hover:text-gray-200" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
            <p>24/7 Human Rights Hotline:</p>
            <p className="text-xl font-bold">+91-9690665960</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#8B6508] text-center">
          <p>&copy; {new Date().getFullYear()} Rashtriya Manav Adhikar Sangathan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}