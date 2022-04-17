import React from "react";
import "./Technologies.css"
//import lottie from 'lottie-web'
import CppImage from './images/Cpp.png'
import PythonImage from './images/python.png'
import NodejsImage from './images/Nodejs.png'
import ExpressImage from './images/express.png'
import ReactImage from './images/React.png'
import LuaImage from './images/Lua.png'
import JsImage from './images/javascript.png'
import CssImage from './images/css.png'
import HtmlImage from './images/html.png'

export default function Technologies() {
    return (
        <div className="TechSubSection">
            <img className="TechObject" alt="" src={CppImage}></img>
            <img className="TechObject" alt="" src={PythonImage}></img>
            <img className="TechObject" alt="" src={LuaImage}></img>
            <img className="TechObject" alt="" src={NodejsImage}></img>
            <img className="TechObject" alt="" src={ExpressImage}></img>
            <img className="TechObject" alt="" src={JsImage}></img>
            <img className="TechObject" alt="" src={HtmlImage}></img>
            <img className="TechObject" alt="" src={CssImage}></img>
            <img className="TechObject" alt="" src={ReactImage}></img>
        </div>
    )
}