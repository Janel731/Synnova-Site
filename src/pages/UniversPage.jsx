"use client";

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import transition from "../transition";
import { BlurFade } from "@/components/ui/blur-fade";
import animation from "../assets/animation.webp";
import animation2 from "../assets/animation2.webp";
import CIPD from "../assets/CIPD.webp";
import CV from "../assets/CV.webp";
import JV from "../assets/JV.webp";
import UR from "../assets/UR.webp";
import Don from "../assets/Don.webp";
import engagement from "../assets/engagement.webp";
import cinema from "../assets/cine.webp";
import eco from "../assets/eco.webp";
import { Link } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                                UNIVERS DATA                                */
/* -------------------------------------------------------------------------- */

const universes = [
  {
    id: "animation",
    title: "Animation & Événements",
    color: "#E91E63",
    image: "/assets/animation.webp",
    gallery: [animation],
    intro:
      "Des expériences vivantes qui captivent, rassemblent et marquent les esprits.",
    content: `
Créer des expériences événementielles vivantes et mémorables  
Animer et captiver des publics lors d’événements culturels et privés  
Transformer chaque moment en une expérience immersive et engageante  
`,
    cta: "Créer un événement ensemble",
    next: "communication",
    prev: null,
  },

  {
    id: "communication",
    title: "Communication Digitale",
    color: "#7E57C2",
    image: "/assets/communication.webp",
    gallery: [engagement],
    intro:
      "Des contenus stratégiques qui attirent, engagent et construisent une image forte.",
    content: `
Construire des stratégies de communication qui attirent et engagent  
Créer du contenu digital cohérent et impactant pour les réseaux sociaux  
Développer une identité forte qui transforme une audience en communauté  
`,
    cta: "Développer ta présence digitale",
    next: "cinema",
    prev: "animation",
  },

  {
    id: "cinema",
    title: "Cinéma & Régie",
    color: "#607D8B",
    image: "/assets/cinema.webp",
    gallery: [cinema],
    intro:
      "Des histoires mises en scène avec précision, émotion et vision artistique.",
    content: `
Participer à des productions audiovisuelles et projets cinématographiques  
Intervenir en tant qu’actrice et régisseuse plateau sur les tournages  
Assurer la coordination et la fluidité des scènes et des productions  
`,
    cta: "Créer une production ensemble",
    next: "eco",
    prev: "communication",
  },

  {
    id: "eco",
    title: "Entrepreneuriat Social",
    color: "#66BB6A",
    image: "/assets/eco.webp",
    gallery: [eco],
    intro: "Des solutions concrètes pour un impact réel et durable.",
    content: `
Développer des solutions écologiques et responsables adaptées aux besoins locaux  
Créer des emballages biodégradables pour réduire l’impact environnemental  
Promouvoir des initiatives à impact social pour un avenir durable  
`,
    cta: "Construire un projet durable",
    next: "gallery",
    prev: "cinema",
  },

  {
    id: "gallery",
    title: "Galerie",
    color: "#B0BEC5",
    image: "/assets/gallery.webp",
    gallery: [animation2, CIPD, CV, JV, UR, Don],
    intro: "Un voyage visuel à travers les moments et expériences.",
    content: `Chaque image raconte une histoire.`,
    cta: "Collaborer sur un projet",
    next: null,
    prev: "eco",
  },
];

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

