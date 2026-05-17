import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import formation from "../assets/formation.webp";
import engagement from "../assets/engagement.webp";
import cinema from "../assets/cinema.webp";
import entrepreneuriat from "../assets/entrepreneuriat.webp";
import { FlipWords } from "@/components/ui/flip-words";
const features = [
  {
    title: "Formation — Journalisme & Communication",
    description:
      "Formée en journalisme et en communication, et  à l’UCAE  j’ai construit mes bases autour de la parole, de l’écoute et de la transmission. Très tôt, j’ai compris que communiquer ne se limitait pas à parler, mais à créer du lien, à donner du sens et à porter des messages capables d’inspirer. ",
    icon: "solar:book-bookmark-bold-duotone",
    image: formation,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Engagement social — Jeunesse & Société civile",
    description:
      "Mon engagement social est né d’une volonté simple : être utile à ma communauté. À travers mon rôle au sein de U-Report Grand-Popo et mes différentes expériences dans la société civile, j’ai appris à écouter les réalités, à relayer les voix de la jeunesse et à participer à des actions de sensibilisation. Pour moi, informer, c’est déjà agir.",
    icon: "solar:users-group-rounded-bold-duotone",
    image: engagement,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cinéma & Événements — Scène, caméra & émotions",
    description:
      "Entre scène, caméra et coulisses, j’évolue dans un univers où chaque instant devient expression. En tant qu’animatrice live, actrice et régisseuse plateau, j’ai participé à des événements culturels et artistiques, notamment le Festival International des Arts du Bénin. Ces expériences m’ont appris à gérer l’énergie d’un public, à raconter des histoires par la présence et à transformer chaque événement en moment vivant, authentique et mémorable.",
    icon: "solar:clapperboard-bold-duotone",
    image: cinema,
    color: "from-amber-500 to-orange-500",
  },

  {
    title: "Entrepreneuriat éco — Créer avec conscience",
    description:
      "À travers mon activité de création d’emballages biodégradables, j’ai choisi de mettre mon énergie au service d’un enjeu qui me tient à cœur : l’environnement. Cet engagement entrepreneurial est pour moi une continuité naturelle de mes valeurs. Créer, pour moi, c’est aussi protéger et penser au futur.",
    icon: "solar:leaf-bold-duotone",
    image: entrepreneuriat,
    color: "from-lime-400 to-emerald-500",
  },
];

export function FeatureModern() {
  return (
    <section className="relative bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 space-y-4 max-w-2xl">
          <h2 className="text-4xl md:text-6xl  tracking-tighter font-outfit-italic"></h2>
          <FlipWords
            className="text-4xl md:text-6xl font-outfit-italic text-roseClair"
            words={["Créer", "Inspirer", "Impacter"]}
          />
          <p className="text-muted-foreground text-white/50 text-lg leading-relaxed font-outfit-regular">
            Entre création, engagement et expression, Synnova transforme chaque
            projet en une expérience qui connecte et inspire positivement.
          </p>
        </div>

        <div className="space-y-40 pb-20">
          {features.map((feature, index) => (
            <FeatureItem key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ feature, index }) {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col md:flex-row items-center gap-12 md:gap-24 min-h-[60vh]",
        index % 2 === 1 && "md:flex-row-reverse",
      )}
    >
      {/* Visual Part */}
      <motion.div
        style={{ scale, opacity }}
        className="relative flex-1 aspect-video w-full"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-[2rem] bg-linear-to-br blur-3xl opacity-20",
            feature.color,
          )}
        />
        <div className="relative h-full w-full rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl bg-muted/40 backdrop-blur-sm">
          <img
            src={feature.image}
            alt={feature.title}
            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
        </div>
      </motion.div>
      {/* Content Part */}
      <motion.div style={{ y }} className="flex-1 space-y-6">
        <div
          className={cn(
            "h-14 w-14 rounded-2xl bg-linear-to-br flex items-center justify-center text-white shadow-xl",
            feature.color,
          )}
        >
          <Icon icon={feature.icon} className="text-3xl" />
        </div>
        <h3 className="text-3xl md:text-5xl text-white tracking-tight font-outfit-regular">
          {feature.title}
        </h3>
        <p className="text-lg  text-[#fafafa]/70 text-muted-foreground leading-relaxed font-outfit-regular">
          {feature.description}
        </p>
      </motion.div>
    </div>
  );
}
