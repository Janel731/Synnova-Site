import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { Hero } from "./pages/Hero";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <div className="">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
