import Description from "./Description";
import Demo from "./Demo";
import Badge from "./Badge";
import {
  FaPython,
} from "react-icons/fa";
import DemoVideo from "../../assets/videos/distributedhashrecovery.webm";

function DistributedHashRecovery() {
  return (
    <div>
      <Description
        title="DistributedHashRecovery"
        text="Recover passwords by distributing hash recovery tasks to multiple workers over a network. Supports generated hashes or extracted hashes from Linux shadow file."
        sourceCodeUrl="https://github.com/majackie/DistributedHashRecovery"
      />
      <Demo
        src={DemoVideo}
        alt="DistributedHashRecovery Demo"
      />
      <div className="flex flex-wrap gap-1 mt-2">
        <Badge icon={FaPython} label="Python" title="Python" />
      </div>
    </div>
  );
}

export default DistributedHashRecovery;