function UniversPage() {
  const [active, setActive] = useState(null);
  const [transition, setTransition] = useState(null);
  const [lock, setLock] = useState(false);

  const get = (id) => universes.find((u) => u.id === id);

  /* ----------------------------- CORE FIX ----------------------------- */
  const changeUniverse = (id) => {
    if (lock) return;

    const u = get(id);
    if (!u) return;

    setLock(true);
    setTransition(u.color);

    setTimeout(() => {
      setActive(u);

      // 🔥 FIX BUG SCROLL
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 650);
  };

  const close = () => {
    if (lock) return;

    setLock(true);
    setTransition("#070A12");

    setTimeout(() => {
      setActive(null);

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 650);
  };

  return (
    <>
      <Helmet>
        <title>Mes Univers | Synnova</title>
      </Helmet>

      <main className="min-h-screen bg-[#070A12] text-white overflow-hidden">
        {/* ================= HUB ================= */}
        {!active && (
          <section className="flex min-h-screen items-center justify-center px-4">
            <div className="text-center">
              <BlurFade delay={0.25} inView>
                <h1 className="text-4xl md:text-6xl font-dancing-bold">
                  Mes <span className="text-rose">Univers</span>
                </h1>
              </BlurFade>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                {universes.map((u) => (
                  <BlurFade delay={0.25} inView>
                    <button
                      key={u.id}
                      onClick={() => changeUniverse(u.id)}
                      className="px-6 py-3 rounded-full bg-white/10 text-xl font-dancing-medium"
                      style={{ border: `1px solid ${u.color}` }}
                    >
                      {u.title}
                    </button>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= TRANSITION ================= */}
        <AnimatePresence>
          {transition && (
            <motion.div
              className="fixed inset-0 z-[100]"
              style={{ backgroundColor: transition }}
              initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onAnimationComplete={() => {
                setTransition(null);
                setLock(false);
              }}
            />
          )}
        </AnimatePresence>

        {/* ================= ACTIVE UNIVERS ================= */}
        {active && (
          <section>
            <div className="relative h-screen flex items-center justify-center text-center">
              <img
                src={active.image}
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-black/70" />

              <div>
                <h1
                  className="text-4xl md:text-6xl font-dancing-bold"
                  style={{ color: active.color }}
                >
                  {active.title}
                </h1>

                <p className="text-white/60 mt-4 max-w-xl mx-auto font-outfit-light">
                  {active.intro}
                </p>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
              {/* MAIN LAYOUT */}
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
                {/* LEFT CONTENT */}
                <div className="space-y-5">
                  {active.content
                    .trim()
                    .split("\n")
                    .filter((line) => line.trim() !== "")
                    .map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          x: -40,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.08,
                        }}
                        className="
            flex items-center gap-4
            p-5 md:p-6
            rounded-[28px]
            bg-white/[0.04]
            border border-white/5
            backdrop-blur-md
            hover:bg-white/[0.06]
            transition-all duration-500
            "
                      >
                        {/* DOT */}
                        <div
                          className="w-3 h-3 rounded-full shrink-0"
                          style={{
                            backgroundColor: active.color,
                          }}
                        />

                        {/* TEXT */}
                        <p
                          className="
              text-white/80
              font-outfit-light
              leading-relaxed
              text-sm md:text-base
              max-w-[420px]
              "
                        >
                          {line}
                        </p>
                      </motion.div>
                    ))}
                </div>

                {/* RIGHT GALLERY */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {active.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 60,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.1,
                      }}
                      className="
          group
          relative
          overflow-hidden
          rounded-[32px]
          "
                    >
                      <div className="aspect-[4/5] md:aspect-[4/4.8] overflow-hidden bg-white/5">
                        <img
                          src={img}
                          alt="Synnova"
                          className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
              "
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 flex justify-center lg:justify-start">
                <Link to="/ContactPage">
                  <button
                    className="
        px-8 py-4
        rounded-full
        text-black
        font-outfit-medium
        transition-transform duration-300
        hover:scale-105
        "
                    style={{
                      backgroundColor: active.color,
                    }}
                  >
                    {active.cta}
                  </button>
                </Link>
              </div>

              {/* NAV */}
              <div className="flex justify-between items-center mt-20 font-outfit-regular text-white/70">
                {active.prev ? (
                  <button
                    onClick={() => changeUniverse(active.prev)}
                    className="hover:text-white transition"
                  >
                    ← {get(active.prev)?.title}
                  </button>
                ) : (
                  <div />
                )}

                {active.next && (
                  <button
                    onClick={() => changeUniverse(active.next)}
                    className="hover:text-white transition"
                  >
                    {get(active.next)?.title} →
                  </button>
                )}
              </div>

              {/* BACK */}
              <button
                onClick={close}
                className="
    fixed top-4 left-4 z-50
    bg-white/10
    backdrop-blur-md
    border border-white/10
    px-5 py-2.5
    rounded-full
    hover:bg-white/20
    transition
    "
              >
                Retour
              </button>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default transition(UniversPage);
