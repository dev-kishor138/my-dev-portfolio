import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
   const [theme, setTheme] = useState(localStorage.getItem('my-theme') || 'light');

  useEffect(() => {
    document.getElementById('root').setAttribute('data-theme', theme);
    localStorage.setItem('my-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <i className={theme === 'light' ? 'bx bx-sun' : 'bx bx-moon'}></i>
    </button>
  );
};

export default ThemeToggle;