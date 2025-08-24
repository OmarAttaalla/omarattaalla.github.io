import React from "react";
import "./Technologies.css"
//import lottie from 'lottie-web'
import CppImage from '../images/Cpp.png'
import PythonImage from '../images/python.png'
import NodejsImage from '../images/Nodejs.png'
import ExpressImage from '../images/express.png'
import ReactImage from '../images/React.png'
import LuaImage from '../images/Lua.png'
import JsImage from '../images/javascript.png'
import CssImage from '../images/css.png'
import HtmlImage from '../images/html.png'
import QtImage from '../images/qt.png'
import ROS2Image from '../images/ros-ros2.webp'
import UbuntuImage from '../images/ubuntu_logo.png'
import NextJS from '../images/next-js.svg'
import DjangoImage from '../images/Django-Logo.png'
import aws from '../images/aws.png'
import awsEC2 from '../images/AWS-rc2.png'
import awsDynamo from '../images/dynamo_db-image.svg'
import gcp from '../images/gcp.webp'
import firebase from '../images/Firebase.png'
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