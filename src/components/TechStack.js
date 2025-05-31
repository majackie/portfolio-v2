import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaSwift,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { TbBrandCSharp, TbBrandTailwind, } from "react-icons/tb";
import {
  SiKotlin,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiLaravel,
  SiPostgresql,
  SiMysql,
  SiMariadb,
  SiSqlite,
  SiFirebase,
} from "react-icons/si";

function TechStack() {
  const languages = [
    { icon: FaPython, label: "Python" },
    { icon: FaJava, label: "Java" },
    { icon: FaJs, label: "JavaScript" },
    { icon: TbBrandCSharp, label: "C#" },
    { icon: SiKotlin, label: "Kotlin" },
    { icon: FaPhp, label: "PHP" },
    { icon: FaHtml5, label: "HTML" },
    { icon: FaCss3Alt, label: "CSS" },
    { icon: FaSwift, label: "Swift" },
  ];

  const frameworks = [
    { icon: SiDotnet, label: ".NET" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiExpress, label: "Express.js" },
    { icon: SiFlask, label: "Flask" },
    { icon: SiLaravel, label: "Laravel" },
    { icon: FaReact, label: "React" },
    { icon: TbBrandTailwind, label: "Tailwind" },
  ];

  const databases = [
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiMysql, label: "MySQL" },
    { icon: SiMariadb, label: "MariaDB" },
    { icon: SiSqlite, label: "SQLite" },
    { icon: SiFirebase, label: "Firebase" },
  ];

  const renderBadges = (items) =>
    items.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-1 px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm"
      >
        <item.icon title={item.label} />
        <span>{item.label}</span>
      </div>
    ));

  return (
    <div id="techstack" className="mt-4">
      <div className="text-2xl">Tech Stack</div>
      <hr className="my-2" />

      <div className="mt-2">
        <div className="font-bold text-xl mb-2">Languages</div>
        <div className="flex flex-wrap gap-2">{renderBadges(languages)}</div>
      </div>

      <div className="mt-2">
        <div className="font-bold text-xl mb-2">Frameworks</div>
        <div className="flex flex-wrap gap-2">{renderBadges(frameworks)}</div>
      </div>

      <div className="mt-2">
        <div className="font-bold text-xl mb-2">Databases</div>
        <div className="flex flex-wrap gap-2">{renderBadges(databases)}</div>
      </div>
    </div>
  );
}

export default TechStack;
