import greenimg from "../assets/greenimages/greenimg.png";
import greenimg1 from "../assets/greenimages/greenimg1.png";
import greenimg2 from "../assets/greenimages/greenimg2.png";
import greenimg3 from "../assets/greenimages/greenimg3.png";
import greenimg4 from "../assets/greenimages/greenimg4.png";
import greenimg5 from "../assets/greenimages/greenimg5.png";
import greenimg6 from "../assets/greenimages/greenimg6.png";
import greenimg7 from "../assets/greenimages/greenimg7.png";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const greenItems = [
 { img: greenimg1, title: "Inverter Control Boards" },
  { img: greenimg2, title: "Solar Charge Controllers" },
  { img: greenimg3, title: "Wind Turbine Controller Boards" },
  { img: greenimg4, title: "Battery Pack Controllers" },
  { img: greenimg5, title: "Power Conversion Systems" },
  { img: greenimg6, title: "Smart Charging Communication Modules" },
  { img: greenimg7, title: "Microgrid Control Units" },
];

const Green = () => {
  return (
    <Layout>
      {/* HERO HEADER */}
      <section className="relative py-24 md:py-32 min-h-[600px] flex items-center shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${greenimg})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm mb-6">
              GreenEnergy Solutions
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Green <span className="text-accent">Energy</span>
            </h1>

            <p className="text-lg text-white/90">
              At Sai TechnoWorks, we power the green energy sector with
              high-reliability PCB assemblies and box builds for solar, wind,
              and energy storage systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GREEN ENERGY GRID */}
      <section className="px-20 pb-32 text-slate-100">
        <h2 className="text-3xl font-semibold text-center mb-14 mt-14 text-slate-500">
          Our Indicative Products
        </h2>

        <div className="grid grid-cols-4 gap-8 justify-center">
          {greenItems.map((item, index) => (
            <div
              key={index}
              className={`
                relative h-[280px] max-w-[350px] rounded-2xl overflow-hidden
                shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                group cursor-pointer
                ${index === greenItems.length - 2 ? "col-start-2" : ""}
                ${index === greenItems.length - 1 ? "col-start-3" : ""}
              `}
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* OVERLAY (TITLE ONLY) */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-xl italic font-semibold text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Green;
