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
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${greenimg})` }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl sm:max-w-2xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-xs sm:text-sm mb-6">
              GreenEnergy Solutions
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Green <span className="text-accent">Energy</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
              At Sai TechnoWorks, we power the green energy sector with
              high-reliability PCB assemblies and box builds for solar, wind,
              and energy storage systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GREEN ENERGY GRID */}
      <section className="px-4 sm:px-8 lg:px-20 py-20 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12 text-slate-600">
          Our Indicative Products
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
            place-items-center
          "
        >
          {greenItems.map((item, index) => (
            <div
              key={index}
              className="
                relative
                h-[230px] sm:h-[250px]
                w-full max-w-[320px]
                rounded-2xl overflow-hidden
                shadow-xl
                group cursor-pointer
              "
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY (TITLE ONLY) */}
              <div
                className="
                  absolute inset-0
                  bg-black/70
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-end p-5
                "
              >
                <h3
                  className="
                    text-lg font-semibold text-white
                    translate-y-4 opacity-0
                    group-hover:translate-y-0 group-hover:opacity-100
                    transition-all duration-300 delay-150
                  "
                >
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
