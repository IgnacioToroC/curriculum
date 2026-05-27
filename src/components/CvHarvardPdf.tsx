/* ─── Hidden Harvard-Style CV for PDF Export ─── */
/* Uses classic serif fonts, white bg, black text, section lines. */

const profile = {
  name: "Ignacio Toro Carvajal",
  phone: "+56 9 9599 7838",
  email: "ignacio.toro.carvajal@gmail.com",
  linkedin: "linkedin.com/in/ignacio-toro-carvajal",
  summary:
    `Ingeniero Desarrollador | Transformando ideas en soluciones reales.\n\n` +
    `A lo largo de mi carrera, he descubierto que el desarrollo de software es mucho más que programar: ` +
    `es escuchar, analizar y transformar necesidades en herramientas robustas. ` +
    `Me apasiona participar en el ciclo completo de un proyecto desde esa primera conversación ` +
    `de requerimientos hasta la satisfacción de la implementación, asegurándome de que el ` +
    `resultado final sea impecable.\n\n` +
    `He dejado mi huella en los sectores de salud, educación y finanzas, entornos dinámicos ` +
    `que me han enseñado el valor de la adaptabilidad y la resiliencia. ` +
    `Me considero un optimista pragmático: comprometido con la mejora continua, proactivo ` +
    `por naturaleza y, sobre todo, un fiel creyente de que las mejores soluciones nacen del ` +
    `trabajo en equipo y el respeto mutuo.`,
};

const experiences = [
  {
    company: "Universidad Adolfo Ibáñez",
    location: "Santiago, Chile",
    period: "2021 — Presente",
    role: "Development Engineer",
    bullets: [
      "Ingeniero de desarrollo a cargo de los sistemas académicos institucionales, asegurando la continuidad operativa y la evolución tecnológica de las plataformas que soportan la gestión académica de la universidad.",
      "Implementación de nuevas funcionalidades y módulos sobre arquitecturas MVC con .NET, integrando servicios REST y reportes dinámicos con SQL Server Reporting Services.",
      "Participación activa en el ciclo DevOps dentro de Azure, gestionando despliegues, releases y calidad del código mediante code reviews y pruebas automatizadas.",
      "Colaboración con equipos multidisciplinarios bajo metodologías ágiles (Scrum), contribuyendo a la mejora continua de los procesos de desarrollo.",
    ],
  },
  {
    company: "Administradora de Fondos de Cesantía (AFC)",
    location: "Santiago, Chile",
    period: "Mar 2020 — Jun 2020",
    role: "Developer Engineer",
    bullets: [
      "Ingeniero de desarrollo en el equipo de core bancario. Responsable del mantenimiento y migración progresiva de sistemas legacy (WebForms) hacia arquitecturas MVC modernas sobre .NET.",
      "Desarrollo y mantenimiento de procesos ETL automatizados para generación de reportes financieros críticos con grandes volúmenes de datos.",
      "Refactorización de módulos del sistema central aplicando principios de Clean Code y patrones de diseño para mejorar la mantenibilidad.",
    ],
  },
  {
    company: "Navimag",
    location: "Santiago, Chile",
    period: "2019",
    role: "Freelance Software Developer",
    bullets: [
      "Desarrollo freelance de una intranet corporativa integral para naviera de transporte marítimo, modernizando procesos internos de gestión operativa y administrativa.",
      "Implementación full-stack con autenticación, gestión de documentos y panel de administración, reemplazando procesos manuales basados en papel.",
    ],
  },
  {
    company: "AlumnoLibre",
    location: "Santiago, Chile",
    period: "2018 — 2022",
    role: "Freelance Software Developer",
    bullets: [
      "Desarrollo y mantenimiento de una plataforma educativa online para gestión de aprendizaje en instituciones educativas.",
      "Implementación de autenticación multi-rol, gestión de cursos, calificaciones y repositorio de materiales con integración Azure Blob Storage.",
    ],
  },
  {
    company: "Llacruz",
    location: "Santiago, Chile",
    period: "2013",
    role: "Systems Analyst",
    bullets: [
      "Modernización del sistema core de cobranzas, migrando plataforma ASP clásica a arquitectura MVC mejorando mantenibilidad y escalabilidad.",
      "Optimización de consultas SQL y stored procedures críticos, reduciendo tiempos de respuesta en reportes y procesos batch.",
      "Implementación de control de versiones como práctica formal en el equipo de desarrollo.",
    ],
  },
  {
    company: "Instituto Rehabilitación Infantil Teletón",
    location: "Santiago, Chile",
    period: "2009 — 2019",
    role: "Systems Analyst & Development Lead",
    bullets: [
      "Líder técnico durante 10 años gestionando el ciclo de vida completo de sistemas institucionales críticos (gestión clínica, administrativa y financiera).",
      "Administración de infraestructura tecnológica local y liderazgo de equipos de desarrollo internos.",
      "Digitalización de procesos clínicos mejorando la eficiencia operativa y calidad de atención a pacientes.",
      "Hacia el final del período, encargado del área de informática en sede Teletón Coyhaique.",
    ],
  },
];

