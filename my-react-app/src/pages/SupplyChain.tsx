import supplychain from "../assets/supplychain.png";
import chain1 from "../assets/chain1.png";
import chain2 from "../assets/chain2.png";
import chain3 from "../assets/chain3.png";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function SupplyChain() {
  return (
    <Layout>
      {/* HERO HEADER (Styled like About Section) */}
      <section className="relative py-24 md:py-32 min-h-[600px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${supplychain})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />

        {/* Extra Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Supply Chain Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Supply Chain &{" "}
              <span className="text-accent">Procurement Services</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-justify">
             We leverage strong relationships with leading manufacturers and distributors to source high-quality components at competitive prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FIRST SECTION */}
      <section className="w-full h-[80vh] mt-[0rem] bg-slate-100
        flex items-center justify-between px-20">
        
        <div className="ml-[-3rem] p-8" data-aos="fade-left">
          <h2 className="text-accent font-bold italic mb-4">
            Strategic Sourcing
          </h2>

          <h1 className="text-2xl font-semibold text-slate-800 mb-6">
            Electronic Component Procurement
          </h1>

          <p className="text-lg w-[600px] text-slate-600 leading-relaxed text-justify">
            We leverage long-standing relationships with top-tier manufacturers
            and distributors to source high-quality electronic components at
            competitive prices, ensuring uninterrupted production.
          </p>
        </div>

        <div
          className="w-[500px] h-[350px] rounded-2xl bg-cover bg-center
          shadow-xl mt-2"
          style={{ backgroundImage: `url(${chain2})` }}
        />
      </section>

      {/* SECOND SECTION */}
      <section className="w-full h-[80vh] bg-slate-900
        flex items-center justify-between px-20">
        
        <div
          className="w-[500px] h-[350px] rounded-2xl bg-cover bg-center
          shadow-xl"
          style={{ backgroundImage: `url(${chain1})` }}
        />

        <div className="mr-[-3rem] p-8" data-aos="fade-right">
          <h2 className="text-accent font-bold italic mb-4">
            Vendor Management
          </h2>

          <h1 className="text-2xl font-semibold text-white mb-6">
            Lifecycle & Risk Mitigation
          </h1>

          <p className="text-lg w-[600px] text-gray-300 leading-relaxed text-justify">
            Our vendor and lifecycle management ensures proactive obsolescence
            handling, alternative sourcing strategies, and redesign
            recommendations to avoid supply disruptions.
          </p>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className="w-full h-[80vh] bg-slate-50
        flex items-center justify-between px-20">
        
        <div className="ml-[-3rem] p-8" data-aos="fade-left">
          <h2 className="text-accent font-bold italic mb-4">
            Smart Logistics
          </h2>

          <h1 className="text-2xl font-semibold text-slate-800 mb-6">
            Just-in-Time Supply Chain
          </h1>

          <p className="text-lg w-[600px] text-slate-600 leading-relaxed text-justify">
            Our logistics strategies ensure JIT material availability, reduced
            inventory costs, optimized lead times, and efficient global
            import/export operations.
          </p>
        </div>

        <div
          className="w-[500px] h-[350px] rounded-2xl bg-cover bg-center
          shadow-xl"
          style={{ backgroundImage: `url(${chain3})` }}
        />
      </section>
    </Layout>
  );
}
