import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Layers,
  TestTube2,
  Expand,
  ArrowRight,
  CheckCircle,
  Cpu,
  CircuitBoard,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

interface Area {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
}

interface StatItem {
  num: string;
  label: string;
}

interface GridItem {
  icon: React.ElementType;
  num: string;
  label: string;
  sub: string;
}

const areas: Area[] = [
  {
    icon: Building2,
    title: "Production Areas",
    description:
      "Dedicated SMT and THT production zones with ESD-controlled environments, organized material flow, and efficient workstation layouts.",
    items: [
      "SMT assembly floor with 3 production lines",
      "THT insertion and wave soldering area",
      "ESD-controlled work environments",
      "Organized component storage and kitting zones",
    ],
  },
  {
    icon: TestTube2,
    title: "Testing & Inspection Areas",
    description:
      "Dedicated quality zones equipped with AOI, SPI, functional test benches, and visual inspection stations.",
    items: [
      "Automated Optical Inspection (AOI) stations",
      "Solder Paste Inspection (SPI) systems",
      "Functional test benches",
      "IPC-A-610 inspection workstations",
    ],
  },
  {
    icon: Layers,
    title: "3-Floor Manufacturing Setup",
    description:
      "Organized 3-floor layout designed for smooth material flow from incoming to finished goods, minimizing handling and maximizing efficiency.",
    items: [
      "Ground floor: Incoming & materials store",
      "First floor: SMT & THT production",
      "Second floor: Testing, packing & dispatch",
      "Dedicated quality control area on each floor",
    ],
  },
  {
    icon: Expand,
    title: "Expansion Capability",
    description:
      "The facility is designed with scalability in mind - infrastructure supports additional SMT lines and production capacity as demand grows.",
    items: [
      "Space provisioned for additional SMT lines",
      "Power and utility infrastructure ready",
      "Scalable material handling systems",
      "Modular production floor layout",
    ],
  },
];

const facilityStats: StatItem[] = [
  { num: "15,000", label: "Sq.Ft Total Area" },
  { num: "3", label: "Production Floors" },
  { num: "3", label: "SMT Lines" },
  { num: "2", label: "THT Insertion Lines" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const gridItems: GridItem[] = [
  { icon: Cpu, num: "3", label: "SMT Production Lines", sub: "High-speed assembly" },
  { icon: CircuitBoard, num: "2", label: "THT Insertion Lines", sub: "Manual assembly" },
  { icon: Building2, num: "AOI", label: "Optical Inspection", sub: "100% board coverage" },
  { icon: Layers, num: "SPI", label: "Paste Inspection", sub: "Pre-placement verify" },
];

const facilityPoints: string[] = [
  "ESD-protected production environment",
  "Climate-controlled SMT assembly area",
  "Organized material storage and kitting area",
  "Dedicated quality control inspection zone",
  "Separate production and testing floors",
  "Loading and dispatch area for logistics",
];

const Infrastructure = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 text-blue-300 rounded-full text-sm font-medium mb-6">
              Our Facility
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              State-of-the-Art{" "}
              <span className="text-blue-300">Manufacturing Infrastructure</span>
            </h1>
            <p className="text-base md:text-lg xl:text-xl text-primary-foreground/80 leading-relaxed">
              Our 15,000 sq.ft manufacturing facility is purpose-built for high-quality electronics
              production - with organized production floors, advanced equipment, and room to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facility Stats */}
      <section className="py-12 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilityStats.map((s) => (
              <div
                key={s.label}
                className="text-center p-6 bg-card rounded-lg border border-border shadow-card"
              >
                <div className="text-3xl font-bold text-accent mb-1">{s.num}</div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Areas */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-wider font-semibold">
              Facility Overview
            </span>
            <h2 className="section-title mt-2">Inside Our Manufacturing Plant</h2>
            <p className="section-subtitle mx-auto">
              A 15,000 sq.ft modern facility designed for efficient, high-quality electronics
              manufacturing across 3 organized production floors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-industrial p-7 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                  <area.icon
                    className="text-accent group-hover:text-white transition-colors duration-300"
                    size={26}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SMT Production Lines */}
