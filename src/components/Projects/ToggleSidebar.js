import Description from "./Description";
import Demo from "./Demo";
import Badge from "./Badge";
import { FaJs, FaChrome } from "react-icons/fa";
import { SiGooglechrome } from "react-icons/si";

function ToggleSidebar() {
  return (
    <div>
      <Description
        title="Toggle Sidebar"
        text="Enhance your messaging experience with Toggle Sidebar, a Chrome extension that hides your contact list for improved privacy and screen space."
        sourceCodeUrl="https://github.com/majackie/ToggleSidebar"
        hostedUrl="https://chromewebstore.google.com/detail/toggle-sidebar/ejkcciildkjbakbjngbenpbmioheecnb"
      />
      <Demo src="/assets/videos/togglesidebar.webm" alt="Toggle Sidebar Demo" />
      <div className="flex flex-wrap gap-1 mt-2">
        <Badge icon={FaJs} label="JavaScript" title="JavaScript" />
        <Badge
          icon={FaChrome}
          label="Google Chrome Extension"
          title="Google Chrome Extension"
        />
        <Badge
          icon={SiGooglechrome}
          label="Chrome Web Store"
          title="Chrome Web Store"
        />
      </div>
    </div>
  );
}

export default ToggleSidebar;
