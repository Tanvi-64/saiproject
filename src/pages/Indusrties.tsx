import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Car,
  Sun,
  Radio,
  Pill,
  BatteryCharging,
  Factory,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Car,
    title: "Automotive Industry",
    description:
      "Providing robust PCB assembly solutions for automotive applications, focusing on durability, precision, and compliance with industry standards for reliable performance.",
    features: [
      "Automotive PCB Assembly",
      "High Reliability Electronics",
      "Industry Standard Compliance",
      "Precision Manufacturing",
      "Durable Electronic Systems",
    ],
  },
  {
    icon: Sun,
    title: "Solar Industry",
    description:
      "Supporting the renewable energy sector with PCB assembly for solar inverters, controllers, and energy management systems, ensuring efficiency and long-term reliability.",
    features: [
      "Solar Inverter Assemblies",
      "Energy Management Systems",
      "Controller PCB Manufacturing",
      "Renewable Energy Solutions",
      "Long-Term Reliability",
    ],
  },
  {
    icon: Radio,
    title: "Telecommunication Industry",
    description:
      "Delivering high-quality assemblies for communication systems and networking equipment, ensuring stable performance and signal reliability.",
    features: [
      "Communication Systems",
      "Networking Equipment",
      "Signal Processing Boards",
      "High-Speed Electronics",
      "Reliable Connectivity Solutions",
    ],
  },
  {
    icon: Pill,
    title: "Pharmaceutical Industry",
    description:
      "Manufacturing electronic assemblies used in pharmaceutical equipment and devices, ensuring high accuracy, consistency, and adherence to quality requirements.",
    features: [
      "Medical Equipment Electronics",
      "Precision PCB Assembly",
      "Quality Compliance",
      "Reliable Device Manufacturing",
      "Consistent Production Standards",
    ],
  },
  {
    icon: BatteryCharging,
    title: "Power Industry",
    description:
      "Supporting manufacturing of power control and conversion systems, ensuring high reliability and performance for applications such as power supplies, inverters, and industrial control systems.",
    features: [
      "Power Supply Electronics",
      "Industrial Control Systems",
      "Power Conversion Systems",
      "Inverter Assemblies",
      "High Reliability Manufacturing",
    ],
  },
  {
    icon:  Factory,
    title: "Industrial Electronics",
    description:
      "Delivering dependable PCB assembly and electronic manufacturing solutions for industrial applications requiring performance, durability, and operational efficiency.",
    features: [
      "Industrial Automation Electronics",
      "Control System Assemblies",
      "Process Monitoring Solutions",
      "Custom Industrial PCBs",
      "Reliable Manufacturing Support",
    ],
  },
];
const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Industries We Serve
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Serving Diverse Industries{" "}
              <span className="text-accent">with Reliable Electronics Manufacturing</span>
            </h1>
            <p className="text-base md:text-lg xl:text-xl text-primary-foreground/80 leading-relaxed">
            Sai Technoworks supports a wide range of industries through high-quality PCB assembly and electronics manufacturing services. Our expertise enables us to deliver reliable, precision-engineered solutions for automotive, solar, telecommunication, pharmaceutical, power, and industrial applications.
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
                      <service.icon
                        className="text-accent group-hover:text-accent-foreground transition-colors"
                        size={28}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle
                          className="text-accent shrink-0 mt-0.5"
                          size={16}
                        />
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
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          >
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

export default Industries;
