import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";

// Swiper styles
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-coverflow";
// @ts-ignore
import "swiper/css/pagination";
import Layout from "@/components/layout/Layout";
import aboutHero from "@/assets/about-hero.jpeg";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";
import p8 from "@/assets/p8.png";
import p9 from "@/assets/p9.png";
import memberI from "@/assets/memberI.png";
import j_2008 from "@/assets/j_2008.png";
import j_2011 from "@/assets/j_2011.png";
import j_2019 from "@/assets/j_2013.png";
import j_2025 from "@/assets/j_2025.png";

const journeyData = [
  {
    img: j_2008,
    description: "2008 :    Established with a vision to deliver high-quality electronic manufacturing solutions.",
  },
  {
    img: j_2011,
    description:"2011 :   Transitioned to a private limited company & comissioned our first SMT line.",
  },
  {
    img:j_2019,
    description:"2019 :   Shifted to a Company-owned ,state-of-the-art,Manufacturing plant at Kasurdi,Khed Shivapur,pune.  ",
  },
   {
    img:j_2025,
    description: "2025 :   Further expansion with advanced SMT lines & enhanced automation for increased  efficiency & scales",
  },
];



const images = [p1, p2, p3, p4,p5,p6,p7,p8,p9];

const values = [
  {
    icon: Award,
    title: "Customer Centric Approach",
    description: "We prioritize customer success by delivering solutions tailored to their unique needs with agility, transparency& reliability.",
  },
  {
    icon: Users,
    title: "Quality & Excellence",
    description: "We are committed to maintaining the highest standards in manufacturing, ensuring superior product quality.",
  },
  {
    icon: Heart,
    title: "Innovation & Technology",
    description: "We embrace innovation and leverage advanced technologies to stay ahead in a fast-evolving electronics industry.",
  },
  {
    icon: Clock,
    title: "Sustainability & Responsibility",
    description: "We champion a workplace that values diversity, fosters inclusivity & actively promotes women empowerment & equal opportunity for all.",
  },
];

