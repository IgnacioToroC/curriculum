import { useScrollReveal } from "../hooks/useScrollReveal";

interface Reference {
  name: string;
  role: string;
  org: string;
}

const references: Reference[] = [
  {
    name: "Damaris Avila",
    role: "Engineering Manager",
    org: "SimpliRoute",
  },
  {
    name: "Diana Alvarez",
    role: "Directora de Procesos Académicos",
    org: "Universidad Adolfo Ibáñez",
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
      <div className="text-[0.82rem] text-text-muted">{person.org}</div>
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
