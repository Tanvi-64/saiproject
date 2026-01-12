import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Component,
  Settings, 
  Zap, 
  Container, 
  CheckCircle, 
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/home-hero.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import award1 from "@/assets/award1.png";
import award2 from "@/assets/award2.png";
import award3 from "@/assets/award3.png";
import award4 from "@/assets/award4.png";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";

const peopleData = [
  { img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=800&q=80" },
  { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fit=crop&w=800&q=80" },
  { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?fit=crop&w=800&q=80" },
  { img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?fit=crop&w=800&q=80" },
  { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=800&q=80" },
];

const services = [
  {
    icon: Component,
    title: "Design Support & Development",
    description: "SnapSofts tech delivers complete design support solutions tailored to customer requirements, integrating design and system-level thinking.",
  },
  {
    icon: Settings,
    title: "Engineering Services",
    description: "We transform concepts into robust, ready-to-market products through complete design and development support.",
  },
  {
    icon: Zap,
    title: "Electronics Manufacturing Services",
    description: "From component sourcing to final assembly, we deliver reliable, high-quality manufacturing solutions that power innovation and meet global standards.",
  },
  {
    icon: Container,
    title: "Supply Chain & Procurement Services",
    description: "From strategic sourcing to seamless logistics management, we provide efficient, cost-effective supply chain and procurement solutions that ensure reliability, transparency, and timely delivery across global networks.",
  },
];

const awards = [
  {
    title: "Excellence Award",
    subtitle: "",
    image:
       award1,
  },

  {
    title: "Industry Recognition",
    subtitle: "",
    image:
      award2,
  },
    {
    title: "Industry Recognition",
    subtitle: "",
    image:
      award3,
  },
  {
    title: "Star Performer",
    subtitle: "",
    image:
      award4,
  },
];

const Index = () => {
  return (
    <Layout>
      
      {/* <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
          
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Innovation Engineered.
Integrated EMS for{" "}
              <span className="text-accent"><br/>a Smarter Tomorrow.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-6xl">
               SnapSofts tech delivers end-to-end EMS solutions, supporting global supply chains with precision and smart manufacturing. Leveraging IoT and AI, we build intelligent, inclusive solutions powered by a diverse, women-led workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-accent text-base px-8 py-6">
                <Link to="/Services">
                  Explore Services
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
             
            </div>
          </motion.div>
        </div>

      </section> */}
      {/* Hero Section */}
<section className="relative min-h-[90dvh] flex items-center overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroImage})` }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/55" />
  
  {/* Additional overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Content */}
  <div className="container-wide relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
        Innovation Engineered. Integrated EMS for{" "}
        <span className="text-accent block">a Smarter Tomorrow.</span>
      </h1>

      <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-6xl">
        SnapSofts Tech delivers end-to-end EMS solutions, supporting global supply
        chains with precision and smart manufacturing. Leveraging IoT and AI, we
        build intelligent, inclusive solutions powered by a diverse, women-led
        workforce.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="btn-accent text-base px-8 py-6">
          <Link to="/Services">
            Explore Services
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </Button>
      </div>
    </motion.div>
  </div>
</section>


      {/* About Preview Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-lg uppercase tracking-wider font-bold">
                About Sai TechnoWork
              </span>
              <p className="text-muted-foreground leading-relaxed mb-6">
               SnapSofts Technology offers high-mix low-volumes to low-mix high-volumes with mid to high complexity of products and has a proven track record of delivering high quality, custom-designed electronics manufacturing and material service solutions to a diverse group of OEMs. From extensive printed circuit board assembly to complete box-build, SnapSofts technology facilities are equipped with multiple automated, high speed, state-of the-art surface mount assembly lines capable of producing the entire gamut of complex designs using rigid and flexible multilayer PCBs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "State-of-the-Art Infrastructure and Machinery",
                  "Diversified Product Portfolio.",
                  "Ambitious Expansion Plans",
                  
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-accent shrink-0" size={20} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="btn-accent">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-6 shadow-card">
                    <Component className="text-accent mb-4" size={32} />
                    <h4 className="font-semibold text-foreground mb-2">Electrical Systems</h4>
                    <p className="text-sm text-muted-foreground">Power distribution & control</p>
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-lg p-6">
                    <div className="text-4xl font-bold mb-2">450+</div>
                    <p className="text-sm text-primary-foreground/80">Skilled Employees</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-accent text-accent-foreground rounded-lg p-6">
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <p className="text-sm text-accent-foreground/90">Satisfied Customers</p>
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-card">
                    <Settings className="text-accent mb-4" size={32} />
                    <h4 className="font-semibold text-foreground mb-2">Mechanical Solutions</h4>
                    <p className="text-sm text-muted-foreground">HVAC & industrial systems</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-lg uppercase tracking-wider font-bold">
              What We Offer
            </span>
            <h2 className="section-title mt-2">
           Integrated Engineering Solutions
            </h2>
            <p className="section-subtitle mx-auto">
               end-to-end solutions ranging from design and engineering services to electronics manufacturing and supply chain management. Our integrated approach ensures innovation, quality, and timely delivery across every stage of the product lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-industrial p-6 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <service.icon className="text-accent group-hover:text-accent-foreground transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent text-lg uppercase tracking-wider font-bold">
            Our Achievements
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
            Awards & Recognition
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-base md:text-lg">
            Recognizing excellence, quality, and innovation across our journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-primary"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

              {/* Content */}
              {(award.title || award.subtitle) && (
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-primary/80 backdrop-blur-md rounded-xl px-4 py-3">
                    <h3 className="text-sm font-semibold text-white">
                      {award.title}
                    </h3>
                    {award.subtitle && (
                      <p className="text-xs text-primary-foreground/80 mt-1">
                        {award.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Clients/Certifications Section */}
     <section id="peoples" className="py-20 mt-16">
      {/* Heading */}
      <h2
        className="text-accent text-lg uppercase tracking-wider font-bold text-center"
        data-aos="slide-up"
        data-aos-duration="300"
        data-aos-delay="100"
      >
        Our People, Our Strength
      </h2>

      {/* Description */}
      <p
        className="mt-6 mb-14 max-w-5xl mx-auto text-center
                   text-lg md:text-xl leading-relaxed text-slate-700"
        data-aos="slide-up"
        data-aos-duration="300"
        data-aos-delay="100"
      >
        Every day at Snapsofts Tech, our teams bring dedication, skill, and heart
        to their work—on the shop floor, at their desks, and in our meeting rooms.
        Scroll through moments from daily life and key events at Snapsofts Tech,
        where collaboration drives quality and people power progress.
      </p>

      {/* Slider */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-12">
        {/* Prev Button */}
        <button className="people-prev absolute left-0 md:left-[-48px] top-1/2 -translate-y-1/2
                           w-12 h-12 rounded-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent
                           transition-all duration-300 flex items-center justify-center z-10 shadow-lg hover:shadow-xl">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <Swiper
          grabCursor
          slidesPerView={1}
          spaceBetween={25}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".people-prev",
            nextEl: ".people-next",
          }}
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper: SwiperType) => {
            setTimeout(() => {
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {peopleData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-[300px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={item.img}
                  alt={`People ${index + 1}`}
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             hover:scale-110 cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <button className="people-next absolute right-0 md:right-[-48px] top-1/2 -translate-y-1/2
                           w-12 h-12 rounded-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent
                           transition-all duration-300 flex items-center justify-center z-10 shadow-lg hover:shadow-xl">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>

     
    </Layout>
  );
};

export default Index;
