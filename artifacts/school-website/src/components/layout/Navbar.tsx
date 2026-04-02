import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logoSrc from "@assets/logo-cbc6896f_1775077649878.jpg";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home",       href: "/" },
    { name: "About Us",   href: "/about" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "Gallery",    href: "/gallery" },
    { name: "Contact",    href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: "#0C1E31" }}>
      {/* gold accent line at very top */}
      <div className="h-0.5 w-full" style={{ backgroundColor: "#EEAF28" }} />

      <div className="container mx-auto px-8 h-[4.5rem] flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" data-testid="link-logo">
          <div className="relative">
            <img
              src={logoSrc}
              alt="Sunshine First School"
              className="h-10 w-10 rounded-full object-cover"
              style={{ boxShadow: "0 0 0 2px rgba(238,175,40,0.4)" }}
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-white font-semibold tracking-wide text-base leading-none">
              Sunshine First School
            </span>
            <span className="text-white/40 text-[9px] tracking-[0.25em] uppercase mt-0.5">
              Hargeisa · Somalia
            </span>
          </div>
        </Link>

        {/* Desktop Nav — centred */}
        <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group text-sm tracking-wide font-medium transition-colors pb-1"
                style={{ color: isActive ? "#EEAF28" : "rgba(255,255,255,0.75)" }}
                data-testid={`link-nav-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
                {/* animated underline */}
                <span
                  className="absolute bottom-0 left-0 h-px bg-secondary transition-all duration-300"
                  style={{ width: isActive ? "100%" : "0%", opacity: isActive ? 1 : 0.8 }}
                />
                <span
                  className="absolute bottom-0 left-0 h-px bg-secondary transition-all duration-300 group-hover:w-full w-0 opacity-0 group-hover:opacity-100"
                  style={{ display: isActive ? "none" : undefined }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="tel:+252634225577"
            className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
            title="+252 634 225 577"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="text-xs tracking-wide hidden lg:block">+252 634 225 577</span>
          </a>
          <div className="w-px h-5 bg-white/15 mx-1" />
          <Link
            href="/contact"
            className="text-[11px] tracking-[0.18em] font-bold text-white px-5 py-2.5 transition-all"
            style={{
              backgroundColor: "#95233D",
              letterSpacing: "0.18em",
            }}
            data-testid="button-enroll-now"
          >
            ENROLL NOW
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu-toggle"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          className="md:hidden absolute w-full shadow-2xl border-t border-white/10 z-50"
          style={{ backgroundColor: "#0C1E31" }}
        >
          <div className="px-8 py-5 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-sm font-medium tracking-wide border-b border-white/5 transition-colors"
                  style={{ color: isActive ? "#EEAF28" : "rgba(255,255,255,0.7)" }}
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-nav-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-4 text-center text-[11px] tracking-[0.18em] font-bold text-white py-3.5 transition-all"
              style={{ backgroundColor: "#95233D" }}
              onClick={() => setIsOpen(false)}
              data-testid="button-mobile-enroll-now"
            >
              ENROLL NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
