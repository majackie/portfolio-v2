import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Dropdown from "./Dropdown";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? (
          <FaTimes className="text-black dark:text-white text-xl" />
        ) : (
          <FaBars className="text-black dark:text-white text-xl" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-full">
          <Dropdown />
        </div>
      )}
    </div>
  );
}

export default Menu;
