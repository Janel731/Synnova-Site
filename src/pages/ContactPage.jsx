"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import transition from "../transition";
import { Mail, Phone } from "lucide-react";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

function ContactSEO() {
  return (
    <Helmet>
  {/* ================= TITLE ================= */}
  <title>
    Contact | Synnova — Travaillons ensemble sur vos projets créatifs
  </title>

  {/* ================= META DESCRIPTION ================= */}
  <meta
    name="description"
    content="
Contactez Synnova pour vos projets d’événements, cinéma, communication digitale ou entrepreneuriat social.
Créons ensemble des expériences créatives, humaines et impactantes.
"
  />

  {/* ================= KEYWORDS ================= */}
  <meta
    name="keywords"
    content="
contact Synnova, collaboration créative, animation événement, cinéma Afrique, communication digitale, entrepreneuriat social, créatrice de contenu Bénin, devis projet, partenariat artistique
"
  />

  {/* ================= AUTHOR ================= */}
  <meta name="author" content="Synnova" />

  {/* ================= OPEN GRAPH ================= */}
  <meta property="og:title" content="Contact | Synnova" />
  <meta
    property="og:description"
    content="
Travaillons ensemble sur des projets créatifs : événements, cinéma, communication digitale et impact social.
"
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/assets/og-contact.webp" />
  <meta property="og:url" content="https://ton-site.com/contact" />

  {/* ================= TWITTER ================= */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact | Synnova" />
  <meta
    name="twitter:description"
    content="Une collaboration commence ici — créons ensemble."
  />
  <meta name="twitter:image" content="/assets/og-contact.webp" />

  {/* ================= TECH ================= */}
  <meta name="theme-color" content="#070A12" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* ================= CANONICAL ================= */}
  <link rel="canonical" href="https://ton-site.com/contact" />
</Helmet>
  );
}

/* -------------------------------------------------------------------------- */

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const types = [
    "Animation d’événement",
    "Collaboration cinéma",
    "Communication digitale",
    "Emballages biodégradables",
    "Autre",
  ];

  const onSubmit = async (data) => {
    setStatus("loading");

    try {
      await emailjs.send(
        "service_1ctclti",
        "template_2lbxj7l",
        {
          name: data.name,
          email: data.email,
          type: data.type,
          message: data.message,
        },
        "x3GQXpAH05Lum3pbF",
      );

      setStatus("success");
      reset();

      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-[#070A12] text-white overflow-hidden">
      <ContactSEO />

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-16 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-dancing-bold">
          Travaillons <span className="text-rose">ensemble</span>
        </h1>

        <p className="text-white/60 mt-6 max-w-2xl font-outfit-regular mx-auto">
          Une idée, un projet ou une collaboration ? Construisons quelque chose
          de fort.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 font-outfit-regular">
          {/* ================= LEFT ================= */}
          <div className="space-y-8">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">
              <h2 className="text-4xl font-dancing-bold">Synnova</h2>

              <p className="text-white/60 mt-5 leading-relaxed">
                Prenons contact et donnons vie à des projets créatifs, humains
                et impactants.
              </p>

              {/* CONTACT INFO */}
              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <Phone size={18} />
                  <div>
                    <p className="text-white/40 text-sm">Téléphone</p>
                    <p>+229 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail size={18} />
                  <div>
                    <p className="text-white/40 text-sm">Email</p>
                    <p>contact@synnova.com</p>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="mt-10 flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10"
                >
                  <FaFacebook size={18} />
                </a>

                <a
                  href="#"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="#"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10"
                >
                  <FaTiktok size={18} />
                </a>

                <a
                  href="#"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* NAME */}
              <input
                placeholder="Prénom / Nom"
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-400 text-sm">Nom requis</p>
              )}

              {/* EMAIL */}
              <input
                placeholder="Email"
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">Email requis</p>
              )}

              {/* TYPE */}
              <select
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10"
                {...register("type")}
              >
                {types.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>

              {/* MESSAGE */}
              <textarea
                rows="6"
                placeholder="Message..."
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 resize-none"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-red-400 text-sm">Message requis</p>
              )}

              {/* BUTTON */}
              <button
                disabled={status === "loading"}
                className="w-full py-4 rounded-2xl bg-white text-black font-medium hover:scale-[1.02] transition"
              >
                {status === "loading" ? "Envoi..." : "Envoyer"}
              </button>

              {/* FEEDBACK */}
              <div className="h-12 flex items-center">
                {status === "loading" && (
                  <div className="flex items-center gap-3 text-white/70">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <p className="tracking-wide">
                      Envoi du message en cours...
                    </p>
                  </div>
                )}

                {status === "success" && (
                  <div className="flex items-center gap-3 text-green-400">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      ✔
                    </div>
                    <p className="tracking-wide">Message envoyé avec succès</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-3 text-red-400">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      ✖
                    </div>
                    <p className="tracking-wide">
                      Une erreur est survenue, réessaie
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default transition(ContactPage);
