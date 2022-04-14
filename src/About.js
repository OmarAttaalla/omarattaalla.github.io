import React from "react";
import "./About.css"
import UCRImage from './images/UCR.png'

export default function About() {

    return (
        <div className="AboutSubSection">
            <div className="Title">Education</div>
            <div className="BoxContainer">
                <img className="UCRImage" src={UCRImage}></img>
                <div className="BoxTitle">
                    University of California, Riverside
                    <br/>
                    <li className="CompEng">B.S. Computer Engineering</li>
                    <ul className="SubInfo">
                        <li>Data Structures and Algorithms</li>
                        <li className="subSubInfo">Arrays, Stacks, Queues, Heaps, Hash Tables, Trees, Graphs</li>
                        <li>Software Construction</li>
                        <li className="subSubInfo">Git, GitHub, GitFlow, Continuous Integration, Design Patterns </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}