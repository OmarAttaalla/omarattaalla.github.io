import React from "react";
import "./Projects.css"
import ChessImage from "./images/Chess.png"
import SortImage from "./images/Sort.png"
import RoBooksImage from "./images/RoBooks.png"
import ReceiptSimple from "./images/receiptsimple.png"

export default function Projects() {

    return (
        <>
            <div className="Title" id="Projects">Projects</div>
            <div className="BoxContainer">
                <div className="BoxTitle" id="ExpBox">
                    <a className = "ProjectLink" href="https://receipthelpmanage.herokuapp.com/" target={"_blank"} rel="noopener noreferrer">Receipt Simple</a>
                    <ul className="SubInfo">
                        <li>Receipt Simple is a fullstack web application that allows users to track and analyze their receipts.</li>
                        <li>This app was made using NodeJs, Express, React, JS/HTML/CSS, and MongoDB. Users are first asked to login using Google oauth and a MongoDB connection is made using mongoose.</li>
                    </ul>
                </div>
                <img id="ReceiptImage" src={ReceiptSimple} alt=""></img>
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