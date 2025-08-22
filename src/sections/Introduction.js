import React from "react";
import PersonImage from '../images/person.png'
import "./Introduction.css"

export default function Introduction() {
    return (
        <div className="FlexContainer">
            <div className="PersonImageContainer">
                <img className="PersonImage" src={PersonImage} alt=""></img>
            </div>
            <h1 className="IntroTitle">
                Hi! I'm Omar Attaalla
                <br/>
                <h2 className="SubInfo">
                     - Discipline Engineer & MSCS Student @ UCI
                </h2>
            </h1>
        </div>
    )
}