const educationList = [
  {
    degree: "Titulado Ingeniero en Informática",
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

const courses = [
  {
    platform: "Udemy",
    items: ["React: De cero a Experto (Hooks y MERN)"],
  },
  {
    platform: "Platzi",
    items: [
      "Next.js",
      "Backend con Python",
      "Buenas Prácticas, Código Limpio y Principios SOLID en C#",
      "Introducción a la Nube",
      "Curso Inglés para Programadores",
    ],
  },
  {
    platform: "Universidad Adolfo Ibáñez",
    items: [
      "Fundamentos de Metodologías Ágil (Scrum)",
      "Introducción al Machine Learning",
    ],
  },
];

const referencesList = [
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

const skillGroups = [
  {
    title: "Backend",
    items: [
      "C# / .NET",
      "ASP.NET MVC",
      "Entity Framework",
      "Dapper",
      "REST APIs",
      "Python",
      "PHP",
      "Node.js",
    ],
  },
  {
    title: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "jQuery",
      "Bootstrap",
      "Kendo UI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Bases de Datos",
    items: ["SQL Server", "T-SQL", "Stored Procedures", "SSRS", "ETL", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Azure DevOps", "Azure Blob Storage", "Azure", "Git"],
  },
  {
    title: "Metodologías",
    items: [
      "Clean Code",
      "SOLID Principles",
      "Scrum / Agile",
      "Code Review",
      "Trabajo en Equipo",
    ],
  },
  {
    title: "Infraestructura",
    items: ["Windows Server", "IIS", "Redes", "Soporte TI"],
  },
];

export default function CvHarvardPdf() {
  return (
    <div id="cv-harvard-pdf" className="cv-harvard">
      {/* ── Header ── */}
      <div className="cv-header">
        <h1 className="cv-name">{profile.name}</h1>
        <p className="cv-subtitle">Ingeniero Desarrollador</p>
        <div className="cv-divider" />
      </div>

      {/* ── Summary ── */}
      <div className="cv-section">
        <h2 className="cv-section-title">Perfil Profesional</h2>
        <div className="cv-section-divider" />
        <p className="cv-text">{profile.summary}</p>
      </div>

      {/* ── Experience ── */}
      <div className="cv-section">
        <h2 className="cv-section-title">Experiencia Profesional</h2>
        <div className="cv-section-divider" />
        {experiences.map((exp, i) => (
          <div key={i} className="cv-experience-item">
            <div className="cv-experience-header">
              <span className="cv-company">{exp.company}</span>
              <span className="cv-location">{exp.location}</span>
              <span className="cv-period">{exp.period}</span>
            </div>
            <div className="cv-role">{exp.role}</div>
            <ul className="cv-bullets">
              {exp.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Education ── */}
      <div className="cv-section">
        <h2 className="cv-section-title">Educación</h2>
        <div className="cv-section-divider" />
        {educationList.map((edu, i) => (
          <div key={i} className="cv-edu-item">
            <span className="cv-edu-degree">{edu.degree}</span>
            <span className="cv-edu-school"> — {edu.school}</span>
            <span className="cv-edu-detail">, {edu.detail}</span>
          </div>
        ))}
      </div>

      {/* ── Capacitaciones ── */}
      <div className="cv-section">
        <h2 className="cv-section-title">Capacitaciones</h2>
        <div className="cv-section-divider" />
        {courses.map((group, i) => (
          <div key={i} className="cv-course-group">
            <span className="cv-course-platform">{group.platform}:</span>{" "}
            <span className="cv-course-items">{group.items.join(" · ")}</span>
          </div>
        ))}
      </div>

      {/* ── Skills ── */}
      <div className="cv-section">
        <h2 className="cv-section-title">Habilidades Técnicas</h2>
        <div className="cv-section-divider" />
        {skillGroups.map((group, i) => (
          <div key={i} className="cv-skill-group">
            <span className="cv-skill-category">{group.title}:</span>{" "}
            <span className="cv-skill-items">{group.items.join(" · ")}</span>
          </div>
        ))}
      </div>

      {/* ── Languages ── */}
      <div className="cv-section">
        <h2 className="cv-section-title">Idiomas</h2>
        <div className="cv-section-divider" />
        <p className="cv-text">
          <strong>Español:</strong> Nativo &nbsp;|&nbsp;{" "}
          <strong>Inglés:</strong> Nivel B1 · Lectura técnica fluida, conversación básica
        </p>
      </div>

      {/* ── References ── */}
      <div className="cv-section">
        <h2 className="cv-section-title">Referencias</h2>
        <div className="cv-section-divider" />
        {referencesList.map((ref, i) => (
          <div key={i} className="cv-ref-item">
            <span className="cv-ref-name">{ref.name}</span>
            <span className="cv-ref-detail">
              {" "}— {ref.role}, {ref.org}
            </span>
            <span className="cv-ref-phone">
              {" "}| {ref.phone}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
