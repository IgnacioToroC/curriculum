import { useScrollReveal } from "../hooks/useScrollReveal";

interface PlatformGroup {
  platform: string;
  color: string;
  courses: string[];
}

const platformGroups: PlatformGroup[] = [
  {
    platform: "Udemy",
    color: "#a435f0",
    courses: ["React: De cero a Experto (Hooks y MERN)"],
  },
  {
    platform: "Platzi",
    color: "#98ca3f",
    courses: [
      "Next.js",
      "Backend con Python",
      "Buenas Prácticas, Código Limpio y Principios SOLID en C#",
      "Introducción a la Nube",
      "Curso Inglés para Programadores",
    ],
  },
  {
    platform: "Universidad Adolfo Ibáñez",
    color: "#6c5ce7",
    courses: [
      "Fundamentos de Metodologías Ágil (Scrum)",
      "Introducción al Machine Learning",
    ],
  },
];

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function PlatformCard({ group, index }: { group: PlatformGroup; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal bg-bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Platform header */}
      <div
        className="px-6 py-4 flex items-center gap-3 border-b border-border"
        style={{ background: `linear-gradient(135deg, ${group.color}22, transparent)` }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[0.7rem] font-bold uppercase"
          style={{ background: group.color }}
        >
          {group.platform === "Universidad Adolfo Ibáñez" ? "UAI" : group.platform.slice(0, 2)}
        </div>
        <span className="text-[0.95rem] font-semibold text-text-primary">{group.platform}</span>
      </div>

      {/* Course list */}
      <div className="p-5 space-y-2.5">
        {group.courses.map((course, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-[rgba(255,255,255,0.03)] group/course"
          >
            <BookIcon />
            <span className="text-[0.9rem] text-text-secondary leading-[1.5] transition-colors duration-200 group-hover/course:text-text-primary">
              {course}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Capacitaciones() {
  const labelRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const descRef = useScrollReveal<HTMLParagraphElement>();

  return (
    <section id="capacitaciones" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          ref={labelRef}
          className="reveal inline-block font-mono text-[0.75rem] font-medium tracking-[0.15em] uppercase text-accent-light mb-3 pl-7 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[18px] before:h-[1.5px] before:bg-accent before:rounded-sm"
        >
          Aprendizaje continuo
        </div>

        <h2
          ref={titleRef}
          className="reveal text-[2rem] font-bold tracking-[-0.02em] mb-3 text-text-primary"
        >
          Capacitaciones
        </h2>

        <p
          ref={descRef}
          className="reveal text-[1rem] text-text-muted mb-10 max-w-[600px] leading-[1.7]"
        >
          Cursos y certificaciones que complementan mi formación profesional, abarcando
          desarrollo web, buenas prácticas, cloud computing y metodologías ágiles.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
          {platformGroups.map((group, i) => (
            <PlatformCard key={group.platform} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
