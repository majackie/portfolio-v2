import Description from "./Description";
import Demo from "./Demo";
import Badge from "./Badge";
import { FaSpotify } from "react-icons/fa";
import { SiSwift } from "react-icons/si";
import DemoVideo from "../../assets/videos/harmonyhub.webm";

function HarmonyHub() {
  return (
    <div>
      <Description
        title="HarmonyHub"
        description="Look up details for artists, albums, playlists and profiles. Retrieve
        most played artists and tracks to generate a new playlist."
        sourceCodeUrl="https://github.com/majackie/HarmonyHub"
      />
      <Demo src={DemoVideo} alt="HarmonyHub Demo" />
      <div className="flex flex-wrap gap-1 mt-2">
        <Badge icon={SiSwift} label="SwiftUI" title="SwiftUI" />
        <Badge icon={FaSpotify} label="Spotify API" title="Spotify API" />
      </div>
    </div>
  );
}

export default HarmonyHub;
