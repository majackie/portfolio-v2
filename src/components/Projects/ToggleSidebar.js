import Description from "./Description";
import Demo from "./Demo";
import Badge from "./Badge";
import { FaJs, FaChrome } from "react-icons/fa";
import DemoVideo from "../../assets/videos/togglesidebar.webm";

function ToggleSidebar() {
  return (
    <div>
      <Description
        title="Toggle Sidebar"
        text="Enhance your messaging experience with Toggle Sidebar, a Chrome extension that hides your contact list for improved privacy and screen space."
        sourceCodeUrl="https://github.com/majackie/ToggleSidebar"
        hostedUrl="https://chromewebstore.google.com/detail/toggle-sidebar/ejkcciildkjbakbjngbenpbmioheecnb"
      />
      <Demo src={DemoVideo} alt="Toggle Sidebar Demo" />
      <div className="flex flex-wrap gap-1 mt-2">
        <Badge icon={FaJs} label="JavaScript" title="JavaScript" />
        <Badge
          icon={FaChrome}
          label="Google Chrome Extension"
          title="Google Chrome Extension"
        />
      </div>
    </div>
  );
}

export default ToggleSidebar;
