import Description from "./Description";
import Demo from "./Demo";
import Badge from "./Badge";
import { FaJs, FaFirefoxBrowser } from "react-icons/fa";
import DemoVideo from "../../assets/videos/netflix1080pua.webm";

function Netflix1080pUA() {
  return (
    <div>
      <Description
        title="Netflix 1080p UA"
        text="Forces Netflix to stream at 1080p on Firefox/Linux by spoofing the User-Agent to an Opera-on-Linux UA."
        sourceCodeUrl="https://github.com/majackie/Netflix1080pUA"
        hostedUrl="https://addons.mozilla.org/en-US/firefox/addon/netflix-1080p-ua/"
      />
      <Demo src={DemoVideo} alt="Netflix 1080p UA Demo" />
      <div className="flex flex-wrap gap-1 mt-2">
        <Badge icon={FaJs} label="JavaScript" title="JavaScript" />
        <Badge
          icon={FaFirefoxBrowser}
          label="Mozilla Firefox Extensions"
          title="Mozilla Firefox Extensions"
        />
      </div>
    </div>
  );
}

export default Netflix1080pUA;
