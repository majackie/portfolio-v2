import Description from "./Description";
import Demo from "./Demo";
import Badge from "./Badge";
import { SiSwift } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import DemoVideo from "../../assets/videos/bloodpressure.webm";

function BloodPressure() {
  return (
    <div>
      <Description
        title="Blood Pressure"
        text="Keep track of family member's blood pressure readings."
        sourceCodeUrl="https://github.com/majackie/blood_pressure_assignment"
      />
      <Demo src={DemoVideo} alt="Blood Pressure Demo" />
      <div className="flex flex-wrap gap-1 mt-2">
        <Badge icon={SiSwift} label="SwiftUI" title="SwiftUI" />
        <Badge icon={FaGoogle} label="Firestore" title="Firestore" />
      </div>
    </div>
  );
}

export default BloodPressure;
