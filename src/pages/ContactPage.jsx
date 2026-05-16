"use client";

import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import transition from '../transition'

function ContactSEO() {
  return (
    <Helmet>

      <title>Contact | Synnova — Travaillons ensemble</title>

      <meta
        name="description"
        content="
Contactez Synnova pour vos projets d’événements, cinéma, communication digitale ou entrepreneuriat social. 
Créons ensemble des expériences impactantes.
"
      />

      <meta
        name="keywords"
        content="
contact Synnova, animation événement, cinéma Afrique, communication digitale, entrepreneuriat social, collaboration créative, créatrice de contenu Bénin
"
      />

      <meta name="author" content="Synnova" />

      <meta property="og:title" content="Contact | Synnova" />
      <meta property="og:description" content="Travaillons ensemble sur des projets créatifs et impactants." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/assets/og-contact.webp" />
      <meta property="og:url" content="https://ton-site.com/contact" />

      <meta name="theme-color" content="#070A12" />

    </Helmet>
  );
}

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

 function ContactPage() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [status, setStatus] = useState(null);

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
        "SERVICE_ID",
        "TEMPLATE_ID",
        {
          name: data.name,
          email: data.email,
          type: data.type,
          message: data.message,
        },
        "PUBLIC_KEY"
      );

      setStatus("success");
      reset();

      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#070A12] text-white">

      <ContactSEO />

      {/* ================= HEADER ================= */}
      <section className="text-center py-20 px-6">

        <h1 className="text-4xl md:text-6xl font-bold">
          Travaillons ensemble
        </h1>

        <p className="text-white/60 mt-4 max-w-xl mx-auto">
          Simple, chaleureux et fonctionnel — une idée, un projet, une vision ?
        </p>

      </section>

      {/* ================= FORM ================= */}
      <section className="max-w-3xl mx-auto px-6">

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 bg-white/5 p-6 rounded-2xl"
        >

          {/* NAME */}
          <input
            placeholder="Prénom / Nom"
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
            {...register("name", { required: true })}
          />

          {/* EMAIL */}
          <input
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
            {...register("email", { required: true })}
          />

          {/* TYPE DEMANDE */}
          <select
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
            {...register("type")}
          >
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* MESSAGE */}
          <textarea
            rows="5"
            placeholder="Votre message..."
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
            {...register("message", { required: true })}
          />

          {/* BUTTON */}
          <button
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-white text-black font-medium"
          >
            {isSubmitting ? "Envoi..." : "Envoyer"}
          </button>

          {/* STATUS */}
          {status === "success" && (
            <p className="text-green-400">Message envoyé ✨</p>
          )}

          {status === "error" && (
            <p className="text-red-400">Erreur d’envoi</p>
          )}

        </form>

      </section>

      {/* ================= SOCIALS ================= */}
      <section className="text-center mt-16 px-6">

        <p className="text-white/60 mb-4">
          Réseaux sociaux
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-white/80">

          <a href="https://www.facebook.com/synnovalumiere" target="_blank">
            Facebook
          </a>

          <a href="https://www.tiktok.com/@_synnova" target="_blank">
            TikTok
          </a>

          <a href="https://www.instagram.com/_synnova" target="_blank">
            Instagram
          </a>

          <a href="#">
            LinkedIn
          </a>

        </div>

      </section>

      {/* ================= CTA FOLLOW ================= */}
      <section className="text-center mt-12 mb-20 px-6">

        <p className="text-white/50">
          Suivez mon quotidien sur TikTok & Instagram ✨
        </p>

      </section>

    </main>
  );
}

export default transition(ContactPage)