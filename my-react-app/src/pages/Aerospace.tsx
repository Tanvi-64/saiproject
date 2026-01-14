import aeroheaderimg from "../assets/aerospaceimg/aeroheaderimg.png";
import aeroimg1 from "../assets/aerospaceimg/aeroimg1.png";
import aeroimg2 from "../assets/aerospaceimg/aeroimg2.png";
import aeroimg3 from "../assets/aerospaceimg/aeroimg3.png";
import aeroimg4 from "../assets/aerospaceimg/aeroimg4.png";
import aeroimg5 from "../assets/aerospaceimg/aeroimg5.png";
import aeroimg6 from "../assets/aerospaceimg/aeroimg6.png";
import aeroimg7 from "../assets/aerospaceimg/aeroimg7.png";
import aeroimg8 from "../assets/aerospaceimg/aeroimg8.png";
import aeroimg9 from "../assets/aerospaceimg/aeroimg9.png";
import aeroimg10 from "../assets/aerospaceimg/aeroimg10.png";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const aerospaceItems = [
  { img: aeroimg1, title: "Mine Detection Cards", desc: "Advanced sensing technology for enhanced battlefield safety" },
  { img: aeroimg2, title: "Vehicle Communication Cards", desc: "Seamless communication & control in combat vehicles" },
  { img: aeroimg3, title: "Laser Range Finder Cards", desc: "Precision targeting for defense systems" },
  { img: aeroimg4, title: "Fuses for Artillery Guns", desc: "High-accuracy electronic fuse technology" },
  { img: aeroimg5, title: "Analog & Digital Modules", desc: "Robust electronic systems for military applications" },
  { img: aeroimg6, title: "PAS for Naval Applications", desc: "Power & signal processing for maritime defense" },
  { img: aeroimg7, title: "Power Supply & Logic Cards", desc: "Stable & efficient power distribution systems" },
  { img: aeroimg8, title: "Electronic Activation Fuse Assemblies", desc: "Reliable electronic fuse mechanisms" },
  { img: aeroimg9, title: "Night Vision Control Cards", desc: "Enhanced visibility in low-light operations" },
  { img: aeroimg10, title: "DTMD Power Distribution", desc: "High-performance power management solutions" },
];

const Aerospace = () => {
  return (
    <Layout>
      {/* HERO HEADER */}
      <section className="relative py-24 md:py-32 min-h-[600px] flex items-center shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aeroheaderimg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm mb-6">
              Aerospace Solutions
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Aerospace & <span className="text-accent">Defence</span>
            </h1>

            <p className="text-lg text-white/90 leading-relaxed text-justify">
              We collaborate with leading PSUs and private enterprises to deliver
              mission-critical, high-reliability electronic solutions for defense
              and aerospace applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AEROSPACE GRID */}
      <section className="px-20 pb-32 text-slate-100">
        <h2 className="text-3xl font-semibold text-center mb-14 mt-14 text-slate-500">
          Our Indicative Products
        </h2>

        <div className="grid grid-cols-4 gap-8 justify-center">
          {aerospaceItems.map((item, index) => (
            <div
              key={index}
              className={`
                relative h-[280px] max-w-[350px] rounded-2xl overflow-hidden
                shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                group cursor-pointer
                ${index === aerospaceItems.length - 2 ? "col-start-2" : ""}
                ${index === aerospaceItems.length - 1 ? "col-start-3" : ""}
              `}
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl italic font-semibold text-white mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-200 leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Aerospace;
