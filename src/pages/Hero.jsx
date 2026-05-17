import React from "react";
import { Helmet } from "react-helmet-async";

import SynnovaPhoto from "../assets/Synnova.webp";

import { Star, Newspaper, Mic, Film, Share2 } from "lucide-react";
import Vision from "../components/Vision";
import Storyboard from "../components/Storyboard";
import HorizontalGallery from "../components/HorizontalGallery";
import FloatingSocials from "../components/FloatingSocials";
import transition from "../transition";
import { LetterPullButton } from "@/components/ui/letter-pull-button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <Helmet>
        <title>
          Synnova Tocloe | Animatrice, Communicatrice & Actrice au Bénin
        </title>

        <meta
          name="description"
          content="Découvrez Synnova Tocloe, animatrice, communicatrice, actrice et entrepreneuse sociale béninoise engagée entre Grand-Popo, le cinéma et la communication digitale."
        />

        <meta
          name="keywords"
          content="Synnova Tocloe, Synnova Belvine Kybarance TOCLOE, animatrice Bénin, communicatrice Grand-Popo, actrice béninoise, entrepreneuse sociale Bénin"
        />

        <meta name="robots" content="index, follow" />
        <meta name="language" content="fr" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Synnova Tocloe | Univers & Identité"
        />
        <meta
          property="og:description"
          content="Animatrice, communicatrice, actrice et entrepreneuse sociale au Bénin."
        />
        <meta property="og:image" content="/og/home.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Synnova Tocloe" />
        <meta
          name="twitter:description"
          content="Animatrice, communicatrice et actrice béninoise engagée."
        />
        <meta name="twitter:image" content="/og/home.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ton-site.com/" />
      </Helmet>

      <section className="relative h-[100vh] hero overflow-hidden">
        {/* Fond Indigo Nuit + Grille */}
        <div className="absolute z-0 inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div
            className="absolute inset-0 z-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Contenu principal */}
        <div className="relative w-full h-full flex items-center justify-center pt-20">
          <div className="relative w-full flex items-center justify-center">
            {/* ZONE CENTRALE (IMAGE + TEXTE SYNNOVA) */}
            <div className="relative top-[-97px] sm:top-[-47px] w-[300px] md:w-[420px] lg:w-[520px] aspect-[4/5] flex items-center justify-center">
              {/* TEXTE ARRIÈRE */}
              <h1 className="hero-title absolute inset-0 flex items-center justify-center text-5xl sm:text-[32px] md:text-[96px] lg:text-[128px] uppercase tracking-[0.15em] z-0 font-cormorant-bold-italic text-[rgba(194,24,91,0.15)] ">
                Synnova
              </h1>

              {/* IMAGE */}
              <img
                src={SynnovaPhoto}
                alt="Portrait Synnova"
                className="absolute inset-0 w-full h-full object-cover z-10 mix-blend-overlay"
              />

              {/* CTA SUR IMAGE */}

              <Link to="/univers">
                <LetterPullButton
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-fit px-4 md:px-6 py-2 rounded-full border border-white/40 text-white/80 backdrop-blur-sm bg-[rgba(194,24,91,0.3)] hover:bg-[rgba(194,24,91,0.6)] transition font-outfit-regular text-xs md:text-base z-40"
                  text="Découvrir mes univers"
                  variant="wave"
                />
              </Link>
              {/* TEXTE FRONT (STROKE) */}
              <h1
                className="hero-title absolute inset-0 flex items-center justify-center text-transparent text-5xl sm:text-5xl md:text-[96px] lg:text-[128px] uppercase tracking-[0.15em] z-30 font-cormorant-bold-italic"
                style={{
                  WebkitTextStroke: "2px rgba(194,24,91,0.8)",
                }}
              >
                Synnova
              </h1>
            </div>

            {/* --- CARTES FLOTTANTES (UNIQUEMENT DESKTOP) --- */}
            <div className="hidden md:block font-outfit-light">
              {/* PERSONAL BRANDING - Haut Gauche */}
              <div className="absolute top-[20%] left-[10%] z-30 animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-3 px-4 py-3 bg-neutral-950/10 backdrop-blur-md border border-[#C2185B] rounded-2xl shadow-xl hover:scale-110 transition-transform cursor-pointer">
                  <Star className="text-[#C2185B]" size={20} />
                  <span className="text-white ">Personal Branding</span>
                </div>
              </div>

              {/* JOURNALISME - Haut Droite */}
              <div className="absolute top-[20%] right-[10%] z-30 animate-[float_6s_ease-in-out_infinite_1s]">
                <div className="flex items-center gap-3 px-4 py-3 bg-neutral-950/10 backdrop-blur-md border border-[#F9A825] rounded-2xl shadow-xl hover:scale-110 transition-transform cursor-pointer">
                  <Newspaper className="text-[#F9A825]" size={20} />
                  <span className="text-white ">Journalisme</span>
                </div>
              </div>

              {/* ANIMATION LIVE - Bas Gauche */}
              <div className="absolute bottom-[25%] left-[10%] z-30 animate-[float_6s_ease-in-out_infinite_2s]">
                <div className="flex items-center gap-3 px-4 py-3 bg-neutral-950/10 backdrop-blur-md border border-[#F8BBD0] rounded-2xl shadow-xl hover:scale-110 transition-transform cursor-pointer">
                  <Mic className="text-[#F8BBD0]" size={20} />
                  <span className="text-white ">Animation live</span>
                </div>
              </div>

              {/* CINÉMA - Bas Droite */}
              <div className="absolute bottom-[25%] right-[10%] z-30 animate-[float_6s_ease-in-out_infinite_3s]">
                <div className="flex items-center gap-3 px-4 py-3 bg-neutral-950/10 backdrop-blur-md border border-[#F9A825] rounded-2xl shadow-xl hover:scale-110 transition-transform cursor-pointer">
                  <Film className="text-[#F9A825]" size={20} />
                  <span className="text-white ">Cinéma</span>
                </div>
              </div>

              {/* COMMUNICATION DIGITALE - Centre Gauche */}
              <div className="absolute top-[45%] left-[5%] z-30 animate-[float_6s_ease-in-out_infinite_0.5s]">
                <div className="flex items-center gap-3 px-4 py-3 bg-neutral-950/10 backdrop-blur-md border border-[#C2185B] rounded-2xl shadow-xl hover:scale-110 transition-transform cursor-pointer">
                  <Share2 className="text-[#C2185B]" size={20} />
                  <span className="text-white ">Communication digitale</span>
                </div>
              </div>
            </div>

            {/* CITATION */}
            <div className="absolute bottom-6 md:bottom-10 right-4 md:right-8 max-w-xs z-30">
              <p className="flex items-start gap-3">
                <span className="text-xl md:text-2xl font-dancing-medium text-[rgba(249,168,37,0.5)]">
                  "Pour un monde positif"
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-section-dark">
        <Vision></Vision>
      </section>

      <section>
        <Storyboard></Storyboard>
      </section>

      <section>
        <HorizontalGallery></HorizontalGallery>
      </section>

      <section>
        <FloatingSocials></FloatingSocials>
      </section>
    </>
  );
}

export default transition(Hero);
