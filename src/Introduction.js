import React from "react";
import PersonImage from './images/person.png'
import "./Introduction.css"

export default function Introduction() {
    return (
        <div className="FlexContainer">
            <div className="PersonImageContainer">
                <img className="PersonImage" src={PersonImage} alt=""></img>
            </div>
            <div className="IntroTitle">
                Hi! I'm Omar Attaalla
                <br/>
                <ul className="SubInfo">
                    <li>Computer Science & Engineering Student @ UCI</li>
                </ul>
            </div>
        </div>
    )
}