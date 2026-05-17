"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import transition from "../transition";
import animation from "../assets/animation.webp";
import animation2 from "../assets/animation2.webp";
import CIPD from "../assets/CIPD.webp";
import CV from "../assets/CV.webp";
import JV from "../assets/JV.webp";
import UR from "../assets/UR.webp";
import Don from "../assets/Don.webp";
import FINAB from "../assets/FINAB.webp";
import cinema from "../assets/cinema.webp";
import eco from "../assets/eco.webp";
import entrepreneuriat from "../assets/entrepreneuriat.webp";
import collecte from "../assets/collecte.webp";
import DEF from "../assets/DEF.webp";
import Kitsco from "../assets/Kitsco.webp";
import Radio from "../assets/Radio.webp";
import slide4 from "../assets/slide4.webp";
import slide1 from "../assets/slide1.webp";
import BBq from "../assets/BBq.webp";
import { TestimonialsSection } from "@/components/testimonials-section";
import { BlurFade } from "@/components/ui/blur-fade";
/* -------------------------------------------------------------------------- */
/*                                  DATA                                      */
/* -------------------------------------------------------------------------- */

const categories = [
  "Tous",
  "Événements",
  "Cinéma",
  "Communication",
  "Social",
  "Entrepreneuriat",
];

const projects = [
  {
    id: 1,
    title: "Festival International des Arts du Bénin",
    category: "Événements",
    image: FINAB,
  },
  
  {
    id: 2,
    title: "Collecte de Kits scolaire",
    category: "Communication",
    image: collecte,
  },
  {
    id: 3,
    title: "Projet Éco Responsable",
    category: "Entrepreneuriat",
    image: eco,
  },
  {
    id: 4,
    title: "Animation Live Event",
    category: "Événements",
    image: animation2,
  },

  {
    id: 5,
    title: "Distribution  de Kis scolaires",
    category: "Social",
    image: Kitsco,
  },

  {
    id: 6,
    title: "Dimanche en famille",
    category: "Événements",
    image: slide1,
  },

  {
    id: 7,
    title: "Journée du vacancier",
    category: "Événements",
    image: JV,
  },

  {
    id: 8,
    title: "Dimanche en famille",
    category: "Événements",
    image: DEF,
  },

  {
    id: 9,
    title: "Convoi du vivre ensemble",
    category: "Social",
    image: CV,
  },

  {
    id: 10,
    title: "Don au femmes",
    category: "Social",
    image: Don,
  },

  {
    id: 11,
    title: "Intervention ",
    category: "Communication",
    image: Radio,
  },

   {
    id: 12,
    title: "Festival International des Arts du Bénin",
    category: "Cinéma",
    image: FINAB,
  },
];

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

function PortfolioPage() {
  const [activeCat, setActiveCat] = useState("Tous");

  const filtered =
    activeCat === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCat);

  return (
    <main className="bg-[#070A12] text-white min-h-screen">
      {/* ================= HERO ================= */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-dancing-bold text-or">
          Réalisations
        </h1>

        <p className="text-white/90 mt-4 max-w-xl font-outfit-regular">
          Une vitrine des réalisations, expériences et collaborations de
          Synnova.
        </p>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="flex flex-wrap justify-center gap-3 px-6 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              activeCat === cat
                ? "bg-indigo text-white font-outfit-regular"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* ================= GALLERY ================= */}
      <section className="columns-2 md:columns-3 lg:columns-4 gap-4 px-6 space-y-4 pl-50">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="break-inside-avoid mb-4 group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
              />

              <p className="text-sm text-or/40 mt-2 font-outfit-regular">{item.title}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* ================= EVENTS ================= */}
      <section className="px-6 mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-6xl font-bold mb-6 font-dancing-bold text-indigo">
          Événements marquants
        </h2>

        <div className="text-2xl md:text-3xl space-y-4 text-white/70 font-outfit-regular">
          <BlurFade delay={0.25} inView>
            <p>
              <span className="text-indigo">•</span> Festival International des
              Arts du Bénin
            </p>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <p>
              <span className="text-indigo">•</span> Animations live lors
              d’événements culturels et privés
            </p>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <p>
              <span className="text-indigo">•</span> Projets audiovisuels et
              productions locales
            </p>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <p>
              <span className="text-indigo">•</span> Miss Photogénique 2022
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="px-6 mt-20 max-w-5xl mx-auto ">
        <TestimonialsSection></TestimonialsSection>
      </section>
    </main>
  );
}

export default transition(PortfolioPage);
