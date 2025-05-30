function Dropdown({closeMenu}) {
  const handleLinkClick = (href) => {
    closeMenu();
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="bg-white dark:bg-black h-screen w-screen flex items-center justify-center"
      style={{
        height: "calc(100vh - 2rem)",
        width: "calc(100vw - 2rem)",
      }}
    >
      <ul className="space-y-2 text-center transform -translate-y-16">
        <li>
          <a href="#about" onClick={() => handleLinkClick("#about")}>About</a>
        </li>
        <li>
          <a href="#experience" onClick={() => handleLinkClick("#experience")}>Experience</a>
        </li>
        <li>
          <a href="#projects" onClick={() => handleLinkClick("#projects")}>Projects</a>
        </li>
        <li>
          <a href="#techstack" onClick={() => handleLinkClick("#techstack")}>Tech Stack</a>
        </li>
        <li>
          <a href="#education" onClick={() => handleLinkClick("#education")}>Education</a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
