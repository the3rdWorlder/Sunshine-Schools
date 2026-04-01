import { Link, useLocation } from "wouter";
import { Menu, X, BookOpen, GraduationCap, Users, MapPin, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: BookOpen },
    { name: "About Us", href: "/about", icon: Users },
    { name: "Curriculum", href: "/curriculum", icon: GraduationCap },
    { name: "Gallery", href: "/gallery", icon: ImageIcon },
    { name: "Contact", href: "/contact", icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary" data-testid="link-logo">
          <div className="bg-primary text-white p-2 rounded-lg">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span>Sunshine Schools</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                {item.name}
              </Link>
            );
          })}
          <Button asChild className="ml-4" data-testid="button-enroll-now">
            <Link href="/contact">Enroll Now</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu-toggle"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white py-4 px-4 flex flex-col gap-4 shadow-lg absolute w-full">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-3 p-2 rounded-md text-sm font-medium transition-colors hover:bg-muted ${
                  isActive ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-nav-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
          <Button asChild className="w-full mt-2" data-testid="button-mobile-enroll-now">
            <Link href="/contact" onClick={() => setIsOpen(false)}>Enroll Now</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