<section className="section-padding bg-secondary/30">
  <div className="container-wide">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="text-accent text-sm uppercase tracking-wider font-semibold">
        Manufacturing Equipment
      </span>

      <h2 className="section-title mt-2">
        Advanced SMT Production Lines
      </h2>

      <p className="section-subtitle mx-auto">
        Our manufacturing facility is equipped with three SMT production
        lines featuring advanced printing, placement, inspection, and
        soldering technologies to ensure precision, efficiency, and
        consistent product quality.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {[
        {
          title: "SMT Line 1",
          machines: [
            "Yamaha YVP XG SMD Paste Printer",
            "SAKI 2025 SPI",
            "Yamaha YG200 High-Speed Pick & Place",
            "Jaguar F8 – 10 Zone Reflow Oven",
            "SAKI 2025 AOI",
          ],
        },
        {
          title: "SMT Line 2",
          machines: [
            "Yamaha YCP 10 SMT Paste Printer",
            "Topaz X2 High-Speed Pick & Place",
            "RF-350-LS – 6 Zone Reflow Oven",
            "AOI Machine",
          ],
        },
        {
          title: "SMT Line 3",
          machines: [
            "Semi-Automatic SMT Paste Printer",
            "SPI (Incoming by Dec 2026)",
            "Topaz X2 High-Speed Pick & Place",
            "EPS – 5 Zone Reflow Oven",
            "AOI (Incoming by Dec 2026)",
          ],
        },
      ].map((line, index) => (
        <motion.div
          key={line.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="card-industrial p-7 group hover:-translate-y-2 transition-all duration-300"
        >
          <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
            <Cpu
              className="text-accent group-hover:text-white transition-colors duration-300"
              size={28}
            />
          </div>

          <h3 className="text-xl font-semibold mb-5 text-foreground">
            {line.title}
          </h3>

          <ul className="space-y-3">
            {line.machines.map((machine) => (
              <li
                key={machine}
                className="flex items-start gap-3 text-sm"
              >
                <CheckCircle
                  className="text-accent shrink-0 mt-0.5"
                  size={16}
                />
                <span>{machine}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* THT Equipment */}
<section className="section-padding">
  <div className="container-wide">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="text-accent text-sm uppercase tracking-wider font-semibold">
        THT Manufacturing
      </span>

      <h2 className="section-title mt-2">
        Through-Hole Assembly Equipment
      </h2>

      <p className="section-subtitle mx-auto">
        Dedicated through-hole assembly infrastructure supporting mixed
        technology PCB manufacturing and reliable soldering processes.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="card-industrial p-5 sm:p-8">
        <CircuitBoard
          className="text-accent mb-5"
          size={32}
        />

        <h3 className="text-xl font-semibold mb-4">
          Manual Insertion Lines
        </h3>

        <p className="text-muted-foreground mb-5">
          Two dedicated manual insertion lines for accurate placement of
          through-hole components and specialized assembly requirements.
        </p>

        <ul className="space-y-2">
          <li className="flex gap-3">
            <CheckCircle size={16} className="text-accent mt-1" />
            Mixed Technology PCB Support
          </li>
          <li className="flex gap-3">
            <CheckCircle size={16} className="text-accent mt-1" />
            Through-Hole Component Assembly
          </li>
          <li className="flex gap-3">
            <CheckCircle size={16} className="text-accent mt-1" />
            Flexible Manufacturing Process
          </li>
        </ul>
      </div>

      <div className="card-industrial p-5 sm:p-8">
        <Wrench
          className="text-accent mb-5"
          size={32}
        />

        <h3 className="text-xl font-semibold mb-4">
          Wave Soldering Systems
        </h3>

        <p className="text-muted-foreground mb-5">
          Reliable wave soldering equipment supporting both standard and
          RoHS-compliant production requirements.
        </p>

        <ul className="space-y-2">
          <li className="flex gap-3">
            <CheckCircle size={16} className="text-accent mt-1" />
            EPS 300 Wave Soldering Machine
          </li>
          <li className="flex gap-3">
            <CheckCircle size={16} className="text-accent mt-1" />
            EPS 180 Wave Soldering Machine
          </li>
          <li className="flex gap-3">
            <CheckCircle size={16} className="text-accent mt-1" />
            RoHS Compliant Production Support
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Detail Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-accent text-sm uppercase tracking-wider font-semibold">
                15,000 Sq.Ft Facility
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Built for Scale and Quality
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Our manufacturing plant is purpose-designed for electronics manufacturing. The
                facility layout ensures smooth material flow, minimal handling, and maximum
                production efficiency across all production zones.
              </p>
              <div className="space-y-3 mb-8">
                {facilityPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-primary-foreground/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Button asChild className="btn-accent">
                <Link to="/contact">
                  Schedule a Facility Visit
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="grid grid-cols-2 gap-4 mt-6 lg:mt-0"
            >
              {gridItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-5 text-center hover:border-accent/30 transition-colors"
                >
                  <div className="text-2xl font-bold text-accent mb-1">{item.num}</div>
                  <div className="text-sm font-medium text-white mb-0.5">{item.label}</div>
                  <div className="text-xs text-primary-foreground/55">{item.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-wide text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner with Sai Techno Works?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
              Get in touch to discuss your production requirements or arrange a facility tour.
            </p>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Infrastructure;
