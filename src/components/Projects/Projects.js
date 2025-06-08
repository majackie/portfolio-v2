import MealPlanIQ from "./MealPlanIQ";
import PromptVisioQuiz from "./PromptVisioQuiz";
import ToggleSidebar from "./ToggleSidebar";
import HarmonyHub from "./HarmonyHub";
import Charity from "./Charity";
import BloodPressure from "./BloodPressure";
import Calculator from "./Calculator";

function Projects() {
  return (
    <div id="projects" className="pt-4">
      <div className="text-2xl">Projects</div>
      <hr className="my-2" />
      <div className="mt-2 space-y-4">
        <PromptVisioQuiz />
        <MealPlanIQ />
        <ToggleSidebar />
        <HarmonyHub />
        <Charity />
        <BloodPressure />
        <Calculator />
      </div>
    </div>
  );
}

export default Projects;
