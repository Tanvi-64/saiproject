import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import iotbg from "../assets/iotbg.png";

import iotimg1 from "../assets/autoimages/iotimg1.png";
import iotimg2 from "../assets/autoimages/iotimg2.png";
import iotimg3 from "../assets/autoimages/iotimg3.png";
import iotimg4 from "../assets/autoimages/iotimg4.png";

const iotCards = [
  {
    img: iotimg1,
    title: "Embedded Controller Boards",
    desc: "Custom PCBs for sensors, actuators, and industrial control units",
  },
  {
    img: iotimg2,
    title: "Edge AI Modules",
    desc: "Compact AI processing boards for real-time inference, vision analytics, and predictive systems",
  },
  {
    img: iotimg3,
    title: "Smart IoT Gateways",
    desc: "Multi-protocol devices integrating sensor data and transmitting securely to the cloud",
  },
  {
    img: iotimg4,
    title: "AI-Powered Vision Systems",
    desc: "Camera and processing boards for surveillance, defect detection, and automation",
  },
];

const Iot = () => {
  return (
    <Layout>
      {/* HERO HEADER */}
      <section className="relative py-24 md:py-32 min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${iotbg})` }}
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
              IoT Solutions
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IOT, Embedded <span className="text-accent">& AI</span>
            </h1>

            <p className="text-lg text-white/90">
              Delivering intelligent, connected, and scalable electronics for
              next-generation IoT and AI-powered systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-16 bg-white">
        <div className="container-wide max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg text-justify">
            At SnapSofts Tech, we enable the future of connected devices by
            delivering high-precision electronics manufacturing and design
            support for IoT, embedded systems, and AI-powered products across
            diverse industries.
          </p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="pb-24">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mt-6 mb-14 text-accent">
            Our Indicative Products / Product Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iotCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* IMAGE */}
                <div className="w-1/3">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* TEXT */}
                <div className="w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-justify">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Iot;
