import { useEffect } from "react";
import "./App.css";
import CaseStudy from "./components/caseStudy/CaseStudy";
import Discover from "./components/discover/Discover";
import Faq from "./components/faq/Faq";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import WaysToUse from "./components/waysToUse/WaysToUse";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#EEF2FF] w-full min-h-[100%] relative overflow-hidden">
      <Navbar />
      <Hero />
      <CaseStudy />
      <Features />
      <WaysToUse />
      <Discover />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
