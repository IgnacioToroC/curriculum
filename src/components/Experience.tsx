import { useScrollReveal } from "../hooks/useScrollReveal";

interface Experience {
  company: string;
  url?: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    company: "Universidad Adolfo Ibáñez",
    period: "2021 — Presente",
    role: "Development Engineer",
    description:
      "Ingeniero de desarrollo a cargo de los sistemas académicos institucionales: mantenimiento y evolución de plataformas críticas de gestión académica (Banner, sistemas de aulas virtuales, admisión y registro curricular). Implementé nuevas funcionalidades y módulos sobre arquitecturas MVC con .NET, integrando servicios REST y reportes dinámicos. Participé en el ciclo DevOps dentro de Azure, gestionando despliegues, releases y la calidad del código mediante code reviews y pruebas automatizadas. Colaboré con equipos multidisciplinarios (analistas funcionales, QA, infraestructura) bajo metodologías ágiles (Scrum), contribuyendo a la mejora continua de los procesos de desarrollo y la experiencia de todos sus usuarios. Durante el último período, he enfocado mi gestión en procesos de migración de datos hacia Banner, así como en el diseño y desarrollo de proyectos satélites integrados directamente con este ecosistema core.",
    tags: ["C#", ".NET", "ASP.NET MVC", "Entity Framework", "SQL Server", "Azure DevOps", "REST APIs", "SSRS", "Scrum", "CI/CD", "jQuery", "TypeScript", "Git"],
    current: true,
  },
  {
    company: "Administradora de Fondos de Cesantía (AFC)",
    period: "Mar 2020 — Jun 2020",
    role: "Developer Engineer",
    description:
      "Ingeniero de desarrollo en el equipo de core bancario de la administradora de fondos de cesantía. Responsable del mantenimiento y migración progresiva de sistemas legacy (WebForms) hacia arquitecturas MVC modernas sobre .NET. Desarrollé y mantuve procesos ETL automatizados para la generación de reportes financieros críticos, trabajando con grandes volúmenes de datos (archivos CSV, consultas SQL optimizadas, transacciones masivas). Participé en la refactorización de módulos del sistema central, aplicando principios de Clean Code y patrones de diseño para mejorar la mantenibilidad y reducir la deuda técnica acumulada. Colaboré en equipos multidisciplinarios en un ambiente de alta criticidad y exigencia regulatoria.",
    tags: ["C#", "ASP.NET MVC", "WebForms", ".NET Framework", "SQL Server", "T-SQL", "Stored Procedures", "ETL", "CSV"],
  },
  {
    company: "Navimag",
    period: "2019",
    role: "Freelance Software Developer",
    description:
      "Desarrollo freelance de una intranet corporativa integral para naviera de transporte marítimo, modernizando sus procesos internos de gestión operativa y administrativa. Diseñé e implementé una solución web full-stack con autenticación de usuarios, módulos de gestión de documentos, solicitudes internas y panel de administración. Trabajé directamente con stakeholders del negocio para relevar requerimientos y proponer soluciones a medida, administrando el ciclo completo: análisis, desarrollo, pruebas y puesta en producción. La plataforma reemplazó procesos manuales basados en papel, logrando una adopción exitosa por parte de los equipos operativos.",
    tags: ["ASP.NET", "C#", "SQL Server", "jQuery", "JavaScript", "Bootstrap", "CSS3", "HTML5", "PHP"],
  },
  {
    company: "AlumnoLibre",
    period: "2018 — 2022",
    role: "Freelance Software Developer",
    description:
      "Desarrollo y mantenimiento de una plataforma educativa online, concebida para facilitar la gestión de aprendizaje en instituciones educativas. Implementé funcionalidades como registro y autenticación de usuarios (roles: alumno, profesor, administrador), gestión de cursos, asignación de calificaciones, repositorio de materiales y comunicación interna. Integré Azure Blob Storage para el almacenamiento seguro y escalable de archivos (documentos, imágenes, videos educativos). Utilicé Kendo UI para construir interfaces de usuario ricas e interactivas con tablas dinámicas, gráficos y formularios avanzados. El proyecto abarcó todo el stack: base de datos relacional, lógica de negocio en .NET MVC y frontend responsivo con Bootstrap y jQuery.",
    tags: ["C#", "ASP.NET MVC", ".NET Framework", "SQL Server", "jQuery", "Kendo UI", "Bootstrap", "Azure Blob Storage", "REST", "JavaScript", "CSS3"],
  },
  {
    company: "Llacruz",
    period: "2013",
    role: "Systems Analyst",
    description:
      "Analista de sistemas a cargo de la modernización del sistema core de cobranzas de la empresa. Lideré la migración de una plataforma ASP clásica hacia una arquitectura MVC moderna, mejorando significativamente la mantenibilidad, escalabilidad y experiencia de usuario del sistema. Optimicé consultas SQL y stored procedures críticos, reduciendo tiempos de respuesta en reportes y procesos batch de cobranza. Implementé control de versiones (CVS/SVN) como práctica formal en el equipo de desarrollo. Participé en el análisis y rediseño de flujos de trabajo de cobranza junto al área de negocio, traduciendo requerimientos complejos en soluciones técnicas robustas.",
    tags: ["C#", "ASP.NET MVC", "ASP Clásico", "SQL Server", "T-SQL", "jQuery", "Bootstrap", "CVS", "JavaScript"],
  },
  {
    company: "Instituto Rehabilitación Infantil Teletón",
    period: "2009 — 2019",
    role: "Systems Analyst & Development Lead",
    description:
      "Líder técnico y analista de sistemas durante 10 años en el instituto de rehabilitación infantil, gestionando el ciclo de vida completo de los sistemas institucionales críticos. Responsable del desarrollo, mantenimiento y soporte de plataformas de gestión clínica, administrativa y financiera, asegurando su alta disponibilidad y rendimiento. Administré la infraestructura tecnológica local (servidores Windows Server, redes, estaciones de trabajo), coordinando el soporte técnico al usuario final y los planes de contingencia y backup. Lideré equipos de desarrollo internos, estableciendo estándares de calidad, buenas prácticas de codificación y procesos de deployment. Participé en la digitalización de procesos clínicos, mejorando la eficiencia operativa y la calidad de atención a los pacientes y hacia el final de mi etapa en la institución, me desempeñé como encargado del área de informática en la sede de Teletón Coyhaique.",
    tags: ["C#", "ASP.NET MVC", "ASP Clásico", "SQL Server", "jQuery", "Bootstrap", "Windows Server", "Redes", "Infraestructura TI", "JavaScript", "CSS"],
  },
];

