import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import JV from '../assets/JV.webp';
import UR from '../assets/UR.webp';
import BBq from '../assets/BBq.webp';
import prestation from '../assets/prestation.webm';
import { motion } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

const Storyboard = () => {
  const sectionRef = useRef(null);
  const storyRefs = useRef([]);

  // --- PARTIE 1 : STATS ---
  const statsData = [
    { number: '+3', label: 'Années d\'engagement' },
    { number: '4', label: 'Univers créatifs' },
    { number: '+5', label: 'Événements culturels & artistiques' },
    { number: '1', label: 'Communauté — Un engagement local fort' }
  ];

  // --- PARTIE 2 : STORYBOARD BLOCS ---
  const storyData = [
    {
      id: 1,
      title: 'Journée du vacancier',
      media: JV,
      type: 'image'
    },
    {
      id: 2,
      title: 'U-report',
      media: UR,
      type: 'image'
    },
    {
      id: 3,
      title: 'Événements à venir',
      media: BBq,
      type: 'image'
    },
    {
      id: 4,
      title: "Animation d'Événements",
      media: prestation,
      type: 'video'
    }
  ];

  // --- GSAP ANIMATION (Style Tore Bentsen) ---
  useGSAP(() => {
    // Animation Statistiques
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.stats-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

  


    
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-20 md:py-32 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ============================================ */}
        {/* PARTIE 1 : STATS + TITRE CENTRÉ                */}
        {/* ============================================ */}
        <div className="mb-24 md:mb-40">
          
          <h1 className="text-center text-5xl md:text-7xl lg:text-8xl font-cormorant-bold-italic uppercase tracking-[0.15em] text-white mb-16">
            <span className="text-transparent" style={{ 
              WebkitTextStroke: '2px rgba(194,24,91, 0.8)'
            }}>
              Synnova
            </span>{' '}
            <span className="text-[#C2185B]">TOCLOE</span>
          </h1>

          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 font-dancing-italic">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-item text-center flex flex-col items-center">
                <span className="text-5xl md:text-7xl font-bold text-[#F9A825]">
                  {stat.number}
                </span>
                <p className="text-white/80 text-xl  mt-2 max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================ */}
        {/* PARTIE 2 : STORYBOARD - 4 BLOCS               */}
        {/* ============================================ */}
        <div className="space-y-48 md:space-y-64">

  {storyData.map((item, index) => (
    
    <motion.div
      key={item.id}
      ref={(el) => (storyRefs.current[index] = el)}
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden"
    >

      {/* CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* MEDIA */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative flex justify-center"
        >
          <div className="relative w-[320px] h-[400px] md:w-[420px] md:h-[520px] lg:w-[520px] lg:h-[640px] overflow-hidden rounded-2xl shadow-2xl">

            {item.type === "video" ? (
              <video
                src={item.media}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={item.media}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            )}

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20" />

          </div>
        </motion.div>

        {/* TEXT */}
        <div className="relative z-20 text-right px-6 md:px-0">

          {/* TITLE BACK */}
          <motion.h1
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="text-5xl sm:text-6xl md:text-[90px] lg:text-[120px]
            uppercase tracking-[0.12em]
            font-cormorant-bold-italic
            text-[rgba(249,168,37,0.9)]
            leading-none"
          >
            {item.title}
          </motion.h1>

          {/* STROKE */}
          <motion.h1
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            className="absolute top-0 right-0
            text-5xl sm:text-6xl md:text-[90px] lg:text-[120px]
            uppercase tracking-[0.12em]
            font-cormorant-bold-italic
            text-transparent leading-none"
            style={{
              WebkitTextStroke: "2px rgba(249,168,37,0.12)",
            }}
          >
            {item.title}
          </motion.h1>

        </div>

      </div>
    </motion.div>

  ))}

</div>

      </div>
    </section>
  );
};

export default Storyboard;