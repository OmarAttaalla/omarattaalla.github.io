import React from "react";
import "./Education.css"
import UCRImage from './images/UCR.png'
import UCIImage from './images/UCIICS.png'

export default function Education() {

    return (
        <>
            <div className="Title">Education</div>
            <div className="BoxContainer">
                <div className="UCIImageContainer">
                    <img className="UCIImage" src={UCIImage} alt=""></img>
                </div>
                <div className="BoxTitle">
                    University of California, Irvine
                    <br/>
                    <li className="CompEng">B.S. Computer Science & Engineering</li>
                    <ul className="SubInfo">
                        <li>Data Structures and Algorithms</li>
                        <li className="subSubInfo">Arrays, Stacks, Queues, Heaps, Hash Tables, Trees, Graphs</li>
                        <li>Introduction to Data Management</li>
                        <li className="subSubInfo">E/R Data Model, Relation Data Model/Design Theory, Relation Algebra/Calculus, SQL, DB Design</li>
                    </ul>
                </div>
            </div>
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