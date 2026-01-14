import supplychain from "../assets/supplychain.png";
import chain1 from "../assets/chain1.png";
import chain2 from "../assets/chain2.png";
import chain3 from "../assets/chain3.png";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function SupplyChain() {
  return (
    <Layout>
      {/* HERO HEADER */}
      <section className="relative py-20 md:py-32 min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${supplychain})` }}
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
              Supply Chain Services
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Supply Chain &{" "}
              <span className="text-accent">Procurement Services</span>
            </h1>

            <p className="text-base md:text-lg text-white/90 text-justify">
              We leverage strong relationships with leading manufacturers and
              distributors to source high-quality components at competitive
              prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="bg-slate-100 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-6 lg:px-20">
          <div data-aos="fade-left" className="max-w-xl">
            <h2 className="text-accent font-bold italic mb-3">
              Strategic Sourcing
            </h2>

            <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6">
              Electronic Component Procurement
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed text-justify">
              We leverage long-standing relationships with top-tier manufacturers
              and distributors to source high-quality electronic components at
              competitive prices, ensuring uninterrupted production.
            </p>
          </div>

          <div
            className="w-full max-w-[500px] h-[260px] md:h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${chain2})` }}
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-slate-900 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-20">
          <div
            className="w-full max-w-[500px] h-[260px] md:h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${chain1})` }}
          />

          <div data-aos="fade-right" className="max-w-xl">
            <h2 className="text-accent font-bold italic mb-3">
              Vendor Management
            </h2>

            <h1 className="text-xl md:text-2xl font-semibold text-white mb-6">
              Lifecycle & Risk Mitigation
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-justify">
              Our vendor and lifecycle management ensures proactive obsolescence
              handling, alternative sourcing strategies, and redesign
              recommendations to avoid supply disruptions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-slate-50 py-20 mb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-6 lg:px-20">
          <div data-aos="fade-left" className="max-w-xl">
            <h2 className="text-accent font-bold italic mb-3">
              Smart Logistics
            </h2>

            <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6">
              Just-in-Time Supply Chain
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed text-justify">
              Our logistics strategies ensure JIT material availability, reduced
              inventory costs, optimized lead times, and efficient global
              import/export operations.
            </p>
          </div>

          <div
            className="w-full max-w-[500px] h-[260px] md:h-[350px] rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url(${chain3})` }}
          />
        </div>
      </section>
    </Layout>
  );
}
