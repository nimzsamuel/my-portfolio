import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app-container theme-${theme}`}>
      <Header />

      <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
        {theme === "light" ? "🌙" : "☀️"}
      </div>

      <main className="main-content">
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div className="social-icons">
          <a href="https://github.com/nimzsamuel" target="_blank" rel="noopener noreferrer"> GitHub</a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </div>
        <p>© 2025 Nimzsamuel. Crafted with passion </p>
      </footer>
    </div>
  );
};

export default App;