const milestones = [
  { year: "2005", event: "Company Founded" },
  { year: "2008", event: "First Major Industrial Project" },
  { year: "2012", event: "ISO 9001 Certification" },
  { year: "2015", event: "Expanded to International Markets" },
  { year: "2018", event: "500+ Projects Milestone" },
  { year: "2023", event: "Industry Excellence Award" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 min-h-[600px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        
        {/* Additional darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              About Sai TechnoWork
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Driving Innovation in{" "}
              <span className="text-accent">Advanced Electronics Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed text-justify">
             Sai TechnoWork delivers high-quality custom electronics manufacturing solutions for OEMs across high- and low-volume production needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-lg">About Us </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
               Sai TechnoWorks offers high-mix low-volumes to low-mix high-volumes with mid to high complexity of products and has a proven track record of delivering high quality, custom-designed electronics manufacturing and material service solutions to a diverse group of OEMs. From extensive printed circuit board assembly to complete box-build, SnapSofts technology facilities are equipped with multiple automated, high speed, state-of the-art surface mount assembly lines capable of producing the entire gamut of complex designs using rigid and flexible multilayer PCBs.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-3xl font-bold text-accent">100+ </div>
                  <div className="text-sm text-muted-foreground">Satisfied Customers</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-3xl font-bold text-accent">450+</div>
                  <div className="text-sm text-muted-foreground"> Skilled Employees</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-primary rounded-lg p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-6">Company Timeline</h3>
                <div className="space-y-4">
                  {milestones.map((milestone) => (
                    <div key={milestone.year} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shrink-0">
                        <span className="font-bold text-accent-foreground text-sm">{milestone.year}</span>
                      </div>
                      <div className="flex-1 border-l-2 border-primary-foreground/20 pl-4">
                        <p className="font-medium">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 shadow-card"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
               To be a globally recognized Electronics Manufacturing Services (EMS) provider, delivering innovative, high-quality, and sustainable solutions that empower industries and enhance everyday life — built on a foundation of diversity, inclusivity, and equal opportunity for all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 shadow-card"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
               At SnapSofts Technology, our mission is to provide end-to-end, reliable, and cost-efficient electronics manufacturing solutions through cutting-edge technology, operational excellence, and an unwavering commitment to quality. We strive to build long-term partnerships, foster continuous innovation, and drive sustainable growth while exceeding customer expectations in every project we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium text-lg uppercase tracking-wider mb-5 -mt-7">
              What Drives Us
            </span>
            <h2 className="section-title mt-2">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide every decision and action at Sai TechnoWork
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg border border-border hover:border-accent transition-colors"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm text-justify">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        <section
        className="w-full py-20  bg-primary"
        data-aos="slide-up"
      >
     <div className="text-accent font-medium text-lg uppercase tracking-wider text-center  mb-5 -mt-7">
              Our Indicative Products
            </div>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="w-[260px] sm:w-[300px] md:w-[340px] flex justify-center"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-[220px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section
  className="w-full py-20 bg-secondary"
  data-aos="fade-up"
  data-aos-duration="1100"
  data-aos-delay="150"
>
  {/* Section Title */}
  <div className="text-center mb-16">
    <span className="text-accent font-medium text-lg uppercase tracking-wider  block mb-5 -mt-7">
      Our Leadership
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-primary">
      Leadership Team
    </h2>
  </div>

  {/* Team Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

    {[
      {
        name: "Mr. Tony Stark",
        role: "Director",
        desc:
          "Tony Stark is a dynamic business leader with extensive experience in strategy, business transformation, financial management, and operations across multiple manufacturing industries. As Director at Snapsofts Tech Pvt. Ltd., he drives long-term vision and operational excellence.",
      },
      {
        name: "Mr. Bruce Wayne",
        role: "Director",
        desc:
          "With over 44 years of industry experience, Mr. Bruce Wayne is a seasoned leader in supply chain management, production, finance, and operations. A Bachelor of Engineering in Electrical, he brings a strategic blend of financial expertise and production efficiency.",
      },
      {
        name: "Mr. Thor Odinsoni",
        role: "Director",
        desc:
          "Mr. Thor Odinsoni brings over 35 years of expertise in electronics design and development. An Electronics Engineering graduate, he has been instrumental in transforming concepts into manufacturable solutions.",
      },
      {
        name: "Mr. Peter Parker",
        role: "Director",
        desc:
          "Mr. Peter Parker brings over 35 years of leadership experience in marketing, sales, and inventory management. A Commerce Post-Graduate, he plays a pivotal role in driving market expansion and strategic growth initiatives.",
      },
    ].map((member, index) => (
      <div
        key={index}
        className="group bg-muted-foreground rounded-2xl p-6 flex gap-6 items-start
                   transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Image */}
        <img
          src={memberI}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-secondary
                     group-hover:border-accent transition"
        />

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-accent">
            {member.name}
          </h3>
          <p className="text-white font-medium mt-1">
            {member.role}
          </p>
          <p className="text-white text-sm mt-3 leading-relaxed text-justify">
            {member.desc}
          </p>
        </div>
      </div>
    ))}

  </div>
</section>

<section className="bg-primary py-20 flex justify-center">
  <div className="relative w-full max-w-6xl">

    <h2 className="text-accent text-lg uppercase tracking-wider font-bold text-center mb-5 -mt-7" >
      Our Journey
    </h2>

    {/* Prev Button */}
    <button className="journey-prev absolute left-0 md:left-[-50px] top-[60%] -translate-y-1/2
      w-10 h-10 rounded-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent
      shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-10
      text-white hover:scale-110">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <Swiper
      grabCursor
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={{
        prevEl: ".journey-prev",
        nextEl: ".journey-next",
      }}
      modules={[Autoplay, Navigation]}
    >
      {journeyData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="group relative h-[380px] overflow-hidden rounded-2xl">

            {/* Image */}
            <img
              src={item.img}
              alt={`Journey ${index}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Text */}
            <div className="absolute inset-0 bg-gradient-to-t 
              from-black/80 via-black/40 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
              flex items-end p-6">

              <p className="text-white text-xl font-medium translate-y-6 
                group-hover:translate-y-0 transition-transform duration-300">
                {item.description}
              </p>

            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Next Button */}
    <button className="journey-next absolute right-0 md:right-[-50px] top-[60%] -translate-y-1/2
      w-10 h-10 rounded-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent
      shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-10
      text-white hover:scale-110">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

  </div>
</section>
</Layout>
  );
};

export default About;
