import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  Layers,
  Package,
  ShieldCheck,
  Factory,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Cpu,
    title: "SMT Assembly",
    description:
      "High-precision Surface Mount Technology assembly using advanced automated production lines for reliable, high-volume PCB manufacturing.",
    features: [
      "3 Advanced SMT Lines",
      "High-Speed Pick & Place Machines",
      "SPI Solder Paste Inspection",
      "AOI Automated Optical Inspection",
      "High Volume Production Capability",
    ],
  },
  {
    icon: CircuitBoard,
    title: "THT Assembly",
    description:
      "Reliable Through-Hole Technology assembly for mixed-technology PCB manufacturing with wave soldering and quality-checked production.",
    features: [
      "2 Manual Insertion Lines",
      "Mixed Technology PCB Support",
      "Wave Soldering Process",
      "Through-Hole Component Assembly",
      "Quality Checked Production",
    ],
  },
  {
    icon: Layers,
    title: "PCB Assembly",
    description:
      "Complete PCB assembly solutions from prototype development to large-scale mass production with strict quality control.",
    features: [
      "Prototype to Mass Production",
      "Component Sourcing Support",
      "Solder Paste Printing",
      "Reflow Soldering",
      "Final Inspection & Validation",
    ],
  },
  {
    icon: Package,
    title: "Box Build Assembly",
    description:
      "Complete system integration and finished product assembly services for ready-to-ship, ready-to-use electronic products.",
    features: [
      "Mechanical Assembly",
      "Cable Harnessing",
      "Wiring Integration",
      "Enclosure Assembly",
      "Full System Integration",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Testing & Quality Control",
    description:
      "Advanced inspection and testing processes ensuring reliable, consistent, and zero-defect manufacturing output.",
    features: [
      "AOI Inspection System",
      "SPI Inspection System",
      "Functional Testing",
      "Process Validation",
      "Quality Assurance Programs",
    ],
  },
  {
    icon: Factory,
    title: "EMS Solutions",
    description:
      "End-to-end Electronics Manufacturing Services tailored for automotive, solar, telecom, pharma, and power electronics sectors.",
    features: [
      "Industrial Electronics Manufacturing",
      "Automotive Applications",
      "Solar Energy Systems",
      "Telecommunication Systems",
      "Power Electronics",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-hero relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 text-blue-300 rounded-full text-sm font-medium mb-6">
              Electronics Manufacturing Services (EMS)
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Precision PCB Assembly &{" "}
              <span className="text-blue-300">EMS Solutions</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl">
              Sai Techno Works delivers end-to-end Electronics Manufacturing Services — from SMT &amp; THT Assembly to Box Build Integration, Testing, and Quality Control — with advanced capabilities and a commitment to zero-defect production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-widest font-bold block mb-3">What We Offer</span>
            <h2 className="section-title">Our Manufacturing Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-5 border-b border-border bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300 shrink-0">
                      <service.icon className="text-accent group-hover:text-white transition-colors duration-300" size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-wide text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Need a Custom EMS Solution?
            </h2>
            <p className="text-white/85 text-base mb-6 max-w-2xl mx-auto">
              Our manufacturing team is ready to discuss your specific PCB assembly and EMS requirements and provide a tailored solution.
            </p>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
