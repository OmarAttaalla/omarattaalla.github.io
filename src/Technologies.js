import React, { useEffect, useRef } from "react";
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
    const javascriptImage = useRef(null)

    /*
    useEffect(() => {
        lottie.loadAnimation({
            container: javascriptImage.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./90466-javascript-logo.json')
        })
    })
    */

    //<div className="TechAnimation" ref={javascriptImage}></div>

    return (
        <div className="TechSubSection">
            <img className="TechObject" src={CppImage}></img>
            <img className="TechObject" src={PythonImage}></img>
            <img className="TechObject" src={LuaImage}></img>
            <img className="TechObject" src={NodejsImage}></img>
            <img className="TechObject" src={ExpressImage}></img>
            <img className="TechObject" src={JsImage}></img>
            <img className="TechObject" src={HtmlImage}></img>
            <img className="TechObject" src={CssImage}></img>
            <img className="TechObject" src={ReactImage}></img>
        </div>
    )
}