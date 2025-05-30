import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Theme() {
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {dark ? (
        <FaSun className="text-yellow-500 text-xl" />
      ) : (
        <FaMoon className="text-blue-500 text-xl" />
      )}
    </button>
  );
}

export default Theme;
