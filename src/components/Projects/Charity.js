import Description from "./Description";
import Demo from "./Demo";
import Badge from "./Badge";
import { FaMicrosoft } from "react-icons/fa";
import { SiDotnet, SiSqlite, SiBlazor } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import DemoVideo from "../../assets/videos/charity.webm";

function Charity() {
  return (
    <div>
      <Description
        title="Charity"
        text="A charity donation platform that allows users to donate to various causes."
      />
      <Demo src={DemoVideo} alt="Charity Demo" />
      <div className="flex flex-wrap gap-1 mt-2">
        <Badge icon={TbBrandCSharp} label="C#" title="C#" />
        <Badge icon={SiDotnet} label="ASP.NET Core" title="ASP.NET Core" />
        <Badge
          icon={SiDotnet}
          label="Entity Framework Core"
          title="Entity Framework Core"
        />
        <Badge icon={SiBlazor} label="Blazor Server" title="Blazor Server" />
        <Badge icon={SiSqlite} label="SQLite" title="SQLite" />
        <Badge
          icon={FaMicrosoft}
          label="Microsoft Azure"
          title="Microsoft Azure"
        />
      </div>
    </div>
  );
}

export default Charity;
