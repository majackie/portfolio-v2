import { useState, useLayoutEffect, useRef } from "react";

function Dropdown({ closeMenu }) {
  const [activeHref, setActiveHref] = useState("");
  const isClickScrolling = useRef(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) {
        return;
      }
      const sections = [
        "#about",
        "#experience",
        "#projects",
        "#techstack",
        "#education",
      ];
      const navbar = document.querySelector("#navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      let current = "";
      for (const href of sections) {
        const section = document.querySelector(href);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top - navbarHeight;
          if (sectionTop <= 10) {
            current = href;
          }
        }
      }
      setActiveHref(current || sections[0]);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (event, href) => {
    event.preventDefault();
    setActiveHref(href);
    isClickScrolling.current = true;
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
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
    } else {
      isClickScrolling.current = false;
      console.error("Target element not found for href:", href);
    }
    if (window.innerWidth < 1024 && closeMenu) {
      closeMenu();
    }
  };

  const linkClass = (href) =>
    `${
      activeHref === href ? "text-blue-400 font-bold text-xl" : "hover:text-blue-400"
    }`;

  return (
    <ul className="space-y-2 lg:space-y-0 text-center lg:text-left lg:text-lg transform lg:transform-none -translate-y-16">
      <li className="lg:hidden">
        <a
          href="#about"
          className={linkClass("#about")}
          onClick={(event) => handleClick(event, "#about")}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className={linkClass("#experience")}
          onClick={(event) => handleClick(event, "#experience")}
        >
          Experience
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className={linkClass("#projects")}
          onClick={(event) => handleClick(event, "#projects")}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#techstack"
          className={linkClass("#techstack")}
          onClick={(event) => handleClick(event, "#techstack")}
        >
          Tech Stack
        </a>
      </li>
      <li>
        <a
          href="#education"
          className={linkClass("#education")}
          onClick={(event) => handleClick(event, "#education")}
        >
          Education
        </a>
      </li>
      <li className="pt-4">
        <a
          href="https://portfolio-v1-jkm.netlify.app/"
          className={linkClass("#")}
        >
          Portfolio v1
        </a>
      </li>
    </ul>
  );
}

export default Dropdown;
