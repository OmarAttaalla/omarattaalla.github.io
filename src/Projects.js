import React from "react";
import "./Projects.css"
import ChessImage from "./images/Chess.png"
import SortImage from "./images/Sort.png"
import RoBooksImage from "./images/RoBooks.png"
import InvoiceImage from "./images/structurein.png"
import BallBlastImage from "./images/BallBlast.png"
import ReactPlayer from 'react-player'
import SafetyImage from "./images/Safety.png"
import SafetyPDF from "./images/First Responder's Smart Badge.pdf"

export default function Projects() {

    return (
        <>
            <div className="Title" id="Projects">Projects</div>
            <div className="BoxContainer">
                <div className="BoxTitle" id="ExpBox">
                    <a className = "ProjectLink" href="https://receiptsimple.herokuapp.com/" target={"_blank"} rel="noopener noreferrer">Receipt Simple</a>
                    <ul className="SubInfo">
                        <li>Receipt Simple is a fullstack web application that allows users to track and analyze their receipts.</li>
                        <li>This app was made using NodeJs, Express, React, JS/HTML/CSS, and MongoDB. Users are first asked to login using Google oauth and a MongoDB connection is made using mongoose.</li>
                        <li>This app includes calls to an OCR model that parses receipts for relevant information</li>
                    </ul>
                </div>
                <ReactPlayer url='https://youtu.be/7PPXZ2W9Ngo' />
            </div>
            <div className="BoxContainer">
                <div className="BoxTitle">
                    <a className = "ProjectLink" href="https://structure-in.web.app/" target={"_blank"} rel="noopener noreferrer">Structure In</a>
                    <ul className="SubInfo">
                        <li>Structure is an application that allows users, particularly structural engineers, to manage projects and accounting with ease.</li>
                        <li>Structure In provides an easy to use interface that stores information on employees, billing, projects, revenue, and expenses.</li>
                        <li>Structure In uses the information provided to automatically generate invoices, agreements, and company summaries.</li>
                    </ul>
                </div>
                <img id="InvoiceImage" src={InvoiceImage} alt=""></img>
            </div>
            <div className="BoxContainer">
                <div className="BoxTitle">
                    <a href="https://github.com/OmarAttaalla/Chess-Game" target={"_blank"} rel="noopener noreferrer">Chess Game</a>
                    <br/>
                    <ul className="SubInfo">
                        <li>This Chess Game was developed in C++ using QT Creator for the UI.</li>
                        <li>This Project was made in a team of 4 where we implemented AGILE Scrum methodology. We had several sprints and scrums.</li>
                        <li>Object Oriented, where we followed Design Patterns, such as the Strategy Design Pattern.</li>
                    </ul>
                </div>
                <img id="ChessImage" src={ChessImage} alt=""></img>
            </div>

            <div className="BoxContainer">
                <div className="BoxTitle">
                    <a href={SafetyPDF} target={"_blank"} rel="noopener noreferrer">First Responder's Safety Badge</a>
                    <br/>
                    <ul className="SubInfo">
                        <li>First Responder's Safety Badge is an embedded IOT device that alerts its user of possible harmful materials in the air.</li>
                        <li>The Badge records data and sends it to a Firebase database. From there, the data is presented in graphical form at a React.js based web application.</li>
                        <li>The Badge utilizes I2C with multiple sensors to record the data.</li>
                        <li>I was in charge of designing and writing all Embedded software, Database design, and web application software.</li>
                    </ul>
                </div>
                <img id="SafetyImage" src={SafetyImage} alt=""></img>
            </div>

            <div className="BoxContainer">
                <div className="BoxTitle">
                    <a className = "ProjectLink" href="https://github.com/OmarAttaalla/AI-Learns-Ball-Blast" target={"_blank"} rel="noopener noreferrer">AI Learns Ball Blast</a>
                    <ul className="SubInfo">
                        <li>AI Learns Ball Blast is a multi-step project which includes a game (Ball Blast) as well as an AI that uses Deep Reinforcement learning to improve it's ability to play the game.</li>
                        <li>This app was made using Python, PyGame, and TensorFlow.</li>
                    </ul>
                </div>
                <img id="BallBlastImage" src={BallBlastImage} alt=""></img>
            </div>

            <div className="BoxContainer">
                <div className="BoxTitle">
                    <a href="./Sorting.html" target={"_blank"} rel="noopener noreferrer">Visual Sorting Algorithms</a>
                    <br/>
                    <ul className="SubInfo">
                        <li>This Project includes visual representations of the most popular sorting algorithms (Selection Sort, Insertion Sort, Merge Sort, Quicksort)</li>
                        <li>The visuals are created using vanilla Javascript with HTML/CSS</li>
                    </ul>
                </div>
                <img id="SortImage" src={SortImage} alt=""></img>
            </div>
            <div className="BoxContainer">
                <div className="BoxTitle">
                    <a href="https://learnrobooks.github.io/RoBooks/" target={"_blank"} rel="noopener noreferrer">RoBooks</a>
                    <br/>
                    <ul className="SubInfo">
                        <li>Static site that teaches users how to program using LUA and how to use the Roblox Game Engine.</li>
                        <li>Made in Vanilla HTML/CSS and Javascript</li>
                    </ul>
                </div>
                <img id="RoBooksImage" src={RoBooksImage} alt=""></img>
            </div>
        </>
    )
}