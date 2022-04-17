import React from "react";
import "./Education.css"
import UCRImage from './images/UCR.png'

export default function Education() {

    return (
        <>
            <div className="Title">Education</div>
            <div className="BoxContainer">
                <img className="UCRImage" src={UCRImage} alt=""></img>
                <div className="BoxTitle">
                    University of California, Riverside
                    <br/>
                    <li className="CompEng">B.S. Computer Engineering</li>
                    <ul className="SubInfo">
                        <li>Data Structures and Algorithms</li>
                        <li className="subSubInfo">Arrays, Stacks, Queues, Heaps, Hash Tables, Trees, Graphs</li>
                        <li>Software Construction</li>
                        <li className="subSubInfo">Git, GitHub, GitFlow, Continuous Integration, Design Patterns </li>
                        <li>Logic Design</li>
                        <li className="subSubInfo">Assembly, Circuit Design, Verilog</li>
                    </ul>
                </div>
            </div>
        </>
    )
}