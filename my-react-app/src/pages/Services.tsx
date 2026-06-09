import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Zap, 
  Settings, 
  Wrench, 
  Shield, 
  Cog,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Zap,
    title: "Design Support & Development",
    description: "We deliver end-to-end engineering services that enhance product performance, ensure reliability, and accelerate innovation across every stage of development.",
    features: [
      " End-to-end hardware, firmware, and system design",
      "High-speed PCB design with EMI/EMC compliance",
      "Embedded firmware with RTOS and driver development",
      "Rapid prototyping, integration, and testing",
      "Design optimized for scalable manufacturing",
    ],
  },
  {
    icon: Settings,
    title: "Engineering Services",
    description: "Precision mechanical engineering services tailored to your industrial requirements.",
    features: [
      "HVAC system design & installation",
      "Industrial piping systems",
      "Compressed air systems",
      "Mechanical equipment installation",
      "Thermal management solutions",
      "Vibration analysis & control",
    ],
  },
  {
    icon: Wrench,
    title: "Electronic & Manufacturing Services",
    description: "Professional installation and commissioning services ensuring optimal system performance.",
    features: [
      "Equipment installation & setup",
      "System integration & testing",
      "Performance optimization",
      "Operator training programs",
      "Documentation & handover",
      "Compliance certification",
    ],
  },
  {
    icon: Shield,
    title: "Supply Chain & Procurement Services",
    description: "Comprehensive maintenance programs to maximize equipment uptime and longevity.",
    features: [
      "Preventive maintenance schedules",
      "Breakdown maintenance support",
      "Annual maintenance contracts",
      "Spare parts management",
      "Performance monitoring",
      "Emergency response services",
    ],
  },
  {
    icon: Cog,
    title: "AfterMarket & Post Sales Services",
    description: "Smart automation solutions to enhance productivity and operational efficiency.",
    features: [
      "PLC programming & integration",
      "SCADA system implementation",
      "Motor control centers",
      "Process automation",
      "IoT & Industry 4.0 solutions",
      "Robotics integration",
    ],
  },
  {
    icon: Lightbulb,
    title: "Testing & Certifications",
    description: "Tailored engineering solutions designed to meet your unique operational challenges.",
    features: [
      "Feasibility studies & consulting",
      "Custom equipment design",
      "Retrofit & upgrades",
      "Turnkey project execution",
      "Energy audits & optimization",
      "Compliance consulting",
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
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
             Comprehensive EMS & {" "}
              <span className="text-accent">Engineering Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          From design and development to manufacturing, supply chain, and post-sales support, Sai Technoworks delivers end-to-end EMS solutions built for a smarter, connected future.
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
