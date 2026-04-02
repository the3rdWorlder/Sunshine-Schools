import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoSrc from "@assets/logo-cbc6896f_1775077649878.jpg";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: '#0C1E31' }}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
          <img src={logoSrc} alt="Sunshine Schools Logo" className="h-9 w-9 rounded-full object-cover ring-2 ring-white/20" />
          <span className="font-serif text-white text-lg font-semibold tracking-wide hidden sm:block">
            Sunshine First School
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors font-medium ${
                  isActive
                    ? "text-secondary"
                    : "text-white/80 hover:text-white"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 text-sm tracking-widest font-semibold text-white border border-white/40 hover:border-white hover:bg-white/10 px-4 py-2 transition-all"
            data-testid="button-enroll-now"
          >
            ENROLL NOW
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu-toggle"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 py-4 px-6 flex flex-col gap-1 absolute w-full shadow-lg" style={{ backgroundColor: '#0C1E31' }}>
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`p-3 text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-secondary" : "text-white/80 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-nav-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-3 text-center text-sm tracking-widest font-semibold text-white border border-white/40 hover:border-white px-4 py-3 transition-all"
            onClick={() => setIsOpen(false)}
            data-testid="button-mobile-enroll-now"
          >
            ENROLL NOW
          </Link>
        </div>
      )}
    </header>
  );
}
