import React from "react";
import "./Projects.css"
import BoxContainer from "../components/BoxContainer.js";
import projects from "../data/projects.js";

export default function Projects() {
    return (
        <>
            <div className="Title" id="Projects">Projects</div>
            <div className="divider-container">
                <div className="divider"></div>
            </div>
            {projects.map((project, index) => (
                <BoxContainer key={index} data={project} />
            ))}
        </>
    )
}