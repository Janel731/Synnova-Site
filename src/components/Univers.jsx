"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

 function Univers({ data = [] }) {
  const [progress, setProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const sectionRef = useRef(null);

  const current = data?.[0]; // 👈 UN SEUL UNIVERS ACTIF (comme tu veux)

  /* -------------------------------------------------------------------------- */
  /*                         BLOQUAGE GLOBAL DU SCROLL                          */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    if (!isUnlocked) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isUnlocked]);

  /* -------------------------------------------------------------------------- */
  /*                 RESET AUTOMATIQUE QUAND ON REVIENT DANS LA PAGE           */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 🔥 RESET TOTAL DU PORTAL
          setProgress(0);
          setIsUnlocked(false);
          setShowContent(false);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                           GESTION DU SCROLL PORTAL                         */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isUnlocked) {
        e.preventDefault();
      }

      const delta = e.deltaY * 0.001;

      setProgress((prev) => {
        let next = prev + delta;

        // ouverture complète
        if (next >= 1 && !isUnlocked) {
          next = 1;

          setTimeout(() => {
            setIsUnlocked(true);
          }, 400);
        }

        if (next > 0.6) setShowContent(true);
        if (next < 0.4) setShowContent(false);

        return Math.min(Math.max(next, 0), 1);
      });
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isUnlocked]);

  /* -------------------------------------------------------------------------- */

  if (!current) return null;

  const width = 300 + progress * 1200;
  const height = 400 + progress * 500;

  const first = current.title?.split(" ")[0] || "";
  const rest = current.title?.split(" ").slice(1).join(" ") || "";

  /* -------------------------------------------------------------------------- */
  /*                                   UI                                       */
  /* -------------------------------------------------------------------------- */

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* BACKGROUND */}
      {current.bg && (
        <motion.img
          src={current.bg}
          className="absolute inset-0 h-full w-full object-cover"
          animate={{
            scale: 1 + progress * 0.15,
            opacity: 1 - progress * 0.4,
          }}
        />
      )}

      <div className="absolute inset-0 bg-black/40" />

      {/* PORTAL */}
      <motion.div
        className="absolute left-1/2 top-1/2 overflow-hidden rounded-3xl shadow-2xl"
        style={{
          width,
          height,
          transform: "translate(-50%, -50%)",
        }}
      >
        {current.media && (
          <img
            src={current.media}
            className="h-full w-full object-cover"
          />
        )}
      </motion.div>

      {/* TEXTES */}
      <div className="absolute bottom-24 w-full text-center">

        <motion.h1
          className="text-5xl font-bold md:text-7xl"
          style={{
            transform: `translateX(-${progress * 120}px)`,
          }}
        >
          {first}
        </motion.h1>

        <motion.h1
          className="text-5xl font-bold md:text-7xl"
          style={{
            transform: `translateX(${progress * 120}px)`,
          }}
        >
          {rest}
        </motion.h1>

        {/* DESCRIPTION */}
        {showContent && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-6 max-w-xl text-white/80"
          >
            {current.description}
          </motion.p>
        )}

        {/* CTA */}
        {!isUnlocked && (
          <p className="mt-4 text-sm text-white/60">
            Scroll pour entrer dans l’univers
          </p>
        )}

      </div>
    </section>
  );
}

export default transition(Univers)