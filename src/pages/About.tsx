import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Award,
  Users,
  Heart,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import aboutHero from "@/assets/about-hero.jpeg";
import memberI from "@/assets/memberI.png";

const values = [
  {
    icon: Award,
    title: "Customer-Centric Approach",
    description: "We prioritize customer success by delivering solutions tailored to unique needs with agility, transparency, and reliability.",
  },
  {
    icon: Users,
    title: "Quality & Excellence",
    description: "Committed to the highest manufacturing standards, ensuring superior product quality at every stage of production.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    description: "We embrace innovation and leverage advanced technologies to stay ahead in a fast-evolving electronics industry.",
  },
  {
    icon: Heart,
    title: "Sustainability & Responsibility",
    description: "We champion a workplace that values diversity, fosters inclusivity, and actively promotes equal opportunity for all.",
  },
];

const journey = [
  { year: "2008", event: "Established with a vision to deliver high-quality electronic manufacturing solutions." },
  { year: "2011", event: "Transitioned and commissioned our first SMT line, expanding production capability." },
  { year: "2019", event: "Shifted to a company-owned, state-of-the-art manufacturing plant at Kasurdi, Khed Shivapur, Pune." },
  { year: "2025", event: "Further expansion with advanced SMT lines and enhanced automation for increased efficiency and scale." },
];

const strengths = [
  "3 Advanced SMT Production Lines",
  "15,000 Sq.Ft Dedicated Facility",
  "2 Manual Insertion Lines",
  "AOI & SPI Automated Inspection",
  "High-Speed Pick & Place Machines",
  "Skilled Manufacturing Workforce",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 min-h-[440px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        <div className="container-hero relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 text-accent rounded-full text-sm font-medium mb-6">
              About Sai Techno Works
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Driving Excellence in{" "}
              <span className="text-accent">Electronics Manufacturing</span>
            </h1>
            <p className="text-base md:text-lg text-white/85 leading-relaxed">
              A trusted EMS partner delivering high-quality PCB assemblies and end-to-end manufacturing solutions for OEMs across diverse industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-sm uppercase tracking-widest font-bold block mb-3">Company Overview</span>
              <h2 className="section-title mb-5">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Sai Techno Works is a growing Electronics Manufacturing Services (EMS) company specializing in PCB Assembly, SMT, THT, Box Build Assembly, and end-to-end electronic manufacturing solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With advanced production lines, automated inspection systems (AOI &amp; SPI), and a skilled workforce, we deliver reliable, cost-effective, and high-quality manufacturing services from our 15,000 Sq.Ft facility — catering to industries from automotive and solar to telecom, pharma, and power electronics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strengths.map((s) => (
                  <div key={s} className="flex items-start gap-2">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h3 className="text-xl font-bold mb-7 flex items-center gap-3">
                  <Building2 className="text-accent" size={22} />
                  Our Journey
                </h3>
                <div className="space-y-6 relative">
                  <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-white/15" />
                  {journey.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-5 relative"
                    >
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0 z-10 text-white text-xs font-bold">
                        {item.year.slice(2)}
                      </div>
                      <div className="pt-1.5">
                        <span className="text-accent font-bold text-sm">{item.year}</span>
                        <p className="text-white/80 text-sm mt-1 leading-relaxed">{item.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-widest font-bold block mb-3">Our Purpose</span>
            <h2 className="section-title">Vision &amp; Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-card border border-border group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <Eye className="text-accent group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized Electronics Manufacturing Services (EMS) provider, delivering innovative, high-quality, and sustainable solutions that empower industries and enhance everyday life — built on a foundation of diversity, inclusivity, and equal opportunity for all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-card border border-border group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <Target className="text-accent group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide end-to-end, reliable, and cost-efficient electronics manufacturing solutions through cutting-edge technology, operational excellence, and an unwavering commitment to quality — building long-term partnerships and driving sustainable growth while exceeding customer expectations in every project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-widest font-bold block mb-3">Why Choose Us</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl border border-border hover:border-accent card-industrial group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-accent transition-colors duration-300">
                  <value.icon className="text-accent group-hover:text-white transition-colors duration-300" size={26} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-accent text-sm uppercase tracking-widest font-bold block mb-3">Our Leadership</span>
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle mx-auto">
              Experienced professionals guiding Sai Techno Works toward manufacturing excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Archana Patil",
                role: "Founder & Director",
                desc: "Founder of Sai Technoworks, is an Electronics & Telecommunication Engineer with extensive experience in electronics manufacturing. Her vision, technical expertise, and commitment to quality have established the company as a reliable EMS partner, delivering innovative solutions with a strong focus on customer satisfaction and operational excellence.",
              },
              {
                name: "Shreyas Patil",
                role: "Business Development Manager",
                desc: "Manager – Business Development at Sai Technoworks, leading initiatives to expand the company’s market presence and strengthen client relationships. He focuses on identifying new business opportunities, understanding customer requirements, and delivering tailored EMS solutions. His commitment to customer satisfaction, strategic growth, and long-term partnerships helps drive successful project execution and business expansion.",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border flex gap-5 items-start group hover:-translate-y-1 transition-transform duration-300 shadow-card"
              >
                <img
                  src={memberI}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-secondary group-hover:border-accent transition-colors duration-300 shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-accent text-sm font-semibold mt-1 mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-accent text-white">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Partner with Sai Techno Works</h2>
            <p className="text-white/80 text-base mb-6 max-w-xl mx-auto">
              Ready to experience precision EMS manufacturing? Let's discuss your requirements.
            </p>
            <Button asChild className="btn-accent px-6 py-4 text-sm">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
