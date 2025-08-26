import React, { useState, useEffect } from "react";

function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 65); // adjust threshold
    onScroll(); // set initial state on load
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-dark bg-dark fixed-top shadow-sm nav-transition ${
        visible ? "show" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#top">
          My Portfolio
        </a>

      

        <ul className="navbar-nav ms-auto flex-row gap-3">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
