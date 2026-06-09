import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Sai</span>
                <span className="text-xs text-primary-foreground/70 -mt-1">TechnoWork</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
             Delivering excellence in engineering and technology solutions.
Trusted by industries worldwide for quality, reliability, and innovation.            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Industries", path: "/Industries" },
                { name: "Contact Us", path: "/contact" },
                { name: "Sustainability", path: "/Sustainability" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Design Support & Development",
                "Engineering Services",
                "Electronic Manufacturing Services",
                "Supply Chain & Procurement Services",
                "AfterMarket & Post Sales Services",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1 shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Nandanvan city Abhinav College Road,opp.Chavan Viit Bhatti<br />
                  Pune,Maharashtra 411041
                </span>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  <Phone size={18} className="text-accent shrink-0" />
                 07498136182
                </a>
              </li>
              <li>
                <a href="mailto:info@voltechengineering.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  <Mail size={18} className="text-accent shrink-0" />
                Avpsaitechnoworks@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Sai TechnoWork All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
