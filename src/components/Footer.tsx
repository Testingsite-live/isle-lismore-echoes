import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Lismore Island Home
            </h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Where ancient shores meet mindful making. Sustainable goods inspired by eco-friendly island living on the Isle of Lismore, Scotland.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:eva.tombs@gmail.com" className="hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/shop" className="hover:text-accent transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Isle of Lismore</li>
              <li>Argyll and Bute</li>
              <li>PA34 5UL, Scotland</li>
              <li className="pt-2">
                <a href="tel:07786374931" className="hover:text-accent transition-colors">
                  07786 374931
                </a>
              </li>
              <li>
                <a href="mailto:eva.tombs@gmail.com" className="hover:text-accent transition-colors">
                  eva.tombs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Lismore Island Home. All rights reserved.</p>
          <p className="mt-2">Nationwide remote services available across the UK</p>
        </div>
      </div>
    </footer>
  );
};
