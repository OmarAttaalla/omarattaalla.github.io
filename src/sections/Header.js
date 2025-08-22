import React from "react";
import PersonImage from '../images/person.png'
import "./Header.css"
import { useDarkMode } from "../context/DarkModeContext";

export default function Header() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <header className="MainHeader">
            <div className="SubHeader IconHeader">
                <img className="MainIcon" src={PersonImage} alt=""></img>
            </div>
            <nav className="SubHeader NavigationHeader">
                <a className="NavItem" href="#Education">Education</a>
                <a className="NavItem" href="#Experience">Experience</a>
                <a className="NavItem" href="#Projects">Projects</a>
                <button id="darkModeButton" onClick={() => toggleDarkMode()}>Toggle Dark Mode</button>
            </nav>
        </header>
    )
}