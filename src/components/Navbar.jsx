import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Nav } from "./nav";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
    scrolled
      ? "bg-neutral-950/50 backdrop-blur-md shadow-lg border-[rgba(249,168,37,0.3)]"
      : "bg-neutral-950/90 backdrop-blur-md border-[rgba(249,168,37,0.1)]"
  }`}
>
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="text-black font-bold text-3xl text-or/90 font-dancing-bold">Synnova<span className="text-indigo text-5xl">.</span></div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {Nav.map((item) => (
            <Link
              key={item.id}
              to={item.lien}
              className={`transition ${
                item.cta
                  ? "bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 hover:rotate-[-10deg] font-outfit-italic"
                  : "text-white hover:text-pink-600 hover:rotate-6 font-outfit-italic"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu className="text-white" size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-neutral-900/10 text-white flex flex-col items-center justify-center gap-8 overflow-hidden font-outfit-italic"
          >
            {Nav.map((item) => (
              <motion.div
                key={item.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={item.lien}
                  onClick={() => setOpen(false)}
                  className={`transition ${
                    item.cta
                      ? "bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700"
                      : "text-white hover:text-pink-600"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
