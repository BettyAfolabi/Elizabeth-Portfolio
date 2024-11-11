//import React from 'react'
import './comp.css'

export default function Navbar() {
  return (
    <div className="navbar">
    <nav className="sticky">
        <p><i className="fa fa-cubes"></i> DevDuchess</p>

        <ul className="navlist">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
            <a href="https://linkedin.com/in/elizabeth-afolabi-2a6511196"><i className="fa-brands fa-linkedin" aria-hidden ="true"></i> <span className="sr-only">LinkedIn</span></a>
            </li>
            <li>
            <a href="https://github.com/BettyAfolabi"><i className="fa-brands fa-github" aria-hidden="true"></i> <span className="sr-only">Github</span></a>
            </li>
            <li><a href="https://drive.google.com/file/d/1r-ryobVU_mM2ClrrM63Bd1p7SulP3jYS/view?usp=sharing" className="button">Resume</a></li>
        </ul>
        <div className="bx bx-menu" id="menu-icon"></div>
    </nav>
    </div>
  )
}
