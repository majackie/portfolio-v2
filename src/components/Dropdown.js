function Dropdown({ closeMenu }) {
  const handleClick = (event, href) => {
    event.preventDefault();
    const element = document.querySelector(href);
    const navbar = document.querySelector("#navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    } else {
      console.error("Target element not found for href:", href);
    }
    if (window.innerWidth < 1024 && closeMenu) {
      closeMenu();
    }
  };

  return (
    <ul className="space-y-2 lg:space-y-0 text-center lg:text-left transform lg:transform-none -translate-y-16 lg:text-xl">
      <li className="lg:hidden">
        <a href="#about" onClick={(event) => handleClick(event, "#about")}>
          About
        </a>
      </li>
      <li>
        <a
          href="#experience"
          onClick={(event) => handleClick(event, "#experience")}
        >
          Experience
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={(event) => handleClick(event, "#projects")}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#techstack"
          onClick={(event) => handleClick(event, "#techstack")}
        >
          Tech Stack
        </a>
      </li>
      <li>
        <a
          href="#education"
          onClick={(event) => handleClick(event, "#education")}
        >
          Education
        </a>
      </li>
    </ul>
  );
}

export default Dropdown;
