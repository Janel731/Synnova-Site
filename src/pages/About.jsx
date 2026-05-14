import transition from "../transition";
import BgImage from "../assets/bgimage.webp";
import StorySection from "../components/StorySection";

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

        <h1 className="text-[92px] font-cormorant-bold-italic text-or/90">Mon Chemin</h1>
      </div>

      <section>
          <StorySection></StorySection>
      </section>
    </>
  );
}

export default transition(About);
