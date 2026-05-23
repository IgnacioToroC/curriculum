export default function Footer() {
  return (
    <footer className="py-10 pb-8 border-t border-border text-center">
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="text-[0.82rem] text-text-muted">
          © 2025 Ignacio Toro Carvajal ·{" "}
          <a href="mailto:ignacio.toro.carvajal@gmail.com" className="text-accent-light no-underline hover:underline">
            Contacto
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/ignacio-toro-carvajal/"
            target="_blank"
            rel="noopener"
            className="text-accent-light no-underline hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
