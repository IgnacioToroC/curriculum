import { useScrollReveal } from "../hooks/useScrollReveal";

interface Skill {
  name: string;
  mastery?: "high" | "mid";
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "● Backend",
    skills: [
      { name: "C# / .NET", mastery: "high" },
      { name: "ASP.NET MVC", mastery: "high" },
      { name: "Entity Framework", mastery: "high" },
      { name: "ASP.NET WebForms", mastery: "high" },
      { name: "ASP Clásico", mastery: "high" },
      { name: "REST APIs", mastery: "mid" },
      { name: "Dapper", mastery: "high" },
      { name: "Python", mastery: "mid" },
      { name: "PHP", mastery: "mid" },
    ],
  },
  {
    title: "● Frontend",
    skills: [
      { name: "JavaScript", mastery: "high" },
      { name: "jQuery", mastery: "high" },
      { name: "Bootstrap", mastery: "high" },
      { name: "Kendo UI", mastery: "mid" },
      { name: "TypeScript", mastery: "mid" },
      { name: "React", mastery: "mid" },
      { name: "HTML5", mastery: "mid" },
      { name: "CSS3", mastery: "mid" },
    ],
  },
  {
    title: "● Bases de Datos",
    skills: [
      { name: "SQL Server", mastery: "high" },
      { name: "T-SQL", mastery: "high" },
      { name: "Stored Procedures", mastery: "high" },
      { name: "SSRS", mastery: "mid" },
      { name: "ETL", mastery: "mid" },
      { name: "MySQL", mastery: "mid" },
    ],
  },
  {
    title: "● Cloud & DevOps",
    skills: [
      { name: "Azure DevOps", mastery: "mid" },
      { name: "Azure Blob Storage", mastery: "mid" },
      { name: "Azure", mastery: "mid" },
      { name: "Git", mastery: "mid" },
    ],
  },
  {
    title: "● Infraestructura",
    skills: [
      { name: "Windows Server", mastery: "mid" },
      { name: "IIS", mastery: "mid" },
      { name: "Redes", mastery: "mid" },
      { name: "Soporte TI", mastery: "mid" },
      { name: "Backup & Recovery", mastery: "mid" },
    ],
  },
  {
    title: "● Metodologías",
    skills: [
      { name: "Clean Code" },
      { name: "SOLID Principles" },
      { name: "Scrum / Agile" },
      { name: "Code Review" },
      { name: "Trabajo en Equipo" },
      { name: "Resolución de Problemas" },
      { name: "Adaptabilidad" },
      { name: "Mejora Continua" },
    ],
  },
  {
    title: "● Idiomas",
    skills: [
      { name: "Español (Nativo)", mastery: "high" },
      { name: "Inglés (Básico-Intermedio)", mastery: "mid" },
    ],
  },
];

function SkillCard({ category }: { category: SkillCategory }) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal bg-bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:bg-bg-card-hover hover:-translate-y-0.5"
    >
      <div className="text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-accent-light mb-4 font-mono">
        {category.title}
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-[20px] text-[0.85rem] text-text-secondary transition-all duration-250 cursor-default hover:bg-[rgba(108,92,231,0.15)] hover:border-[rgba(108,92,231,0.3)] hover:text-text-primary hover:scale-[1.04]"
          >
            {skill.mastery && (
              <span
                className={`w-[6px] h-[6px] rounded-full inline-block shrink-0 ${
                  skill.mastery === "high" ? "skill-dot-high" : "skill-dot-mid"
                }`}
              />
            )}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const labelRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();

  return (
    <section id="skills" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div ref={labelRef} className="reveal inline-block font-mono text-[0.75rem] font-medium tracking-[0.15em] uppercase text-accent-light mb-3 pl-7 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[18px] before:h-[1.5px] before:bg-accent before:rounded-sm">
          Competencias
        </div>
        <h2 ref={titleRef} className="reveal text-[2rem] font-bold tracking-[-0.02em] mb-10 text-text-primary">
          Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
