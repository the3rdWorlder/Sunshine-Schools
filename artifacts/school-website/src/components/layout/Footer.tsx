import { Link } from "wouter";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-0">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4" data-testid="link-footer-logo">
            <div className="bg-primary p-2 rounded-lg inline-flex">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span>Greenleaf Academy</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Nurturing curious minds and kind hearts. We provide an inspiring environment where every child can flourish and discover their potential.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors" data-testid="link-social-facebook"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors" data-testid="link-social-twitter"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors" data-testid="link-social-instagram"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-gray-400 hover:text-secondary transition-colors text-sm" data-testid="link-footer-home">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-secondary transition-colors text-sm" data-testid="link-footer-about">About Us</Link></li>
            <li><Link href="/curriculum" className="text-gray-400 hover:text-secondary transition-colors text-sm" data-testid="link-footer-curriculum">Curriculum</Link></li>
            <li><Link href="/gallery" className="text-gray-400 hover:text-secondary transition-colors text-sm" data-testid="link-footer-gallery">Gallery</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-secondary transition-colors text-sm" data-testid="link-footer-contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Academics</h3>
          <ul className="space-y-3">
            <li><Link href="/curriculum" className="text-gray-400 hover:text-secondary transition-colors text-sm" data-testid="link-footer-early-years">Early Years</Link></li>
            <li><Link href="/curriculum" className="text-gray-400 hover:text-secondary transition-colors text-sm" data-testid="link-footer-primary">Primary Education</Link></li>
            <li><Link href="/curriculum" className="text-gray-400 hover:text-secondary transition-colors text-sm" data-testid="link-footer-stem">STEM Program</Link></li>
            <li><Link href="/curriculum" className="text-gray-400 hover:text-secondary transition-colors text-sm" data-testid="link-footer-arts">Arts & Music</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-gray-400 text-sm">123 Education Lane<br/>Springfield, SP 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span className="text-gray-400 text-sm">(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span className="text-gray-400 text-sm">hello@greenleafacademy.edu</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Greenleaf Academy. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm" data-testid="link-terms">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Yellow accent stripe at the bottom */}
      <div className="h-2 w-full bg-secondary"></div>
    </footer>
  );
}
