import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  // change background header
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("header-scroll");
    else header.classList.remove("header-scroll");
  });

  // toggle Menu
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // Handle outside click to close menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const menu = document.querySelector(".nav-menu");
      const toggleButton = document.querySelector(".nav-toggle");

      // Check if click is outside both menu and toggle button
      if (
        toggle &&
        menu &&
        toggleButton &&
        !menu.contains(e.target) &&
        !toggleButton.contains(e.target)
      ) {
        showMenu(false); // Hide menu
      }
    };

    // Add event listener for clicks
    document.addEventListener("click", handleOutsideClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [toggle]);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo">
          Kishor
        </a>

        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-estate nav-icon"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-user nav-icon"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-file-alt nav-icon"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-briefcase-alt nav-icon"></i> Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-graduation-cap nav-icon"></i>{" "}
                Qualification
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-scenery nav-icon"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-message nav-icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav-close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>
        <div className="nav-toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
