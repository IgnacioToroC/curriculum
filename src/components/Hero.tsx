import { useScrollReveal } from "../hooks/useScrollReveal";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] shrink-0">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

export default function Hero() {
  const greetingRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const subtitleRef = useScrollReveal<HTMLParagraphElement>();
  const summaryRef = useScrollReveal<HTMLParagraphElement>();
  const contactRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="min-h-screen flex items-center pt-[120px] pb-20 relative">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <div ref={greetingRef} className="reveal font-mono text-[0.85rem] text-accent-light mb-4 flex items-center gap-[10px]">
          <span className="inline-block w-8 h-[1.5px] bg-accent rounded-sm" />
          Hola, soy
        </div>

        <h1 ref={titleRef} className="reveal text-[clamp(2.6rem,6vw,4.2rem)] font-extrabold tracking-[-0.03em] leading-[1.08] mb-2 bg-gradient-to-r from-text-primary to-accent-light bg-clip-text text-transparent">
          Ignacio Toro Carvajal
        </h1>

        <p ref={subtitleRef} className="reveal text-[clamp(1.1rem,2.5vw,1.5rem)] font-normal text-text-secondary mb-8 tracking-[-0.01em]">
          <strong className="text-text-primary font-semibold">Ingeniero Desarrollador</strong> | Transformando ideas en soluciones reales
        </p>

        <div ref={summaryRef} className="reveal space-y-5 text-[1.05rem] text-text-secondary leading-[1.8] mb-9">
          <p>
            A lo largo de mi carrera, he descubierto que el desarrollo de software es mucho más
            que programar: es escuchar, analizar y transformar necesidades en herramientas
            robustas. Me apasiona participar en el ciclo completo de un proyecto desde esa
            primera conversación de requerimientos hasta la satisfacción de la implementación,
            asegurándome de que el resultado final sea impecable.
          </p>
          <p>
            He dejado mi huella en los sectores de <strong className="text-text-primary">salud</strong>,
            <strong className="text-text-primary"> educación</strong> y
            <strong className="text-text-primary"> finanzas</strong>, entornos dinámicos que me han
            enseñado el valor de la adaptabilidad y la resiliencia. Me considero un optimista
            pragmático: comprometido con la mejora continua, proactivo por naturaleza y, sobre
            todo, un fiel creyente de que las mejores soluciones nacen del trabajo en equipo y
            el respeto mutuo.
          </p>
        </div>

        <div ref={contactRef} className="reveal flex flex-wrap gap-3 gap-x-6 mb-10">
          <a href="tel:+56995997838" className="inline-flex items-center gap-2 text-text-secondary no-underline text-[0.9rem] transition-colors duration-250 hover:text-accent-light">
            <PhoneIcon />
            +56 9 9599 7838
          </a>
          <a href="mailto:ignacio.toro.carvajal@gmail.com" className="inline-flex items-center gap-2 text-text-secondary no-underline text-[0.9rem] transition-colors duration-250 hover:text-accent-light">
            <EmailIcon />
            ignacio.toro.carvajal@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/ignacio-toro-carvajal/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-text-secondary no-underline text-[0.9rem] transition-colors duration-250 hover:text-accent-light">
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>

        <a href="#experience" className="inline-flex items-center gap-[10px] px-8 py-[14px] bg-accent text-white font-semibold text-[0.95rem] rounded-full no-underline transition-transform duration-250 shadow-[0_4px_24px_var(--color-accent-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_var(--color-accent-glow)]">
          Explorar trayectoria
          <ArrowDownIcon />
        </a>
      </div>
    </section>
  );
}
