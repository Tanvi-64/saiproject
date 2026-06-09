import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

import design1 from "../assets/design1 (1).png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";
import design5 from "../assets/design5.png";
import design6 from "../assets/design6.png";
import design7 from "../assets/design7.png";
import design8 from "../assets/design8.png";
import design9 from "../assets/design9.png";
import designbg from "../assets/designbg.png";

const Design = () => {
  return (
    <Layout>

      {/* HERO HEADER (Styled like About Section) */}
      <section className="relative py-24 md:py-32 min-h-[600px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${designbg})` }}
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
              Design & Development
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Design &{" "}
              <span className="text-accent">Support Services</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-justify">
              Our comprehensive design and support services help bring your ideas
              to life with precision, performance, and manufacturability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HARDWARE DESIGN */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-lg text-accent font-bold text-center mb-12 italic">
            Hardware Design
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[design1, design2, design3].map((img, i) => (
              <div
                key={i}
                className="rounded-xl shadow-lg overflow-hidden bg-white"
              >
                <img src={img} alt="" className="h-64 w-full object-cover" />
                <h3 className="text-lg font-medium text-center py-4 text-slate-700">
                  {[
                    "Circuit Design & Board Layout",
                    "Design for EMI Compliance",
                    "Electro-Mechanical Integration",
                  ][i]}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIRMWARE DEVELOPMENT */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-wide">
          <h2 className="ext-lg text-accent  font-bold text-center mb-12 italic">
            Firmware Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[design4, design5, design6].map((img, i) => (
              <div
                key={i}
                className="rounded-xl shadow-lg overflow-hidden bg-white text-black"
              >
                <img src={img} alt="" className="h-64 w-full object-cover" />
                <h3 className="text-lg font-medium text-center py-4 text-slate-700">
                  {[
                    "RTOS & BSP Development",
                    "System on Chip Integration",
                    "Custom Device Drivers",
                  ][i]}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOTYPING & TESTING */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <h2 className="ext-lg text-accent  font-bold text-center mb-12 italic">
            Rapid Prototyping & Testing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[design7, design8, design9].map((img, i) => (
              <div
                key={i}
                className="rounded-xl shadow-lg overflow-hidden bg-white"
              >
                <img src={img} alt="" className="h-64 w-full object-cover" />
                <h3 className="text-lg font-medium text-center py-4 text-slate-700">
                  {[
                    "BOM Procurement",
                    "Product Integration",
                    "Verification & Validation",
                  ][i]}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Design;
