import avatar from "../assets/images/avatar3.jpg";
import resume from "../assets/resume/Jackie_Ma_Resume.pdf";
import { TbBrandLinkedin, TbBrandGithub, TbFileCv } from "react-icons/tb";

function About() {
  return (
    <section class="about" className="flex flex-row text-black dark:text-white">
      <img
        src={avatar}
        alt="Jackie Ma"
        className="w-24 h-24 rounded-full"
      />
      <div className="flex flex-col justify-center pl-4">
        <div className="text-4xl font-bold">Jackie Ma</div>
        <div className="text-lg ">Software Developer</div>
        <div className="mt-1 flex space-x-2">
          <a
            href="https://www.linkedin.com/in/majackie-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <TbBrandLinkedin className="text-black dark:text-white text-2xl" />
          </a>
          <a
            href="https://github.com/majackie/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <TbBrandGithub className="text-black dark:text-white text-2xl" />
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <TbFileCv className="text-black dark:text-white text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;