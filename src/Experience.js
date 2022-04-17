import React from "react";
import "./Experience.css"
import NNImage from './images/NN.png'

export default function Experience() {

    return (
        <>
            <div className="Title">Experience</div>
            <div className="BoxContainer">
                <div className="BoxTitle" id="ExpBox">
                    Undergraduate Research Assistant
                    <br/>
                    <ul className="SubInfo">
                        <li>Quantum Dynamics @UCR</li>
                        <li className="subSubInfo">Worked under Dr. Bryan Wong, whose focus is in Quantum Dynamics.</li>
                        <li className="subSubInfo">Helped researchers by creating software in a team for optical character recognition.</li>
                        <li className="subSubInfo">Learned about Neural Networks by researching different character recognition techniques and implemented a Neural Network that recognized characters.</li>
                        <li className="subSubInfo">Solutions also involved using current optical recognition software, such as Google Vision.</li>
                    </ul>
                </div>
                <img className="NNImage" src={NNImage} alt=""></img>
            </div>
        </>
    )
}