import React from "react";
import "./Experience.css"
import NNImage from '../images/NN.png'
import experience from "../data/experience.js";
import BoxContainer from "../components/BoxContainer.js";

export default function Experience() {

    return (
        <>
            <div className="Title" id="Experience">Experience</div>
            <div className="divider-container">
                <div className="divider"></div>
            </div>
            {experience.map((exp, index) => (
                <BoxContainer key={index} data={exp} />
            ))}
        </>
    )
}