function TimelineItem({ exp }: { exp: Experience }) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal relative mb-12 last:mb-0 p-6 pl-7 bg-bg-card border border-border rounded-xl transition-all duration-300 cursor-default hover:bg-bg-card-hover hover:translate-x-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
    >
      <div
        className={`absolute left-[-28px] top-[30px] w-4 h-4 rounded-full border-[3px] border-bg-primary ${
          exp.current
            ? "bg-green timeline-dot-current"
            : "bg-accent shadow-[0_0_0_2px_var(--color-accent)]"
        }`}
      />
      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1.5">
        <span className="text-[1.1rem] font-bold text-text-primary">{exp.company}</span>
        <span className="font-mono text-[0.78rem] text-text-muted whitespace-nowrap">{exp.period}</span>
      </div>
      <div className="text-[0.92rem] font-medium text-accent-light mb-3">{exp.role}</div>
      <p className="text-[0.92rem] text-text-secondary leading-[1.7]">{exp.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-3.5">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-[10px] py-[3px] text-[0.72rem] font-mono bg-[rgba(108,92,231,0.12)] text-accent-light rounded-[20px] border border-[rgba(108,92,231,0.2)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const labelRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();

  return (
    <section id="experience" className="py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div ref={labelRef} className="reveal inline-block font-mono text-[0.75rem] font-medium tracking-[0.15em] uppercase text-accent-light mb-3 pl-7 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[18px] before:h-[1.5px] before:bg-accent before:rounded-sm">
          Trayectoria
        </div>
        <h2 ref={titleRef} className="reveal text-[2rem] font-bold tracking-[-0.02em] mb-10 text-text-primary">
          Experiencia Profesional
        </h2>
        <div className="relative pl-8 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-accent before:to-transparent">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
