import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Cpu,
  CircuitBoard,
  Layers,
  Package,
  ShieldCheck,
  Factory,
  ArrowRight,
  CheckCircle,
  Car,
  Sun,
  Radio,
  Pill,
  Zap,
  Building2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBg3 from "@/assets/saiherobg3.png";
import heroBg4 from "@/assets/saiherobg4.png";
import heroBg5 from "@/assets/saiherobg5.png";
import heroBg6 from "@/assets/saiherobg6.png";
import heroBg7 from "@/assets/saiherobg7.png";

const heroBgs = [heroBg3, heroBg4, heroBg5, heroBg6, heroBg7];

// Animated counter hook
function useCounter(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

const stats = [
  { value: 3, suffix: "", label: "Advanced SMT Lines", icon: Cpu },
  { value: 15000, suffix: " Sq.Ft", label: "Manufacturing Facility", icon: Building2 },
  { value: 2, suffix: "", label: "Manual Insertion Lines", icon: CircuitBoard },
  { value: 2, suffix: " Systems", label: "AOI + SPI Inspection", icon: ShieldCheck },
];

const services = [
  {
    icon: Cpu,
    title: "SMT Assembly",
    description: "High-precision Surface Mount Technology using advanced automated lines for reliable, high-volume PCB manufacturing.",
    features: ["3 Advanced SMT Lines", "High-Speed Pick & Place", "SPI Inspection", "High Volume Production"],
  },
  {
    icon: CircuitBoard,
    title: "THT Assembly",
    description: "Through-Hole Technology assembly for mixed-technology PCBs with wave soldering and quality-checked production.",
    features: ["2 Manual Insertion Lines", "Wave Soldering", "Mixed Technology PCB", "Quality Checked"],
  },
  {
    icon: Layers,
    title: "PCB Assembly",
    description: "Complete PCB assembly from prototype to mass production with strict quality control and component sourcing.",
    features: ["Prototype to Mass Production", "Component Sourcing", "Reflow Soldering", "Final Inspection"],
  },
  {
    icon: Package,
    title: "Box Build Assembly",
    description: "Complete system integration and finished product assembly for ready-to-use electronic products.",
    features: ["Mechanical Assembly", "Cable Harnessing", "Wiring Integration", "System Integration"],
  },
  {
    icon: ShieldCheck,
    title: "Testing & Quality Control",
    description: "Advanced inspection and testing ensuring consistent, reliable, zero-defect manufacturing.",
    features: ["AOI Inspection", "SPI Inspection", "Functional Testing", "Process Validation"],
  },
  {
    icon: Factory,
    title: "EMS Solutions",
    description: "End-to-end Electronics Manufacturing Services for automotive, solar, telecom, pharma, and power sectors.",
    features: ["Industrial Electronics", "Automotive Applications", "Solar Industry", "Power Electronics"],
  },
];

const industries = [
  { icon: Car, title: "Automotive", desc: "High-reliability electronics for automotive systems" },
  { icon: Sun, title: "Solar", desc: "Precision assemblies for solar energy systems" },
  { icon: Radio, title: "Telecommunication", desc: "Advanced PCBs for telecom infrastructure" },
  { icon: Pill, title: "Pharma", desc: "Compliant electronics for pharmaceutical equipment" },
  { icon: Zap, title: "Power Electronics", desc: "Robust assemblies for power management systems" },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(stat.value, 1800, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg p-5 text-center shadow-card group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent transition-colors duration-300">
        <stat.icon className="text-accent group-hover:text-white transition-colors duration-300" size={20} />
      </div>
      <div className="text-2xl font-bold text-primary mb-1">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const Index = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBgs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden">

        {/* Crossfade background slider */}
        <AnimatePresence>
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url(${heroBgs[bgIndex]})` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroBgs.map((_, i) => (
            <button
              key={i}
              onClick={() => setBgIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === bgIndex
                  ? "w-6 h-2 bg-accent"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Floating accent elements */}
        <div className="absolute top-20 right-4 md:right-20 w-32 md:w-64 h-32 md:h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 md:right-40 w-24 md:w-48 h-24 md:h-48 bg-accent/5 rounded-full blur-2xl" />

        <div className="container-hero relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="w-full max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-3 py-1.5 bg-accent/20 border border-accent/30 text-accent rounded-full text-xs sm:text-sm font-medium mb-5"
            >
              Electronics Manufacturing Services (EMS)
            </motion.span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Precision PCB Assembly &{" "}
              <span className="text-accent">EMS Solutions</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-7 leading-relaxed max-w-xl">
              High-precision SMT, THT &; Box Build Assembly with advanced automated inspection systems and an unwavering commitment to zero-defect production.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="btn-accent text-sm px-6 py-4">
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10 text-sm px-6 py-4">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* About Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-accent text-sm uppercase tracking-widest font-bold block mb-3">
                About Sai Techno Works
              </span>
              <h2 className="section-title mb-5">
                Your Trusted EMS Manufacturing Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sai Techno Works is a growing Electronics Manufacturing Services (EMS) company specializing in PCB Assembly, SMT, THT, Box Build Assembly, and end-to-end electronic manufacturing solutions. With advanced production lines, automated inspection systems, and a skilled workforce, we deliver reliable, cost-effective, and high-quality manufacturing services.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "State-of-the-Art SMT & THT Production Lines",
                  "Automated AOI & SPI Inspection Systems",
                  "15,000 Sq.Ft Dedicated Manufacturing Facility",
                  "End-to-End EMS – Prototype to Mass Production",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="btn-accent">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4 mt-8 lg:mt-0"
            >
              {[
                { icon: Cpu,          value: "3 SMT Lines",    sub: "Advanced automated production", accent: false },
                { icon: null,         value: "15,000 Sq.Ft",   sub: "Manufacturing Facility",        accent: true  },
                { icon: CircuitBoard, value: "2 THT Lines",    sub: "Manual insertion lines",        accent: false },
              ].map((card, i) => (
                <motion.div
                  key={card.value}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className={`flex items-center gap-5 rounded-xl px-6 py-5 cursor-default transition-shadow duration-300 hover:shadow-elevated ${
                    card.accent
                      ? "bg-accent text-white"
                      : "bg-card border border-border shadow-card"
                  }`}
                >
                  <div className={`w-1 self-stretch rounded-full shrink-0 ${card.accent ? "bg-white/40" : "bg-accent"}`} />
                  {card.icon ? (
                    <card.icon className={card.accent ? "text-white shrink-0" : "text-accent shrink-0"} size={28} />
                  ) : (
                    <div className={`text-3xl font-black shrink-0 leading-none ${card.accent ? "text-white/30" : "text-accent/20"}`}>◈</div>
                  )}
                  <div>
                    <div className={`text-xl font-bold leading-tight ${card.accent ? "text-white" : "text-primary"}`}>{card.value}</div>
                    <p className={`text-sm mt-0.5 ${card.accent ? "text-white/75" : "text-muted-foreground"}`}>{card.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-widest font-bold block mb-3">
              Core Manufacturing Services
            </span>
            <h2 className="section-title mb-4">End-to-End EMS Solutions</h2>
            <p className="section-subtitle mx-auto">
              From PCB assembly and component placement to box build integration, testing, and quality assurance — we cover every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="card-industrial p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                  <service.icon className="text-accent group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left — text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-sm uppercase tracking-widest font-bold block mb-3">
                Manufacturing Excellence
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">
                Advanced Capabilities for Precision Manufacturing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our 15,000 Sq.Ft facility is equipped with state-of-the-art SMT lines, high-speed pick &amp; place machines, and fully automated inspection systems — built for high-volume, high-precision electronic manufacturing.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "High-Speed Pick & Place", icon: Cpu },
                  { label: "Reflow Oven Systems", icon: Factory },
                  { label: "AOI Inspection", icon: ShieldCheck },
                  { label: "SPI Inspection", icon: ShieldCheck },
                ].map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 bg-secondary border border-border rounded-lg p-3 hover:border-accent/30 transition-colors duration-200">
                    <div className="w-8 h-8 bg-accent/10 rounded-md flex items-center justify-center shrink-0">
                      <Icon className="text-accent" size={16} />
                    </div>
                    <span className="text-sm text-foreground font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="btn-accent mt-8">
                <Link to="/capabilities">
                  View Capabilities
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>

            {/* Right — stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-6 lg:mt-0"
            >
              {[
                { value: "3", label: "SMT Production Lines", accent: true },
                { value: "2", label: "Manual Insertion Lines", accent: false },
                { value: "AOI", label: "Automated Optical Inspection", accent: false },
                { value: "SPI", label: "Solder Paste Inspection", accent: true },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-xl p-6 text-center border transition-shadow duration-300 hover:shadow-elevated ${
                    item.accent
                      ? "bg-primary border-primary text-white"
                      : "bg-secondary border-border text-foreground"
                  }`}
                >
                  <div className={`text-3xl font-bold mb-2 ${item.accent ? "text-accent" : "text-primary"}`}>
                    {item.value}
                  </div>
                  <div className={`text-sm leading-snug ${item.accent ? "text-white/75" : "text-muted-foreground"}`}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-widest font-bold block mb-3">
              Industries We Serve
            </span>
            <h2 className="section-title mb-4">Powering Diverse Industries</h2>
            <p className="section-subtitle mx-auto">
              Sai Techno Works serves critical industries with high-reliability EMS solutions tailored to each sector's unique requirements.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {industries.map((ind, index) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="card-industrial p-6 text-center group cursor-pointer"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                  <ind.icon className="text-accent group-hover:text-white transition-colors duration-300" size={26} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{ind.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
              <Link to="/industries">
                Explore Industries
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-widest font-bold block mb-3">
              Our Leadership
            </span>
            <h2 className="section-title mb-4">Driven by Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Archana Patil",
                role: "Founder & Director",
                desc: "Visionary leader driving Sai Techno Works' growth and manufacturing excellence with a focus on quality and innovation.",
              },
              {
                name: "Shreyas Patil",
                role: "Business Development Manager",
                desc: "Leading business expansion and client partnerships, bringing strategic vision to drive new opportunities and long-term growth.",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-industrial p-6 flex items-start gap-5 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <Users className="text-accent group-hover:text-white transition-colors duration-300" size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          {/* Stats Row */}
      <section className="py-8 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-14 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl" />
        </div>
        <div className="container-wide text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your EMS Project?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your PCB assembly and electronics manufacturing requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-accent/90 px-8">
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 px-8">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
