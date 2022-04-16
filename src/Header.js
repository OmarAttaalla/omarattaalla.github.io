import React from "react";
import PersonImage from './images/person.png'
import "./Header.css"

export default function Header() {
    return (
        <header className="MainHeader">
            <div className="SubHeader IconHeader">
                <img className="MainIcon" src={PersonImage}></img>
            </div>
            <div className="SubHeader NavigationHeader">
                <a className="NavItem" href="./">Home</a>
                <a className="MainNavItem" href="#Projects">Projects</a>
            </div>
        </header>
    )
}