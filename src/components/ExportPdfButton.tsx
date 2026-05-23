import { useState } from "react";

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

export default function ExportPdfButton() {
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    if (exporting) return;

    setExporting(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.getElementById("cv-harvard-pdf");

      if (!element) {
        throw new Error("CV Harvard PDF element not found");
      }

      const opt = {
        margin:       0,
        filename:     "Ignacio-Toro-Carvajal-CV.pdf",
        image:        { type: "jpeg", quality: 0.98 },
        html2canvas:  { 
          scale: 2, 
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: true,
          windowWidth: 1200,
        },
        jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak:    { mode: "css", avoidOrphans: true },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error("Error generating PDF:", err);
    } finally {
      setExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={exporting}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 
        bg-accent text-white font-semibold text-[0.9rem] rounded-full 
        shadow-[0_4px_24px_var(--color-accent-glow)] 
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-[0_8px_36px_var(--color-accent-glow)]
        active:scale-95
        disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      title="Descargar CV en PDF (estilo Harvard)"
    >
      {exporting ? (
        <>
          <SpinnerIcon />
          Generando…
        </>
      ) : (
        <>
          <PdfIcon />
          Descargar CV
        </>
      )}
    </button>
  );
}
