"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import transition from "../transition"
/* -------------------------------------------------------------------------- */
/*                                  DATA                                      */
/* -------------------------------------------------------------------------- */

const categories = [
  "Tous",
  "Événements",
  "Cinéma",
  "Communication",
  "Entrepreneuriat",
];

const projects = [
  {
    id: 1,
    title: "Festival International des Arts du Bénin",
    category: "Événements",
    image: "/assets/event1.webp",
  },
  {
    id: 2,
    title: "Tournage Cinéma Local",
    category: "Cinéma",
    image: "/assets/cine1.webp",
  },
  {
    id: 3,
    title: "Campagne Social Media",
    category: "Communication",
    image: "/assets/com1.webp",
  },
  {
    id: 4,
    title: "Projet Éco Responsable",
    category: "Entrepreneuriat",
    image: "/assets/eco1.webp",
  },
  {
    id: 5,
    title: "Animation Live Event",
    category: "Événements",
    image: "/assets/event2.webp",
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

        <h1 className="text-4xl md:text-6xl font-bold">
          Portfolio & Galerie
        </h1>

        <p className="text-white/60 mt-4 max-w-xl">
          Une vitrine des réalisations, expériences et collaborations de Synnova.
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
                ? "bg-white text-black"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}

      </section>

      {/* ================= GALLERY ================= */}
      <section className="columns-2 md:columns-3 lg:columns-4 gap-4 px-6 space-y-4">

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

              <p className="text-sm text-white/60 mt-2">
                {item.title}
              </p>

            </motion.div>
          ))}
        </AnimatePresence>

      </section>

      {/* ================= EVENTS ================= */}
      <section className="px-6 mt-20 max-w-5xl mx-auto">

        <h2 className="text-2xl font-bold mb-6">
          Événements marquants
        </h2>

        <div className="space-y-4 text-white/70">

          <p>
            • Festival International des Arts du Bénin — participation artistique & organisation
          </p>

          <p>
            • Animations live lors d’événements culturels et privés
          </p>

          <p>
            • Projets audiovisuels et productions locales
          </p>

        </div>

      </section>

      {/* ================= PRESS ================= */}
      <section className="px-6 mt-20 max-w-5xl mx-auto">

        <h2 className="text-2xl font-bold mb-6">
          Presse & Mentions
        </h2>

        <div className="space-y-4 text-white/70">

          <p>
            “Une présence scénique et créative remarquable lors des événements culturels.”
          </p>

          <p>
            “Une approche innovante de la communication digitale et du storytelling.”
          </p>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="px-6 mt-20 max-w-5xl mx-auto mb-20">

        <h2 className="text-2xl font-bold mb-6">
          Témoignages
        </h2>

        <div className="space-y-6">

          <div className="bg-white/5 p-5 rounded-xl">
            <p className="text-white/70">
              “Professionnelle, créative et très engagée dans ses projets.”
            </p>
            <span className="text-sm text-white/40">
              — Organisateur d’événement
            </span>
          </div>

          <div className="bg-white/5 p-5 rounded-xl">
            <p className="text-white/70">
              “Une vision moderne et impactante de la communication.”
            </p>
            <span className="text-sm text-white/40">
              — Partenaire digital
            </span>
          </div>

        </div>

      </section>

    </main>
  );
}

export default transition(PortfolioPage) 