import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Cpu,
  Eye,
  Layers,
  Settings,
  Zap,
  CircuitBoard,
  Shield,
  FlaskConical,
  Package,
  Gauge,
  Users,
  ArrowRight,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const capabilities = [
  {
    icon: Cpu,
    title: "3 Advanced SMT Lines",
    stat: "3",
    statLabel: "SMT Lines",
    description:
      "Three fully equipped Surface Mount Technology production lines running in parallel for high-throughput PCB assembly. Each line is independently capable of running different product families simultaneously.",
    details: [
      "High-speed automated component placement",
      "Full production line flexibility per job",
      "Rapid product changeover capability",
      "Fine-pitch & BGA component support",
      "Simultaneous multi-product production runs",
    ],
  },
  {
    icon: Settings,
    title: "High-Speed Pick & Place Machines",
    stat: "HSM",
    statLabel: "High Speed",
    description:
      "Industry-leading pick & place machines capable of placing fine-pitch ICs, BGAs, QFPs, and micro passives with sub-millimeter precision using vision-guided alignment.",
    details: [
      "Fine-pitch component capability",
      "BGA, QFP, and CSP support",
      "0201 and smaller passive placement",
      "Vision-guided placement accuracy",
      "Real-time placement verification",
    ],
  },
  {
    icon: Eye,
    title: "AOI Inspection Systems",
    stat: "AOI",
    statLabel: "Auto Inspection",
    description:
      "Automated Optical Inspection systems provide 100% post-assembly board coverage to detect solder defects, missing components, misalignment, and polarity errors before the board moves downstream.",
    details: [
      "100% post-assembly board inspection",
      "Solder joint quality analysis",
      "Component presence & value verification",
      "Polarity and orientation checking",
      "Defect traceability reporting",
    ],
  },
  {
    icon: CircuitBoard,
    title: "SPI Inspection Systems",
    stat: "SPI",
    statLabel: "Paste Inspection",
    description:
      "Solder Paste Inspection verifies paste volume, area, and height immediately after printing — catching process deviations before component placement to eliminate downstream defects.",
    details: [
      "Pre-placement solder paste verification",
      "3D paste volume and height measurement",
      "Area coverage analysis",
      "Real-time process feedback to printer",
      "Statistical process control data",
    ],
  },
  {
    icon: Zap,
    title: "Reflow Ovens",
    stat: "RF",
    statLabel: "Reflow",
    description:
      "Multi-zone reflow ovens with board-specific thermal profiling for both lead and lead-free solder processes, ensuring consistent solder joint quality across all PCB densities.",
    details: [
      "Lead and lead-free process capable",
      "Multi-zone temperature profiling",
      "Board-specific reflow recipes",
      "Consistent solder joint formation",
      "Top and bottom zone control",
    ],
  },
  {
    icon: Layers,
    title: "2 Manual Insertion Lines",
    stat: "2",
    statLabel: "THT Lines",
    description:
      "Two dedicated Through-Hole Technology insertion lines for reliable manual assembly of axial, radial, connectors, transformers, and mixed SMT+THT boards.",
    details: [
      "Axial and radial component insertion",
      "Connector and transformer assembly",
      "Wave soldering process",
      "Mixed SMT + THT board handling",
      "Post-solder inspection and rework",
    ],
  },
  {
    icon: FlaskConical,
    title: "Functional Testing",
    stat: "FT",
    statLabel: "Test",
    description:
      "Board-level and system-level functional testing verifies every assembled PCB meets customer performance specifications before shipment.",
    details: [
      "In-circuit test capability",
      "Functional test fixtures",
      "Burn-in and stress testing",
      "Customer-supplied test procedures",
      "Test result documentation",
    ],
  },
  {
    icon: Shield,
    title: "Quality Assurance Process",
    stat: "IPC",
    statLabel: "Standards",
    description:
      "A multi-stage quality system from incoming inspection through final shipment, aligned with IPC-A-610 workmanship standards and full production traceability.",
    details: [
      "Incoming component inspection",
      "In-process quality checkpoints",
      "IPC-A-610 workmanship compliance",
      "Final visual and functional inspection",
      "Full traceability and documentation",
    ],
  },
];

const smtLineSteps = [
  { label: "Stencil Printer", desc: "Precision solder paste application with SPI feedback" },
  { label: "Pick & Place", desc: "High-speed vision-guided component placement" },
  { label: "Reflow Oven", desc: "Multi-zone lead/lead-free reflow soldering" },
  { label: "AOI System", desc: "100% automated post-assembly inspection" },
];

const qualityStages = [
  {
    phase: "Incoming",
    title: "Component Inspection",
    points: [
      "Supplier documentation review",
      "Sample visual inspection",
      "Dimensional checks",
      "Counterfeit screening",
    ],
  },
  {
    phase: "In-Process",
    title: "Assembly Inspection",
    points: [
      "SPI after paste printing",
      "First-article inspection",
      "AOI after reflow",
      "In-line process audits",
    ],
  },
  {
    phase: "Outgoing",
    title: "Final Inspection",
    points: [
      "IPC-A-610 workmanship review",
      "Functional testing",
      "Cosmetic inspection",
      "Pre-shipment documentation",
    ],
  },
];

