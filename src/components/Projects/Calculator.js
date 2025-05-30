import Description from "./Description";
import Demo from "./Demo";
import Badge from "./Badge";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLink } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

function Calculator() {
  return (
    <div>
      <Description
        title="Calculator"
        text="Functional replica of a standard calculator."
        sourceCodeUrl="https://github.com/majackie/calculator"
        hostedUrl="https://calculator-jkm.netlify.app/"
      />
      <Demo src="/assets/videos/calculator.webm" alt="Calculator Demo" />
      <div className="flex flex-wrap gap-1 mt-2">
        <Badge icon={FaHtml5} label="HTML" title="HTML" />
        <Badge icon={FaCss3Alt} label="CSS" title="CSS" />
        <Badge icon={FaJs} label="JavaScript" title="JavaScript" />
        <Badge icon={SiNetlify} label="Netlify" title="Netlify" />
      </div>
    </div>
  );
}

export default Calculator;
