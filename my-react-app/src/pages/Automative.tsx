import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

import autoimg1 from "../assets/autoimg1.png";

import autoind1 from "../assets/autoimages/autoind1.png";
import autoind2 from "../assets/autoimages/autoind2.png";
import autoind3 from "../assets/autoimages/autoind3.png";
import autoind4 from "../assets/autoimages/autoind4.png";
import autoind5 from "../assets/autoimages/autoind5.png";
import autoind6 from "../assets/autoimages/autoind6.png";
import autoind7 from "../assets/autoimages/autoind7.png";
import autoind8 from "../assets/autoimages/autoind8.png";
import autoind9 from "../assets/autoimages/autoind9.png";
import autoind10 from "../assets/autoimages/autoind10.png";
import autoind11 from "../assets/autoimages/autoind11.png";
import autoind12 from "../assets/autoimages/autoind12.png";
import autoind13 from "../assets/autoimages/autoind13.png";
import autoind14 from "../assets/autoimages/autoind14.png";
import autoind15 from "../assets/autoimages/autoind15.png";
import autoind16 from "../assets/autoimages/autoind16.png";
import autoind17 from "../assets/autoimages/autoind17.png";
import autoind18 from "../assets/autoimages/autoind18.png";
import autoind19 from "../assets/autoimages/autoind19.png";
import autoind20 from "../assets/autoimages/autoind20.png";

import electind1 from "../assets/autoimages/electind1.png";
import electind2 from "../assets/autoimages/electind2.png";
import electind3 from "../assets/autoimages/electind3.png";
import electind4 from "../assets/autoimages/electind4.png";
import electind5 from "../assets/autoimages/electind5.png";
import electind6 from "../assets/autoimages/electind6.png";
import electind7 from "../assets/autoimages/electind7.png";
import electind8 from "../assets/autoimages/electind8.png";
import electind9 from "../assets/autoimages/electind9.png";

const automotiveSections = [
  {
    title: "Sensors & Control Units",
    images: [
      autoind1, autoind2, autoind3, autoind4,
      autoind5, autoind6, autoind7, autoind8, autoind9
    ],
  },
  {
    title: "Powertrain & Electronic Systems",
    images: [
      autoind10, autoind11, autoind12, autoind13, autoind14
    ],
  },
  {
    title: "Lighting Solutions (Lightronics)",
    images: [
      autoind15, autoind16, autoind17, autoind18,
      autoind19, autoind20
    ],
  },
];

const electricImages = [
  electind1, electind2, electind3,
  electind4, electind5, electind6,
  electind7, electind8, electind9
];

const Automative = () => {
  const [activeTab, setActiveTab] = useState("automotive");

  return (
    <Layout>

      {/* HERO SECTION */}
      <section className="relative min-h-[600px] flex items-center shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${autoimg1})` }}
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
              Automotive Solutions
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Automotive & <span className="text-accent">EV</span>
            </h1>

            <p className="text-lg text-white/90">
              Delivering high-reliability electronics and intelligent systems
              for next-generation mobility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-16 bg-white">
        <div className="container-wide max-w-4xl mx-auto text-center">
          {activeTab === "automotive" && (
            <p className="text-gray-700 text-lg text-justify">
              We deliver IATF 16949-certified electronic solutions for passenger
              and commercial vehicles including 2-wheelers, 3-wheelers,
              4-wheelers, buses, trucks, and tractors.
            </p>
          )}

          {activeTab === "electric" && (
            <p className="text-gray-700 text-lg">
              Enabling EV innovation through power electronics, battery
              management systems, energy optimization, and intelligent control
              platforms.
            </p>
          )}
        </div>
      </section>

      {/* TABS */}
      <section className="flex justify-center gap-6 mb-8 mt-4">
        {["automotive", "electric"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-full font-medium transition ${
              activeTab === tab
                ? "bg-accent text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab === "automotive" ? "Automotive" : "Electric"}
          </button>
        ))}
      </section>

      {/* GALLERY */}
      <section className="pb-24">
        <div className="container-wide">

          {/* AUTOMOTIVE */}
          {activeTab === "automotive" &&
            automotiveSections.map((section, idx) => (
              <div key={idx} className="mb-20">
                <h2 className="text-2xl font-bold mb-10">
                  {section.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {section.images.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="overflow-hidden rounded-2xl shadow-lg"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-56 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

          {/* ELECTRIC */}
          {activeTab === "electric" && (
            <>
              <h2 className="text-2xl font-bold mb-10">
                Electric & EV Systems
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {electricImages.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="overflow-hidden rounded-2xl shadow-lg"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-56 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

    </Layout>
  );
};

export default Automative;
