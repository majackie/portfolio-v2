import Description from "./Description";
import Demo from "./Demo";
import Badge from "./Badge";
import { FaPython, FaNetworkWired, FaLock } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import DemoVideo from "../../assets/videos/distributedhashrecovery.webm";

function DistributedHashRecovery() {
  return (
    <div>
      <Description
        title="DistributedHashRecovery"
        text="Recover passwords by distributing hash recovery tasks to multiple workers over a network. Supports generated hashes or extracted hashes from Linux shadow file."
        sourceCodeUrl="https://github.com/majackie/DistributedHashRecovery"
      />
      <Demo src={DemoVideo} alt="DistributedHashRecovery Demo" />
      <div className="flex flex-wrap gap-1 mt-2">
        <Badge icon={FaPython} label="Python" title="Python" />
        <Badge icon={SiSocketdotio} label="Sockets" title="TCP/IP Sockets" />
        <Badge
          icon={FaNetworkWired}
          label="Distributed Systems"
          title="Distributed Systems"
        />
        <Badge icon={FaLock} label="Cryptography" title="Cryptography" />
      </div>
    </div>
  );
}

export default DistributedHashRecovery;
