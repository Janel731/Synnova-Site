import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return function WrappedComponent() {
    return (
      <>
        <OgComponent />

        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "top",
          }}
          className="fixed inset-0 bg-[#1A237E] z-[9999]">
            
        </motion.div>
      </>
    );
  };
};

export default transition;