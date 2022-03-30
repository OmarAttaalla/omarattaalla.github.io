import React, { useEffect, useRef } from "react";
import "./Technologies.css"
import lottie from 'lottie-web'

export default function Technologies() {
    const javascriptImage = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./96971-code-blue.json')
        })
    })

    return (
        <div className="SubSection">
            <div className="Animation" ref={javascriptImage}></div>
        </div>
    )
}