import { useScrollReveal } from "../hooks/useScrollReveal";

interface Reference {
  name: string;
  role: string;
  org: string;
  phone: string;
}

const references: Reference[] = [
  {
    name: "Damaris Avila",
    role: "Engineering Manager",
    org: "SimpliRoute",
    phone: "+56 987354865",
  },
  {
    name: "Diana Alvarez",
    role: "Directora de Procesos Académicos",
    org: "Universidad Adolfo Ibáñez",
    phone: "+56 979589264",
  },
];

function ReferenceCard({ person }: { person: Reference }) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal bg-bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:bg-bg-card-hover hover:-translate-y-0.5"
    >
      <div className="font-bold text-text-primary mb-0.5">{person.name}</div>
      <div className="text-[0.85rem] text-accent-light mb-1">{person.role}</div>
      <div className="text-[0.82rem] text-text-muted mb-2">{person.org}</div>
      <a
        href={`tel:${person.phone.replace(/\s/g, "")}`}
        className="inline-flex items-center gap-1.5 text-[0.82rem] text-accent-light no-underline transition-colors duration-200 hover:text-white"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        {person.phone}
      </a>
    </div>
  );
}

export default function References() {
  const labelRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();

  return (
    <section id="references" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div ref={labelRef} className="reveal inline-block font-mono text-[0.75rem] font-medium tracking-[0.15em] uppercase text-accent-light mb-3 pl-7 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[18px] before:h-[1.5px] before:bg-accent before:rounded-sm">
          Referencias
        </div>
        <h2 ref={titleRef} className="reveal text-[2rem] font-bold tracking-[-0.02em] mb-10 text-text-primary">
          Contacto Profesional
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
          {references.map((ref, i) => (
            <ReferenceCard key={i} person={ref} />
          ))}
        </div>
      </div>
    </section>
  );
}
