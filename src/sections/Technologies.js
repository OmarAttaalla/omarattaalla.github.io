import React from "react";
import "./Technologies.css"
//import lottie from 'lottie-web'
import CppImage from '../assets/Cpp.png'
import PythonImage from '../assets/python.png'
import NodejsImage from '../assets/Nodejs.png'
import ExpressImage from '../assets/express.png'
import ReactImage from '../assets/React.png'
import LuaImage from '../assets/Lua.png'
import JsImage from '../assets/javascript.png'
import CssImage from '../assets/css.png'
import HtmlImage from '../assets/html.png'
import QtImage from '../assets/qt.png'
import ROS2Image from '../assets/ros-ros2.webp'
import UbuntuImage from '../assets/ubuntu_logo.png'
import NextJS from '../assets/next-js.svg'
import DjangoImage from '../assets/Django-Logo.png'
import aws from '../assets/aws.png'
import awsEC2 from '../assets/AWS-rc2.png'
import awsDynamo from '../assets/dynamo_db-image.svg'
import gcp from '../assets/gcp.webp'
import firebase from '../assets/Firebase.png'
import { useDarkMode } from "../context/DarkModeContext";

export default function Technologies() {
    const { darkMode } = useDarkMode();

    return (
        <div className="TechSubSection">
            <img className="TechObject" alt="" src={CppImage}></img>
            <img className="TechObject" alt="" src={QtImage}></img>
            <img
                className={`TechObject ${darkMode ? "inverted" : ""}`}
                alt=""
                src={ROS2Image}
            />
            <img className="TechObject" alt="" src={UbuntuImage}></img>
            <img className="TechObject" alt="" src={PythonImage}></img>
            <img className="TechObject" alt="" src={DjangoImage}></img>
            <img className="TechObject" alt="" src={JsImage}></img>
            <img className="TechObject" alt="" src={HtmlImage}></img>
            <img className="TechObject" alt="" src={CssImage}></img>
            <img className="TechObject" alt="" src={NodejsImage}></img>
            <img className="TechObject" alt="" src={ExpressImage}></img>
            <img className="TechObject" alt="" src={ReactImage}></img>
            <img
                className={`TechObject ${darkMode ? "inverted" : ""}`}
                alt=""
                src={NextJS}
            />
            <img className="TechObject" alt="" src={aws}></img>
            <img className="TechObject" alt="" src={awsEC2}></img>
            <img className="TechObject" alt="" src={awsDynamo}></img>
            <img className="TechObject" alt="" src={gcp}></img>
            <img className="TechObject" alt="" src={firebase}></img>
            <img className="TechObject" alt="" src={LuaImage}></img>
        </div>
    )
}