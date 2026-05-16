import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import  Hero  from "./pages/Hero";
import "./App.css";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import Univers from "./pages/UniversPage";
import PortfolioPage from "./pages/PortfolioPage";
function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <main>
        <div>
           <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
             <Route path="/univers" element={<Univers />} />
              <Route path="/PortfolioPage" element={<PortfolioPage />} />
          </Routes>
        </div>
      </main>
      </AnimatePresence>

      <Footer></Footer>
    </>
  );
}

export default App;
