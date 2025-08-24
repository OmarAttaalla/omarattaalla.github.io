import React from "react";
import "./Education.css"
import education from "../data/education.js";
import BoxContainer from "../components/BoxContainer.js";

export default function Education() {

    return (
        <>
            <div className="Title" id="Education">Education</div>
            <div className="divider-container">
                <div className="divider"></div>
            </div>
            {education.map((edu, index) => (
                <BoxContainer key={index} data={edu} />
            ))}
        </>
    )
}