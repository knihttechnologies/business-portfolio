import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const { isDark, toggleDark } = useDarkMode();
  return (
    <button
      onClick={() => toggleDark()}
      className="fixed top-4 left-4 z-[100] p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg hover:bg-sky-400 dark:hover:bg-sky-600 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={22} className="text-sky-400" /> : <Moon size={22} className="text-gray-700" />}
    </button>
  );
};

export default DarkModeToggle;
