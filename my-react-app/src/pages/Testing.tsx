import marketimg1 from "../assets/marketimg1.png";
import marketimg2 from "../assets/marketimg2.png";
import marketimg3 from "../assets/marketimg3.png";
import marketimg4 from "../assets/marketimg4.png";
import marketcardimg from "../assets/marketcardimg.png";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Testing() {
  return (
    <Layout>
      {/* HERO HEADER */}
      <section className="relative py-24 md:py-32 min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${marketcardimg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Testing Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Testing & <span className="text-accent">Certifications</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-justify">
              From functional testing to regulatory compliance, we ensure your
              products meet quality, safety, and performance standards required
              for global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="w-full h-[80vh] bg-slate-100 flex items-center justify-between px-20">
        <div className="ml-[-3rem] p-8" data-aos="fade-left">
          <h2 className="text-accent font-bold italic mb-4">
            Quality Assurance
          </h2>

          <h1 className="text-2xl font-semibold text-slate-800 mb-6">
            In-Circuit Testing (ICT) & Functional Testing (FCT)
          </h1>

          <p className="text-lg w-[600px] text-slate-600 leading-relaxed text-justify">
            Our ICT capabilities detect electrical defects such as open circuits,
            shorts, and incorrect component values. Functional Testing simulates
            real-world conditions to validate firmware behavior, electrical
            parameters, and system-level performance.
          </p>
        </div>

        <div
          className="w-[500px] h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${marketimg2})` }}
        />
      </section>

      {/* SECTION 2 */}
      <section className="w-full h-[80vh] bg-slate-900 flex items-center justify-between px-20">
        <div
          className="w-[500px] h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${marketimg3})` }}
        />

        <div className="mr-[-3rem] p-8" data-aos="fade-right">
          <h2 className="text-accent font-bold italic mb-4">
            Reliability Validation
          </h2>

          <h1 className="text-2xl font-semibold text-white mb-6">
            Environmental & Reliability Testing
          </h1>

          <p className="text-lg w-[600px] text-gray-300 leading-relaxed text-justify">
            We conduct thermal cycling, vibration, humidity exposure, and stress
            testing to ensure product durability in demanding industrial,
            automotive, and aerospace environments.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="w-full h-[80vh] bg-slate-50 flex items-center justify-between px-20 mb-24">
        <div className="ml-[-3rem] p-8" data-aos="fade-left">
          <h2 className="text-accent font-bold italic mb-4">
            Global Compliance
          </h2>

          <h1 className="text-2xl font-semibold text-slate-800 mb-6">
            Compliance & Certification Support
          </h1>

          <p className="text-lg w-[600px] text-slate-600 leading-relaxed text-justify">
            We operate in compliance with IATF 16949, ISO 9001, ISO 14001, and ISO
            13485 standards and support CE, FCC, UL, RoHS, and REACH certifications
            to ensure global regulatory approval and long-term product
            reliability.
          </p>
        </div>

        <div
          className="w-[500px] h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${marketimg4})` }}
        />
      </section>
    </Layout>
  );
}
