import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiPhp,
  SiGo,
  SiPython,
  SiSharp,
  SiReact,
  SiLaravel,
  SiVuedotjs,
  SiNextdotjs,
  SiAngular,
  SiDjango,
  SiPostgresql,
  SiGraphql,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiLooker,
  SiQlik,
} from 'react-icons/si';
import { FaChartBar, FaFileExcel, FaChartPie, FaDatabase } from 'react-icons/fa';
import { FiBarChart2 } from 'react-icons/fi';

const iconMap = {
  JavaScript: <SiJavascript className="w-[15px] h-[15px]" style={{ color: '#F7DF1E' }} />,
  PHP: <SiPhp className="w-[15px] h-[15px]" style={{ color: '#777BB4' }} />,
  Go: <SiGo className="w-[15px] h-[15px]" style={{ color: '#00ADD8' }} />,
  Python: <SiPython className="w-[15px] h-[15px]" style={{ color: '#3776AB' }} />,
  VBA: <span className="text-[11px] font-bold text-blue-600">VBA</span>,
  'C#': <SiSharp className="w-[15px] h-[15px]" style={{ color: '#239120' }} />,
  'Power BI': <FaChartBar className="w-[15px] h-[15px]" style={{ color: '#F2C811' }} />,
  Excel: <FaFileExcel className="w-[15px] h-[15px]" style={{ color: '#217346' }} />,
  'Report Builder': <FaChartPie className="w-[15px] h-[15px]" style={{ color: '#8A2BE2' }} />,
  Tableau: <FiBarChart2 className="w-[15px] h-[15px]" style={{ color: '#E97627' }} />,
  'Looker Studio': <SiLooker className="w-[15px] h-[15px]" style={{ color: '#4285F4' }} />,
  Qlik: <SiQlik className="w-[15px] h-[15px]" style={{ color: '#009845' }} />,
  React: <SiReact className="w-[15px] h-[15px]" style={{ color: '#61DAFB' }} />,
  Laravel: <SiLaravel className="w-[15px] h-[15px]" style={{ color: '#FF2D20' }} />,
  Vue: <SiVuedotjs className="w-[15px] h-[15px]" style={{ color: '#4FC08D' }} />,
  'Next.js': <SiNextdotjs className="w-[15px] h-[15px]" style={{ color: '#000000' }} />,
  Angular: <SiAngular className="w-[15px] h-[15px]" style={{ color: '#DD0031' }} />,
  Django: <SiDjango className="w-[15px] h-[15px]" style={{ color: '#092E20' }} />,
  PostgreSQL: <SiPostgresql className="w-[15px] h-[15px]" style={{ color: '#4169E1' }} />,
  GraphQL: <SiGraphql className="w-[15px] h-[15px]" style={{ color: '#E10098' }} />,
  MySQL: <SiMysql className="w-[15px] h-[15px]" style={{ color: '#4479A1' }} />,
  'SQL Server': <FaDatabase className="w-[15px] h-[15px]" style={{ color: '#CC2927' }} />,
  MongoDB: <SiMongodb className="w-[15px] h-[15px]" style={{ color: '#47A248' }} />,
  SQLite: <SiSqlite className="w-[15px] h-[15px]" style={{ color: '#003B57' }} />,
};

const skillGroups = [
  {
    category: 'Lenguajes',
    skills: [
      { name: 'JavaScript', stars: 5 },
      { name: 'PHP', stars: 5 },
      { name: 'Go', stars: 4 },
      { name: 'Python', stars: 4 },
      { name: 'VBA', stars: 4 },
      { name: 'C#', stars: 2 },
    ],
  },
  {
    category: 'BI & Visualización',
    skills: [
      { name: 'Power BI', stars: 5 },
      { name: 'Excel', stars: 5 },
      { name: 'Report Builder', stars: 5 },
      { name: 'Tableau', stars: 3 },
      { name: 'Looker Studio', stars: 3 },
      { name: 'Qlik', stars: 2 },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React', stars: 5 },
      { name: 'Laravel', stars: 5 },
      { name: 'Vue', stars: 5 },
      { name: 'Next.js', stars: 5 },
      { name: 'Angular', stars: 4 },
      { name: 'Django', stars: 4 },
    ],
  },
  {
    category: 'Bases de Datos',
    skills: [
      { name: 'PostgreSQL', stars: 5 },
      { name: 'MySQL', stars: 5 },
      { name: 'SQL Server', stars: 5 },
      { name: 'MongoDB', stars: 5 },
      { name: 'SQLite', stars: 5 },
      { name: 'GraphQL', stars: 3 },
    ],
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-[3px]">
    {[1, 2, 3, 4, 5].map(i => (
      <span
        key={i}
        className="block w-[7px] h-[7px] rounded-full bg-blue-400"
        style={{ opacity: i <= count ? 1 : 0.18 }}
      />
    ))}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="pt-24 pb-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-[1.75rem] md:text-[2.3125rem] font-extrabold text-gray-900 dark:text-slate-100 leading-tight flex items-center gap-3
          before:content-[''] before:block before:w-[3px] before:h-[1.625rem] md:before:h-[2.125rem] before:bg-blue-500 dark:before:bg-blue-400 before:rotate-[15deg] before:rounded-sm before:shrink-0
        ">
          Habilidades Técnicas
        </h2>
        <p className="mt-4 text-[0.9375rem] md:text-[1.0625rem] text-gray-500 dark:text-slate-400 max-w-2xl leading-[1.375rem]">
          Tecnologías y herramientas que utilizo para transformar datos en información accionable.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: gi * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -2 }}
            className="bg-white border border-blue-100 rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(59,130,246,0.08)] hover:border-blue-200 transition-all duration-300 dark:bg-slate-800/60 dark:border-slate-700/80 dark:shadow-[0_1px_2px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] dark:hover:border-slate-600"
          >
            <h3 className="text-[0.6875rem] font-semibold text-blue-500 uppercase tracking-[0.14em] mb-4 pb-3 border-b border-blue-50 dark:text-blue-400 dark:border-slate-700">
              {group.category}
            </h3>

            <div className="space-y-[10px]">
              {group.skills.map(skill => (
                <div key={skill.name} className="flex items-center justify-between group/skill">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-5 h-5 opacity-80 group-hover/skill:opacity-100 transition-opacity">
                      {iconMap[skill.name]}
                    </span>
                    <span className="text-[0.8125rem] font-medium text-gray-700 group-hover/skill:text-gray-900 transition-colors dark:text-slate-300 dark:group-hover/skill:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <Stars count={skill.stars} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
