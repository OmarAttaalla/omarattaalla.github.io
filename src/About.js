import React from "react";
import "./About.css"
import Education from "./Education"
import Experience from "./Experience"
import Projects from "./Projects"

export default function About() {

    return (
        <div className="AboutSubSection">
            <Education />
            <Experience />
            <Projects />
        </div>
    )
}