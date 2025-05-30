import Description from "./Description";
import Demo from "./Demo";
import Badge from "./Badge";
import { FaPython, FaFlask, FaAngular, FaGoogle } from "react-icons/fa";
import {
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiTypescript,
  SiAngular,
} from "react-icons/si";

function MealPlanIQ() {
  return (
    <div>
      <Description
        title="MealPlanIQ"
        text="Customize meal planning to promote health and prevent diseases, while catering to dietary needs and preferences."
      />
      <Demo src="/assets/videos/mealplaniq.webm" alt="MealPlanIQ Demo" />
      <div className="flex flex-wrap gap-1 mt-2">
        <Badge icon={FaPython} label="Python" title="Python" />
        <Badge icon={FaFlask} label="Flask" title="Flask" />
        <Badge icon={SiNumpy} label="Numpy" title="Numpy" />
        <Badge icon={SiPandas} label="Pandas" title="Pandas" />
        <Badge icon={SiPostgresql} label="PostgreSQL" title="PostgreSQL" />
        <Badge icon={SiTypescript} label="TypeScript" title="TypeScript" />
        <Badge icon={FaAngular} label="Angular" title="Angular" />
        <Badge
          icon={SiAngular}
          label="Angular Material"
          title="Angular Material"
        />
        <Badge
          icon={FaGoogle}
          label="Google Cloud Platform"
          title="Google Cloud Platform"
        />
      </div>
    </div>
  );
}

export default MealPlanIQ;
