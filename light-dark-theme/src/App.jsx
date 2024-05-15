import React, { useEffect, useState } from 'react';
import './App.css';
import { FaSun, FaMoon, FaPlay } from 'react-icons/fa';
import SLSLogo from './assets/SLS-LOGO.png';
import MonsterImage from './assets/SheKillsMonsters.png';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [icon, setIcon] = useState(localStorage.getItem('icon') || 'FaSun');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    localStorage.setItem('icon', icon);
  }, [theme, icon]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setIcon('FaMoon');
    } else {
      setTheme('light');
      setIcon('FaSun');
    }
  };

  return (
    <section id="hero">
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src={SLSLogo} alt="SLS savannnah Logo" className="logo-img" />
            </div>
            <ul className="nav_menu">
              <li className="nav_list"><a href="#!" className="nav_link">Home</a></li>
              <li className="nav_list"><a href="#!" className="nav_link">Project</a></li>
              <li className="nav_list"><a href="#!" className="nav_link">Gallery</a></li>
              <li className="nav_list"><a href="#!" className="nav_link">About</a></li>
              <li className="nav_list"><a href="#!" className="nav_link">Contact</a></li>
            </ul>
            <div className="theme-icon" onClick={toggleTheme}>
              {icon === 'FaSun' ? <FaSun className="theme-switcher" /> : <FaMoon className="theme-switcher" />}
            </div>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="hero-content-container">
          <img src={MonsterImage} alt="She Kills Monsters" className="hero-img" />
          <div className="hero-content">
            <h1 className="heading">Light and Dark Theme</h1>
            <p className="paragraph">
              A dark theme displays dark surfaces across the majority of a UI.
              It's designed to be a supplemental mode to a default (or light)
              theme.
            </p>
            <a href="#!" className="btn-primary">
              Watch video <FaPlay />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
