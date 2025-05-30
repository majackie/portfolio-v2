function Dropdown({ closeMenu }) {
  const handleLinkClick = (event, href) => {
    event.preventDefault();
    closeMenu();
    const element = document.querySelector(href);
    const navbar = document.querySelector("#navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    if (element) {
      const elementPosition = Math.max(element.offsetTop - navbarHeight, 0);
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    } else {
      console.error("Target element not found for href:", href);
    }
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
          <a href="#about" onClick={(event) => handleLinkClick(event, "#about")}>
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={(event) => handleLinkClick(event, "#experience")}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(event) => handleLinkClick(event, "#projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#techstack"
            onClick={(event) => handleLinkClick(event, "#techstack")}
          >
            Tech Stack
          </a>
        </li>
        <li>
          <a
            href="#education"
            onClick={(event) => handleLinkClick(event, "#education")}
          >
            Education
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