const processSteps = [
  { step: "01", title: "Order Receipt & Review", desc: "BOM, Gerber files, and assembly drawings reviewed for DFM completeness.", icon: Package },
  { step: "02", title: "Component Procurement", desc: "Components sourced and undergo incoming inspection for quality compliance.", icon: Layers },
  { step: "03", title: "Solder Paste Printing", desc: "Paste printed and immediately verified with SPI for volume and coverage.", icon: CircuitBoard },
  { step: "04", title: "SMT / THT Assembly", desc: "High-speed pick & place, reflow soldering, or wave soldering for THT.", icon: Cpu },
  { step: "05", title: "AOI & Inspection", desc: "100% AOI post-assembly detects solder defects, missing or misaligned components.", icon: Eye },
  { step: "06", title: "Testing & Delivery", desc: "Functional testing, final inspection, packaging, labeling, and shipment.", icon: FlaskConical },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const Capabilities = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 text-accent rounded-full text-sm font-medium mb-6">
              Manufacturing Capabilities
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Advanced EMS{" "}
              <span className="text-accent">Manufacturing Capabilities</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed">
              Sai Techno Works operates a fully equipped 15,000 sq.ft manufacturing facility with
              3 SMT lines, AOI & SPI inspection systems, and a skilled workforce committed to
              zero-defect production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "3", label: "Advanced SMT Lines" },
              { num: "15,000", label: "Sq.Ft Facility" },
              { num: "2", label: "Manual Insertion Lines" },
              { num: "AOI + SPI", label: "Inspection Systems" },
            ].map((s) => (
              <div key={s.label} className="text-center p-5 bg-card rounded-lg border border-border shadow-card">
                <div className="text-2xl font-bold text-accent mb-1">{s.num}</div>
                <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMT Line Flow */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-wider font-semibold">SMT Production Line</span>
            <h2 className="section-title mt-2">How Our SMT Lines Work</h2>
            <p className="section-subtitle mx-auto">
              Each of our 3 SMT lines follows a tightly controlled process — from paste printing
              through reflow to automated inspection.
            </p>
          </div>

          {/* Step flow */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-12">
            {smtLineSteps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center w-36 sm:w-44 px-2"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-3 border-4 border-accent/30">
                    <span className="text-accent font-bold text-lg">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{step.label}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
                {i < smtLineSteps.length - 1 && (
                  <ChevronRight className="text-accent shrink-0 mx-1 hidden sm:block" size={22} />
                )}
              </div>
            ))}
          </div>

          {/* 3 lines callout */}
          <div className="grid md:grid-cols-3 gap-6">
            {["SMT Line 1", "SMT Line 2", "SMT Line 3"].map((line, i) => (
              <motion.div
                key={line}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-primary text-primary-foreground rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Cpu className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{line}</h3>
                </div>
                <p className="text-primary-foreground/75 text-sm leading-relaxed mb-4">
                  Fully equipped with stencil printer, high-speed pick & place, reflow oven, and
                  inline AOI — capable of running independently for maximum flexibility.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Stencil Print", "Pick & Place", "Reflow", "AOI"].map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Capabilities Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-wider font-semibold">Equipment & Systems</span>
            <h2 className="section-title mt-2">Full Capability Overview</h2>
            <p className="section-subtitle mx-auto">
              Every machine and process in our facility is selected for precision, reliability,
              and production efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-industrial p-5 group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <cap.icon className="text-accent group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-accent leading-tight">{cap.stat}</div>
                    <div className="text-xs text-muted-foreground">{cap.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">{cap.description}</p>
                <ul className="space-y-1.5">
                  {cap.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={11} />
                      <span className="text-foreground">{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Stage Quality Assurance */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-wider font-semibold">Quality System</span>
            <h2 className="section-title mt-2">3-Stage Quality Assurance</h2>
            <p className="section-subtitle mx-auto">
              Quality is embedded at every stage — incoming, in-process, and outgoing — to ensure
              zero-defect delivery on every order.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {qualityStages.map((level, i) => (
              <motion.div
                key={level.phase}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-lg p-7 hover:border-accent transition-colors shadow-card"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-xs text-accent font-semibold uppercase tracking-wide">{level.phase}</div>
                    <h3 className="text-lg font-bold text-foreground">{level.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {level.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                      <span className="text-foreground">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process Flow */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-wider font-semibold">How We Work</span>
            <h2 className="section-title mt-2">Manufacturing Process Flow</h2>
            <p className="section-subtitle mx-auto">
              From order receipt to final delivery — a structured, traceable process every time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-colors group shadow-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300 shrink-0">
                    <step.icon className="text-accent group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <span className="text-4xl font-bold text-accent/15">{step.step}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce + Stats */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-accent text-sm uppercase tracking-wider font-semibold">Our Workforce</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Skilled Manufacturing Workforce
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Behind every machine is a trained, experienced professional. Our workforce is the
                backbone of our quality system — skilled in SMT operations, THT assembly,
                inspection, and functional testing.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Users, title: "Trained SMT Operators", desc: "Experienced in running high-speed SMT lines and managing line changeovers" },
                  { icon: Eye, title: "Quality Inspectors", desc: "IPC-A-610 trained inspectors performing visual and automated quality checks" },
                  { icon: Gauge, title: "Process Engineers", desc: "Engineers managing solder paste profiles, reflow recipes, and AOI programming" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="text-accent" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="grid grid-cols-2 gap-4 mt-6 lg:mt-0"
            >
              {[
                { num: "3", label: "SMT Production Lines", sub: "Running in parallel" },
                { num: "2", label: "Manual THT Lines", sub: "For through-hole assembly" },
                { num: "AOI", label: "Optical Inspection", sub: "100% board coverage" },
                { num: "SPI", label: "Paste Inspection", sub: "Pre-placement quality gate" },
              ].map((item) => (
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
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container-wide text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Leverage Our Capabilities?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
              Send us your BOM and Gerbers — our team will review your project and provide a
              detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8">
                <Link to="/infrastructure">View Our Facility</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Capabilities;
