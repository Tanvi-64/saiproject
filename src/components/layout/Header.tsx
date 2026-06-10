import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import saiicon1 from "../../assets/saiicon1.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Capabilities", path: "/capabilities" },
  { name: "Industries", path: "/industries" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-1.5 hidden md:block">
        <div className="container-wide flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:07498136182" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>07498136182</span>
            </a>
            <a href="mailto:Avpsaitechnoworks@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              <span>Avpsaitechnoworks@gmail.com</span>
            </a>
          </div>
          <div className="text-primary-foreground/70 text-xs">
            Mon – Sun: 9:00 AM – 5:30 PM
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <img src={saiicon1} alt="Sai Techno Works" className="w-8 h-8 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary leading-tight">Sai Techno Works</span>
                <span className="text-[9px] text-muted-foreground tracking-wider uppercase">Electronics Manufacturing Services</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative py-1.5 ${
                    location.pathname === link.path ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </Link>
              ))}
              <Button asChild className="btn-accent text-sm px-4 py-1.5">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-background border-t border-border overflow-hidden"
              >
                <div className="py-4 px-2 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block py-3 px-3 rounded-md text-base font-medium transition-colors ${
                        location.pathname === link.path
                          ? "text-accent bg-accent/5"
                          : "text-foreground hover:text-accent hover:bg-accent/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-2">
                    <Button asChild className="btn-accent w-full">
                      <Link to="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
