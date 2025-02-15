import React from "react";
import "./Navbar.css";
import { useTheme } from "../ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Icons

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h1>User Management</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
