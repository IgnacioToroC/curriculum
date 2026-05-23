import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import References from "./components/References";
import Footer from "./components/Footer";
import ExportPdfButton from "./components/ExportPdfButton";
import CvHarvardPdf from "./components/CvHarvardPdf";

export default function App() {
  return (
    <>
      <ParticleBackground />
      <ExportPdfButton />
      <div id="cv-content">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <References />
        <Footer />
      </div>
      {/* Rendered at the bottom in normal flow — html2canvas captures it directly */}
      <CvHarvardPdf />
    </>
  );
}
