import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import sailogo from "../../assets/sailogo3.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img src={sailogo} alt="Sai Techno Works" className="w-8 h-8 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Sai Techno Works</span>
                <span className="text-[10px] text-primary-foreground/60 uppercase tracking-wider">EMS Company</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Precision PCB Assembly &; End-to-End Electronics Manufacturing Services. Delivering reliability, quality, and innovation to industries worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/sai-techno-works/" aria-label="LinkedIn" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={16} />
              </a>
              {/* <a href="#" aria-label="Facebook" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={16} />
              </a> */}
              <a href="https://www.instagram.com/saitechnoworks?igsh=eHh1YXVrcjgzNWdp" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Capabilities", path: "/capabilities" },
                { name: "Industries", path: "/industries" },
                { name: "Infrastructure", path: "/infrastructure" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {[
                "SMT Assembly",
                "THT Assembly",
                "PCB Assembly",
                "Box Build Assembly",
                "Testing & Quality Control",
                "End-to-End EMS Solutions",
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 text-sm leading-relaxed">
                11A+11B, Mainai Complex , Nanadanvan City , Abhinav College Rd, Near Chavan Viit Bhatti, Narhe– 411041<br />
                  Pune , Maharashtra , INDIA
                </span>
              </li>
              <li>
                <a href="tel:07498136182" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  <Phone size={16} className="text-accent shrink-0" />
                  7498136182 – SHREYAS PATIL 9284293143 – ARCHANA PATIL
                </a>
              </li>
              <li>
                <a href="mailto:Avpsaitechnoworks@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  <Mail size={16} className="text-accent shrink-0" />
                 AVPSAITECHNOWORKS@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Sai Techno Works. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
