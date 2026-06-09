import healthimg from "../assets/healthcareimages/healthimg.png";
import healthimg1 from "../assets/healthcareimages/healthimg1.png";
import healthimg2 from "../assets/healthcareimages/healthimg2.png";
import healthimg3 from "../assets/healthcareimages/healthimg3.png";
import healthimg4 from "../assets/healthcareimages/healthimg4.png";
import healthimg5 from "../assets/healthcareimages/healthimg5.png";
import healthimg6 from "../assets/healthcareimages/healthimg6.png";
import healthimg7 from "../assets/healthcareimages/healthimg7.png";

import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const healthcareItems = [
  { img: healthimg1, title: "Ventilator Control Boards" },
  { img: healthimg2, title: "Electronics for X-ray Systems" },
  { img: healthimg3, title: "Electronic Cards for ECG Machines" },
  { img: healthimg4, title: "Patient Monitoring Systems" },
  { img: healthimg5, title: "Imaging and Scanning Equipment" },
  { img: healthimg6, title: "Medical IoT & Wearables" },
  { img: healthimg7, title: "Emedika – Frequency Therapy Device" },
];

const Healthcare = () => {
  return (
    <Layout>
      {/* HERO HEADER */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${healthimg})` }}
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
              Healthcare Solutions
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Healthcare & <span className="text-accent">Medical</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
              With a focus on quality, compliance, and innovation, we support the
              development of advanced medical devices that enhance patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HEALTHCARE GRID */}
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
          {healthcareItems.map((item, index) => (
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

              {/* OVERLAY */}
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
                    text-base sm:text-lg font-semibold text-white
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

export default Healthcare;
