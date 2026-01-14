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
 { img: healthimg1, title: "Ventilator Control Baords" },
  { img: healthimg2, title: "Electronics for X-ray systems" },
  { img: healthimg3, title: "Electronic cards for ECG Machines" },
  { img: healthimg4, title: "Patient Monitoring Systems" },
  { img: healthimg5, title: "Imaging and Scanning Equipment" },
  { img: healthimg6, title: "Medical IoT & Wearables" },
   { img: healthimg7, title: "Emedika - Frequency Therapy Device" },
];

const Healthcare = () => {
  return (
    <Layout>
      {/* HERO HEADER */}
      <section className="relative py-24 md:py-32 min-h-[600px] flex items-center shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${healthimg})` }}
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
              Healthcare Solutions
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Healthcare & <span className="text-accent">Medical</span>
            </h1>

            <p className="text-lg text-white/90">
              With a focus on quality, compliance, and innovation, we support the
              development of advanced medical devices that enhance patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HEALTHCARE GRID */}
      <section className="px-20 pb-32 text-slate-100">
        <h2 className="text-3xl font-semibold text-center mb-14 mt-14 text-slate-500">
          Our Indicative Products
        </h2>

        <div className="grid grid-cols-4 gap-8 justify-center">
          {healthcareItems.map((item, index) => (
            <div
              key={index}
              className={`
                relative h-[280px] max-w-[350px] rounded-2xl overflow-hidden
                shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                group cursor-pointer
                ${
                  index === healthcareItems.length - 2
                    ? "col-start-2"
                    : ""
                }
                ${
                  index === healthcareItems.length - 1
                    ? "col-start-3"
                    : ""
                }
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

export default Healthcare;
