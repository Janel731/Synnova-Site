import transition from "../transition";
import BgImage from "../assets/bgimage.webp";
import StorySection from "../components/StorySection";
import { NoiseCard } from "@/components/ui/noise-card";
import { Icon } from "@iconify/react";
import { MagneticText } from "@/components/ui/magnetic-text";
import { GooeyButton } from "@/components/ui/gooey-button"
function About() {
  return (
    <>
      <div
        className="relative w-full h-[70vh] bg-cover bg-center bg-bottom flex justify-center items-center"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>

        <h1 className="text-[92px] font-cormorant-bold-italic text-or/90">
          Mon Chemin
        </h1>
      </div>

      <section>
        <StorySection></StorySection>
      </section>

      <section className="flex justify-center bg-neutral-950 p-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <NoiseCard noiseOpacity={0.08} className="bg-[#1A237E]/5">
            <span className="size-10 flex items-center justify-center rounded-full bg-rose/20">
              {" "}
              <Icon
                fontSize={24}
                className="text-rose"
                icon="solar:palette-round-bold"
              />{" "}
            </span>
            <h3 className="text-xl font-bold text-white font-outfit-bold">
              Création
            </h3>
            <p className="text-muted-foreground text-[#F5F7FA] font-outfit-light text-[16px] ">
              Imaginer, concevoir et donner vie à des idées qui inspirent et
              marquent les esprits.
            </p>
          </NoiseCard>

          <NoiseCard noiseOpacity={0.08} className="bg-[#1A237E]/5">
            <span className="size-10 flex items-center justify-center rounded-full bg-indigo/20">
              {" "}
              <Icon
                fontSize={24}
                className="text-indigo"
                icon="solar:heart-angle-bold"
              />{" "}
            </span>
            <h3 className="text-xl font-bold text-white font-outfit-bold ">
              Engagement
            </h3>
            <p className="text-muted-foreground text-[#F5F7FA] font-outfit-light text-[16px]">
              S’impliquer avec passion pour transmettre des messages utiles et
              contribuer positivement à la société.
            </p>
          </NoiseCard>

          <NoiseCard noiseOpacity={0.08} className="bg-[#1A237E]/5">
            <span className="size-10 flex items-center justify-center rounded-full bg-roseClair/20">
              {" "}
              <Icon
                fontSize={24}
                className="text-roseClair"
                icon="solar:star-shine-bold"
              />{" "}
            </span>
            <h3 className="text-xl font-bold text-white font-outfit-bold">
              Authenticité
            </h3>
            <p className="text-muted-foreground text-[#F5F7FA] font-outfit-light text-[16px]">
              Exprimer une identité sincère, humaine et fidèle à ses valeurs
              dans chaque projet.
            </p>
          </NoiseCard>

          <NoiseCard noiseOpacity={0.08} className="bg-[#1A237E]/5">
            <span className="size-10 flex items-center justify-center rounded-full bg-or/20">
              <Icon
                fontSize={24}
                className="text-or"
                icon="solar:rocket-bold"
              />{" "}
            </span>
            <h3 className="text-xl font-bold text-white font-outfit-bold">
              Impact
            </h3>
            <p className="text-muted-foreground  text-[#F5F7FA]  font-outfit-light text-[16px]">
              Créer des expériences et des actions capables de laisser une
              empreinte durable et positive.
            </p>
          </NoiseCard>
        </div>
      </section>

      <section className="Cta-section  bg-neutral-950 pb-6">
        <div className="flex flex-col  justify-center items-center gap-y-6 ">
          <h3 className="text-white text-center text-4xl  font-outfit-regular p-2">
           Vous avez un <MagneticText className="text-rose font-dancing-italic" > projets ou évenements</MagneticText> ?
          </h3>

             <GooeyButton className="text-amber-50" >Collaborons !</GooeyButton>

        </div>
      </section>
    </>
  );
}

export default transition(About);
