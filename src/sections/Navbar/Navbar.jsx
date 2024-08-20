import React, { useState } from "react";

import styles from "./Navbar.module.css";
import closeLight from "../../assets/close-light.png";
import closeDark from "../../assets/close-dark.png";
import menuLight from "../../assets/menu-light.png";
import menuDark from "../../assets/menu-dark.png";
import { useTheme } from "../../common/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const closeIcon = theme === "light" ? closeLight : closeDark;
  const menuIcon = theme === "light" ? menuLight : menuDark;

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <img src="/Raghav Pareek logo.png" alt="Raghav's Logo" />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#me">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
