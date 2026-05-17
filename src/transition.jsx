import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return function WrappedComponent() {
    return (
      <>
        <OgComponent />

        <motion.div
          initial={{
            opacity: 1,
            backdropFilter: "blur(40px)",
          }}
          animate={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}
          exit={{
            opacity: 1,
            backdropFilter: "blur(40px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 bg-black/40 pointer-events-none z-[9999]"
        />
      </>
    );
  };
};

export default transition;