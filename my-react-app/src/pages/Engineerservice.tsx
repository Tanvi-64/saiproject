import Layout from "@/components/layout/Layout";
import engservbg from "../assets/engservbg.png";
import { motion } from "framer-motion";


const Engineerservice = () => {
  return (
    <Layout>
     {/* HERO HEADER (Styled like About Section) */}
      <section className="relative py-24 md:py-32 min-h-[600px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${engservbg})` }}
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
               Engineering Excellence
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
             Engineering{" "}
              <span className="text-accent">Services</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-justify">
              We transform concepts into robust, ready-to-market products through
        complete design, validation, and engineering support.
            </p>
          </motion.div>
        </div>
      </section>

 {/* SECTION TITLE */}
      <section className="text-center mt-[2rem]">
        <h3 className="text-[2rem] font-bold italic">
          Our Expertise Includes
        </h3>
      </section>

      {/* SERVICES GRID */}
      <section className="relative mt-24 px-4 md:px-8 py-2 bg-white mb-7">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-slate-100 opacity-90 -mt-14" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {[
            {
              icon: "bx bx-chip",
              title: "Design for Fabrication (DFF)",
              desc: "We optimize designs to align with fabrication capabilities, ensuring manufacturability and cost-effectiveness.",
            },
            {
              icon: "bx bx-slider-alt",
              title: "Design for Assembly (DFA)",
              desc: "Our designs simplify assembly processes, reducing time and minimizing errors.",
            },
            {
              icon: "bx bx-cube-alt",
              title: "Design for Manufacturability (DFM)",
              desc: "We tailor designs for efficient manufacturing, balancing functionality, quality, and cost.",
            },
            {
              icon: "bx bx-analyse",
              title: "Design for Testability (DFT)",
              desc: "We integrate testing considerations into designs to facilitate effective quality assurance.",
            },
            {
              icon: "bx bx-transfer-alt",
              title: "Design for Supply Chain (DFSC)",
              desc: "Our designs consider supply chain logistics, ensuring timely component availability and cost efficiency.",
            },
            {
              icon: "bx bx-revision",
              title: "BOM Lifecycle Analysis",
              desc: "We assess component lifecycles to mitigate obsolescence risks and ensure long-term product viability.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[360px] min-h-[280px] bg-white p-6 md:p-10 rounded-2xl
                         shadow-xl border border-gray-200 text-center
                         transition-all duration-300
                         hover:-translate-y-3 hover:shadow-2xl flex flex-col items-center justify-center"
            >
              <i className={`${item.icon} text-5xl md:text-[4rem] text-accent mb-4`} />
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-sm  text-muted-foreground leading-snug text-justify">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Engineerservice;
