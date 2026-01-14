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
      <section className="relative py-24 md:py-32 min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aftermarket})` }}
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
              Aftermarket Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Aftermarket &{" "}
              <span className="text-accent">Post-Sales Services</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-justify">
              From maintenance and repairs to spare parts management, we deliver
              reliable, customer-focused support solutions that extend product
              life and ensure long-term performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="w-full h-[80vh] bg-slate-100 flex items-center justify-between px-20">
        <div className="ml-[-3rem] p-8" data-aos="fade-left">
          <h2 className="text-accent font-bold italic mb-4">
            Repair Solutions
          </h2>

          <h1 className="text-2xl font-semibold text-slate-800 mb-6">
            Repair & Rework Services
          </h1>

          <p className="text-lg w-[600px] text-slate-600 leading-relaxed text-justify">
            Our specialized repair and rework services restore product
            functionality and extend lifecycle through component replacement,
            BGA reballing, micro-soldering, refurbishment, and upgrades.
          </p>
        </div>

        <div
          className="w-[500px] h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${aftermarket1})` }}
        />
      </section>

      {/* SECTION 2 */}
      <section className="w-full h-[80vh] bg-slate-900 flex items-center justify-between px-20">
        <div
          className="w-[500px] h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${aftermarket2})` }}
        />

        <div className="mr-[-3rem] p-8" data-aos="fade-right">
          <h2 className="text-accent font-bold italic mb-4">
            Lifecycle Support
          </h2>

          <h1 className="text-2xl font-semibold text-white mb-6">
            Component Substitution & EOL Support
          </h1>

          <p className="text-lg w-[600px] text-gray-300 leading-relaxed text-justify">
            We provide proactive component substitution and end-of-life support,
            including drop-in replacements, redesign strategies, lifecycle risk
            analysis, and sustainable sourcing.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="w-full h-[80vh] bg-slate-50 flex items-center justify-between px-20 mb-24">
        <div className="ml-[-3rem] p-8" data-aos="fade-left">
          <h2 className="text-accent font-bold italic mb-4">
            Logistics Excellence
          </h2>

          <h1 className="text-2xl font-semibold text-slate-800 mb-6">
            Order Fulfillment Services
          </h1>

          <p className="text-lg w-[600px] text-slate-600 leading-relaxed text-justify">
            Our fulfillment services include inventory management, warehousing,
            kitting, packaging, drop-shipping, and global distribution for
            efficient end-to-end logistics.
          </p>
        </div>

        <div
          className="w-[500px] h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${aftermarket3})` }}
        />
      </section>
    </Layout>
  );
}
