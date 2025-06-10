import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      const saved = localStorage.getItem("darkMode");
      return saved !== null
        ? JSON.parse(saved)
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-500"
    >
      {isDarkMode ? (
        <FiSun className="w-6 h-6 text-yellow-400 animate-pulse" />
      ) : (
        <FiMoon className="w-6 h-6 text-gray-700 animate-pulse" />
      )}
    </button>
  );
}

export default DarkModeToggle;
