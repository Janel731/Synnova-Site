import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return () => {
    return (
      <>
        <OgComponent />

        {/* ENTRÉE VERTICALE */}
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#1A237E] z-[9998]"
          style={{
            transformOrigin: "bottom",
          }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* SORTIE HORIZONTALE */}
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#C2185B] z-[9999]"
          style={{
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </>
    );
  };
};

export default transition;