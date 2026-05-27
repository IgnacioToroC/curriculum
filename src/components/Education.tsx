import { useScrollReveal } from "../hooks/useScrollReveal";

interface Education {
  degree: string;
  school: string;
  detail: string;
}

const educationList: Education[] = [
  {
    degree: "Título Ingeniero en Informática",
    school: "Instituto Profesional DuocUC",
    detail: "Marzo 2009 · Santiago, Chile",
  },
  {
    degree: "Práctica Profesional",
    school: "Administradora de Fondos de Pensiones (AFP)",
    detail: "2008 · Santiago, Chile",
  },
  {
    degree: "Práctica Laboral",
    school: "Colegio Nuestra Señora María Inmaculada",
    detail: "2007 · Santiago, Chile",
  },
];

function EducationItem({ item }: { item: Education }) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal bg-bg-card border border-border rounded-xl p-6 pl-7 transition-all duration-300 hover:bg-bg-card-hover hover:translate-x-1"
    >
      <div className="text-[1.05rem] font-bold text-text-primary mb-0.5">{item.degree}</div>
      <div className="text-accent-light text-[0.92rem] mb-1">{item.school}</div>
      <div className="text-[0.85rem] text-text-muted font-mono">{item.detail}</div>
    </div>
  );
}

export default function Education() {
  const labelRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();

  return (
    <section id="education" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div ref={labelRef} className="reveal inline-block font-mono text-[0.75rem] font-medium tracking-[0.15em] uppercase text-accent-light mb-3 pl-7 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[18px] before:h-[1.5px] before:bg-accent before:rounded-sm">
          Formación
        </div>
        <h2 ref={titleRef} className="reveal text-[2rem] font-bold tracking-[-0.02em] mb-10 text-text-primary">
          Educación
        </h2>
        <div className="grid gap-5">
          {educationList.map((item, i) => (
            <EducationItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
