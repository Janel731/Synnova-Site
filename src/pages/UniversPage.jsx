"use client";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import transition from "../transition"
/* -------------------------------------------------------------------------- */
/*                                UNIVERS DATA                                */
/* -------------------------------------------------------------------------- */

const universes = [
  {
    id: "animation",
    title: "Animation & Événements",
    color: "#E91E63",
    image: "/assets/animation.webp",
    gallery: ["/assets/anim1.webp", "/assets/anim2.webp", "/assets/anim3.webp"],
    intro:
      "Des expériences vivantes qui captivent, rassemblent et marquent les esprits.",
    content: `
Je conçois et anime des événements qui deviennent des expériences mémorables.

Animations live, événements culturels, programmes jeunesse et interventions publiques.

👉 Chaque instant est pensé pour créer de l’émotion et du souvenir.
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
    gallery: ["/assets/com1.webp", "/assets/com2.webp", "/assets/com3.webp"],
    intro:
      "Des contenus stratégiques qui attirent, engagent et construisent une image forte.",
    content: `
Je crée du contenu digital pensé pour transformer une présence en impact.

Stratégie, storytelling, identité visuelle et réseaux sociaux.

👉 Ici, on ne publie pas… on construit une marque vivante.
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
    gallery: ["/assets/cine1.webp", "/assets/cine2.webp", "/assets/cine3.webp"],
    intro:
      "Des histoires mises en scène avec précision, émotion et vision artistique.",
    content: `
Actrice et régisseuse plateau, je participe à des productions audiovisuelles et culturelles.

Chaque projet est une scène où l’exécution sert l’émotion.

👉 Créer ici, c’est donner vie à des histoires qui restent.
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
    gallery: ["/assets/eco1.webp", "/assets/eco2.webp", "/assets/eco3.webp"],
    intro: "Des solutions concrètes pour un impact réel et durable.",
    content: `
Je développe des projets écologiques et responsables.

Emballages biodégradables et solutions locales durables.

👉 Construire aujourd’hui pour protéger demain.
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
    gallery: [
      "/assets/gallery1.webp",
      "/assets/gallery2.webp",
      "/assets/gallery3.webp",
      "/assets/gallery4.webp",
      "/assets/gallery5.webp",
      "/assets/gallery6.webp",
    ],
    intro:
      "Un voyage visuel à travers les moments, les projets et les expériences.",
    content: `
Chaque image raconte une histoire.

Un parcours entre création, engagement et impact.

👉 Si ces images résonnent… alors nous avons quelque chose à créer ensemble.
`,
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

  const open = (u) => {
    if (lock) return;
    setLock(true);

    setTransition(u.color);

    setTimeout(() => {
      setActive(u);
    }, 650);
  };

  const nav = (id) => {
    if (lock) return;
    const u = get(id);
    if (!u) return;

    setLock(true);
    setTransition(u.color);

    setTimeout(() => {
      setActive(u);
    }, 650);
  };

  const close = () => {
    if (lock) return;

    setLock(true);
    setTransition("#070A12");

    setTimeout(() => {
      setActive(null);
    }, 650);
  };

  return (
    <>
      <Helmet>
        {/* ================= TITLE ================= */}
        <title>
          Mes Univers | Synnova — Création, Cinéma, Communication & Impact
        </title>

        {/* ================= META DESCRIPTION ================= */}
        <meta
          name="description"
          content="
Explore les univers de Synnova : animation d'événements, communication digitale, cinéma & régie, entrepreneuriat social et galerie créative. 
Un voyage immersif entre création, engagement et impact positif.
"
        />

        {/* ================= KEYWORDS ================= */}
        <meta
          name="keywords"
          content="
Synnova, univers créatifs, animation événements, communication digitale, création de contenu, cinéma Afrique, régie plateau, entrepreneuriat social, impact écologique, portfolio créatif, storytelling, créatrice de contenu Bénin
"
        />

        {/* ================= AUTHOR ================= */}
        <meta name="author" content="Synnova" />

        {/* ================= OPEN GRAPH (FACEBOOK / LINKEDIN) ================= */}
        <meta property="og:title" content="Mes Univers | Synnova" />
        <meta
          property="og:description"
          content="
Explore un voyage immersif à travers les univers créatifs de Synnova : événementiel, digital, cinéma et entrepreneuriat social.
"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-univers.webp" />
        <meta property="og:url" content="https://ton-site.com/univers" />

        {/* ================= TWITTER CARD ================= */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mes Univers | Synnova" />
        <meta
          name="twitter:description"
          content="Un voyage immersif entre création, engagement et impact."
        />
        <meta name="twitter:image" content="/assets/og-univers.webp" />

        {/* ================= VIEWPORT ================= */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ================= THEME ================= */}
        <meta name="theme-color" content="#070A12" />
      </Helmet>

      <main className="min-h-screen bg-[#070A12] text-white overflow-hidden">
        {/* ================= HUB ================= */}
        {!active && (
          <section className="flex min-h-screen items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold">Mes Univers</h1>

              <p className="text-white/40 mt-3">
                Explore des mondes créatifs immersifs
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                {universes.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => open(u)}
                    className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                    style={{ border: `1px solid ${u.color}` }}
                  >
                    {u.title}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= TRANSITION (SOFT & FLUIDE) ================= */}
        <AnimatePresence>
          {transition && (
            <motion.div
              className="fixed inset-0 z-[100]"
              style={{ backgroundColor: transition }}
              initial={{
                opacity: 0,
                scale: 1.05,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 1.05,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              onAnimationComplete={() => {
                setTransition(null);
                setLock(false);
              }}
            />
          )}
        </AnimatePresence>

        {/* ================= UNIVERS ================= */}
        {active && (
          <section>
            {/* HERO IMAGE */}
            <div className="relative h-screen flex items-center justify-center text-center">
              <img
                src={active.image}
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />

              <div className="absolute inset-0 bg-black/70" />

              <div>
                <h1
                  className="text-4xl md:text-6xl font-bold"
                  style={{ color: active.color }}
                >
                  {active.title}
                </h1>

                <p className="text-white/60 mt-4 max-w-xl mx-auto">
                  {active.intro}
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-5xl mx-auto px-6 py-20">
              <p className="text-white/70 whitespace-pre-line mb-12 leading-relaxed">
                {active.content}
              </p>

              {/* 🖼️ IMAGES UNIVERS (IMPORTANT AJOUT) */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                {active.gallery.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    className="rounded-xl h-[200px] md:h-[260px] w-full object-cover"
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>

              {/* CTA */}
              <button
                className="px-6 py-3 rounded-full font-medium text-black"
                style={{ backgroundColor: active.color }}
              >
                {active.cta}
              </button>

              {/* NAVIGATION */}
              <div className="flex justify-between mt-20 text-white/70">
                {active.prev && (
                  <button onClick={() => nav(active.prev)}>
                    ← {get(active.prev)?.title}
                  </button>
                )}

                {active.next && (
                  <button onClick={() => nav(active.next)}>
                    {get(active.next)?.title} →
                  </button>
                )}
              </div>

              {/* BACK */}
              <button
                onClick={close}
                className="fixed top-4 left-4 bg-white/10 px-4 py-2 rounded-full"
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

export default transition(UniversPage)