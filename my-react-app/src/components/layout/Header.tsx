import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import faviconicon from "../../assets/faviconicon.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Services",
    path: "/services",
    children: [
      { name: "Design & Support", path: "/services/design" },
      { name: "Engineering Services", path: "/services/engineering" },
      { name: "Supply Chain & Procurement Services", path: "/services/SupplyChain" },
      { name: "Testing & Certification", path: "/services/Testing" },
      { name: "Aftermarket & Post-Sales Services", path: "/services/Aftermarket" }
    ]
  },
  {
    name: "Industries",
    path: "/industries",
    children: [
      { name: "Automative-EV", path: "/industries/automotive" },
      { name: "IOT, Embedded & AI", path: "/industries/iot" },
      { name: "Aerospace & Defence", path: "/industries/Aerospace" },
      { name: "Healthcare & Medical", path: "/industries/Healthcare" },
      { name: "Green Energy", path: "/industries/Green" }
    ]
  },
  // { name: "Sustainability", path: "/Sustainability" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-wide flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={18} />
              <span>07498136182</span>
            </a>
            <a href="mailto:info@voltechengineering.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={18} />
              <span>Avpsaitechnoworks@gmail.com</span>
            </a>
          </div>
          <div className="text-primary-foreground/80">
            Mon - Sun: 9:00 AM - 5:30 PM
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"}`}>
        <div className="container-wide">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-16 h-16  flex items-center justify-center">
                <img
                  src={faviconicon}
                  alt="Sai TechnoWork Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">Sai</span>
                <span className="text-xs text-muted-foreground -mt-1">TechnoWork</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.path} className="relative">
                  {link.children ? (
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors relative py-2 ${location.pathname.startsWith(link.path) ? "text-accent" : "text-foreground hover:text-accent"}`}
                      onMouseEnter={() => setActiveDropdown(link.name)}
                    >
                      {link.name}
                      {location.pathname.startsWith(link.path) && (
                        <motion.div layoutId="activeNav" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                      )}
                    </Link>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors relative py-2 ${location.pathname === link.path ? "text-accent" : "text-foreground hover:text-accent"}`}
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <motion.div layoutId="activeNav" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                      )}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.children && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                          onMouseEnter={() => setActiveDropdown(link.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Button asChild className="btn-accent">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
                <div className="py-4 space-y-2 max-h-[80vh] overflow-y-auto px-4">
                  {navLinks.map((link) => (
                    <div key={link.path}>
                      {link.children ? (
                        <div className="space-y-2">
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                            className={`flex items-center justify-between w-full py-2 text-base font-medium ${location.pathname.startsWith(link.path) ? "text-accent" : "text-foreground"}`}
                          >
                            {link.name}
                            <motion.span
                              animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </motion.span>
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 border-l-2 border-border ml-2 space-y-2"
                              >
                                {link.children.map((child) => (
                                  <Link
                                    key={child.path}
                                    to={child.path}
                                    className="block py-2 text-sm text-muted-foreground hover:text-accent"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          className={`block py-2 text-base font-medium ${location.pathname === link.path ? "text-accent" : "text-foreground"}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Button asChild className="btn-accent w-full mt-4">
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
                  </Button>
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
