import React from 'react';
import Timeline from '../components/Timeline';

const experiences = [
  {
    role: "Desarrollador Full Stack",
    company: "Cerrejón",
    date: "Ene 2026 - May 2026",
    desc: "Lideré el desarrollo integral de la interfaz, lógica de negocio y arquitectura de datos para la automatización de checklists de incorporación de equipos mineros. Implementé un módulo de validación de evidencias técnicas en tiempo real e integré flujos de trabajo mediante Power Automate para la emisión de alertas críticas vía Microsoft Teams y correo corporativo, garantizando el 100% de cumplimiento normativo previo a la operación de la flota.",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Power Automate", "Docker"]
  },
  {
    role: "Desarrollador Full Stack",
    company: "Cerrejón",
    date: "Ago 2025 - Dic 2025",
    desc: "Diseñé y construí una plataforma web centralizada para el control absoluto de la cadena de reparación de componentes de maquinaria pesada, desde su recepción hasta la entrega técnica. El sistema coordina las solicitudes de múltiples áreas, rastrea técnicos asignados por turno, registra horas de labor junto al consumo de herramientas, y automatiza el traspaso de pendientes e insumos entre relevos operativos para asegurar la continuidad del taller.",
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Power Automate", "Microsoft Teams", "SharePoint"]
  },
  {
    role: "Analista Senior de Datos y Reporting",
    company: "Cerrejón",
    date: "Ene 2025 - Ago 2025",
    desc: "Desarrollé un tablero analítico en Power BI para evaluar el desempeño e impacto financiero de la flota intervenida en procesos de Overhaul (vida media y extensión de vida). La solución consolida datos mediante SQL y macros en Excel para proyectar la disponibilidad y confiabilidad mensual de cada equipo hasta superar las 6,000 horas de operación, cruzando estos indicadores con el comportamiento de presupuestos CAPEX/OPEX, costos de mano de obra, repuestos y logística.",
    tags: ["Análisis de datos", "Reporting ejecutivo", "Power BI", "SQL", "Excel", "VBA"]
  },
  {
    role: "Desarrollador Full Stack",
    company: "Cerrejón",
    date: "Oct 2023 - May 2024",
    desc: "Desarrollé un sistema de visualización en tiempo real que optimiza la toma de decisiones estratégicas para la gerencia y superintendencia durante el arme y desarme de maquinaria pesada. La plataforma centraliza la auditoría de pre-trabajo para tareas de alto riesgo (HSE) y despliega diagramas de Gantt interactivos que permiten a la alta línea de mando identificar cuellos de botella, evaluar retrasos y mitigar desviaciones operativas al instante.",
    tags: ["Excel", "VBA", "React.js", "PostgreSQL", "Node.js"]
  },
  {
    role: "Desarrollador Full Stack",
    company: "Joonik",
    date: "Ene 2021 - Ago 2023",
    desc: "Co-desarrollo de Certainty App una aplicación web orientada a la optimización de finanzas personales y corporativas, actuando como un consultor financiero automatizado. El sistema centraliza la auditoría de egresos, proyecta estrategias para maximizar la rentabilidad y automatiza reportes contables junto a módulos de planes de ahorro estructurados. Adicionalmente, colaboré en el despliegue de su arquitectura en AWS mediante Docker y flujos de despliegue automatizado.",
    tags: ["Laravel", "PHP", "MySQL", "AWS", "Docker", "Linux", "React.js", "CSS"]
  },
  {
    role: "Desarrollador Full Stacks",
    company: "Joonik",
    date: "Ene 2021 - Dic 2021",
    desc: "Formé parte del equipo de ingeniería a cargo de una plataforma web centralizada para la gestión operativa y comercial de concesionarios de automóviles de lujo en Estados Unidos. Participé activamente en la automatización del ciclo de comunicación con clientes y proveedores, el control estricto del inventario de repuestos por modelo, la auditoría en el procesamiento de garantías y la centralización de métricas analíticas de servicios técnicos.",
    tags: ["Laravel", "PHP", "MySQL", "AWS", "Docker", "Linux", "React.js", "CSS"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-[1.75rem] md:text-[2.3125rem] font-extrabold text-gray-900 dark:text-slate-100 leading-tight flex items-center gap-3
          before:content-[''] before:block before:w-[3px] before:h-[1.625rem] md:before:h-[2.125rem] before:bg-blue-500 dark:before:bg-blue-400 before:rotate-[15deg] before:rounded-sm before:shrink-0
        ">
          Proyectos Destacados
        </h2>
        <p className="mt-4 text-[0.9375rem] md:text-[1.0625rem] text-gray-500 dark:text-slate-400 max-w-2xl leading-[1.375rem]">
          Soluciones de software, análisis de datos y automatización diseñadas para resolver problemas reales de negocio.
        </p>
      </div>
      <Timeline items={experiences} />
    </section>
  );
};

export default Projects;
