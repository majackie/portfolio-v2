function Dropdown() {
  return (
    <div
      className="bg-white dark:bg-black h-screen w-screen flex items-center justify-center"
      style={{
        height: "calc(100vh - 4rem)",
        width: "calc(100vw - 2rem)",
      }}
    >
      <ul className="space-y-2 text-center">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#techstack">Tech Stack</a>
        </li>
        <li>
          <a href="#Education">Education</a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
