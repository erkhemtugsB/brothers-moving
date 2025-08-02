import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Brothers Moving</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted moving partner for over 15 years. Professional, reliable, 
              and affordable moving services for residential and commercial clients.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("#home")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#about")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#contact")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Get Quote
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#location")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Service Areas
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Residential Moving</li>
              <li>Commercial Moving</li>
              <li>Long Distance Moving</li>
              <li>Packing Services</li>
              <li>Storage Solutions</li>
              <li>Emergency Moving</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">773-685-2055</p>
                  <p className="text-sm text-primary-foreground/80">24/7 Support</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">info@brosmovingco.com</p>
                  <p className="text-sm text-primary-foreground/80">Quick Response</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Greater Metro Area</p>
                  <p className="text-sm text-primary-foreground/80">50+ Mile Radius</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Mon-Sat: 8AM-8PM</p>
                  <p className="text-sm text-primary-foreground/80">Sun: 10AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80">
              © {currentYear} Brothers Moving. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/80">
              <span>Licensed & Bonded</span>
              <span>Fully Insured</span>
              <span>BBB Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Star component for rating display
const Star = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 20 20" 
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default Footer;