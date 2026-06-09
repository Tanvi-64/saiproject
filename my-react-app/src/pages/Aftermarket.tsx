import aftermarket from "../assets/aftermarket.png";
import aftermarket1 from "../assets/aftermarket1.png";
import aftermarket2 from "../assets/aftermarket2.png";
import aftermarket3 from "../assets/aftermarket3.png";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Aftermarket() {
  return (
    <Layout>
      {/* HERO HEADER */}
      <section className="relative py-20 md:py-32 min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aftermarket})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="container-wide relative z-10 px-6 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm mb-6">
              Aftermarket Services
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Aftermarket &{" "}
              <span className="text-accent">Post-Sales Services</span>
            </h1>

            <p className="text-base md:text-lg text-white/90 leading-relaxed text-justify">
              From maintenance and repairs to spare parts management, we deliver
              reliable, customer-focused support solutions that extend product
              life and ensure long-term performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="bg-slate-100 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-6 lg:px-20">
          <div data-aos="fade-left" className="max-w-xl">
            <h2 className="text-accent font-bold italic mb-3">
              Repair Solutions
            </h2>

            <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6">
              Repair & Rework Services
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed text-justify">
              Our specialized repair and rework services restore product
              functionality and extend lifecycle through component replacement,
              BGA reballing, micro-soldering, refurbishment, and upgrades.
            </p>
          </div>

          <div
            className="w-full max-w-[500px] h-[260px] md:h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${aftermarket1})` }}
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-slate-900 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-20">
          <div
            className="w-full max-w-[500px] h-[260px] md:h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${aftermarket2})` }}
          />

          <div data-aos="fade-right" className="max-w-xl">
            <h2 className="text-accent font-bold italic mb-3">
              Lifecycle Support
            </h2>

            <h1 className="text-xl md:text-2xl font-semibold text-white mb-6">
              Component Substitution & EOL Support
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-justify">
              We provide proactive component substitution and end-of-life
              support, including drop-in replacements, redesign strategies,
              lifecycle risk analysis, and sustainable sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-slate-50 py-20 mb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-6 lg:px-20">
          <div data-aos="fade-left" className="max-w-xl">
            <h2 className="text-accent font-bold italic mb-3">
              Logistics Excellence
            </h2>

            <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6">
              Order Fulfillment Services
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed text-justify">
              Our fulfillment services include inventory management,
              warehousing, kitting, packaging, drop-shipping, and global
              distribution for efficient end-to-end logistics.
            </p>
          </div>

          <div
            className="w-full max-w-[500px] h-[260px] md:h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${aftermarket3})` }}
          />
        </div>
      </section>
    </Layout>
  );
}
