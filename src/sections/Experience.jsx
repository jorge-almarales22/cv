import { motion } from 'framer-motion';
import imgCerrejon from '../assets/cerrejon.jpeg';
import imgBarranquilla from '../assets/barranquilla.jpg';

const projects = [
  {
    title: "Cerrejón",
    image: imgCerrejon,
    desc: "Es una de las operaciones mineras de carbón a cielo abierto más grandes del mundo, ubicada en La Guajira, Colombia. Integra un complejo industrial que abarca la extracción en mina, una línea férrea de 150 km y Puerto Bolívar, una terminal marítima de alta eficiencia. La compañía exporta millones de toneladas anuales y es un pilar estratégico en la economía, infraestructura y desarrollo logístico del país.",
    tech: ["Guajira", "Colombia"],
  },
  {
    title: "Joonik",
    image: imgBarranquilla,
    desc: "Es una compañía global de tecnología y desarrollo de software especializada en la creación de productos digitales a medida y el suministro de talento técnico de alto nivel (staff augmentation). Con un enfoque ágil y orientado a resultados, la empresa conecta ingenieros calificados con organizaciones internacionales para acelerar su transformación digital. Destaca por construir equipos remotos eficientes y soluciones tecnológicas escalables para el mercado global.",
    tech: ["Barranquilla", "Colombia"],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-24 pb-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-[1.75rem] md:text-[2.3125rem] font-extrabold text-gray-900 dark:text-slate-100 leading-tight flex items-center gap-3
          before:content-[''] before:block before:w-[3px] before:h-[1.625rem] md:before:h-[2.125rem] before:bg-blue-500 dark:before:bg-blue-400 before:rotate-[15deg] before:rounded-sm before:shrink-0
        ">
          Trayectoria Profesional
        </h2>
        <p className="mt-4 text-[0.9375rem] md:text-[1.0625rem] text-gray-500 dark:text-slate-400 max-w-2xl leading-[1.375rem]">
          Organizaciones que han confiado en mi criterio técnico para optimizar sus procesos y sistemas.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -3 }}
            className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] dark:bg-slate-800/60 dark:border-slate-700/80 dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_4px_16px_rgba(59,130,246,0.08)]"
          >
            <div className="w-full h-48 rounded-lg mb-5 overflow-hidden">
              <motion.img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-500 dark:text-slate-400 leading-[1.375rem] mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map(tech => (
                <span key={tech}                   className="px-2.5 py-1 bg-white border border-blue-100 rounded-full text-[0.6875rem] text-blue-600 font-medium dark:bg-slate-700 dark:border-slate-600 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
