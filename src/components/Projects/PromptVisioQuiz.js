import Description from "./Description";
import Demo from "./Demo";
import Badge from "./Badge";
import {
  FaNodeJs,
  FaPython,
  FaFlask,
  FaRobot,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiJsonwebtokens,
  SiPostgresql,
  SiHuggingface,
  SiRender,
} from "react-icons/si";
import DemoVideo from "../../assets/videos/promptvisioquiz.webm";

function PromptVisioQuiz() {
  return (
    <div>
      <Description
        title="PromptVisioQuiz"
        text="Fetch four random article titles from CBC RSS feed to create questionnaire. Use first title to generate image with self-hosted machine learning model."
        sourceCodeUrl="https://github.com/majackie/PromptVisioQuiz"
      />
      <Demo
        src={DemoVideo}
        alt="PromptVisioQuiz Demo"
      />
      <div className="flex flex-wrap gap-1 mt-2">
        <Badge icon={FaNodeJs} label="Node.js" title="Node.js" />
        <Badge icon={SiExpress} label="Express.js" title="Express.js" />
        <Badge icon={SiJsonwebtokens} label="JWT" title="JWT" />
        <Badge icon={FaPython} label="Python" title="Python" />
        <Badge icon={FaFlask} label="Flask" title="Flask" />
        <Badge icon={SiPostgresql} label="PostgreSQL" title="PostgreSQL" />
        <Badge icon={SiHuggingface} label="Hugging Face" title="Hugging Face" />
        <Badge icon={FaRobot} label="RunwayML" title="RunwayML" />
        <Badge icon={FaHtml5} label="HTML" title="HTML" />
        <Badge icon={FaCss3Alt} label="CSS" title="CSS" />
        <Badge icon={FaJs} label="JavaScript" title="JavaScript" />
        <Badge icon={SiRender} label="Render" title="Render" />
      </div>
    </div>
  );
}

export default PromptVisioQuiz;
