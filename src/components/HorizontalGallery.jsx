import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const items = [
    { id: 1, title: "Ambiance", image: slide1 },
    { id: 2, title: "Création", image: slide2 },
    { id: 3, title: "Mood", image: slide3 },
    { id: 4, title: "Impact", image: slide4 },
  ];

  useGSAP(() => {
    const container = containerRef.current;
    const totalWidth = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: -totalWidth,
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalWidth}`,
        toggleActions: "play none none none",
      },
      ease: "none",
      duration: 3,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] h-screen overflow-hidden relative"
    >
      <div
        ref={containerRef}
        className="flex h-screen items-center px-6 md:px-12 gap-6 md:gap-12"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden group"
          >
            {/* Wrapper interne pour l'effet hover */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,17,64,0.8)] to-transparent pointer-events-none" />

            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 pointer-events-none">
              <h3 className="text-4xl md:text-6xl font-cormorant-bold-italic text-[#FAFAFA]">
                {item.title}
              </h3>
              <div className="w-16 h-1 bg-[#F9A825] mt-2 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}