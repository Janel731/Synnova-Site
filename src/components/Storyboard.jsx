import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import JV from '../assets/JV.webp';
import UR from '../assets/UR.webp';
import BBq from '../assets/BBq.webp';
import prestation from '../assets/prestation.webm';
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

    // Animation Blocs Storyboard (Style Tore Bentsen)
    storyRefs.current.forEach((el, index) => {
      const media = el.querySelector('.media-layer');
      
      // Point de transformation : coin supérieur gauche
      gsap.set(media, {
        transformOrigin: 'top left',
        width: '320px',
        height: '400px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%'
      });

      // Timeline avec ScrollTrigger (scrub pour suivre le scroll)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top bottom', // Commence quand le bloc entre en bas
          end: 'bottom top',   // Finit quand le bloc sort en haut
          scrub: 1,            // Suit le scroll fidèlement (1:1)
          toggleActions: 'play none none none'
        }
      });

      // Le média défile de droite à gauche en continu
      // Il part de 100% à droite et sort à -100% à gauche
      tl.fromTo(media,
        { x: '100%', opacity: 0, scale: 0.9 },
        { x: '-100%', opacity: 1, scale: 1, duration: 3, ease: 'none' }
      );

      // Animation d'opacité du texte (il reste fixe au centre)
      const textBack = el.querySelector('.text-back');
      const textFront = el.querySelector('.text-front');
      
      // Le texte apparaît au début du scroll
      tl.fromTo([textBack, textFront],
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power1.out' },
        '+=0'
      );
      
      // Réglage des opacités finales
      tl.set(textBack, { opacity: 0.15 }, '+=0');
      tl.set(textFront, { opacity: 1 }, '+=0');

      // Le texte disparaît à la fin du scroll
      tl.to([textBack, textFront],
        { opacity: 0, duration: 0.5 },
        '+=2.5' // Après que le média soit sorti
      );
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
            <div 
              key={item.id}
              ref={el => storyRefs.current[index] = el}
              className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-visible"
            >
              {/* Conteneur principal */}
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* ZONE TEXTE (fixe au premier plan) */}
                <div className="relative z-20 flex items-center justify-center w-full h-full">
                  
                  {/* TEXTE ARRIÈRE */}
                  <div className="text-back absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl sm:text-[32px] md:text-[96px] lg:text-[120px] uppercase tracking-[0.15em] font-cormorant-bold-italic text-[rgba(249,168,37,0.9)]">
                      {item.title}
                    </h1>
                  </div>

                  {/* TEXTE AVANT (STROKE) */}
                  <div className="text-front absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1
                      className="text-5xl sm:text-5xl md:text-[96px] lg:text-[120px] uppercase tracking-[0.15em] font-cormorant-bold-italic text-transparent"
                      style={{
                        WebkitTextStroke: '2px rgba(249,168,37,0.1)'
                      }}
                    >
                      {item.title}
                    </h1>
                  </div>

                </div>

                {/* MÉDIA (Image ou Vidéo) - En arrière-plan, défilement */}
                <div className="media-layer absolute z-10 opacity-0">
                  <div className="relative w-[320px] h-[400px] md:w-[420px] md:h-[520px] lg:w-[520px] lg:h-[640px] overflow-hidden rounded-2xl shadow-2xl">
                    {item.type === 'video' ? (
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
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Storyboard;