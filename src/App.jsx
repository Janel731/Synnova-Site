import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";
import "./App.css";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import Univers from "./pages/UniversPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import { AfriChatBootstrap } from "@/AfriChatBootstrap";
function App() {
  const location = useLocation();

  return (
    <>

    <AfriChatBootstrap></AfriChatBootstrap>
      <header>
        <Navbar />
      </header>

      <ScrollToTop />

      <AnimatePresence mode="wait">
        <main>
          <div>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/univers" element={<Univers />} />
              <Route path="/PortfolioPage" element={<PortfolioPage />} />
              <Route path="/ContactPage" element={<ContactPage />} />
            </Routes>
          </div>
        </main>
      </AnimatePresence>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
