import React from "react";
import "./Projects.css"
import ChessImage from "./images/Chess.png"
import SortImage from "./images/Sort.png"

export default function Projects() {

    return (
        <>
            <div className="Title" id="Projects">Projects</div>
            <div className="BoxContainer">
                <div className="BoxTitle" id="ExpBox">
                    <a className = "ProjectLink" href="https://receipthelpmanage.herokuapp.com/" target={"_blank"}>Receipt Manager Web App</a>
                    <ul className="SubInfo">
                        <li>This app helps users manage their receipts by storing it in one database. It also allows users to sort, track, export, import, and analyze receipts.</li>
                        <li>This app was made using NodeJs, Express, HTML/CSS, and MongoDB. Users are first asked to login using Google oauth 2.0 and a MongoDB connection is made using mongoose.</li>
                    </ul>
                </div>
                <img className="ProjectVideo"></img>
            </div>
            <div className="BoxContainer">
                <div className="BoxTitle">
                    <a href="https://github.com/OmarAttaalla/Chess-Game" target={"_blank"}>Chess Game</a>
                    <br/>
                    <ul className="SubInfo">
                        <li>This Chess Game was developed in C++ using QT Creator for the UI.</li>
                        <li>This Project was made in a team of 4 where we implemented AGILE Scrum methodology. We had several sprints and scrums.</li>
                        <li>Object Oriented, where we followed Design Patterns, such as the Strategy Design Pattern.</li>
                    </ul>
                </div>
                <img id="ChessImage" src={ChessImage}></img>
            </div>
            <div className="BoxContainer">
                <div className="BoxTitle">
                    <a href="../public/Sorting.html" target={"_blank"}>Visual Sorting Algorithms</a>
                    <br/>
                    <ul className="SubInfo">
                        <li>This Project includes visual representations of the most popular sorting algorithms (Selection Sort, Insertion Sort, Merge Sort, Quicksort)</li>
                        <li>The visuals are created using vanilla Javascript with HTML/CSS</li>
                    </ul>
                </div>
                <img id="SortImage" src={SortImage}></img>
            </div>
        </>
    )
}