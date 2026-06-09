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
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Cpu,
    title: "SMT Assembly",
    description:
      "High-precision Surface Mount Technology assembly using advanced automated production lines for reliable and efficient PCB manufacturing.",
    features: [
      "3 Advanced SMT Lines",
      "High-Speed Pick & Place Machines",
      "SPI Inspection System",
      "AOI Inspection System",
      "High Volume Production",
    ],
  },
  {
    icon: CircuitBoard,
    title: "THT Assembly",
    description:
      "Reliable Through-Hole Technology assembly for mixed-technology PCB manufacturing and specialized component integration.",
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
      "Complete PCB assembly solutions from prototype development to large-scale production with strict quality control.",
    features: [
      "Prototype to Mass Production",
      "Component Sourcing",
      "Solder Paste Printing",
      "Reflow Soldering",
      "Final Inspection",
    ],
  },
  {
    icon: Package,
    title: "Box Build Assembly",
    description:
      "Complete system integration and finished product assembly services for ready-to-use electronic products.",
    features: [
      "Mechanical Assembly",
      "Cable Harnessing",
      "Wiring Integration",
      "Enclosure Assembly",
      "System Integration",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Testing & Quality Control",
    description:
      "Advanced inspection and testing processes ensuring reliable, consistent, and zero-defect manufacturing.",
    features: [
      "AOI Inspection",
      "SPI Inspection",
      "Functional Testing",
      "Process Validation",
      "Quality Assurance",
    ],
  },
  {
    icon: Factory,
    title: "EMS Solutions",
    description:
      "End-to-end Electronics Manufacturing Services tailored for industrial, automotive, solar, telecom, pharma, and power sectors.",
    features: [
      "Industrial Electronics",
      "Automotive Applications",
      "Solar Industry",
      "Telecommunication Systems",
      "Power Electronics",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
     {/* Hero Section */}
<section className="py-24 md:py-32 bg-primary text-primary-foreground">
  <div className="container-wide">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl"
    >
      <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
        Electronics Manufacturing Services (EMS)
      </span>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Precision PCB Assembly &
        <span className="text-accent"> EMS Solutions</span>
      </h1>

      <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-4xl">
        Sai Techno Works delivers end-to-end Electronics Manufacturing Services,
        including SMT Assembly, THT Assembly, PCB Assembly, Box Build
        Integration, and Testing & Quality Control. With advanced manufacturing
        capabilities, automated inspection systems, and a commitment to quality,
        we help bring innovative electronic products to market efficiently and
        reliably.
      </p>
    </motion.div>
  </div>
</section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-elevated transition-shadow"
              >
                <div className="p-6 border-b border-border bg-secondary/50">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                      <service.icon className="text-accent group-hover:text-accent-foreground transition-colors" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
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

      

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Our expert engineers are ready to discuss your specific requirements 
            and provide tailored solutions for your industrial needs.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
