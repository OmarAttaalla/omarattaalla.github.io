import React, { useState } from "react"
import PersonImage from '../images/person.png'
import "./Header.css"
import { useDarkMode } from "../context/DarkModeContext";
import SunImage from '../images/sun.png'
import MoonImage from '../images/moon.svg'

export default function Header() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <header className="MainHeader">
            <div className="SubHeader IconHeader">
                <img className="MainIcon" src={PersonImage} alt=""></img>
            </div>

            <button
                className={`hamburger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>

            <nav className="SubHeader NavigationHeader desktop-nav">
                <a className="NavItem" href="#Education">Education</a>
                <a className="NavItem" href="#Experience">Experience</a>
                <a className="NavItem" href="#Projects">Projects</a>
                <button id="darkModeButton" onClick={() => toggleDarkMode()}>
                    <img className={`${darkMode ? 'inverted' : ''}`} id="darkModeIcon" src={darkMode ? SunImage : MoonImage} alt="Toggle Dark Mode" />
                </button>
            </nav>
        </header>

        {isOpen && (
        <nav className="mobile-nav">
            <a className="NavItem" href="#Education" onClick={() => setIsOpen(false)}>Education</a>
            <a className="NavItem" href="#Experience" onClick={() => setIsOpen(false)}>Experience</a>
            <a className="NavItem" href="#Projects" onClick={() => setIsOpen(false)}>Projects</a>
            <button id="darkModeButton" onClick={() => { toggleDarkMode(); setIsOpen(false); }}>
                <img className={`${darkMode ? 'inverted' : ''}`} id="darkModeIcon" src={darkMode ? SunImage : MoonImage} alt="Toggle Dark Mode" />
            </button>
        </nav>
        )}
      </>
    )
}