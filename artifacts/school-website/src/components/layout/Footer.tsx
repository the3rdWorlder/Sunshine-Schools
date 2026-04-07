import { Link } from "wouter";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import logoSrc from "@assets/logo-cbc6896f_1775077649878.jpg";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#0C1E31" }}
      className="text-white pt-16 pb-0"
    >
      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
        <div className="col-span-1 md:col-span-1">
          <Link
            href="/"
            className="flex items-center gap-3 mb-5"
            data-testid="link-footer-logo"
          >
            <img
              src={logoSrc}
              alt="Sunshine Schools Logo"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-white/20"
            />
            <span className="font-serif text-white text-lg font-semibold tracking-wide">
              Sunshine First School
            </span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            A complete educational journey from Kindergarten to Secondary —
            building academically strong, morally grounded, and globally
            competitive students.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/p/Sunshine-first-school-61558004259433/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-secondary transition-colors"
              data-testid="link-social-facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-secondary transition-colors"
              data-testid="link-social-twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-secondary transition-colors"
              data-testid="link-social-instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif font-light text-white text-lg tracking-wide mb-5">
            Quick Links
          </h3>
          <div className="w-8 h-0.5 bg-secondary mb-5" />
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="text-white/50 hover:text-white transition-colors text-sm tracking-wide"
                data-testid="link-footer-home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white/50 hover:text-white transition-colors text-sm tracking-wide"
                data-testid="link-footer-about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/curriculum"
                className="text-white/50 hover:text-white transition-colors text-sm tracking-wide"
                data-testid="link-footer-curriculum"
              >
                Curriculum
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="text-white/50 hover:text-white transition-colors text-sm tracking-wide"
                data-testid="link-footer-gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white/50 hover:text-white transition-colors text-sm tracking-wide"
                data-testid="link-footer-contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif font-light text-white text-lg tracking-wide mb-5">
            Academics
          </h3>
          <div className="w-8 h-0.5 bg-secondary mb-5" />
          <ul className="space-y-3">
            <li>
              <Link
                href="/curriculum"
                className="text-white/50 hover:text-white transition-colors text-sm tracking-wide"
                data-testid="link-footer-early-years"
              >
                Early Years
              </Link>
            </li>
            <li>
              <Link
                href="/curriculum"
                className="text-white/50 hover:text-white transition-colors text-sm tracking-wide"
                data-testid="link-footer-primary"
              >
                Primary Education
              </Link>
            </li>
            <li>
              <Link
                href="/curriculum"
                className="text-white/50 hover:text-white transition-colors text-sm tracking-wide"
                data-testid="link-footer-stem"
              >
                STEM Program
              </Link>
            </li>
            <li>
              <Link
                href="/curriculum"
                className="text-white/50 hover:text-white transition-colors text-sm tracking-wide"
                data-testid="link-footer-arts"
              >
                Arts & Music
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif font-light text-white text-lg tracking-wide mb-5">
            Contact Us
          </h3>
          <div className="w-8 h-0.5 bg-secondary mb-5" />
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
              <span className="text-white/50 text-sm tracking-wide">
                Jigjigayr, Hargeisa
                <br />
                Somaliland
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-secondary shrink-0" />
              <span className="text-white/50 text-sm tracking-wide">
                +252 634 225 577
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-secondary shrink-0" />
              <span className="text-white/50 text-sm tracking-wide">
                sunshine@sunshineschools.net
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/30 text-xs tracking-wide mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sunshine First School. All the
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/30 hover:text-white/60 text-xs tracking-wide transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-white/60 text-xs tracking-wide transition-colors"
              data-testid="link-terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="h-1 w-full bg-secondary" />
    </footer>
  );
}
