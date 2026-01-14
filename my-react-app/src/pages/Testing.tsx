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
      <section className="relative py-20 md:py-32 min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${marketcardimg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />

        <div className="container-wide relative z-10 px-6 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm mb-6">
              Testing Services
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Testing & <span className="text-accent">Certifications</span>
            </h1>

            <p className="text-base md:text-lg text-white/90 text-justify">
              From functional testing to regulatory compliance, we ensure your
              products meet quality, safety, and performance standards required
              for global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="bg-slate-100 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-6 lg:px-20">
          <div data-aos="fade-left" className="max-w-xl">
            <h2 className="text-accent font-bold italic mb-3">
              Quality Assurance
            </h2>

            <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6">
              In-Circuit Testing (ICT) & Functional Testing (FCT)
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed text-justify">
              Our ICT capabilities detect electrical defects such as open circuits,
              shorts, and incorrect component values. Functional Testing simulates
              real-world conditions to validate firmware behavior and system-level
              performance.
            </p>
          </div>

          <div
            className="w-full max-w-[500px] h-[260px] md:h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${marketimg2})` }}
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-slate-900 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-20">
          <div
            className="w-full max-w-[500px] h-[260px] md:h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${marketimg3})` }}
          />

          <div data-aos="fade-right" className="max-w-xl">
            <h2 className="text-accent font-bold italic mb-3">
              Reliability Validation
            </h2>

            <h1 className="text-xl md:text-2xl font-semibold text-white mb-6">
              Environmental & Reliability Testing
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-justify">
              We conduct thermal cycling, vibration, humidity exposure, and stress
              testing to ensure product durability in industrial, automotive, and
              aerospace environments.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-slate-50 py-20 mb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-6 lg:px-20">
          <div data-aos="fade-left" className="max-w-xl">
            <h2 className="text-accent font-bold italic mb-3">
              Global Compliance
            </h2>

            <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6">
              Compliance & Certification Support
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed text-justify">
              We comply with IATF 16949, ISO 9001, ISO 14001, and ISO 13485 standards
              and support CE, FCC, UL, RoHS, and REACH certifications for global
              approval.
            </p>
          </div>

          <div
            className="w-full max-w-[500px] h-[260px] md:h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${marketimg4})` }}
          />
        </div>
      </section>
    </Layout>
  );
}
